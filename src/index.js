const express = require('express');
/* const v1Router = require('./v1/routes'); */
const bodyParser = require('body-parser');
const apicache = require('apicache');

const v1WorkoutRouter = require('./v1/routes/workoutRoutes');

const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");

const app = express();

const PORT = process.env.PORT || 3000;
const cache = apicache.middleware;

app.get('/', (req,res) => {
    res.send("<h2> It is working!</h2>")
});

/* app.use("/api/v1", v1Router); */
app.use(cache("2 minutes"));
app.use(bodyParser.json());
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    V1SwaggerDocs(app, PORT);
});