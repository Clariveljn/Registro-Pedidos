import Pedido from "./Pedido"

const ListadoPedidos = ({pedidos, setPedido}) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {pedidos && pedidos.length ? (

        <>
            <h2 className="font-black text-3xl text-center ">Listado de pedidos</h2>
            <p className="text-xl mt-5 mb-10 text-center" >
              Administra tus {''}
            <span className="text-purple-400 font-bold">Pedidos</span>
            </p>

            { pedidos.map( (pedido) => (
            <Pedido
              key={pedido.id}
              pedido={pedido}
              setPedido={setPedido}
            />
            ))}
        </>

      ) : (
        <>
        <h2 className="font-black text-3xl text-center ">No Hay Pedidos</h2>
        <p className="text-xl mt-5 mb-10 text-center" >
          Comienza agregando pedidos {''}
        <span className="text-purple-400 font-bold">y aparecerán aquí</span>
        </p>
        </>
      )}

    </div>
  )
}

export default ListadoPedidos