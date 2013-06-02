'use strict';

angular.module('App', [
        'SharedDataService'
])
.config(function ($compileProvider){
    $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})
.config(function ($routeProvider) {

    $routeProvider
    .when('/', {
        controller: HomeCtrl,
        templateUrl: 'partials/home.html'
    })
    .when('/desktop', {
        controller: DesktopCtrl,
        templateUrl: 'partials/desktop.html'
    })
    .when('/desktop2', {
        controller: Desktop2Ctrl,
        templateUrl: 'partials/desktop2.html'
    })
    .otherwise({ redirectTo: '/' });
});
