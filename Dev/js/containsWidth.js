define(["jquery"], function($){
   
   var containsWidth = function(){
      
   }
   
   // Checks to see if the parent found (Passed into elem_name) is one of those elements with a width declartion
   // (all elements with width declarations are passed into the elems_array
   containsWidth.prototype.hasWidth = function(elems_with_width_array, elem_name){
      
      for (x =0; x < elems_with_width_array.length; x++){      	 
      	 if ($(elems_with_width_array[x]["element"]).is($(elem_name))) {
      	 	return elems_with_width_array[x];       	 
      	 } 
      }  
      return null; 
   } 

   return containsWidth;  
});