import  express from "express";
import { getUsers, getPergunta, getCategorias} from "../controllers/user.js"

const router = express.Router()

router.get('/', getUsers)

router.get('/pergunta/:id', getPergunta);

router.get('/categoria/:id', getCategorias);

export default router