define(["jquery"], function($){
   
   var DomObj = function(){
      
   }
   
    // Takes the string in elem_name, and parses it so all the HTML tags between but 
    // not including the opening <body> and closing </body> are taken.
    // These are parsed and turned into a DOM structure and inserted into a prepared element passed in through
    // buildelem_name.  This DOM structure will be invisible, and will be for Jquery to easily traverse through
    // and find parent-child relationships for later codes.  
    DomObj.prototype.rebuild = function(elem_name, buildelem_name){
        var DomString = $(elem_name).val().toLowerCase().replace(/\n/g, '');
     
        var DomString = DomString.match(/\<body\>(.*)\<\/body\>/)[1]; 
        parsedHTML = $.parseHTML(DomString); 
        $(buildelem_name).append(parsedHTML);  
        
   	 }
   	 

   return DomObj; 
});