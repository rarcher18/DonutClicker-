const sampleObject = {
    age: 20,
    favoriteColor: "Green"
}


const anotherObject = Object.create(sampleObject);

anotherObject.age++

console.log(sampleObject);
console.log(anotherObject);