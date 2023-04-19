const express =  require('express');
const workoutController = require('../../controllers/workoutController');

const router = express.Router();

// Create endpoint handlers for /workouts
router.get("/", workoutController.getAllWorkout);
router.get("/:workout_id", workoutController.getOneWorkout);
router.post("/", workoutController.createNewWorkout);
router.patch("/:workout_id", workoutController.updateOneWorkout);
router.delete("/:workout_id", workoutController.deleteOneWorkout);

module.exports = router;