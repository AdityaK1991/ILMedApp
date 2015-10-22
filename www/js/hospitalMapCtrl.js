angular.module('starter.controllers')

.controller('HospitalMapCtrl', function($scope,$stateParams) {

	$scope.address=$stateParams.loc;
	//alert("called"+$scope.address);


// onSuccess Callback
// This method accepts a Position object, which contains the
// current GPS coordinates
//
var currentLat;
var currentLong;
var directionsService;
var onSuccess = function(position) {
	currentLat=position.coords.latitude;
	currentLong=position.coords.longitude;

   /* alert('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n');*/

var source, destination;
        var directionsDisplay;
        directionsService = new google.maps.DirectionsService();
        google.maps.event.addDomListener(window, 'load', function () {
            new google.maps.places.SearchBox(document.getElementById('txtSource'));
            new google.maps.places.SearchBox(document.getElementById('txtDestination'));
            directionsDisplay = new google.maps.DirectionsRenderer({ 'draggable': true });
        });
    $scope.GetRoute();
  //  $window.location.reload(true);
};

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

navigator.geolocation.getCurrentPosition(onSuccess, onError);



 
	$scope.GetRoute = function(){

		
		var currentLoc = new google.maps.LatLng(currentLat, currentLong);
            var mapOptions = {
                zoom: 7,
                center: currentLoc
            };
             directionsDisplay = new google.maps.DirectionsRenderer({ 'draggable': true });
            map = new google.maps.Map(document.getElementById('dvMap'), mapOptions);
            directionsDisplay.setMap(map);
            directionsDisplay.setPanel(document.getElementById('dvPanel'));

            //*********DIRECTIONS AND ROUTE**********************//
          //  source = document.getElementById("txtSource").value;
         //  destination = document.getElementById("txtDestination").value;
           // alert(source +" "+destination);

            var request = {
                origin: currentLoc,
                destination: $scope.address,
                travelMode: google.maps.TravelMode.DRIVING
            };

            directionsService.route(request, function (response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(response);
                }
            });

            //*********DISTANCE AND DURATION**********************//
           /* var service = new google.maps.DistanceMatrixService();
            service.getDistanceMatrix({
                origins: [currentLoc],
                destinations: [$scope.address],
                travelMode: google.maps.TravelMode.DRIVING,
                unitSystem: google.maps.UnitSystem.METRIC,
                avoidHighways: false,
                avoidTolls: false
            }, function (response, status) {
                if (status == google.maps.DistanceMatrixStatus.OK && response.rows[0].elements[0].status != "ZERO_RESULTS") {
                    var distance = response.rows[0].elements[0].distance.text;
                    var duration = response.rows[0].elements[0].duration.text;
                    var dvDistance = document.getElementById("dvDistance");
                    dvDistance.innerHTML = "";
                    dvDistance.innerHTML += "Distance: " + distance + "<br />";
                    dvDistance.innerHTML += "Duration:" + duration;

                } else {
                    alert("Unable to find the distance via road.");
                }
            });*/
	}

})

