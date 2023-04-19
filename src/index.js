const express = require('express');
const app = express();
const v1Router = require('./v1/routes');

const PORT = process.env.PORT || 3000;

app.get('/', (req,res) => {
    res.send("<h2> It is working!</h2>")
});

app.use("/api/v1", v1Router);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});