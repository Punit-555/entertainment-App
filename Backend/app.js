const express  = require('express');
const cors = require('cors');
const port = 5000;
const app = express();


// CORS -policy
app.use(cors());

app.get("/", (req,res)=>{
    res.send("Hello From the Server.");
});



// Listening : : 
app.listen(port , () =>{
    console.log("Server is Listening on the Port : ", port );
});