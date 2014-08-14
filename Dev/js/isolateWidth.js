define(["jquery"], function($){
   
   var isolateWidth = function(){
      
   }
   

   // takes the CSS as a string from a defined textbox.  
   // Removes all spaces and newlines from the text, and stores it into an array split by the character "}"
   // Loops through each element of the array and finds the total occurence of the word "width" and "-width".
   // Since all other width rules contain "-width" (i.e. border-width, margin-width, padding-width), if the total
   // amount of "width" is 1 greater than "-width", this means there is a rule for the width of the element itself.
   // Pushes only those indexes with width declarations for the element itself into a new array, and returns this.  
   isolateWidth.prototype.isolate = function(css_rule){
      
   } 
   return isolateWidth;  
});