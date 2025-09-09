function Person(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
}
Person.prototype.getName = function () {
    return this.name;
}
Person.prototype.setName = function (name) {
    this.name = name;
}
Person.prototype.getEmail = function () {
    return this.email;
}
Person.prototype.setEmail = function (email) {
    this.email = email;
}
Person.prototype.getPhone = function () {
    return this.phone;
}
Person.prototype.setPhone = function (phone) {
    this.phone = phone;
}
const p1 = new Person("p1", "p1@gmail.com", "0987654321");
console.log("p1", p1);
console.log("p1 name", p1.getName());
console.log("p1 email", p1.getEmail());
console.log("p1 phone", p1.getPhone());