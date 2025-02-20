
let object = {
    obj1 : "Sanjai",
    obj2 : "Aadya",
    obj3 : {
        manager1 : "kaushik",
        manager2 : "gopal",
        manager3 : "Harish"
    },
    SD : {
        SD1 : "Kaviya",
        SD2 : "Arun",
        SD3 : "Abirami"
    },
}

console.log(object);
console.log(object.obj2);
console.log(object.obj3.manager3);
delete object.obj3.manager3;
console.log(object)

