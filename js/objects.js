let obj={};
console.log(obj);
let objsej={
    Name:"Sejal Mishra",
    phnno:8976579954,
    Age: 21,
    Lastname: "Mishra"
};
console.log(objsej);
let capAmerica={
    Name:"Stieve",
    Age:18,
    Friends:["Thor","natasha","Tomy",'Bucky'],
    Address:{
        city:'Queens',
        State:'Haryana'
    },
    sayhi:function(){
        console.log("Hello from captain america");
    }
};
console.log(capAmerica);
console.log(capAmerica.Name);
console.log(capAmerica.Age);
console.log(capAmerica.Friends);
console.log(capAmerica.Friends[0]);
console.log(capAmerica.Address.State);
capAmerica.sayhi();
console.log("Before update...");
console.log(capAmerica);
capAmerica.movies=['Avengers','Civil war','end game'];
console.log(capAmerica);
delete capAmerica.movies;
console.log(capAmerica);
capAmerica.isavenger=true;
console.log(capAmerica);
capAmerica.isavenger=false;
capAmerica.Address.State='new york';
console.log(capAmerica);
//second method to access key
console.log(capAmerica['isavenger']);