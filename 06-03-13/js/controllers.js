'use strict';

function AppController($scope,$location,sharedData){
    $scope.location = $location;
    $scope.sds = sharedData;
    $scope.isMobile = sharedData.isMobile;

    $scope.appTitle = 'AngularJs + PhoneGap';
    $scope.companyName = 'reUrgency, LLC.';
    $scope.copyrightYear = new Date().getFullYear();
    $scope.companyPhone = '888-609-8222';
    $scope.versionNumber = 'v. 1.0';

}

function HomeCtrl($scope,$location,sharedData) {
    $scope.sds = sharedData;
    $scope.isMobile = sharedData.isMobile;
    $scope.location = $location;

    if( $scope.isMobile ){
        $scope.phonegapVersion = sharedData.phonegapVersion();
    }else{
        $location.path('/desktop');
    }
}

function AccCtrl($scope,$location,$timeout,sharedData) {
    $scope.sds = sharedData;
    $scope.isMobile = sharedData.isMobile;

    if( $scope.isMobile ){
        $scope.phonegapVersion = sharedData.phonegapVersion();
    }else{
        $location.path('/desktop');
    }

    function onAccSuccess(acceleration) {
        sharedData.acceleration = acceleration;
        $scope.keepPolling();
    };

    function onAccError(error) {
        alert('accelerometer Error: ' + JSON.stringify(error));
    };

    $scope.keepPolling = function () {
        if ($scope.isPolling) {
            if ($scope.pollCount > 0) {
                $scope.pollCount--;
                $timeout($scope.getAcc, 200);
            } else {
                $scope.stopPolling();
            }
        }
    };

    $scope.startPolling = function () {
        $scope.isPolling = true;
        $scope.pollCount = 1500;
        $scope.keepPolling();
    };

    $scope.stopPolling = function () {
        $scope.isPolling = false;
        $scope.pollCount = 1500;
    };

    $scope.getAcc = function(){
        navigator.accelerometer.getCurrentAcceleration(onAccSuccess, onAccError);
    }

    $scope.startPolling = function(){
        $scope.isPolling = true;
        $scope.keepPolling();
    }

    $scope.isPolling = false;
    $scope.pollCount = 1500;

    $scope.getAcc();
}

function GeoCtrl($scope,$location,$timeout,sharedData) {
    $scope.sds = sharedData;
    $scope.isMobile = sharedData.isMobile;

    if( $scope.isMobile ){
        $scope.phonegapVersion = sharedData.phonegapVersion();
    }else{
        $location.path('/desktop');
    }

    function onPositionSuccess(position) {
        sharedData.position = position;
    };

    function onPositionError(error) {
        alert('Geolocation Error: ' + JSON.stringify(error));
    };

    $scope.keepPolling = function () {
        if ($scope.isPolling) {
            if ($scope.pollCount > 0) {
                $scope.pollCount--;
                $timeout($scope.getLocation, 200);
            } else {
                $scope.stopPolling();
            }
        }
    };

    $scope.startPolling = function () {
        $scope.isPolling = true;
        $scope.pollCount = 1500;
        $scope.keepPolling();
    };

    $scope.stopPolling = function () {
        $scope.isPolling = false;
        $scope.pollCount = 1500;
    };

    $scope.getLocation = function(){
        navigator.geolocation.getCurrentPosition(onPositionSuccess, onPositionError);
    }

    $scope.startPolling = function(){
        $scope.isPolling = true;
        $scope.keepPolling();
    }

    $scope.isPolling = false;
    $scope.pollCount = 1500;

    $scope.getLocation();
}

function DesktopCtrl($scope,$location,sharedData) {
    $scope.location = $location;
    $scope.sds = sharedData;
    $scope.showStepTwo = false;
    if(!sharedData.desktopData){
        sharedData.desktopData = 'This is default text stored in our shared data service. It was set by the DesktopCtrl';
    }
    $scope.getDesktopData = function(){
        $scope.mockData = sharedData.desktopData;
    }
    $scope.updateMockData = function(){
        sharedData.desktopData = $scope.mockData;
        $scope.showStepTwo = true;
    }
    $scope.goToStepTwo = function(){
        $scope.location.path('/desktop2');
    }
}
function Desktop2Ctrl($scope,$location,sharedData) {
    $scope.location = $location;
    $scope.sds = sharedData;
    if($scope.sds.desktopData){
        console.log('Shared Data Exists, Use it & Save The Need For An Unnecessary Data Call');
    }else{
        console.log('Shared Data Is NULL, We Would Need To Make A Data Call To Fetch It & Then Re-Save To SharedData');
    }
    $scope.goToStepOne = function(){
        $scope.location.path('/desktop');
    }
}