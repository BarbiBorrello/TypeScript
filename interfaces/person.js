function printPersonInfo(person) {
    console.log("Name: ".concat(person.name));
    console.log("Age: ".concat(person.age));
    if (person.email) {
        console.log("Email: ".concat(person.email));
    }
}
var person = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
};
printPersonInfo(person);
