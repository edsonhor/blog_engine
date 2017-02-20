
var database = require('../config/database_configuration');

function subscriber (subscriberid, firstname, lastname, emailaddress,signupdate,emailverified ) {
    this._subscriberid = subscriberid;
    this._firstname = firstname;
    this._lastname = lastname;
    this._emailaddress = emailaddress;
    this._signupdate = signupdate;
    this._emailverified = emailverified;
  }

 subscriber.prototype.addnewsubscriber=function(req,res,next){

        database.getConnection(function(err,connection){
        if (err) {
          res.json({"code" : 100, "status" : "Error in connection database"});
          return;
        }   

        console.log('connected as id ' + connection.threadId);
        
        connection.query("select * from subscribers",function(err,rows){    //turn this into an insert statement 
            connection.release();
            if(!err) {
                res.json(rows);
            }           
        });

        connection.on('error', function(err) {      
              res.json({"code" : 100, "status" : "Error in connection database"});
              return;     
        });
  });
      
  }

 subscriber.prototype.removesubscriber = function(){
      console.log("Subscriber is removed");
  }



module.exports = subscriber;