import { useForm } from "./hooks/useForm"

export const AltaProveedor = () => {
    const initialForm={
        id:"",
        nombre:"",
        apellido:"",
        telefono:"",
        empresa:"",
        producto:""
    }
    const {formState, onInputChange}=useForm(initialForm)
    const {id, nombre, apellido, telefono, empresa, producto}=formState

    const onSubmit=(event)=>{
        event.preventDefault()
        console.log(formState)
    }
  return (
    <form className="w3-container" onSubmit={onSubmit}>
        <div className="w3-panel">
            <label className="w3-text-brown"><b>Id</b></label>
            <input 
                className="w3-input w3-border w3-sand" 
                name="id" 
                type="text"
                value={id}
                onChange={(event)=>{onInputChange(event)}}
            />
        </div>
        
        <div className="w3-panel">
            <label className="w3-text-brown"><b>nombre</b></label>
            <input 
                className="w3-input w3-border w3-sand" 
                name="nombre" 
                type="text"
                value={nombre}
                onChange={onInputChange}
            />
        </div>
        <div className="w3-panel">
            <label className="w3-text-brown"><b>Apellido</b></label>
            <input 
                className="w3-input w3-border w3-sand" 
                name="apellido" 
                type="text"
                value={apellido}
                onChange={onInputChange}
            />
        </div>
        <div className="w3-panel">
            <label className="w3-text-brown"><b>Telefono</b></label>
            <input 
                className="w3-input w3-border w3-sand" 
                name="telefono" 
                type="text"
                value={telefono}
                onChange={onInputChange}
            />
        </div>
        <div className="w3-panel">
            <label className="w3-text-brown"><b>Empresa Perteneciente</b></label>
            <input 
                className="w3-input w3-border w3-sand" 
                name="empresa" 
                type="text"
                value={empresa}
                onChange={onInputChange}
            />
        </div>
        <div className="w3-panel">
            <label className="w3-text-brown"><b>Material Rentado</b></label>
            <input 
                className="w3-input w3-border w3-sand" 
                name="producto" 
                type="text"
                value={producto}
                onChange={onInputChange}
            />
        </div>
        <div className="w3-panel">
            <button type="submit" className="w3-btn w3-brown">Guardar</button>
        </div>
    </form>
  )
}