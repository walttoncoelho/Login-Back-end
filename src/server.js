import app from './app';
const PORT = process.env.PORT || 5000;
app.listen(PORT);

console.log('Servidor rodando com sucesso! na porta: ' + PORT);