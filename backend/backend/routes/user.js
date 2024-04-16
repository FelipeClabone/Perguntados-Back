import  express from "express";
import { getUsers, getPergunta, getCategorias} from "../controllers/user.js"

const router = express.Router()

router.get('/', getUsers)

// Rota para buscar uma pergunta específica
router.get('/pergunta/:id', getPergunta); 

// Rota para buscar perguntas de uma categoria específica
router.get('/categoria/:id', getCategorias);

export default router