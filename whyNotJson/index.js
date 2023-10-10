const employee = []
fs = require('fs')

employee.push({
	"name": "Harsh",
	"age" : 24,
	"id": "1001"
})
const ayush = {
	"name": "Ayush",
	"age": 22,
	"id": "1003"
}
const mrinal = {
	"name": "Mrinal",
	"age": 25,
	"id": "1002"
}

employee.push(ayush)
employee.push(mrinal)

console.log(employee)
console.log(JSON.stringify(employee))

fs.writeFileSync("empdata.json", JSON.stringify(employee))

