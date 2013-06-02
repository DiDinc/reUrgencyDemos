'use strict';

function AppController($scope){
    $scope.appTitle = 'AngularJs + PhoneGap';
    $scope.companyName = 'reUrgency, LLC.';
    $scope.copyrightYear = new Date().getFullYear();
    $scope.companyPhone = '888-609-8222';
    $scope.versionNumber = 'v. 1.0';
}

function HomeCtrl($scope,$location,sharedData) {
    $scope.sds = sharedData;
    $scope.isMobile = sharedData.isMobile;

    if( $scope.isMobile ){
        $scope.phonegapVersion = sharedData.phonegapVersion();
    }else{
        $location.path('/desktop');
    }

    function onSuccess(heading) {
        sharedData.heading = heading.magneticHeading;
    };

    function onError(error) {
        alert('CompassError: ' + json.stringify(error));
    };

    navigator.compass.getCurrentHeading(onSuccess, onError);
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