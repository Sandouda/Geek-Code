'use strict';

angular.module('xenon.controllers', ['jkuri.gallery',"chart.js", "Crud" ]).
controller('RecruitmentCTRL',['$scope','AngularIssues', function($scope, AngularIssues){
    $scope.data = {};
    AngularIssues.query(function(response){
        $scope.data.candidacies=response;
    
    });

}]).
controller('AppointmentsCTRL',['$scope','RendezVous', function($scope, RendezVous){
    $scope.data = {};
    RendezVous.query(function(response){
        $scope.data.appointments=response;
    
    });

}]).


  controller("RadarCtrl", function ($scope) {
	$scope.labels =["Comapny A", "Comapny B", "Comapny D", "Comapny E", "Comapny A", "Comapny A", "Comapny A"];

	$scope.data = [
		[65, 59, 90, 81, 56, 55, 40],
		[28, 48, 40, 19, 96, 27, 100]
	];
}).

controller("DoughnutCtrl", function ($scope) {
  $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Mail-Order Sales", "Mail-Order Sales", "Mail-Order Sales", "Mail-Order Sales"];
  $scope.data = [300, 500, 100 , 800 , 350 , 720, 250];
}).

		controller("LineCtrl", function ($scope) {

			$scope.labels = ["2009", "2010", "2011", "2013", "2014", "2015", "2016"];
			$scope.series = ['Membre', 'Company'];
			$scope.data = [
				[65, 59, 80, 81, 56, 55, 40],
				[28, 48, 40, 19, 86, 27, 90]
			];
			$scope.onClick = function (points, evt) {
				console.log(points, evt);
			};
		}).

  controller("BaseCtrl", function ($scope) {
			$scope.labels = ["Company A", "Company B", "Company E", "Company C", "Company D"];
			$scope.data = [300, 500, 100, 40, 120];
			$scope.type = 'PolarArea';

			$scope.toggle = function () {
				$scope.type = $scope.type === 'PolarArea' ?
						'Pie' : 'PolarArea';
			};
		}).

controller('LoginCtrl', function($scope, $rootScope)
	{
		$rootScope.isLoginPage        = true;
		$rootScope.isLightLoginPage   = false;
		$rootScope.isLockscreenPage   = false;
		$rootScope.isMainPage         = false;
	}).
	controller('LoginLightCtrl', function($scope, $rootScope)
	{
		$rootScope.isLoginPage        = true;
		$rootScope.isLightLoginPage   = true;
		$rootScope.isLockscreenPage   = false;
		$rootScope.isMainPage         = false;
	}).
	controller('LockscreenCtrl', function($scope, $rootScope)
	{
		$rootScope.isLoginPage        = false;
		$rootScope.isLightLoginPage   = false;
		$rootScope.isLockscreenPage   = true;
		$rootScope.isMainPage         = false;
	}).

