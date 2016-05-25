window.onload = function(){
    
    /*
     * bbQuery hover mimics the jQuery hover api
     * first argument fires on mouseover event
     * second argument on mouseout event
     */
    bbQuery('button').hover(
        function(){
            //methods below mimic jQuery api
            bbQuery("#text-swap").html("this is outertext").css("color", "white");
            bbQuery(".some").css("display", "none");
            bbQuery("#paragraphs").append("<p>this is the third paragraph</p>");
            bbQuery("#individual").removeClass("group"); 
            bbQuery("#individual").addClass("standOut"); 
        },
        function(){
            // on mouseout, these methods reverse the first set
            bbQuery("#text-swap").html("this is innertext").css("color", "black");
            bbQuery("#paragraphs").removeLastChild();
            bbQuery(".some").css("display", "block");
            bbQuery("#individual").removeClass("standOut"); 
            bbQuery("#individual").addClass("group"); 

        }
   );
}
