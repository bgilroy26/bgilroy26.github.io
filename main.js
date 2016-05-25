window.onload = function(){
    
    bbQuery('button').hover(
        function(){
            bbQuery("#text-swap").html("this is outertext").css("color", "white");
            bbQuery(".some").css("display", "none");
            bbQuery("#paragraphs").append("<p>this is the third paragraph</p>");
            bbQuery("#individual").removeClass("group"); 
            bbQuery("#individual").addClass("standOut"); 
        },
        function(){
            bbQuery("#text-swap").html("this is innertext").css("color", "black");
            bbQuery("#paragraphs").removeLastChild();
            bbQuery(".some").css("display", "block");
            bbQuery("#individual").removeClass("standOut"); 
            bbQuery("#individual").addClass("group"); 

        }
   );
}
