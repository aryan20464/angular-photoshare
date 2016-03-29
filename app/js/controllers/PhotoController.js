/**
 * Created by chakri on 16/2/16.
 */
app.controller('PhotoController', ['$scope', 'photos', '$routeParams', function($scope, photos, $routeParams) {
    photos.success(function(data) {
        $scope.detail = data[$routeParams.id];
    });
}]);
