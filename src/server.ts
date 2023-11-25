import mongoose from 'mongoose';
import app from './app';
const port = 5000
// import config from './app/config';

async function main() {
  try {
    await mongoose.connect('mongodb+srv://user-order-testing:KNyYLAQCi211n8Je@cluster0.37udjhi.mongodb.net/first-task?retryWrites=true&w=majority');
 app.listen(port, () => {
      console.log(`app is listening on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();