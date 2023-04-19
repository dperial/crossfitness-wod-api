const workoutService = require("../services/workoutService");

const getAllWorkouts =(req, res) => {
    const allWorkout = workoutService.getAllWorkouts();
    res.send({status: "OK", data: allWorkout});
};

const getOneWorkout = (req, res) => {
    const workout = workoutService.getOneWorkout();
    res.send("Get an existing workout");
};

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

const updateOneWorkout = (req, res) => {
    const updateWorkout = workoutService.updateOneWorkout();
    res.send("Update an existing workout");
};
 const deleteOneWorkout = (req, res) => {
    workoutService.deleteOneWorkout();
    res.send("Delete an existing workout");
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
};