define(["jquery"], function($){
   
   var findParent = function(){
      
   }
   

   findParent.prototype.findParentOf = function(elem_name, container_name){
        
      
      return $(container_name).find(elem_name).parent(); 
   } 

   return findParent;  
});