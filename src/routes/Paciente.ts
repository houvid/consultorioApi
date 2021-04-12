import {Schema, model} from 'mongoose'

const pacienteSchema = new Schema({
    documento :{ 
        type: String,
        required: true,
        trim: true,
        unique:true
    },
    tipoDocumento :{ 
        type: String,
        required: true,
        trim: true
    },
    primerNombre:{ 
        type: String,
        required: true,
        trim: true
    },
    segundoNombre:{ 
        type: String,
        required: false,
        trim: true
    },
    primerApellido:{ 
        type: String,
        required: true,
        trim: true
    },
    segundoApellido:{ 
        type: String,
        required: false,
        trim: true
    },
    fecNacimiento:{ 
        type: Date,
        required: false,
        trim: true
    }  
},{
    versionKey:false,
    timestamps:true
}
);
export default model('paciente',pacienteSchema);