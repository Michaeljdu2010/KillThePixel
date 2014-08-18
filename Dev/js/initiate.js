require(["jquery", 
	     "rebuildDom",
       "findParent",
       "convertFormula",
       "searchForWidth",
       "preprocess"
	     ], 
 function($, 
   	     rebuild,
         findParent,
         formula,
         searchForWidth,  
         preprocess
         ){

     $(".btn_convert").on("click", function(){ 

     $("#txt_output").val(" "); 
     // initializing needed Object Instances  
     var DOM_model = new rebuild();   
     var findParentObj = new findParent();  
     var conversionObj = new formula();   
     var searchWidthObj = new searchForWidth();   
     var preprocessObj = new preprocess();   

     // Reading option variables
     var screenWidth = $("#txt_maxWidth").val() !== "" ? parseInt($("#txt_maxWidth").val()) : 1200; 
     var decimalPlaces = $("#txt_round").val() !== "" ? parseInt($("#txt_round").val()) : 0; 
     var comments = $("#cb_comments").prop("checked"); 

     console.log (screenWidth + " : " + decimalPlaces + " " + comments); 

     // Initializing variable which will store converted, responsive CSS output.  
     var outputCssString = ""; 
     var errorString = ""; 

     // Storing IDs and Classes of all DOM elements needed in one spot:
     var txt_css = "#txt_css";
     var txt_dom = "#txt_dom";
     var container = "#testing_area"; 
     var error_container = "#error_log";

     DOM_model.rebuild("#txt_dom", "#testing_area"); // Rebuilds DOM passed in from the first parameter inside the
                                                   // containing element of the second parameter. 
     // Storing original CSS input as given by User 
   
     var originalCssString = $(txt_css).val(); 
     var choppedUpCssString = originalCssString.split("}"); 
     var preProcessedArray = preprocessObj.processIntoArray(choppedUpCssString);
     preProcessedArray.push({"element":container, "width": screenWidth});
     
     outter: for (i = 0; i < choppedUpCssString.length - 1; i++){
        if (searchWidthObj.containsWidth(choppedUpCssString[i])){
           var memory_elemName = choppedUpCssString[i].split("{")[0]; 
           var rulesArray = choppedUpCssString[i].split(/[;{]/); 

            inner: for (j = 0; j < rulesArray.length - 1; j++){
               if (searchWidthObj.isWidth(rulesArray[j])){
                  var memory_elemWidth = parseInt(rulesArray[j].substr(rulesArray[j].indexOf(":") + 1));  
                  var parent_elem = findParentObj.closestParentWithWidth(preProcessedArray, memory_elemName);                 
                  if (parent_elem == "error1"){
                     errorString = "Error: The element " + memory_elemName + " was listed in your CSS but not found in the DOM"; 
                     break outter; 
                  }
                  outputCssString += '\n' + "width:" + conversionObj.convertPx(memory_elemWidth,parent_elem["width"], decimalPlaces) 
                                  + "%;" 
                        if (comments == true){
                          outputCssString +=  "  /* Original width of this element:" + memory_elemWidth + "px. It's context container is " 
                                         + parent_elem["element"] + ", width:" + parent_elem["width"] + "px */";
                        } 
               } else {
                  if (j == 0){
                     outputCssString += rulesArray[j] + "{"; 
                   } else {
                     outputCssString += rulesArray[j] + ";";  
                   }   
               }  
            }  

           outputCssString += '\n' + "}"; 
        } else {
           outputCssString += choppedUpCssString[i] + "}"; 
        }
     }  
 
    if (!errorString){
      $("#txt_output").val(outputCssString); 
      $("#error_log").hide(); 
    } else {
      $("#txt_output").text(" "); 
      $("#error_log").show(); 
      $("#error_log").html("<p>" + errorString + "</p>");  
    }
  }); 	   


  $(".options_link").on("click", function(){
     $("#options_display").slideToggle(500);
     return false;  
  });
});
