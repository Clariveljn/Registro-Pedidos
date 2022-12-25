import { useState, useEffect} from "react";
import Error from "./Error";

const Formulario = ({pedidos, setPedidos, pedido, setPedido}) => {
  const [cliente, setCliente] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [fechaEntrega, setFechaEntrega] = useState('');
  const [detalles, setDetalles] = useState('');

  const [error, setError] = useState(false)

  useEffect(() => {
    if(Object.keys(pedido).length > 0 ) {
      setCliente(pedido.cliente)
      setTelefono(pedido.telefono)
      setEmail(pedido.email)
      setFechaEntrega(pedido.fechaEntrega)
      setDetalles(pedido.detalles)
    }
  }, [pedido])


  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validación de formulario
    if( [ cliente, telefono, email, fechaEntrega, detalles ].includes('') ) {
      console.log('Hay al menos un campo vacio')

      setError(true)
      return;
    } 

    setError(false)

    //Objeto pedido
    const objetoPedido = {
      cliente, 
      telefono, 
      email, 
      fechaEntrega, 
      detalles
    }

    if(pedido.id) {
        //editando registro
        objetoPedido.id = pedido.id
        const pedidosActualizados = pedidos.map( pedidoState => pedidoState.id === pedido.id ? objetoPedido : pedidoState)
  
        setPedidos(pedidosActualizados)
        setPedido({})
  
      } else {
        //nuevo registro
        objetoPedido.id = generarId();
        setPedidos([...pedidos, objetoPedido]);
      }
  

    //reiniciar form
    setCliente('')
    setTelefono('')
    setEmail('')
    setFechaEntrega('')
    setDetalles('') 
  }
    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-bold text-3xl text-center">Detalles del Pedido</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Agregue Pedidos y {''}
                <span className="text-purple-400 font-bold">Administrelos</span>
            </p>
            <form 
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
                
                {error && <Error> <p>Todos los campos son obligatorios</p> </Error>}
                <div className="mb-5">
                    <label htmlFor="cliente" className="block text-gray-700 uppercase font-bold">
                     Nombre Cliente
                    </label>
                    <input 
                    id="cliente"
                    type="text" 
                    placeholder="Ingrese nombre del cliente"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={cliente}
                    onChange={ (e) => setCliente(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="telefono" className="block text-gray-700 uppercase font-bold">
                    Número de contacto
                    </label>
                    <input 
                    id="telefono"
                    type="text" 
                    placeholder="Ingrese número de contacto"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={telefono}
                    onChange={ (e) => setTelefono(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" 
                    className="block text-gray-700 uppercase font-bold">
                    Email
                    </label>
                    <input 
                    id="email"
                    type="email" 
                    placeholder="Ingrese email del cliente"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={email}
                    onChange={ (e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="fechaEntrega" 
                    className="block text-gray-700 uppercase font-bold">
                    Fecha de Entrega
                    </label>
                    <input 
                    id="fecha"
                    type="date" 
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={fechaEntrega}
                    onChange={ (e) => setFechaEntrega(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="detalles" 
                    className="block text-gray-700 uppercase font-bold">
                    Detalles del Pedido
                    </label>
                    <textarea id="detalles" cols="30" rows="3"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    placeholder="Describa los detalles del pedido"
                    value={detalles}
                    onChange={ (e) => setDetalles(e.target.value)}>
                    
                    </textarea>
                </div>

                <input 
                    type="submit" 
                    className="bg-pink-400 w-full p-3 text-white uppercase font-bold hover:bg-pink-500 cursor-pointer transition-all rounded-lg"
                    value={pedido.id ? 'Editar Pedido' : 'Agregar Pedido'}
                    />
            </form>
        </div>
    )
}

export default Formulario