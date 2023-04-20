const express =  require('express');
const apicache = require('apicache');

// const authenticate = require('../../middlewares/authenticate');
// const authorize = require('../../middlewares/authorize');

const workoutController = require('../../controllers/workoutController');
const recordController = require('../../controllers/recordController');

const router = express.Router();
const cache = apicache.middleware;

// Create endpoint handlers for /workouts
/**
 * @openapi
 * /api/v1/workouts:
 *   get:
 *     tags:
 *       - Workouts
 *     parameters:
 *       - in: query
 *         name: mode
 *         schema:
 *           type: string
 *         description: The mode of a workout
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: "#/components/schemas/Workout"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
 */
router.get("/", cache("2 minutes"), workoutController.getAllWorkouts);
router.get("/:workoutId", workoutController.getOneWorkout);
// router.post("/", authenticate, authorize, workoutController.createNewWorkout);

router.post("/", workoutController.createNewWorkout);
router.patch("/:workoutId", workoutController.updateOneWorkout);
router.delete("/:workoutId", workoutController.deleteOneWorkout);

// Create endpoint handlers for /workouts/:workoutId/records
router.get("/:workoutId/records", recordController.getRecordForWorkout);

module.exports = router;
