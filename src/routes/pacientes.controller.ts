import {RequestHandler} from 'express'
import Paciente from './paciente'
export const createPaciente: RequestHandler = async (req,res) => {
    //const pacienteFound = await Paciente.findOne({url: req.body.url});
    //if(pacienteFound) return res.status(301).json('Ya se encuentra creado')
    const paciente = new Paciente (req.body)
    const pacienteSaved = await paciente.save()
    res.json(pacienteSaved)
    

}

export const getPacientes : RequestHandler = async (req,res) => {
    try {
        const pacientes = await Paciente.find();
        return res.json(pacientes)
    } catch (error) {
        res.json(error)
    }
    
}

export const getPaciente : RequestHandler = async(req,res) => {
    const pacienteFound = await Paciente.findById(req.params.id);
    if(!pacienteFound) return res.status(204).json('No founded')
    return res.json(pacienteFound)
}

export const deletePaciente : RequestHandler = async(req,res) => {
    const pacienteFound = await Paciente.findByIdAndDelete(req.params.id);
    if(!pacienteFound) return res.status(204).json('No founded')
    
    return res.json(pacienteFound)
 
}

export const updatePaciente : RequestHandler =async(req,res) => {
    const pacienteUpdated = await Paciente.findByIdAndUpdate(req.params.id,req.body, {new: true})
    
    res.json(pacienteUpdated)
}