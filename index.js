let employee = {
     name: "Sam",
     streetAddress:"11 Broadway"
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { name: 'Sam', streetAddress:"11 Broadway" };
    // console.log(employee[0][1]); 
}
console.log(employee.name,employee.keys,employee.values);

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.streetAddress ="12 Broadway";
    return { name: 'Sam', streetAddress:"12 Broadway" };
    
}
console.log(employee.name,employee.keys,employee.values);

function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = {employee}
    delete newEmployee[key];
    return newEmployee;

}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
 }
// let employee = {
//     name: "Manu",
//     streetAddress: "1738",
// };

// function updateEmployeeWithKeyAndValue(employee, key, value) {
//     return {...employee, [key]: value};
// };

// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
//     employee[key] = value;
//     return employee;
// };

