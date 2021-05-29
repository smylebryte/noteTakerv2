const express = require('express')
const htmlRoutes = require('./routes/htmlRoutes.js')
const apiRoutes = require('./routes/apiRoutes.js')

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(htmlRoutes)
app.use(apiRoutes)

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});