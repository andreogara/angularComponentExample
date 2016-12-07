(function(){
    "use strict";
    var module = angular.module("psMovies");
    module.component("movieRating", {
        templateUrl: "scripts/movie-rating.component.html",
        bindings: {
            rating: "<"
        },
        transclude: true,
        controllerAs: "model",
        controller: function(){
            var model = this;
            model.$onInit = function(){
                model.entries = new Array(model.rating);
            };
            model.$onChanges = function () {
                model.entries = new Array(model.rating);
            }
        }
    });
}())