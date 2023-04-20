const Workout = require("../database/Workout");
const { v4: uuid } = require("uuid");

// GetAllWorkouts Service
const getAllWorkouts = (filterParams) => {
    try {
        const allWorkouts = Workout.getAllWorkouts(filterParams);
        return allWorkouts;
    } catch (error) {
        throw new Error(error);
    }
    
};

// GetOneWorkout Service
const getOneWorkout = (workoutId) => {
    try {
        const workout = Workout.getOneWorkout(workoutId);

        return workout;
    } catch (error) {
        throw new Error(error);
    }
    
};

// CreateNewWorkout Service
const createNewWorkout = (newWorkout) => {
    const workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        
    };
    //*** ADD try/catch*/
    try {
        const createdWorkout = Workout.createNewWorkout(workoutToInsert);
        return createdWorkout;
    } catch (error) {
        throw new Error(error);
    }

};


// UpdateOneWorkout Service
const updateOneWorkout = (workoutId, change) => {
    try {
        const updatedWorkout = Workout.updateOneWorkout(workoutId, change);
        return updatedWorkout;  
    } catch (error) {
        throw new Error(error);
    }
    
};

// DeleteOneWorkout Service
const deleteOneWorkout = (workoutId) => {
    try {
        Workout.deleteOneWorkout(workoutId);
    } catch (error) {
        throw new Error(error);
    }
    
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
};
