const Pedido = ({pedido, setPedido}) => {
  const { cliente, telefono, email, fechaEntrega, detalles, id } = pedido

return (
  <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">Nombre Cliente: {''}
          <span className="font-normal normal-case">{cliente}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Número de contacto: {''}
          <span className="font-normal normal-case">{telefono}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
          <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de Entrega: {''}
          <span className="font-normal normal-case">{fechaEntrega}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Detalles del pedido: {''}
          <span className="font-normal normal-case">{detalles}</span>
      </p>

      <div className="flex justify-between mt-10">
            <button 
                type="button"
                className="py-2 px-10 bg-purple-400 hover:bg-purple-600 text-white font-bold rounded-lg"
            >Editar</button>

            <button 
                type="button"
                className="py-2 px-10 bg-pink-400 hover:bg-pink-600 text-white font-bold rounded-lg"
            >Eliminar</button>
        </div>

  </div>
)
}

export default Pedido