controller('autoCompleteCtrl', function($scope, $rootScope)
	{
			
var input = document.getElementById('location');
        var autocomplete = new google.maps.places.Autocomplete(input);


})
.controller("actionBourseController",function($scope, actionBourse,$rootScope){
	 
    $scope.actionbourses=actionBourse.query();
    $rootScope.a=actionBourse.query();
    
      
})
.controller("actionBoursesController",function($scope, actionBourses,$rootScope){
	 
    $scope.actionbourse=actionBourses.query();
    $rootScope.a=actionBourses.query();
    
      
}).
controller('MapCtrl', function ($scope) {
 var locations = [
      ["Ariana", "Gouvernorat de l'Ariana, Tunisie"],
      ["Résidence Nesrine 2", "La Petite Ariana, 2083 Tunisie, Cebalat Ben Ammar, Gouvernorat de l'Ariana, Tunisie"],
      
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: new google.maps.LatLng(43.253205,-80.480347),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();
    var geocoder = new google.maps.Geocoder();

    var marker, i;

    for (i = 0; i < locations.length; i++) {
      geocodeAddress(locations[i]);
    }

function geocodeAddress(location) {
  geocoder.geocode( { 'address': location[1]}, function(results, status) {
  //alert(status);
    if (status == google.maps.GeocoderStatus.OK) {

      //alert(results[0].geometry.location);
      map.setCenter(results[0].geometry.location);
      createMarker(results[0].geometry.location,location[0]+"<br>"+location[1]+ "<img src='https://irs3.4sqi.net/img/general/300x300/24647156_F6J6azXKgac2xCBbbf_l7qywoOHH3BUAj3GduavkoEY.jpg' class ='img-responsive img-thumbnail' height='75px' width='75px'>");
    }
    else
    {
      alert("some problem in geocode" + status);
    }
  }); 
}

function createMarker(latlng,html){
  var marker = new google.maps.Marker({
    position: latlng,
    map: map
  }); 

  google.maps.event.addListener(marker, 'mouseover', function() { 
    infowindow.setContent(html);
    infowindow.open(map, marker);
  });
		
  google.maps.event.addListener(marker, 'mouseout', function() { 
    infowindow.close();
  });
}


}).
controller('Ctrl', function($scope) {
    var self = this;
 
     self.images = [
        {thumb: 'https://irs1.4sqi.net/img/general/width960/VIzVz4dxKnWwNpjFSk7KPeYjE89rDRrJ1-zUm0UKorw.jpg', img: 'https://irs1.4sqi.net/img/general/width960/VIzVz4dxKnWwNpjFSk7KPeYjE89rDRrJ1-zUm0UKorw.jpg', description: 'Image 1'},
        {thumb: 'https://irs0.4sqi.net/img/general/width960/5TCO5MYh0qpIdeQU6JksA8daEQQs2GbfE-Sm6kQ2vnQ.jpg', img: 'https://irs0.4sqi.net/img/general/width960/5TCO5MYh0qpIdeQU6JksA8daEQQs2GbfE-Sm6kQ2vnQ.jpg', description: 'Image 2'},
        {thumb: 'https://irs3.4sqi.net/img/general/width960/38183131_mcBe-YWI58YeY8cWiAFJA26ShvPHlMN6S21pJVpycS0.jpg', img: 'https://irs3.4sqi.net/img/general/width960/38183131_mcBe-YWI58YeY8cWiAFJA26ShvPHlMN6S21pJVpycS0.jpg', description: 'Image 3'},
        {thumb: 'https://irs2.4sqi.net/img/general/width960/86246288_JccdbRtDEGfHNFW2lNuihV8ZbC29eL76dbtVHlfBiJ0.jpg', img: 'https://irs2.4sqi.net/img/general/width960/86246288_JccdbRtDEGfHNFW2lNuihV8ZbC29eL76dbtVHlfBiJ0.jpg', description: 'Image 4'},

	 {thumb: 'https://irs1.4sqi.net/img/general/width960/VIzVz4dxKnWwNpjFSk7KPeYjE89rDRrJ1-zUm0UKorw.jpg', img: 'https://irs1.4sqi.net/img/general/width960/VIzVz4dxKnWwNpjFSk7KPeYjE89rDRrJ1-zUm0UKorw.jpg', description: 'Image 1'},
        {thumb: 'https://irs0.4sqi.net/img/general/width960/5TCO5MYh0qpIdeQU6JksA8daEQQs2GbfE-Sm6kQ2vnQ.jpg', img: 'https://irs0.4sqi.net/img/general/width960/5TCO5MYh0qpIdeQU6JksA8daEQQs2GbfE-Sm6kQ2vnQ.jpg', description: 'Image 2'},
        {thumb: 'https://irs3.4sqi.net/img/general/width960/38183131_mcBe-YWI58YeY8cWiAFJA26ShvPHlMN6S21pJVpycS0.jpg', img: 'https://irs3.4sqi.net/img/general/width960/38183131_mcBe-YWI58YeY8cWiAFJA26ShvPHlMN6S21pJVpycS0.jpg', description: 'Image 3'},
        {thumb: 'https://irs2.4sqi.net/img/general/width960/86246288_JccdbRtDEGfHNFW2lNuihV8ZbC29eL76dbtVHlfBiJ0.jpg', img: 'https://irs2.4sqi.net/img/general/width960/86246288_JccdbRtDEGfHNFW2lNuihV8ZbC29eL76dbtVHlfBiJ0.jpg', description: 'Image 4'},

		 {thumb: 'https://irs1.4sqi.net/img/general/width960/VIzVz4dxKnWwNpjFSk7KPeYjE89rDRrJ1-zUm0UKorw.jpg', img: 'https://irs1.4sqi.net/img/general/width960/VIzVz4dxKnWwNpjFSk7KPeYjE89rDRrJ1-zUm0UKorw.jpg', description: 'Image 1'},
        {thumb: 'https://irs0.4sqi.net/img/general/width960/5TCO5MYh0qpIdeQU6JksA8daEQQs2GbfE-Sm6kQ2vnQ.jpg', img: 'https://irs0.4sqi.net/img/general/width960/5TCO5MYh0qpIdeQU6JksA8daEQQs2GbfE-Sm6kQ2vnQ.jpg', description: 'Image 2'},
        {thumb: 'https://irs3.4sqi.net/img/general/width960/38183131_mcBe-YWI58YeY8cWiAFJA26ShvPHlMN6S21pJVpycS0.jpg', img: 'https://irs3.4sqi.net/img/general/width960/38183131_mcBe-YWI58YeY8cWiAFJA26ShvPHlMN6S21pJVpycS0.jpg', description: 'Image 3'},
        {thumb: 'https://irs2.4sqi.net/img/general/width960/86246288_JccdbRtDEGfHNFW2lNuihV8ZbC29eL76dbtVHlfBiJ0.jpg', img: 'https://irs2.4sqi.net/img/general/width960/86246288_JccdbRtDEGfHNFW2lNuihV8ZbC29eL76dbtVHlfBiJ0.jpg', description: 'Image 4'},

		 {thumb: 'https://irs1.4sqi.net/img/general/width960/VIzVz4dxKnWwNpjFSk7KPeYjE89rDRrJ1-zUm0UKorw.jpg', img: 'https://irs1.4sqi.net/img/general/width960/VIzVz4dxKnWwNpjFSk7KPeYjE89rDRrJ1-zUm0UKorw.jpg', description: 'Image 1'},
        {thumb: 'https://irs0.4sqi.net/img/general/width960/5TCO5MYh0qpIdeQU6JksA8daEQQs2GbfE-Sm6kQ2vnQ.jpg', img: 'https://irs0.4sqi.net/img/general/width960/5TCO5MYh0qpIdeQU6JksA8daEQQs2GbfE-Sm6kQ2vnQ.jpg', description: 'Image 2'},
        {thumb: 'https://irs3.4sqi.net/img/general/width960/38183131_mcBe-YWI58YeY8cWiAFJA26ShvPHlMN6S21pJVpycS0.jpg', img: 'https://irs3.4sqi.net/img/general/width960/38183131_mcBe-YWI58YeY8cWiAFJA26ShvPHlMN6S21pJVpycS0.jpg', description: 'Image 3'},
        {thumb: 'https://irs2.4sqi.net/img/general/width960/86246288_JccdbRtDEGfHNFW2lNuihV8ZbC29eL76dbtVHlfBiJ0.jpg', img: 'https://irs2.4sqi.net/img/general/width960/86246288_JccdbRtDEGfHNFW2lNuihV8ZbC29eL76dbtVHlfBiJ0.jpg', description: 'Image 4'},

		 {thumb: 'https://irs1.4sqi.net/img/general/width960/VIzVz4dxKnWwNpjFSk7KPeYjE89rDRrJ1-zUm0UKorw.jpg', img: 'https://irs1.4sqi.net/img/general/width960/VIzVz4dxKnWwNpjFSk7KPeYjE89rDRrJ1-zUm0UKorw.jpg', description: 'Image 1'},
        {thumb: 'https://irs0.4sqi.net/img/general/width960/5TCO5MYh0qpIdeQU6JksA8daEQQs2GbfE-Sm6kQ2vnQ.jpg', img: 'https://irs0.4sqi.net/img/general/width960/5TCO5MYh0qpIdeQU6JksA8daEQQs2GbfE-Sm6kQ2vnQ.jpg', description: 'Image 2'},
        {thumb: 'https://irs3.4sqi.net/img/general/width960/38183131_mcBe-YWI58YeY8cWiAFJA26ShvPHlMN6S21pJVpycS0.jpg', img: 'https://irs3.4sqi.net/img/general/width960/38183131_mcBe-YWI58YeY8cWiAFJA26ShvPHlMN6S21pJVpycS0.jpg', description: 'Image 3'},
        {thumb: 'https://irs2.4sqi.net/img/general/width960/86246288_JccdbRtDEGfHNFW2lNuihV8ZbC29eL76dbtVHlfBiJ0.jpg', img: 'https://irs2.4sqi.net/img/general/width960/86246288_JccdbRtDEGfHNFW2lNuihV8ZbC29eL76dbtVHlfBiJ0.jpg', description: 'Image 4'},

		 {thumb: 'https://irs1.4sqi.net/img/general/width960/VIzVz4dxKnWwNpjFSk7KPeYjE89rDRrJ1-zUm0UKorw.jpg', img: 'https://irs1.4sqi.net/img/general/width960/VIzVz4dxKnWwNpjFSk7KPeYjE89rDRrJ1-zUm0UKorw.jpg', description: 'Image 1'},
        {thumb: 'https://irs0.4sqi.net/img/general/width960/5TCO5MYh0qpIdeQU6JksA8daEQQs2GbfE-Sm6kQ2vnQ.jpg', img: 'https://irs0.4sqi.net/img/general/width960/5TCO5MYh0qpIdeQU6JksA8daEQQs2GbfE-Sm6kQ2vnQ.jpg', description: 'Image 2'},
        {thumb: 'https://irs3.4sqi.net/img/general/width960/38183131_mcBe-YWI58YeY8cWiAFJA26ShvPHlMN6S21pJVpycS0.jpg', img: 'https://irs3.4sqi.net/img/general/width960/38183131_mcBe-YWI58YeY8cWiAFJA26ShvPHlMN6S21pJVpycS0.jpg', description: 'Image 3'},
        {thumb: 'https://irs2.4sqi.net/img/general/width960/86246288_JccdbRtDEGfHNFW2lNuihV8ZbC29eL76dbtVHlfBiJ0.jpg', img: 'https://irs2.4sqi.net/img/general/width960/86246288_JccdbRtDEGfHNFW2lNuihV8ZbC29eL76dbtVHlfBiJ0.jpg', description: 'Image 4'},

	 
	 
	 
	 ];
}).

controller("ProductListController",function($scope, productFactory){

    $scope.categories= productFactory.resource().query() ; 
  
}).



	controller('MainCtrl', function($scope, $rootScope, $location, $layout, $layoutToggles, $pageLoadingBar, Fullscreen, $state,AnnyangService,$stateParams)
	{
if('webkitSpeechRecognition' in window)
		
		{
		var recogintion = new webkitSpeechRecognition() ; 
			recogintion.lang ='fr-FR'; 
			recogintion.continious= true ; 
			recogintion.interimResults= true  ; 
			
			
				recogintion.start() ; 
			var transcript =""; 
			recogintion.onresult = function (event){
			console.log(event)
			 
				for (var i = event.resultIndex; i<event.results.length ; i++)
					 {
						 //recogintion.stop(); 
				  transcript = event.results[i][0].transcript ;  
						 
				}
				console.log(transcript)
				if (transcript==="afficher mes mails"){
				$state.go("app.mailbox-inbox") 	
				}
			else	if (transcript==="les statistiques"){
				$state.go("app.Statistics") 	
				}
				else	if (transcript==="les messages"){
				$state.go("app.mailbox-message") 	
				}
				else	if (transcript==="créer un email"){
				$state.go("app.mailbox-inbox") 	
				}
			
				
			}
			recogintion.onend = function()
			{
				recogintion.start() ; 
			}
			
		}



		$rootScope.isLoginPage        = false;
		$rootScope.isLightLoginPage   = false;
		$rootScope.isLockscreenPage   = false;
		$rootScope.isMainPage         = true;

		$rootScope.layoutOptions = {
			horizontalMenu: {
				isVisible		: false,
				isFixed			: true,
				minimal			: false,
				clickToExpand	: false,

				isMenuOpenMobile: false
			},
			sidebar: {
				isVisible		: true,
				isCollapsed		: false,
				toggleOthers	: true,
				isFixed			: true,
				isRight			: false,

				isMenuOpenMobile: false,

				// Added in v1.3
				userProfile		: true
			},
			chat: {
				isOpen			: false,
			},
			settingsPane: {
				isOpen			: false,
				useAnimation	: true
			},
			container: {
				isBoxed			: false
			},
			skins: {
				sidebarMenu		: '',
				horizontalMenu	: '',
				userInfoNavbar	: ''
			},
			pageTitles: true,
			userInfoNavVisible	: false
		};

		$layout.loadOptionsFromCookies(); // remove this line if you don't want to support cookies that remember layout changes


		$scope.updatePsScrollbars = function()
		{
			var $scrollbars = jQuery(".ps-scrollbar:visible");

			$scrollbars.each(function(i, el)
			{
				if(typeof jQuery(el).data('perfectScrollbar') == 'undefined')
				{
					jQuery(el).perfectScrollbar();
				}
				else
				{
					jQuery(el).perfectScrollbar('update');
				}
			})
		};


		// Define Public Vars
		public_vars.$body = jQuery("body");


		// Init Layout Toggles
		$layoutToggles.initToggles();


		// Other methods
		$scope.setFocusOnSearchField = function()
		{
			public_vars.$body.find('.search-form input[name="s"]').focus();

			setTimeout(function(){ public_vars.$body.find('.search-form input[name="s"]').focus() }, 100 );
		};


		// Watch changes to replace checkboxes
		$scope.$watch(function()
		{
			cbr_replace();
		});

		// Watch sidebar status to remove the psScrollbar
		$rootScope.$watch('layoutOptions.sidebar.isCollapsed', function(newValue, oldValue)
		{
			if(newValue != oldValue)
			{
				if(newValue == true)
				{
					public_vars.$sidebarMenu.find('.sidebar-menu-inner').perfectScrollbar('destroy')
				}
				else
				{
					public_vars.$sidebarMenu.find('.sidebar-menu-inner').perfectScrollbar({wheelPropagation: public_vars.wheelPropagation});
				}
			}
		});


		// Page Loading Progress (remove/comment this line to disable it)
		$pageLoadingBar.init();

		$scope.showLoadingBar = showLoadingBar;
		$scope.hideLoadingBar = hideLoadingBar;


		// Set Scroll to 0 When page is changed
		$rootScope.$on('$stateChangeStart', function()
		{
			var obj = {pos: jQuery(window).scrollTop()};

			TweenLite.to(obj, .25, {pos: 0, ease:Power4.easeOut, onUpdate: function()
			{
				$(window).scrollTop(obj.pos);
			}});
		});


		// Full screen feature added in v1.3
		$scope.isFullscreenSupported = Fullscreen.isSupported();
		$scope.isFullscreen = Fullscreen.isEnabled() ? true : false;

		$scope.goFullscreen = function()
		{
			if (Fullscreen.isEnabled())
				Fullscreen.cancel();
			else
				Fullscreen.all();

			$scope.isFullscreen = Fullscreen.isEnabled() ? true : false;
		}

	}).
	controller('SidebarMenuCtrl', function($scope, $rootScope, $menuItems, $timeout, $location, $state, $layout)
	{

		// Menu Items
		var $sidebarMenuItems = $menuItems.instantiate();

		$scope.menuItems = $sidebarMenuItems.prepareSidebarMenu().getAll();

		// Set Active Menu Item
		$sidebarMenuItems.setActive( $location.path() );

		$rootScope.$on('$stateChangeSuccess', function()
		{
			$sidebarMenuItems.setActive($state.current.name);
		});

		// Trigger menu setup
		public_vars.$sidebarMenu = public_vars.$body.find('.sidebar-menu');
		$timeout(setup_sidebar_menu, 1);

		ps_init(); // perfect scrollbar for sidebar
	}).
	controller('HorizontalMenuCtrl', function($scope, $rootScope, $menuItems, $timeout, $location, $state)
	{
		var $horizontalMenuItems = $menuItems.instantiate();

		$scope.menuItems = $horizontalMenuItems.prepareHorizontalMenu().getAll();

		// Set Active Menu Item
		$horizontalMenuItems.setActive( $location.path() );

		$rootScope.$on('$stateChangeSuccess', function()
		{
			$horizontalMenuItems.setActive($state.current.name);

			$(".navbar.horizontal-menu .navbar-nav .hover").removeClass('hover'); // Close Submenus when item is selected
		});

		// Trigger menu setup
		$timeout(setup_horizontal_menu, 1);
	}).
	controller('SettingsPaneCtrl', function($rootScope)
	{
		// Define Settings Pane Public Variable
		public_vars.$settingsPane = public_vars.$body.find('.settings-pane');
		public_vars.$settingsPaneIn = public_vars.$settingsPane.find('.settings-pane-inner');
	}).
	controller('ChatCtrl', function($scope, $element)
	{
		var $chat = jQuery($element),
			$chat_conv = $chat.find('.chat-conversation');

		$chat.find('.chat-inner').perfectScrollbar(); // perfect scrollbar for chat container


		// Chat Conversation Window (sample)
		$chat.on('click', '.chat-group a', function(ev)
		{
			ev.preventDefault();

			$chat_conv.toggleClass('is-open');

			if($chat_conv.is(':visible'))
			{
				$chat.find('.chat-inner').perfectScrollbar('update');
				$chat_conv.find('textarea').autosize();
			}
		});

		$chat_conv.on('click', '.conversation-close', function(ev)
		{
			ev.preventDefault();

			$chat_conv.removeClass('is-open');
		});
	}).
	controller('UIModalsCtrl', function($scope, $rootScope, $modal, $sce)
	{
		// Open Simple Modal
		$scope.openModal = function(modal_id, modal_size, modal_backdrop)
		{
			$rootScope.currentModal = $modal.open({
				templateUrl: modal_id,
				size: modal_size,
				backdrop: typeof modal_backdrop == 'undefined' ? true : modal_backdrop
			});
		};

		// Loading AJAX Content
		$scope.openAjaxModal = function(modal_id, url_location)
		{
			$rootScope.currentModal = $modal.open({
				templateUrl: modal_id,
				resolve: {
					ajaxContent: function($http)
					{
						return $http.get(url_location).then(function(response){
							$rootScope.modalContent = $sce.trustAsHtml(response.data);
						}, function(response){
							$rootScope.modalContent = $sce.trustAsHtml('<div class="label label-danger">Cannot load ajax content! Please check the given url.</div>');
						});
					}
				}
			});

			$rootScope.modalContent = $sce.trustAsHtml('Modal content is loading...');
		}
	}).
	controller('PaginationDemoCtrl', function($scope)
	{
		$scope.totalItems = 64;
		$scope.currentPage = 4;

		$scope.setPage = function (pageNo)
		{
			$scope.currentPage = pageNo;
		};

		$scope.pageChanged = function()
		{
			console.log('Page changed to: ' + $scope.currentPage);
		};

		$scope.maxSize = 5;
		$scope.bigTotalItems = 175;
		$scope.bigCurrentPage = 1;
	}).
<<<<<<< HEAD
	
	.controller('EventCtrl', function($scope, Events) {
    $scope.events = Events.query();
})
.controller('EventCtrl', function($scope, $stateParams, Event) {
    $scope.event= Event.get({idEvent: $stateParams.idEvent});
})
.controller("EventAddCtrl", function ($scope, $http, $state) {

        $scope.AddData = function () {
            var data = {
                name: $scope.name,
                startdate: $scope.startdate,
                enddate: $scope.enddate,
                duration: $scope.duration,
                description: $scope.description                
            };
            var config = {
                headers : {
                    'Content-Type': 'application/json;'
                }
            };

            $http.post('http://localhost:3000/PIWEB/geekandcode/add/event', data, config)
            .success(function (data, status, headers) {
                $scope.ServerResponse = data;
               
            })
            .error(function (data, status, header, config) {
                console.log(data);
            });
        };

    })
	
=======
>>>>>>> origin/master
	controller('LayoutVariantsCtrl', function($scope, $layout, $cookies)
	{
		$scope.opts = {
			sidebarType: null,
			fixedSidebar: null,
			sidebarToggleOthers: null,
			sidebarVisible: null,
			sidebarPosition: null,

			horizontalVisible: null,
			fixedHorizontalMenu: null,
			horizontalOpenOnClick: null,
			minimalHorizontalMenu: null,

			sidebarProfile: null
		};

		$scope.sidebarTypes = [
			{value: ['sidebar.isCollapsed', false], text: 'Expanded', selected: $layout.is('sidebar.isCollapsed', false)},
			{value: ['sidebar.isCollapsed', true], text: 'Collapsed', selected: $layout.is('sidebar.isCollapsed', true)},
		];

		$scope.fixedSidebar = [
			{value: ['sidebar.isFixed', true], text: 'Fixed', selected: $layout.is('sidebar.isFixed', true)},
			{value: ['sidebar.isFixed', false], text: 'Static', selected: $layout.is('sidebar.isFixed', false)},
		];

		$scope.sidebarToggleOthers = [
			{value: ['sidebar.toggleOthers', true], text: 'Yes', selected: $layout.is('sidebar.toggleOthers', true)},
			{value: ['sidebar.toggleOthers', false], text: 'No', selected: $layout.is('sidebar.toggleOthers', false)},
		];

		$scope.sidebarVisible = [
			{value: ['sidebar.isVisible', true], text: 'Visible', selected: $layout.is('sidebar.isVisible', true)},
			{value: ['sidebar.isVisible', false], text: 'Hidden', selected: $layout.is('sidebar.isVisible', false)},
		];

		$scope.sidebarPosition = [
			{value: ['sidebar.isRight', false], text: 'Left', selected: $layout.is('sidebar.isRight', false)},
			{value: ['sidebar.isRight', true], text: 'Right', selected: $layout.is('sidebar.isRight', true)},
		];

		$scope.horizontalVisible = [
			{value: ['horizontalMenu.isVisible', true], text: 'Visible', selected: $layout.is('horizontalMenu.isVisible', true)},
			{value: ['horizontalMenu.isVisible', false], text: 'Hidden', selected: $layout.is('horizontalMenu.isVisible', false)},
		];

		$scope.fixedHorizontalMenu = [
			{value: ['horizontalMenu.isFixed', true], text: 'Fixed', selected: $layout.is('horizontalMenu.isFixed', true)},
			{value: ['horizontalMenu.isFixed', false], text: 'Static', selected: $layout.is('horizontalMenu.isFixed', false)},
		];

		$scope.horizontalOpenOnClick = [
			{value: ['horizontalMenu.clickToExpand', false], text: 'No', selected: $layout.is('horizontalMenu.clickToExpand', false)},
			{value: ['horizontalMenu.clickToExpand', true], text: 'Yes', selected: $layout.is('horizontalMenu.clickToExpand', true)},
		];

		$scope.minimalHorizontalMenu = [
			{value: ['horizontalMenu.minimal', false], text: 'No', selected: $layout.is('horizontalMenu.minimal', false)},
			{value: ['horizontalMenu.minimal', true], text: 'Yes', selected: $layout.is('horizontalMenu.minimal', true)},
		];

		$scope.chatVisibility = [
			{value: ['chat.isOpen', false], text: 'No', selected: $layout.is('chat.isOpen', false)},
			{value: ['chat.isOpen', true], text: 'Yes', selected: $layout.is('chat.isOpen', true)},
		];

		$scope.boxedContainer = [
			{value: ['container.isBoxed', false], text: 'No', selected: $layout.is('container.isBoxed', false)},
			{value: ['container.isBoxed', true], text: 'Yes', selected: $layout.is('container.isBoxed', true)},
		];

		$scope.sidebarProfile = [
			{value: ['sidebar.userProfile', false], text: 'No', selected: $layout.is('sidebar.userProfile', false)},
			{value: ['sidebar.userProfile', true], text: 'Yes', selected: $layout.is('sidebar.userProfile', true)},
		];

		$scope.resetOptions = function()
		{
			$layout.resetCookies();
			window.location.reload();
		};

		var setValue = function(val)
		{
			if(val != null)
			{
				val = eval(val);
				$layout.setOptions(val[0], val[1]);
			}
		};

		$scope.$watch('opts.sidebarType', setValue);
		$scope.$watch('opts.fixedSidebar', setValue);
		$scope.$watch('opts.sidebarToggleOthers', setValue);
		$scope.$watch('opts.sidebarVisible', setValue);
		$scope.$watch('opts.sidebarPosition', setValue);

		$scope.$watch('opts.horizontalVisible', setValue);
		$scope.$watch('opts.fixedHorizontalMenu', setValue);
		$scope.$watch('opts.horizontalOpenOnClick', setValue);
		$scope.$watch('opts.minimalHorizontalMenu', setValue);

		$scope.$watch('opts.chatVisibility', setValue);

		$scope.$watch('opts.boxedContainer', setValue);

		$scope.$watch('opts.sidebarProfile', setValue);
	}).
	controller('ThemeSkinsCtrl', function($scope, $layout)
	{
		var $body = jQuery("body");

		$scope.opts = {
			sidebarSkin: $layout.get('skins.sidebarMenu'),
			horizontalMenuSkin: $layout.get('skins.horizontalMenu'),
			userInfoNavbarSkin: $layout.get('skins.userInfoNavbar')
		};

		$scope.skins = [
			{value: '', 			name: 'Default'			,	palette: ['#2c2e2f','#EEEEEE','#FFFFFF','#68b828','#27292a','#323435']},
			{value: 'aero', 		name: 'Aero'			,	palette: ['#558C89','#ECECEA','#FFFFFF','#5F9A97','#558C89','#255E5b']},
			{value: 'navy', 		name: 'Navy'			,	palette: ['#2c3e50','#a7bfd6','#FFFFFF','#34495e','#2c3e50','#ff4e50']},
			{value: 'facebook', 	name: 'Facebook'		,	palette: ['#3b5998','#8b9dc3','#FFFFFF','#4160a0','#3b5998','#8b9dc3']},
			{value: 'turquoise', 	name: 'Truquoise'		,	palette: ['#16a085','#96ead9','#FFFFFF','#1daf92','#16a085','#0f7e68']},
			{value: 'lime', 		name: 'Lime'			,	palette: ['#8cc657','#ffffff','#FFFFFF','#95cd62','#8cc657','#70a93c']},
			{value: 'green', 		name: 'Green'			,	palette: ['#27ae60','#a2f9c7','#FFFFFF','#2fbd6b','#27ae60','#1c954f']},
			{value: 'purple', 		name: 'Purple'			,	palette: ['#795b95','#c2afd4','#FFFFFF','#795b95','#27ae60','#5f3d7e']},
			{value: 'white', 		name: 'White'			,	palette: ['#FFFFFF','#666666','#95cd62','#EEEEEE','#95cd62','#555555']},
			{value: 'concrete', 	name: 'Concrete'		,	palette: ['#a8aba2','#666666','#a40f37','#b8bbb3','#a40f37','#323232']},
			{value: 'watermelon', 	name: 'Watermelon'		,	palette: ['#b63131','#f7b2b2','#FFFFFF','#c03737','#b63131','#32932e']},
			{value: 'lemonade', 	name: 'Lemonade'		,	palette: ['#f5c150','#ffeec9','#FFFFFF','#ffcf67','#f5c150','#d9a940']},
		];

		$scope.$watch('opts.sidebarSkin', function(val)
		{
			if(val != null)
			{
				$layout.setOptions('skins.sidebarMenu', val);

				$body.attr('class', $body.attr('class').replace(/\sskin-[a-z]+/)).addClass('skin-' + val);
			}
		});

		$scope.$watch('opts.horizontalMenuSkin', function(val)
		{
			if(val != null)
			{
				$layout.setOptions('skins.horizontalMenu', val);

				$body.attr('class', $body.attr('class').replace(/\shorizontal-menu-skin-[a-z]+/)).addClass('horizontal-menu-skin-' + val);
			}
		});

		$scope.$watch('opts.userInfoNavbarSkin', function(val)
		{
			if(val != null)
			{
				$layout.setOptions('skins.userInfoNavbar', val);

				$body.attr('class', $body.attr('class').replace(/\suser-info-navbar-skin-[a-z]+/)).addClass('user-info-navbar-skin-' + val);
			}
		});
	}).
	// Added in v1.3
	controller('FooterChatCtrl', function($scope, $element)
	{
		$scope.isConversationVisible = false;

		$scope.toggleChatConversation = function()
		{
			$scope.isConversationVisible = ! $scope.isConversationVisible;

			if($scope.isConversationVisible)
			{
				setTimeout(function()
				{
					var $el = $element.find('.ps-scrollbar');

					if($el.hasClass('ps-scroll-down'))
					{
						$el.scrollTop($el.prop('scrollHeight'));
					}

					$el.perfectScrollbar({
						wheelPropagation: false
					});

					$element.find('.form-control').focus();

				}, 300);
			}
		}
	});