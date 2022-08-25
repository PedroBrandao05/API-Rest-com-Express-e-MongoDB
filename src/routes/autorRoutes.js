import express from 'express'
import AutorController from '../controllers/autoresController.js'

const router = express.Router();

router
   .get('/autor', AutorController.listAllAutors)
   .get('/autor/:id', AutorController.listaAutorPorId)
   .post('/autor', AutorController.cadastrarAutor)
   .put('/autor/:id', AutorController.atualizarAutor) 
   .delete('/autor/:id', AutorController.excluirAutor)

   export default router;