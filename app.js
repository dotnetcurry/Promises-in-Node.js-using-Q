//1.
var callModule = require('./module');

//2.
var serverDetails = {
    host: 'localhost',
    port:'39916',
    path: '/api/EmployeeInfoAPI',
    method: 'GET'
};

var emp = [];
//3.
callModule.getData(serverDetails).then(function(response){
  // console.log('Result ' + JSON.stringify(response) + "   " + response.length);
    console.log("EmpNo\t EmpName\tSalary\tDeptName\tDesignation");
    console.log(); 
    for(var i=0;i<response.length;i++){
         console.log(response[i].EmpNo + "\t" + response[i].EmpName + "\t\t" + response[i].Salary + "\t" + response[i].DeptName + "\t\t" + response[i].Designation);
    }             
}).catch(function(err){
    console.log(err);
});
    
console.log('Done');