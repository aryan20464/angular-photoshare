/**
 * Created by chakri on 16/2/16.
 */
app.controller('HomeController', ['$scope', 'photos', function($scope, photos) {
    photos.success(function(data) {
        $scope.photos = data;
    });
}]);
