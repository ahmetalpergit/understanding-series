var userInput;
var userName;
userInput = 5;
userInput = 'Max';
//Creates an error because unknown type can't be assigned to other types.
//userName = userInput
//Can be assigned after a manual type check
if (typeof userInput === 'string') {
    userName = userInput;
}
//Unknown is still better than any since it provides SOME type checking
//You should still try to define the types as much as you can and avoid using it
