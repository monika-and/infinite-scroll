'use strict';

$(function () {

            //    
            //    window.onscroll = function(ev) {
            //        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            //            
            //            $.getJSON("https://jsonplaceholder.typicode.com/users", function(data) {
            //                
            //            });
            //        }
            //    }

            $(window).scroll(function () {


                if ($(window).scrollTop() + $(window).height() == $(document).height()) {

                    $.getJSON("https://jsonplaceholder.typicode.com/users", function (data) {

                        data.forEach(function(element){
                            
                            $("body").append("<p> Nazwa Użytkownika: " + element.name + "</p>");
                            $("body").append("<p> Id Użytkownika: " + element.id + "</p>");
                            $("body").append("<p> URL Użytkownika: " + element.website + "</p>");
                            
                        });

                    });
                }

                //        if($(window).scrollTop() + $(window).height() == $(document).height()) {
                //            console.log("bottom!");
                //   }
                //    });

            });
});