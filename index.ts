import express from "express";

const app = express()

app.get("/health", (_, res) => {
  res.status(200).json({
    message: "Server is healthy!!",
    status: 200 
  })
} )

app.listen(3000, ()=> {
  console.log("3000 PORT is running.......")
})

