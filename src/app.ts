import express from 'express'
import config from './config'
import morgan from 'morgan'
import cors from 'cors'

import pacienteRoutes from './routes/pacientes.routes'


const app = express()

app.set('port', config.PORT);

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(pacienteRoutes);

export default app;