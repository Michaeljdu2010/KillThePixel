define(["jquery"], function($){
   
   var searchForWidth = function(){
      
   }
   

   // takes the CSS as a string from a defined textbox.  
   // Removes all spaces and newlines from the text, and stores it into an array split by the character "}"
   // Loops through each element of the array and finds the total occurence of the word "width" and "-width".
   // Since all other width rules contain "-width" (i.e. border-width, margin-width, padding-width), if the total
   // amount of "width" is 1 greater than "-width", this means there is a rule for the width of the element itself.
   // Pushes only those indexes with width declarations for the element itself into a new array, and returns this.  
   searchForWidth.prototype.containsWidth = function(css_rule){
      var thisRule = css_rule.toLowerCase();      
      var widthNum = thisRule.match(/width/g)
      widthNum = (widthNum) ? widthNum.length : 0;      
      var falseNum = thisRule.match(/-width/g); 
      falseNum = (falseNum) ? falseNum.length : 0; 
      if (widthNum == falseNum + 1){
         return true; 
      }
      return false; 
   } 

   searchForWidth.prototype.isWidth = function(css_rule){
      var checkIfWidth = css_rule.toLowerCase(); 
      if (checkIfWidth.indexOf("width") >= 0 && !(checkIfWidth.indexOf("-width") >= 0)){  // 
        return "Width here"; 
      }
      return false; 
   }
   return searchForWidth;  
});