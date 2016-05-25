
var bbQuery = function(selector){
    /*
     * selector is tagname if a-z
     * id if first char is #
     * class name if first char is .
     */
    firstChar = selector.charAt(0);
    if (firstChar.match(/[a-z]/i)) {
        var element = document.getElementsByTagName(selector);
    } else if (firstChar === '#') {
        var element = document.getElementById(selector.slice(1));
    } else if (firstChar === '.') {
        var element = document.getElementsByClassName(selector.slice(1));
    }
    return new bbElement(element);
}

var bbElement = function(element){
    this.element = element;
    }
    
bbElement.prototype.html = function(html){
    var selected = this;
    if(html){
        selected.element.innerHTML = html;
        return selected;
    } else {
        return selected.element.innerHTML;
    }
}

bbElement.prototype.append = function(html){
    var selected = this;
    return selected.element.innerHTML += html;
}

bbElement.prototype.removeLastChild = function() {
    var selected = this;
    el = selected.element
    var lastChild = el.lastChild;   
    el.removeChild(lastChild);

}
    
bbElement.prototype.hover = function(mouseoverFunction, mouseoutFunction){
    var selected = this;
    var el = selected.element.item(0);


    el.addEventListener('mouseover', function(){
        mouseoverFunction();
    });
    el.addEventListener('mouseout', function(){
        mouseoutFunction();
    });
}


bbElement.prototype.css = function(key, value){
    //SO 23850881
    var selected = this;
    
    if (typeof(selected.element.length) !== 'undefined') {
    
        for (var i = 0; i < selected.element.length; i++) {
            var thisOne = selected.element.item(i);

            if(key && value){
                for (var i = 0; i < selected.element.length; i++) {
                    var thisOne = selected.element.item(i);
                    thisOne.setAttribute("style", key + ":" + value);
                }
                return selected;
            } else if(key) {
                for (var i = 0; i < selected.element.length; i++) {
                    var thisOne = selected.element.item(i);
                    var style = window.getComputedStyle(thisOne);
                }
                return style.getPropertyValue(key)
            }
        }
    } else {
        
        if(key && value){
            selected.element.setAttribute("style", key + ":" + value);
            return selected;
        } else if(key) {
            var style = window.getComputedStyle(selected.element);
            return style.getPropertyValue(key)
        }
    }
}

bbElement.prototype.removeClass = function(className){
    //http://codepen.io/tylerama/pen/nLFHt
    var selected = this;
    if (selected.element.classList.contains(className)) {
        selected.element.classList.remove(className);
    }

    return selected;
}

bbElement.prototype.addClass = function(className){
    var selected = this;
    selected.element.classList.add(className);
    
   return selected;
}

//bbElement.prototype.data = function(data) {
//    var selected = this;
//    //SO 4116608
//
//    if (args.length === 0) {
//        return selected.element.dataset;
//    } else if (args.length === 1) {
//        var dataString = "data-" + data;
//        return selected.element.getAttribute(dataString);
//        
