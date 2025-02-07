import express from "express"
import cors from "cors"

const app = express(); 
const PORT = process.env.PORT || 3000; 

app.use(cors())
app.use(express.json())

app.get("/ping", (req, res) => { 
    res.status(200).json({
        "response": "pong",
        "server_status": "running"
    }); 
}); 

app.get("/", (req, res) => { 
    const currentDate = new Date()
    res.status(200).json({
        "email": "nonso.udonne@gmail.com",
        "current_datetime": currentDate.toISOString(),
        "github_url": "https://github.com/nonso-uj/hng-xii-task0"
    }); 
}); 


app.all("*", (req, res) => {
    res.status(404).json({
        "error": `Can't find ${req.originalUrl} on this server`
    })
})



app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});

export default app