﻿'use strict';

angular.module('SharedDataService', [])
    .service('sharedData', function () {
        var isMobile = (/iPhone|iPod|iPad|Android|BlackBerry/).test(navigator.userAgent);
        var phonegapVersion = function(){
            var p;
            if (navigator.device) {
                p = navigator.device.cordova;
            }else{
                p = 'NM';
            }
            return p;
        }
        var currentHeading;
        var desktopData = null;
        return {
            isMobile:isMobile,
            phonegapVersion:phonegapVersion,
            heading:currentHeading,
            desktopData:desktopData
        };
    });