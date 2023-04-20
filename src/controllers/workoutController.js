const workoutService = require("../services/workoutService");

// GetAllWorkouts Controller
const getAllWorkouts =(req, res) => {
    const { mode }= req.query;
    try {
        const allWorkouts = workoutService.getAllWorkouts({mode});
        res.send({ status: "OK", data: allWorkouts });
      } catch (error) {
        res
          .status(error?.status || 500)
          .send({ status: "FAILED", data: { error: error?.message || error } });
      }
};
  
// GetOneWorkout Controller
const getOneWorkout = (req, res) => {
    const {params: {workoutId}} = req;
    if (!workoutId) {
        res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Parameter ':workoutId' can not be empty" },
      });
    }
    try {
        const workout = workoutService.getOneWorkout(workoutId);
        res.send({status: "OK", data: workout}); 
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
    

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
            res
            .status(400)
            .send({
                status: "Bad Request", 
                data: {
                    error: "One of the following keys is missing or is empty in request body: 'name', 'mode', 'equipment', 'exercises', 'trainerTips'",
                }
            });
            return;
        
    }
    const newWorkout = {
        name: body.name,
        mode: body.mode,
        exercises: body.exercises,
        equipment: body.equipment,
        trainerTips: body.trainerTips,
    }
    try {
        const createWorkout = workoutService.createNewWorkout(newWorkout);
        res.status(201).send({status: "OK", data: createWorkout});
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
    
};

// UpdateOneWorkout Controller
const updateOneWorkout = (req, res) => {
    const {
        body,
        params: {workoutId}} = req;
    if (!workoutId) {
        res
        .status(400)
        .send({
            status: "FAILED",
            data: { error: "Parameter ':workoutId' can not be empty" },
        });
    }
    try {
        const updateWorkout = workoutService.updateOneWorkout(workoutId, body);
    res.send({status: "OK", data: updateWorkout});
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
    
};

// DeleteOneWorkout Controller
 const deleteOneWorkout = (req, res) => {
    const {params: {workoutId}} = req;
    if (!workoutId) {
        res
        .status(400)
        .send({
            status: "FAILED",
            data: { error: "Parameter ':workoutId' can not be empty" },
        });
    }
    try {
        workoutService.deleteOneWorkout(workoutId);
    res.status(204).send({status: "OK"});
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
    

};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
};