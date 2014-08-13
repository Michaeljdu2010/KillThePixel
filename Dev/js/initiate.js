require(["jquery", 
	     "findWidth"
	     ], 
 function($, 
   	     findWidth){

      $(".btn_convert").on("click", function(){ 
     allWidth = new findWidth(); 
     $("#testing_area").text(allWidth.splitCSS("#txt_css")); 
  }); 	   
});
