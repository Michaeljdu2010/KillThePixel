define(["jquery"], function($){
   
   var findWidthObj = function(){
      
   }
   

   // takes the CSS as a string from a defined textbox.  
   // Removes all spaces and newlines from the text, and stores it into an array split by the character "}"
   // Loops through each element of the array and finds the total occurence of the word "width" and "-width".
   // Since all other width rules contain "-width" (i.e. border-width, margin-width, padding-width), if the total
   // amount of "width" is 1 greater than "-width", this means there is a rule for the width of the element itself.
   // Pushes only those indexes with width declarations for the element itself into a new array, and returns this.  
   findWidthObj.prototype.splitCSS = function(elem_name){
     
     var allCssRules = $(elem_name).val().replace(/\s/g, '').split("}");
   	 var onlyWidthRules = []; 
   	 for (i=0; i < allCssRules.length; i++){
   	 
   	 	var thisRule = allCssRules[i].toLowerCase(); 
   	 	
   	 	var widthNum = thisRule.match(/width/g)
   	 	widthNum = (widthNum) ? widthNum.length : 0; 
   	 	
   	 	var falseNum = thisRule.match(/-width/g) 
        falseNum = (falseNum) ? falseNum.length : 0; 
        
       

        if (widthNum == falseNum + 1){

          var justWidth = "not found"; 
          var tempArray = allCssRules[i].split(";");
          for (j=0; j < tempArray.length; j++){
        //     console.log (j + "raw: " + tempArray[j]); 
        //     console.log (j + " " + (tempArray[j].toLowerCase().indexOf("width") >= 0));
        //     console.log (j + " " + !(tempArray[j].toLowerCase().indexOf("-width") >= 0)); 
             if (tempArray[j].toLowerCase().indexOf("width") >= 0 && 
                !(tempArray[j].toLowerCase().indexOf("-width") >= 0)){
                   justWidth = parseInt(tempArray[j].substr(tempArray[j].indexOf(":") + 1)); 
             }
          }

        	  onlyWidthRules.push({
               "element" : allCssRules[i].split("{")[0], 
               "width" : justWidth  
            }); 
        }
   	 
   	 }
   	 return onlyWidthRules; 
   } 

   return findWidthObj; 
});