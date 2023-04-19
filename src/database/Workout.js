const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllWorkouts = () => {
  return DB.workouts;
};

const createNewWorkout = (newWorkout) => {
    const isAlreadyAdded = DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
    if (isAlreadyAdded) {
        return;
    }
    DB.workouts.push(newWorkout);
    saveToDatabase(DB);
    return newWorkout;
}

const getOneWorkout = (workoutId) => { 
    const workout = DB.workouts.find((workout) => workout.id === workoutId);
    if (!workout) {
        return;
    }

    return workout;
};
const updateOneWorkout = (workoutId, change) => { 
    const indexForUpdate = DB.workouts.findIndex((workout) => workout.id === workoutId);
    if (indexForUpdate === -1) {
        return;
    }
        
    const updatedWorkout = {
        ...DB.workouts[indexForUpdate],
        ...change,
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };

    DB.workouts[indexForUpdate] = updatedWorkout;
    saveToDatabase(DB);
    return updatedWorkout;

};

const deleteOneWorkout = (workoutId) => {
    const indexForDelete = DB.workouts.findIndex((workout) => workout.id === workoutId);
    if (indexForDelete === -1) {  
        return;
    }

    DB.workouts.splice(indexForDelete, 1);
    saveToDatabase(DB);
    return;
};

module.exports = {
    getAllWorkouts,
    createNewWorkout,
    getOneWorkout,
    updateOneWorkout,
    deleteOneWorkout,
};