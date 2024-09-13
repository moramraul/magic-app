
import cors from 'cors';
import express from 'express';
import router from './routes/router.js';
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router)

const PORT = process.env.PORT || 3000;

app.get('/api', (_req, res) => {
  res.status(200).json({message: "Hola, soy api"});
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});