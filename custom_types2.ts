type CustomVehicle = {
  id: number;
  model: string;
  vehicleType: "motorcycle" | "car" | "truck";
};

const vehicles: CustomVehicle[] = [
  { id: 1, model: "Honda Civic", vehicleType: "car" },
  { id: 2, model: "Harley-Davidson Sportster", vehicleType: "motorcycle" },
  { id: 3, model: "Ford F-150", vehicleType: "truck" }
];

let nextVehicleId = 4

function addNewCustomVehicle(newVeh: Omit<CustomVehicle, "id">): CustomVehicle { 
  const vehicle: CustomVehicle = { 
    id: nextVehicleId++, 
    ...newVeh 
  } 
  vehicles.push(vehicle)
  return vehicle
}

function updateCustomVehicle(id: number, updates: Partial<CustomVehicle>) {
  const foundVehicle = vehicles.find(veh => veh.id === id);
  if (!foundVehicle) {
    console.error("Vehicle not found!");
    return;
  }
  // Use Object.assign to update the found vehicle in place.
  Object.assign(foundVehicle, updates);
}

addNewCustomVehicle({ model: "Toyota Camry", vehicleType: "car" });
console.log(vehicles)
updateCustomVehicle(1, {model: "Honda Accord"})
console.log(vehicles)
