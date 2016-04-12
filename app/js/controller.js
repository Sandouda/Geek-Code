var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
	/*$http.get('/eventlist');
	event1={
		name:"DroidDay",
		startdate:"16 April",
		enddate:"16 April",
		duration:"1 day",
		description:"Android event day"
	};
	event2={
		name:"DroidCon",
		startdate:"March",
		enddate:"March",
		duration:"1day",
		description:"Android event "
	};
	var eventlist=[event1,event2];
	$scope.eventlist=eventlist;*/
	console.log("Hello world from controller");
//Automaticaly refresh the list after adding new event	
var refresh=function(){
//GET list of events
	$http.get('/eventlist').success(function(response){
		console.log("I got the data i requested");
		$scope.eventlist=response;
	});
};
refresh();

//ADD new event
    $scope.addEvent=function(){
		console.log($scope.event);
		$http.post('/eventlist',$scope.event).success(function(response){
			console.log(response);
			refresh();
		});
	};

//REMOVE event
    $scope.remove=function(id){
		console.log(id);
		$http.delete('/eventlist/' +id).success(function(response){
			refresh();
		});
	}; 

//Select the event to edit
   $scope.edit=function(id){
	 console.log(id);
     $http.get('/eventlist/' +id).success(function(response){
		 $scope.event=response;
		}); 
   };

//UPDATE the event selected
   $scope.updateEvent=function(){
	   console.log($scope.event._id);
	   $http.put('/eventlist/' +$scope.event._id,$scope.event).success(function(response){
			refresh();
		});
   };
   
//DESELECT function
   $scope.deselect=function(){
	   $scope.event="";
   }
}]);