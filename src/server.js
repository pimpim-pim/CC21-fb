import { config } from "dotenv";
import app from "./app.js";


config()

const PORT = process.env.PORT || 8000

app.listen(PORT,()=>console.log(`Server on ${PORT}`))