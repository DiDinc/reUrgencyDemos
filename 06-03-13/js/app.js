var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, true);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        //navigator.splashscreen.hide();
        angular.element(document).ready(function() {
            angular.bootstrap(document);
        });
    }
};

window.onerror=function(msg, url, linenumber){
    alert('Error message: ' + msg + '\nURL: ' + url + '\nLine Number: ' + linenumber)
    console.log('Error message: ' + msg + '\nURL: ' + url + '\nLine Number: ' + linenumber);
    return true
}