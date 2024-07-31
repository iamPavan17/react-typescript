let userName: string;

userName = "Rama";
// userName = 23;

let userAge: number = 35;

let isValid = true;

// string, number, boolean

type StringOrNum = string | number;

let userID: StringOrNum = "abc1";
userID = 123;

// let user: object;
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

let user: User;

user = {
  name: "Rama",
  age: 35,
  isAdmin: true,
  id: "abc1",
};

// let hobbies: Array<string>; Combining types -> let hobbies: Array<string> | Array<number>;
// Similar to the above syntax
let hobbies: string[]; // Similar -> number[], boolean[]

hobbies = ["Sports", "Cooking", "Reading"];

// hobbies = [1, 2, 3]; // would work if, let hobbies: string[] | number[];

function add(a: number, b: number) {
  const res = a + b;
  return res;
}

// Common to pick a name that starts with an uppercase character.
type AddFn = (n1: number, n2: number) => number;

function calculate(a: number, b: number, calFunc: AddFn) {
  return calFunc(a, b);
}

console.log(calculate(2, 3, add)); // 5

interface Credentials {
  password: string;
  email: string;
}

let creds: Credentials;
creds = {
  password: "abc",
  email: "rama@mail.com",
};

class AuthCredentials implements Credentials {
  email: string; // should have
  password: string; // should have
  userName: string; // can also add additional properties
}

let credObj = new AuthCredentials();

type AppUser = {
  userName: string;
};

type Admin = {
  permissions: string[];
};

// type AppAdmin = Admin | AppUser; -> means either Admin or AppUser type definition.
type AppAdmin = Admin & AppUser; // -> merges both types definitions

let admin: AppAdmin;

admin = {
  permissions: ["login"],
  userName: "Rama",
};

type Role = "admin" | "user" | "editor";

let role: Role; // 'admin', 'user', 'editor'

role = "admin";
role = "user";
// role = "abc"; // Type '"abc"' is not assignable to type '"admin" | "user" | "editor"'.

let roles: Array<Role>;
roles = ["admin", "user"];
