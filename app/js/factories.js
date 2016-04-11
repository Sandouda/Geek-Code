var app = angular.module('Crud', ["ngResource"]);

app.factory('mateiralFactory', function($resource){
    return {
       resource : function()
        {
        
return $resource('http://localhost:18080/ERP.PI-web/rest/materiels/:id',{ id: '@_id' }, {
    update: {
      method: 'PUT' // this method issues a PUT request
    }
  });        
            
        
        }
    }
                    
});

app.factory('categoryFactory', function($resource){
    return {
       
       
     resource : function()
        {
        
return $resource('http://localhost:18080/ERP.PI-web/rest/categories/:id',{ id: '@_id' }, {
    update: {
      method: 'PUT' // this method issues a PUT request
    }
  });
                
                
                 
        
            
        
        }
     
                            
    }               
});

app.factory('productFactory', function($resource){
     return {
       resource : function()
        {
        
return $resource('http://localhost:1337/products/instock/10',{ id: '@_id' }, {
    update: {
      method: 'PUT' // this method issues a PUT request
    }
  });        
            
        
        }
    }               
});

app.factory('actionBourse',function($resource) {
             return $resource('http://localhost:1337/profil');
    });
app.factory('actionBourses',function($resource) {
             return $resource('http://localhost:1337/offre');
    });

app.factory('storeFactory', function($resource){
    return {
       resource : function()
        {
        
return $resource('http://localhost:18080/ERP.PI-web/rest/storehouses/:id',{ id: '@_id' }, {
    update: {
      method: 'PUT' // this method issues a PUT request
    }
  });        
            
        
        }
    }
                    
});


//rahma 

   app.factory('AngularIssues',function($resource){

       
       return {
       resource : function()
        {
        
return $resource('http://localhost:18080/ERP.PI-web/rest/Candidacy/:id',{ id: '@_id' }, {
    update: {
      method: 'PUT' // this method issues a PUT request
    }
  });        
            
        
        }
    }
       
       });
    


   app.factory('Rendez',function($resource){

       
       return {
       resource : function()
        {
        
return $resource('http://localhost:18080/ERP.PI-web/rest/appoitment/:id',{ id: '@_id' }, {
    update: {
      method: 'PUT' // this method issues a PUT request
    }
  });        
            
        
        }
    }
       
       });
    


//