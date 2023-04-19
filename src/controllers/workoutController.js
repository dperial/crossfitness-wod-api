const workoutService = require("../services/workoutService");

// GetAllWorkouts Controller
const getAllWorkouts =(req, res) => {
    const allWorkout = workoutService.getAllWorkouts();
    res.send({status: "OK", data: allWorkout});
};

// GetOneWorkout Controller
const getOneWorkout = (req, res) => {
    const {params: {workoutId}} = req;
    if (!workoutId) {
        return;
    }

    const workout = workoutService.getOneWorkout(workoutId);
    res.send({status: "OK", data: workout});

};

// CreateNewWorkout Controller
const createNewWorkout = (req, res) => {
    const {body} = req;
    if (!body.name ||
        !body.mode ||
        !body.exercises ||
        !body.equipment ||
        !body.trainerTips) 
        {
            return;
        
    }
    const newWorkout = {
        name: body.name,
        mode: body.mode,
        exercises: body.exercises,
        equipment: body.equipment,
        trainerTips: body.trainerTips,
    }
    const createWorkout = workoutService.createNewWorkout(newWorkout);
    res.status(201).send({status: "OK", data: createWorkout});
};

// UpdateOneWorkout Controller
const updateOneWorkout = (req, res) => {
    const {
        body,
        params: {workoutId}} = req;
    if (!workoutId) {
        return;
    }

    const updateWorkout = workoutService.updateOneWorkout(workoutId, body);
    res.send({status: "OK", data: updateWorkout});
};

// DeleteOneWorkout Controller
 const deleteOneWorkout = (req, res) => {
    const {params: {workoutId}} = req;
    if (!workoutId) {
        return;
    }
    workoutService.deleteOneWorkout(workoutId);
    res.status(204).send({status: "OK"});

};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
};