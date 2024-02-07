import app from './app';
import 'dotenv/config';
import { AppDataSource } from './data-source';

const startServer = async () => {
  try {
    await AppDataSource.initialize();
    console.log('Database is connected');
    
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`App is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();