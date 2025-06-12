const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

const router = require("./routes/route")

app.use(cors())
app.use(express.json())
app.use("/owner", router.ownerRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})