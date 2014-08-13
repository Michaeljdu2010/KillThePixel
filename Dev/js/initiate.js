require(["jquery", 
	     "findWidth",
	     "rebuildDom"
	     ], 
 function($, 
   	     findWidth,
   	     rebuild){

     $(".btn_convert").on("click", function(){ 

     // initializing needed Object Instances  
     allWidthRules = new findWidth();
     DOM_model = new rebuild();  
     

     // Parsing the CSS for relevant Rules and setting up a model DOM structure based on input 
     elementsWithWidth = allWidthRules.splitCSS("#txt_css"); 
     DOM_model.rebuild("#txt_dom", "#testing_area");
     


     
  }); 	   
});
