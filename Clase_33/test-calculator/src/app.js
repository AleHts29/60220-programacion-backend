import express from 'express'
import calculatorRouter from './routes/calculator.router.js'

const app = express()
const PORT = 8080;

//JSON settings:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routter
app.use('/api/calculator', calculatorRouter)


app.listen(PORT, () => {
    console.log(`Server run on port: ${PORT}`);
})