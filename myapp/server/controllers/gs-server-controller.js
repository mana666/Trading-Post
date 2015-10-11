/*
*  Controller for the model:
*  to fullfil HTTP requests from client
*  for model goods/services data
*
*  SCRUD operations for querying model
*/


// Goods/Services collection



// Retrieve recent posts from the database
exports.sendRecentPosts = function (req,res) {


		// Get the documents collection
    		var collection = req.db.collection("gs");
				
    		// Find document based on today's date and time
		// 1 is for ascending and -1 is for descending order

    		collection.find().sort({datePosted: -1}).toArray(function (err, result) {
      				if (err) {
        				console.log(err);

      				} else if (result.length) {

       					console.log('Found:', result);


					// Take the first six recent posts
					var firstSix = [];
					var max = 6;
					var i;

					if( result.length < 6 )
						max = result.length;

					for( i = 0; i < max; i++ )
						firstSix[i] = result[i]; 
					
					// Send the data to the client
					res.end( JSON.stringify(firstSix) );

						
      				} else {
        				console.log('No document(s) found with defined "find" criteria!');
      				}				
    		});

};





readDocument = function(db, coll, owner) {  

	
}

logCollections = function(db, coll) {

 		//Query Mongodb and iterate through the results
  		db.collection(coll).find({},{},{}).toArray(
    		function(err, docs){
      			for(index in docs){
        			console.log(docs[index]);
      			}

    		});

}

getDate = function()
{
	var today 	= new Date();
	var dd 		= today.getDate();
	var mm 		= today.getMonth()+1; //January is 0!
	var yyyy 	= today.getFullYear();
	var hour 	= today.getHours();
	var minute 	= today.getMinutes();
	var second 	= today.getSeconds();


	if(dd<10) {
	    dd = '0' + dd
	} 

	if(mm<10) {
	    mm = '0'+ mm
	} 
	
	if(hour<10) {
	    hour = '0' + hour;
	}

	if(minute<10) {
	    hour = '0' + minute;
	}

	if(second<10) {
	    hour = '0' + second
	}

	//console.log( (new Date()).toString());

	today = mm+'/'+dd+'/'+yyyy + ' ' + hour + ':' + minute + ':' + second;
	return today;

}
