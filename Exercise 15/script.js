const peoples = [
    {name: "Aragsan", age: 25, city: "Awdal"},
    {name: "Habiba", age: 15, city: "Bosaso"},
    {name: "Hamdi", age: 30, city: "Jigjiga"}
];
console.log("Properties and values of each person:")
for (let person of peoples) {
    for (let key in person) {
        console.log(key + ": " + person[key]);
    }
    console.log("-----------");
}



