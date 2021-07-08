//splice
//getter and setter on objects
// delete keyword deletes a property in an object
// constructors
// object.assign and spread operator
// rest operator on objects and arrays
// arguments object
//reduce()
const server = {
    name: "Abc",
    getInvite: function(a,b){
        console.log(this.name);
        console.log(a+b)
    }
}

const server1 = {
    name: "Def",
}

server.getInvite.call(server1, 5, 6);
server.getInvite.apply(server1, [10,20]);
const ab = server.getInvite.bind(server1, 1, 20);
console.log(ab);
ab();

