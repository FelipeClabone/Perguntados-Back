import {db} from "../db.js"

export const getUsers = (_, res) => {
    // LEMBRAR QUE ESSE _ é o que o usuario envia para o sistema
    const q = "SELECT * FROM perguntas";
  
    db.query(q, (err, data) => {
      if (err) return res.json(err);
  
      return res.status(200).json(data);
    });
  };

  export const getPergunta = (id, res) => {

    // Verifique se o id é um número inteiro válido
    const idInt = parseInt(id.params.id,10); // Tenta converter o id para um número inteiro
  
    console.log("Valor do id convertido:", idInt);
  
    if (!Number.isInteger(idInt)) {
      // Se o id não for um número inteiro válido, retorne um erro
      return res.status(400).json({ error: 'ID inválido' });
    }
  
    const q = "SELECT * FROM perguntas WHERE id = ?";
  
    db.query(q, [idInt], (err, data) => {
      if (err) return res.json(err);
  
      return res.status(200).json(data);
    });
  };


  export const getCategorias = (id, res) => {

    // Verifique se o id é um número inteiro válido
    const idInt = parseInt(id.params.id,10); // Tenta converter o id para um número inteiro
  
  
    if (!Number.isInteger(idInt)) {
      // Se o id não for um número inteiro válido, retorne um erro
      return res.status(400).json({ error: 'ID inválido' });
    }
  
    const q = "SELECT * FROM perguntas WHERE categoria = ?";
  
    db.query(q, [idInt], (err, data) => {
      if (err) return res.json(err);
  
      return res.status(200).json(data);
    });
  };