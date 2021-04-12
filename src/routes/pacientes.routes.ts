import {Router} from 'express'
const router = Router();
import * as pacienteCtrl from './pacientes.controller'


router.get('/pacientes',pacienteCtrl.getPacientes)

router.get('/pacientes/:id',pacienteCtrl.getPaciente)

router.post('/pacientes',pacienteCtrl.createPaciente)

router.delete('/pacientes/:id',pacienteCtrl.deletePaciente)

router.put('/pacientes/:id',pacienteCtrl.updatePaciente)
export default router