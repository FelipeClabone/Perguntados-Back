import express from "express"
import cors from "cors"
import userRoutes from "./routes/user.js"

const app = express()

app.use(express.json())
const corsOptions = {
    origin: '*',  // Permite todas as origens
    optionsSuccessStatus: 200 // Para garantir suporte em alguns navegadores mais antigos
  };
  
app.use(cors(corsOptions));

app.use("/", userRoutes)

app.listen(8800)