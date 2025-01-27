import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import path from "path";
import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
// const __dirname = path.resolve();

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get('/', async (req, res) => {
  res.status(200).json({
    message: 'Hello from DALL.E!',
  });
});

// app.use(express.static(path.join(__dirname, "/client/dist")));

// app.get("*", (req, res) => {
// 	res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
// });

const startServer = async () => {
  try {
    connectDB('mongodb+srv://vibhu7838:salted123@cluster0.34eeyql.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
);
    app.listen(8080, () => console.log('Server started on port 8080'));
  } catch (error) {
    console.log(error);
  }
};

startServer();
