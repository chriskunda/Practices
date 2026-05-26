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