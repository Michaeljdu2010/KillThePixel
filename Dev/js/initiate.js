require(["jquery", 
	     "findWidth",
	     "rebuildDom",
       "findParent",
       "containsWidth",
       "convertFormula"
	     ], 
 function($, 
   	     findWidth,
   	     rebuild,
         findParent,
         containsWidth,
         formula
         ){

     $(".btn_convert").on("click", function(){ 

     // initializing needed Object Instances  
     allWidthRules = new findWidth();
     DOM_model = new rebuild();  
     findParentObj = new findParent();  
     widthSearchObj = new containsWidth(); 
     conversionObj = new formula(); 

     // Keeping all container names in one spot:
     var txt_css = "#txt_css";
     var txt_dom = "#txt_dom";
     var container = "#testing_area"; 
     

     // Parsing the CSS for relevant Rules and setting up a model DOM structure based on input 
     elementsWithWidth = allWidthRules.splitCSS("#txt_css"); 
     elementsWithWidth.push({"element":container, "width":1400});
     DOM_model.rebuild("#txt_dom", "#testing_area"); // Rebuilds DOM passed in from the first parameter inside the
                                                   // containing element of the second parameter. 
     
     for (i=0; i < elementsWithWidth.length - 1; i++){
        var Parent_widthObj = null; 
        var thisParent = findParentObj.findParentOf(elementsWithWidth[i]["element"], "#testing_area"); 
      
        console.log (i + " of " + elementsWithWidth.length); 
        while (!Parent_widthObj){
          Parent_widthObj = widthSearchObj.hasWidth(elementsWithWidth, thisParent); 
          if (!Parent_widthObj){
            thisParent = findParentObj.findParentOf(thisParent, "#testing_area");
          }
          console.log ("infinite");  
        }  

        console.log (i + " after conversion: " + conversionObj.convertPx(elementsWithWidth[i]["width"], Parent_widthObj["width"]) + "%;");
     }   
     console.log("out"); 
  }); 	   
});
