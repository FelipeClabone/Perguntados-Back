import  express from "express";
import { getUsers, getPergunta, getCategorias,getPerguntaByDificuldade} from "../controllers/user.js"

const router = express.Router()

router.get('/', getUsers)

router.get('/pergunta/:id', getPergunta);

router.get('/categoria/:id', getCategorias);

router.get('/dificuldade/:categoriaId/:dificuldadeId', getPerguntaByDificuldade);

export default router