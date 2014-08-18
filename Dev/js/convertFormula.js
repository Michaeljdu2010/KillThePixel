define(["jquery"], function($){
   
   var conversionFormula = function(){
      
   }
   
   // Checks to see if the parent found (Passed into elem_name) is one of those elements with a width declartion
   // (all elements with width declarations are passed into the elems_array
   conversionFormula.prototype.convertPx = function(elem_width, context_width, max_decimals){
      if (elem_width >= context_width){
      	return 100; 
      } else {
        if (max_decimals == "" || max_decimals == 0){
           return ((elem_width / context_width) * 100); 
        } else {
           return ((elem_width / context_width) * 100).toFixed(max_decimals); 
        }
      } 
   } 
   return conversionFormula;  
});