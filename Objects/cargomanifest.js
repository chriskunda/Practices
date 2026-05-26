const cargoManifest = {

  containerId: 1,
  destination: "Monterey, California, USA",
  weight: 831,
  unit: "lb",
  hazmat: false

}

const normalizeUnits = (manifest) => {

  if (manifest.unit === "lb") {

    return {
      ...manifest,
      unit: "kg",
      weight: manifest.weight * 0.45
    };

  }

  return {
    ...manifest
  };

};
//console.log(normalizeUnits(cargoManifest))

const validateManifest = (manifest) => {

  const errors = {};

  // destination
  if (!manifest.destination) {
    errors.destination = "Missing";
  }

  // weight
  if (manifest.weight === undefined) {
    errors.weight = "Missing";
  } else if (typeof manifest.weight !== "number" || manifest.weight <= 0) {
    errors.weight = "Invalid";
  }

  // unit
  if (!manifest.unit) {
    errors.unit = "Missing";
  } else if (manifest.unit !== "kg" && manifest.unit !== "lb") {
    errors.unit = "Invalid";
  }

  return errors;
};

const processManifest = (manifest) => {

}