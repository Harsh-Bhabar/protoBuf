const Schema = require('./employees_pb');
fs = require('fs');

const harsh = new Schema.Employee();
harsh.setId(10001)
harsh.setName("Harsh")
harsh.setSalary(2020022)

const mrinal = new Schema.Employee();
mrinal.setId(10002)
mrinal.setName("Mrinal")
mrinal.setSalary(2020032422)

const ayush = new Schema.Employee();
ayush.setId(10003)
ayush.setName("Ayush")
ayush.setSalary(202432)

const employees = new Schema.Employees();
employees.addEmployees(ayush);
employees.addEmployees(harsh);
employees.addEmployees(mrinal);
console.log(employees)

//serialize
const bytes = employees.serializeBinary();
console.log("binary - ", bytes.toString())
fs.writeFileSync("employeesBinary", bytes)

// deserialize

const emps = Schema.Employees.deserializeBinary(bytes)
console.log("Desirialized - ",emps.toString())
