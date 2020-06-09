const express = require("express")
const app = express()
const route = require("./Routes/route.js")
const {port} = require("./config.js")

app.use(route);

app.listen(port, () => {
    console.log(`Server is running ${port}`)
})