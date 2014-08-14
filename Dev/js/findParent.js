define(["jquery"], function($){
   
   var findParent = function(){
      
   }
   
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

   findParent.prototype.closestParentWithWidth = function(preProcessed_array, elem_name){   
     
        var Parent_widthObj = null; 
        var thisParent = findMyParent(elem_name, "#testing_area"); 
     
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