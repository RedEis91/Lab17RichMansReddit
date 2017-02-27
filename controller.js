var app = angular.module("twedditModule");


app.controller('twedditController', function ($scope, $http) {
                function getData () {
                    $http({
                        url: "https://www.reddit.com/r/awww/.json",
                        method: 'GET'
                    })
                        .then(
                        function missionSuccess(response) {
                          $scope.pulledData = response;
                          console.log(response);
                          $scope.posts = $scope.pulledData.data.data.children;
                        },
                        function (error) {
                            console.log(error);
                        });
                }
                getData();
            });
