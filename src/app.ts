import express, { Application, Request, Response } from 'express';
import cors from 'cors'
import { UserRoutes } from './app/modules/User/user_routes';
const app:Application = express()
app.use(express.json())
app.use(cors())
app.use("/api/users", UserRoutes);
app.get('/', (req:Request, res:Response) => {
  res.send('Hello Typescript !')
})
export default app;

