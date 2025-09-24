//props, state, array/object data တွေထဲက လိုချင်တဲ့ data ကို ထုတ်ယူ

const user = {
    id:101,
    name:"Alice",
    age:25,
    address:{
        city:"Tokyo",
        zip:"100-0001"
    }
};

const {name,address} = user;
console.log(name);
console.log(address);
console.log(address.city);