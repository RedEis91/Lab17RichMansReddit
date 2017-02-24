

app.controller('myController', function ($scope, $http) {

            $scope.posts = "{}";

            return {
                getData: function () {
                    $http({
                        url: "https://www.reddit.com/r/awww/.json",
                        method: 'GET'
                    })
                        .then(
                        function successfulCallback(response) {
                            $scope.posts = response.data.data.children;
                        }, 
                        function (error) {
                            console.log(error);
                        }); 
                } 
                
            }
            
});

