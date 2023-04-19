const Workout = require("../database/Workout");
const { v4: uuid } = require("uuid");

// GetAllWorkouts Service
const getAllWorkouts = () => {
    const allWorkouts = Workout.getAllWorkouts();
    return allWorkouts;
};

// GetOneWorkout Service
const getOneWorkout = (workoutId) => {
    const workout = Workout.getOneWorkout(workoutId);

    return workout;
};

// CreateNewWorkout Service
const createNewWorkout = (newWorkout) => {
    const workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        
    };
    const createdWorkout = Workout.createNewWorkout(workoutToInsert);
    return createdWorkout;
};


// UpdateOneWorkout Service
const updateOneWorkout = (workoutId, change) => {
    const updatedWorkout = Workout.updateOneWorkout(workoutId, change);
    return updatedWorkout;
};

// DeleteOneWorkout Service
const deleteOneWorkout = (workoutId) => {
    Workout.deleteOneWorkout(workoutId);
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
};
