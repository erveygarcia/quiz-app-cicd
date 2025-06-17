// test-connection.ts
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Carga las variables del .env

const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error('❌ La variable MONGODB_URI no está definida.');
  process.exit(1);
}

mongoose
  .connect(uri)
  .then(() => {
    console.log('✅ Conexión exitosa a MongoDB Atlas.');
    process.exit(0);
  })
  .catch((err) => {
    console.error('❌ Error de conexión:', err.message);
    process.exit(1);
  });
