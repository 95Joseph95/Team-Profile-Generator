const Employee = require("../lib/Employee")
describe ("Employee", () => {
    test ("making sure we get the empoyees name", () =>{
let Employee1 = new Employee("joe",10,"test@test.com")
expect (Employee1.getName()).toBe("joe")
    })
    test ("making sure we get the empoyees id", () =>{
let Employee1 = new Employee("joe",10,"test@test.com")
expect (Employee1.getId()).toBe(10)
    })
    test ("making sure we get the empoyees Email", () =>{
let Employee1 = new Employee("joe",10,"test@test.com")
expect (Employee1.getEmail()).toBe("test@test.com")
    })
})