
angular.module('starter.controllers')

.controller('HospitalMapMarkerCtrl', function($scope,HospitalData,$http) {
var cities = [
    {
        city : '200 Stahllhut Drive',
        desc : 'This is the best city in the world!',
        lat : 43.7000,
        long : -79.4000
    },
    {
        city : '200 Stahllhut Drive',
        desc : 'This city is aiiiiite!',
        lat : 40.6700,
        long : -73.9400
    },
    {
        city : 'Chicago',
        desc : 'This is the second best city in the world!',
        lat : 41.8819,
        long : -87.6278
    },
    {
        city : 'Los Angeles',
        desc : 'This city is live!',
        lat : 34.0500,
        long : -118.2500
    },
    {
        city : 'Las Vegas',
        desc : 'Sin City...\'nuff said!',
        lat : 36.0800,
        long : -115.1522
    }
];

      //$scope.hospitals = HospitalData.AllResponses.query({});
     // alert("hello");
  
  $http({
  method: 'GET',
  url: 'https://data.illinois.gov/resource/pksj-gzqc.json'
}).then(function successCallback(response) {
  
  $scope.hospitals =response.data;
 //alert(JSON.stringify($scope.hospitals));

var mapOptions = {
        zoom: 4,
        center: new google.maps.LatLng(40.0000, -98.0000),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    }

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    $scope.markers = [];
    
    var infoWindow = new google.maps.InfoWindow();
    
    var createMarker = function (info){
       // alert(info.address);
$http({
  method: 'GET',
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address='+info.address+', '+info.city+'&key=AIzaSyDUO7rf5lDcTrXM5qXWDBbGQnZUIs2UkfA'
}).then(function successCallback(response) {
  alert(JSON.stringify(response.data));
//var lat=response.data.results.geometry;
//var lng=response.data.results.geometry;
//alert("fff");
if(response.data)
{
  var marker = new google.maps.Marker({
            map: $scope.map,
            //position: new google.maps.LatLng(info.lat, info.long),
            position: response.data.results[0].geometry.location,
            title: info.city
        });
        marker.content = '<div class="infoWindowContent">' + info.hospital_name + '</div>';
        
        google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
            infoWindow.open($scope.map, marker);
        });
        
        $scope.markers.push(marker);
}
    
    // this callback will be called asynchronously
    // when the response is available
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });


        /*var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
           // position: info.address,
            title: info.city
        });
        marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
        
        google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
            infoWindow.open($scope.map, marker);
        });
        
        $scope.markers.push(marker);*/
        
    }  
    
    for (i = 0; i < $scope.hospitals.length; i++){
        createMarker($scope.hospitals[i]);
    }
/* for (i = 0; i < cities.length; i++){
        createMarker(cities[i]);
    }*/
    $scope.openInfoWindow = function(e, selectedMarker){
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
    }
    // this callback will be called asynchronously
    // when the response is available
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });

})

