/**
 * Created by chakri on 16/2/16.
 */
var app = angular.module('GalleryApp', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'HomeController',
            templateUrl: 'js/views/home.html'
        })
        .when('/photos/:id', {
            controller: 'PhotoController',
            templateUrl: 'js/views/photo.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});


