/**
 * Created by Mohanachandran on 10/7/2015.
 */

angular.module('demoJasmine').service('HomeService', homeService);

homeService.$inject = ['$http'];

function homeService($http){

    var airports = [];

    return {
        init : init,
        listOfAirports : airports,
        getAirports : getAirports
    }
    function init(){
        airports = [];
    }

    function getAirports(){
        var promise  = $http.get('json/airports.json');

        return promise.success(function(response){
            return response;
        })
    }

}
