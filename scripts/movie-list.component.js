(function(){
  "use strict";
  var module = angular.module("psMovies");
  var key = "19fcf3f877e7f358ce60c4966d6d2716";
  var url = "./resource/data.json";

  function fetchMovies($http){
      return $http.get(url)
          .then(function(response){
          return response.data.results;
      });
  }
  function controller($http){
      var model = this;
      model.movies = [];
      model.$onInit = function(){
        fetchMovies($http).then(function(movies){
           model.movies = movies;
        });
      }
      model.upRating = function(movie){
            if(movie.vote_average < 5){
                movie.vote_average += 1;
            }
      }
      model.downRating = function(movie){
        if(movie.vote_average > 1){
            movie.vote_average -= 1;
        }
      }
      model.math = window.Math;
      model.formatDate = function(date){
          return date.split("-")[0];
      }
  }
  module.component("movieList", {
     templateUrl: "scripts/movie-list.component.html",
      controllerAs: "model",
      controller: ["$http", controller]
  });
}())