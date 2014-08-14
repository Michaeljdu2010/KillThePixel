define(["jquery"], function($){
   
   var conversionFormula = function(){
      
   }
   
   // Checks to see if the parent found (Passed into elem_name) is one of those elements with a width declartion
   // (all elements with width declarations are passed into the elems_array
   conversionFormula.prototype.convertPx = function(elem_width, context_width){
      return ((elem_width / context_width) * 100); 
   } 
   return conversionFormula;  
});