var userName;
userName = "Rama";
// userName = 23;
var userAge = 35;
var isValid = true;
var userID = "abc1";
userID = 123;
var user;
user = {
    name: "Rama",
    age: 35,
    isAdmin: true,
    id: "abc1",
};
// let hobbies: Array<string>; Combining types -> let hobbies: Array<string> | Array<number>;
// Similar to the above syntax
var hobbies; // Similar -> number[], boolean[]
hobbies = ["Sports", "Cooking", "Reading"];
// hobbies = [1, 2, 3]; // would work if, let hobbies: string[] | number[];
function add(a, b) {
    var res = a + b;
    return res;
}
function calculate(a, b, calFunc) {
    return calFunc(a, b);
}
console.log(calculate(2, 3, add)); // 5
var creds;
creds = {
    password: "abc",
    email: "rama@mail.com",
};
var AuthCredentials = /** @class */ (function () {
    function AuthCredentials() {
    }
    return AuthCredentials;
}());
