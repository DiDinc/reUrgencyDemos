'use strict';

angular.module('SharedDataService', [])
    .service('sharedData', function () {
        var isMobile = true;//(/iPhone|iPod|iPad|Android|BlackBerry/).test(navigator.userAgent);
        var phonegapVersion = function(){
            var p;
            if (navigator.device) {
                p = navigator.device.cordova;
            }else{
                p = 'NM';
            }
            return p;
        }
        var position;
        var acceleration;
        var desktopData = null;

        return {
            isMobile:isMobile,
            phonegapVersion:phonegapVersion,
            position:position,
            acceleration:acceleration,
            desktopData:desktopData
        };
    });