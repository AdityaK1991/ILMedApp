angular.module('starter.services', ['ngResource'])

.factory('HospitalData', function($resource) {
  // Might use a resource here that returns a JSON array

  var baseUrl = "https://data.illinois.gov/resource/wsms-teqm.json"

  var factory = []

  

  factory.Responses = $resource (
    baseUrl + "?$where=type_of_hospital="+"General Hospital"+"&city=:"+"Chicago",
    null,
    {
      query: {method:'GET', isArray:true}
    });

  return factory;

})

.factory('SurgeryCenterData', function($resource){

  var baseUrl = "https://data.illinois.gov/resource/qphf-nedb.json"

  var factory = []

  factory.Responses = $resource (
    baseUrl,
    null,
    {
      query: {method:'GET', isArray:true, url:baseUrl}
    }
    )

  return factory;
})

.factory('HospiceData', function($resource){

  var baseUrl = "https://data.illinois.gov/resource/8px3-6r9b.json"

  var factory = []

  factory.Responses = $resource (
    baseUrl,
    null,
    {
      query: {method:'GET', isArray:true, url:baseUrl}
    }
    )

  return factory;
})

.factory('HealthAgencyData', function($resource){

  var baseUrl = "https://data.illinois.gov/resource/h54t-6qsk.json"

  var factory = []

  factory.Responses = $resource (
    baseUrl,
    null,
    {
      query: {method:'GET', isArray:true, url:baseUrl}
    }
    )

  return factory;

});


