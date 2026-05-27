const cargoManifest = {

  containerId: 1,
  destination: "Monterey, California, USA",
  weight: 831,
  unit: "lb",
  hazmat: false

}

//----------------------------------------------------------------------------------------------------

const normalizeUnits = (manifest) => {

  const newManifest = { ...manifest };

  if (newManifest.unit === "lb") {
    newManifest.weight = newManifest.weight * 0.45;
    newManifest.unit = "kg";
  }

  return newManifest;
};
//console.log(normalizeUnits(cargoManifest))

//----------------------------------------------------------------------------------------------------

const validateManifest = (manifest) => {

  const errors = {};

  // containerId
  if (!("containerId" in manifest)) {
    errors.containerId = "Missing";

  } else if (
    typeof manifest.containerId !== "number" ||
    manifest.containerId <= 0 ||
    !Number.isInteger(manifest.containerId)
  ) {
    errors.containerId = "Invalid";
  }

  // destination
  if (!("destination" in manifest)) {
    errors.destination = "Missing";

  } else if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === ""
  ) {
    errors.destination = "Invalid";
  }

  // weight
  if (!("weight" in manifest)) {
    errors.weight = "Missing";

  } else if (
    typeof manifest.weight !== "number" ||
    manifest.weight <= 0 ||
    Number.isNaN(manifest.weight)
  ) {
    errors.weight = "Invalid";
  }

  // unit
  if (!("unit" in manifest)) {
    errors.unit = "Missing";

  } else if (
    manifest.unit !== "kg" &&
    manifest.unit !== "lb"
  ) {
    errors.unit = "Invalid";
  }

  // hazmat
  if (!("hazmat" in manifest)) {
    errors.hazmat = "Missing";

  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return errors;
};

//----------------------------------------------------------------------------------------------------

const processManifest = (manifest) => {

  const validation = validateManifest(manifest);

  if (Object.keys(validation).length === 0) {

    console.log(
      `Validation success: ${manifest.containerId}`
    );

    const normalized = normalizeUnits(manifest);

    console.log(
      `Total weight: ${normalized.weight} kg`
    );

  } else {

    console.log(
      `Validation error: ${manifest.containerId}`
    );

    console.log(validation);
  }

};