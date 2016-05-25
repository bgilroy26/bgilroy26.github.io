Baby Query
============

Today we're going to make our own version of jQuery. Like BabyORM weeks ago, the goal of this assignment is to give you a deeper understanding of how jQuery works and to give you an example of a JavaScript pattern called [Method Chaining](http://schier.co/blog/2013/11/14/method-chaining-in-javascript.html).

You are given the structure of the library in `bbQuery.js`. 

The selector is a function that returns a constructor (class).

The class has prototype methods that work like jQuery's do. 

The `.html` method sets the html inside an element when given an argument - when not given an argument, it gets you the html. These are examples of "setters" and "getters".

The `.css` method works similarly.

You'll notice, however, that the setters return the class function, which is `this`. Much like Python's `self` refers to the instance of the class, `this` refers to the constructor function currently in use.

The methods return `this` so that we can chain the methods, like so:

        bbQuery("#someId").html("hi").css("color", "blue")

        ###Fixing the Selector

        Finish writing the selector function so it differentiates between ids, classes, and tag names and appropriately targets the right elements. It should also return multiple elements, like jQuery.

        ###Add More Methods

        Add the following jQuery methods:

        `.append`  
        `.addClass`  
        `.removeClass`  
        `.data`  
        `.remove`  
        `.each`  

        ###Add your own

        Pick a jQuery method (not an Ajax one) and implement it yourself in your bbQuery.
