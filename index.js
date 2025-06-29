require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API Documentos Operativa');
});

app.post('/documentos', (req, res) => {
  const { titulo, contenido } = req.body;
  res.status(201).json({ 
    id: Date.now(), 
    titulo, 
    contenido 
  });
});

app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});
