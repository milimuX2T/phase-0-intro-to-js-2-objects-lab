let employee = {
    "name":"collins",
    "address":"syokimau", 
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    let newemp = {...employee,[key]:value}
    return newemp

}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value
    return {...employee}

}
function deleteFromEmployeeByKey(employee, key){
    let cars = {...employee}
    delete cars [key]
    return cars
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee [key]
    return employee
}