require(["jquery", 
	     "findWidth",
	     "rebuildDom",
       "findParent",
       "containsWidth",
       "convertFormula",
       "searchForWidth",
       "isolateWidth",
       "preprocess"
	     ], 
 function($, 
   	     findWidth,
   	     rebuild,
         findParent,
         containsWidth,
         formula,
         searchForWidth,  
         isolateWidth,
         preprocess
         ){

     $(".btn_convert").on("click", function(){ 

     // initializing needed Object Instances  
     allWidthRules = new findWidth();
     DOM_model = new rebuild();  
     var findParentObj = new findParent();  
     widthSearchObj = new containsWidth(); 
     var conversionObj = new formula(); 
     searchWidthObj = new searchForWidth(); 
     var isolateWidthObj = new isolateWidth(); 
     var preprocessObj = new preprocess(); 

     // Initializing variable which will store converted, responsive CSS output.  
     var outputCssString = ""; 

     // Storing IDs and Classes of all DOM elements needed in one spot:
     var txt_css = "#txt_css";
     var txt_dom = "#txt_dom";
     var container = "#testing_area"; 

     DOM_model.rebuild("#txt_dom", "#testing_area"); // Rebuilds DOM passed in from the first parameter inside the
                                                   // containing element of the second parameter. 
     // Storing original CSS input as given by User 
     var originalCssString = $(txt_css).val(); 
     var choppedUpCssString = originalCssString.split("}"); 
     var preProcessedArray = preprocessObj.processIntoArray(choppedUpCssString);
     preProcessedArray.push({"element":container, "width":1400});
     
     for (i = 0; i < choppedUpCssString.length - 1; i++){
     
        if (searchWidthObj.containsWidth(choppedUpCssString[i])){
           var memory_elemName = choppedUpCssString[i].split("{")[0]; 
           var rulesArray = choppedUpCssString[i].split(/[;{]/); 
            for (j = 0; j < rulesArray.length - 1; j++){
               if (searchWidthObj.isWidth(rulesArray[j])){
                  var memory_elemWidth = parseInt(rulesArray[j].substr(rulesArray[j].indexOf(":") + 1));  
                  var parent_elem = findParentObj.closestParentWithWidth(preProcessedArray, memory_elemName);  
                  outputCssString += '\n' + "width:" + conversionObj.convertPx(memory_elemWidth,parent_elem["width"]) 
                                     + "%;";
                 
                //  outputCssString += '\n' + searchWidthObj.isWidth(rulesArray[j]) + ";";  
               } else {
                  if (j == 0){
                     outputCssString += rulesArray[j] + "{"; 
                   } else {
                     outputCssString += rulesArray[j] + ";";  
                   }   
               }  
            }  
           outputCssString += '\n' + "}"; 
     //      isolateWidthObj.isolate(choppedUpCssString[i]); 
        } else {
           outputCssString += choppedUpCssString[i] + "}"; 
        }
     }  
     
     /*
     elementsWithWidth = allWidthRules.splitCSS("#txt_css"); 
     elementsWithWidth.push({"element":container, "width":1400});
     


     for (i=0; i < elementsWithWidth.length - 1; i++){
        var Parent_widthObj = null; 
        var thisParent = findParentObj.findParentOf(elementsWithWidth[i]["element"], "#testing_area"); 
      
        console.log (i + " of " + elementsWithWidth.length); 
        while (!Parent_widthObj){
          Parent_widthObj = widthSearchObj.hasWidth(elementsWithWidth, thisParent); 
          if (!Parent_widthObj){
            thisParent = findParentObj.findParentOf(thisParent, "#testing_area");
          }
        }  

        console.log (i + " after conversion: " + conversionObj.convertPx(elementsWithWidth[i]["width"], Parent_widthObj["width"]) + "%;");
     }   */ 
 
    $("#txt_output").val(outputCssString);
  }); 	   
});
