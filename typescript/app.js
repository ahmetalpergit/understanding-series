//Bad Example
//const person: { name: string; age: number } = {
//  name: "Maximilian",
//  age: 30,
//};
//Good Example
//const person: {
//    name: string;
//    age: number;
//    hobbies: string[];
//    role: [number, string];
//} = {
//    name: 'Maximilian',
//    age: 30,
//    hobbies: ['Sports', 'Cooking'],
//    role: [2, 'author'],
//};
//TS cannot catch pushing for tuples - be careful!
//person.role.push(5);
//TS catches these
//person.role[1] = 5;
//person.role[2] = 10;
var favoriteActivities;
favoriteActivities = ['Sports'];
//console.log(person.name);
//for (const hobby of person.hobbies) {
//    console.log(hobby.toUpperCase());
//}
//const ADMIN = 0;
//const READ_ONLY = 1;
//const AUTHOR = 2;
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
if (person.role === Role.ADMIN) {
    console.log('is admin');
}
