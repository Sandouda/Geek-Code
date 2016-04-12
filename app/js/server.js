var express =require('express');
var app=express();
var mongojs=require('mongojs');
var db=mongojs('PI_MEAN',['eventlist']);
var bodyParser=require('body-parser');
 
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json());


//Get the list of the events
app.get('/eventlist',function(req,res){
	console.log("I received a get request");
	db.eventlist.find(function(err,docs){
		console.log(docs);
		res.json(docs);
	});
	/*event1={
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
	res.json(eventlist);*/
});

//ADD new event
app.post('/eventlist',function(req,res){
	console.log(req.body);
	db.eventlist.insert(req.body,function(err,doc){
		res.json(doc);
	});
});

//DELETE an event
app.delete('/eventlist/:id',function(req,res){
	var id=req.params.id;
	console.log(id);
	db.eventlist.remove({_id:mongojs.ObjectId(id)},function(err,doc){
		res.json(doc);
	});
});

//Select the event to edit
app.get('/eventlist/:id',function(req,res){
	var id=req.params.id;
	console.log(id);
	db.eventlist.findOne({_id:mongojs.ObjectId(id)},function(err,doc){
		res.json(doc);
	});
});

//UPDATE the event selected
  app.put('/eventlist/:id',function(req,res){
	 var id=req.params.id;
     console.log(req.body.name);
     db.eventlist.findAndModify({query:{_id:mongojs.ObjectId(id)},
                                 update:{$set:{name:req.body.name,startdate:req.body.enddate,duration:req.body.duration,description:req.body.description}},
                                 new : true},function(err,doc){
									 res.json(doc);
									 });
  });
app.listen(3000);
console.log("Server running on port 30000");