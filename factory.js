var app = angular.factory('getRedJSON', function($http){
  var pulledData = {};

  return {
    getData: function() {
      $http({
        url: 'https://www.reddit.com/r/awww/.json',
        method: 'GET'
      });
    }
  }
});
