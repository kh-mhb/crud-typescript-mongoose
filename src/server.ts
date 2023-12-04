import mongoose from 'mongoose';
import app from './app';
const port = 5000;
import 'dotenv/config'


async function main() {
  try {
    
      await mongoose.connect(process.env.DATABASE_URL as string);
 app.listen(port, () => {
      console.log(`app is listening on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();