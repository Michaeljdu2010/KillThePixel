define(["jquery"], function($){
   
   var findParent = function(){
      
   }

   $.fn.exists = function(){return this.length>0;}
   
   function findMyParent(element_name, container_name){
         return $(container_name).find(element_name).parent(); 
   }

   function doIHaveWidthProp(elems_array, this_elem){
   	  for (y =0; y < elems_array.length; y++){      	 
      	 if ($(elems_array[y]["element"]).is($(this_elem))) {
      	 	return elems_array[y];       	 
      	 } 
      }  
      return null; 
   }

   /* error1: element not found in DOM */ 

   findParent.prototype.closestParentWithWidth = function(preProcessed_array, elem_name){   
     
        var Parent_widthObj = null; 
        if ($(elem_name).exists()){
          var thisParent = findMyParent(elem_name, "#testing_area"); 
        } else {
          return "error1"; 
        }

        while (!Parent_widthObj){
          Parent_widthObj = doIHaveWidthProp(preProcessed_array, thisParent); 
          if (!Parent_widthObj){
            thisParent = findMyParent(thisParent, "#testing_area");
          }
        }  
        return Parent_widthObj; 

    }
   return findParent;  
});