//1.
var q = require('q');
//2. 
var http = require('http');
//3.
module.exports = {
  //4.
  getData:function(options){
      var emp = "";
      
    //5.
     var defer = q.defer(); 
     var request;
     if(!options){
         //6.
         defer.reject('Please specify the url to receive data');
     } else{
         //7.
          request=  http.request(options  ,function(response){
             response.setEncoding('utf-8');
           response.on('data', function (chunk) {
            emp += chunk;
        });
             //8.
             response.on('end', function(){
                 try {
                        var receivedJson = JSON.parse(emp);
                        
                        defer.resolve(receivedJson);         
                 }   catch(error){
                     //9.
                     defer.reject(error);
                 }
           });
         });
     }
     //10.
     request.end();
     //11.
     return defer.promise;  
  }
};
 