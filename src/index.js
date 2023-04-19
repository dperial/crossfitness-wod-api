const express = require('express');
/* const v1Router = require('./v1/routes'); */
const bodyParser = require('body-parser');
const v1WorkoutRouter = require('./v1/routes/workoutRoutes');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req,res) => {
    res.send("<h2> It is working!</h2>")
});

/* app.use("/api/v1", v1Router); */
app.use(bodyParser.json());
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});