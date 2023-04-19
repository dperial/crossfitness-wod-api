var express =  require('express');
const router = express.Router();

// Create endpoint handlers for /workouts
router.get("/", (req, res) => {
    res.send("Get all workouts");
});

router.get("/:workout_id", (req, res) => {
    res.send("Get an existing workout");
});

router.post("/", (req, res) => {
    res.send("Create a new workout");
});

router.patch("/:workout_id", (req, res) => {
    res.send("Update an existing workout");
});

router.delete("/:workout_id", (req, res) => {
    res.send("Delete an existing workout");
});

module.exports = router;