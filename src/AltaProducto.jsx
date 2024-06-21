import { useForm } from "./hooks/useForm"

export const AltaProducto = () => {
    const initialForm={
        id:"",
        producto:"",
        stock:"",
        peso:"",
        fecha:""
    }
    const {formState, onInputChange}=useForm(initialForm)
    const {id, producto, stock, peso, fecha}=formState

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
            <label className="w3-text-brown"><b>Producto</b></label>
            <input 
                className="w3-input w3-border w3-sand" 
                name="producto" 
                type="text"
                value={producto}
                onChange={onInputChange}
            />
        </div>
        <div className="w3-panel">
            <label className="w3-text-brown"><b>Stock</b></label>
            <input 
                className="w3-input w3-border w3-sand" 
                name="stock" 
                type="text"
                value={stock}
                onChange={onInputChange}
            />
        </div>
        <div className="w3-panel">
            <label className="w3-text-brown"><b>Peso del producto</b></label>
            <input 
                className="w3-input w3-border w3-sand" 
                name="peso" 
                type="text"
                value={peso}
                onChange={onInputChange}
            />
        </div>
        <div className="w3-panel">
            <label className="w3-text-brown"><b>Fecha de ingreso</b></label>
            <input 
                className="w3-input w3-border w3-sand" 
                name="fecha" 
                type="text"
                value={fecha}
                onChange={onInputChange}
            />
        </div>
        <div className="w3-panel">
            <button type="submit" className="w3-btn w3-brown">Guardar</button>
        </div>
    </form>
  )
}