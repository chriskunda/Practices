const tiger = {
  species: "Tiger",
  age: 5,
  isEndangered: true
};

const elephant = {
  species: "Elephant",
  age: 10,
  isEndangered: true
};

const getSpecies = (animal) => {
  return animal.species;
};

console.log(getSpecies(tiger)); //To get the species in the tiger object.

const getAge = (animal) => {
  return animal.age;
};

console.log(getAge(tiger)); //to get the tiger's age

const addHabitat = (animal, habitat) => {
  animal.habitat = habitat; //To add another property in the object
  return animal;
}

console.log(addHabitat(tiger, "Rainforest")); //To add the value to the added property in the tiger object.

const updateAge = (animal, newAge) => {
  animal.age = newAge;
  return animal;
};

console.log(updateAge(elephant, 12)); //To update the age of the elephant object.


const removeEndangeredStatus = (animal) =>{
  delete animal.isEndangered;
  return animal;
}

console.log(removeEndangeredStatus(tiger)); //To remove the isEndangered property from the tiger object.

const hasHabitat = (animal) =>{
  if (animal.hasOwnProperty("habitat")){
    return true;
  } else {
    return false;
  }
}

console.log(hasHabitat(tiger)); //To check if the tiger object has a habitat property.
console.log(hasHabitat(elephant)); //To check if the elephant object has a habitat property.

const getProperty = (animal, propertyName) =>{
  return animal[propertyName];
}

console.log(getProperty(tiger, "species")); //To get the species of the tiger object.
console.log(getProperty(elephant, "age")); //To get the age of the elephant object.