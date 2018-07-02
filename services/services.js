App.factory('Service',['$http','$q',function($http,$q,APIURL){
	return{
		List: function(){
            debugger;
			var deferred = $q.defer();
			$http.get('http://192.168.1.128:5006/gaugelist').success(function(response){
				deferred.resolve(response);
			}).error(function(err){
				deferred.reject(err);
			})
			return deferred.promise;
        },
        getById: function(id){
			var deferred = $q.defer();
			$http.get('http://192.168.1.128:5006/gauge?gaugeId= ' + id).success(function(response){
					deferred.resolve(response);
			}).error(function(err){
				deferred.reject(err);
			});
			return deferred.promise;
   		}
   	}
    }])