const Formulario = () => {
    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Detalles del Pedido</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Agregue Pedidos y {''}
                <span className="text-purple-400 font-bold">Administrelos</span>
            </p>
            <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
                
                <div className="mb-5">
                    <label htmlFor="cliente" className="block text-gray-700 uppercase font-bold">
                     Nombre Cliente
                    </label>
                    <input 
                    id="cliente"
                    type="text" 
                    placeholder="Ingrese nombre del cliente"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
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
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="detalles" 
                    className="block text-gray-700 uppercase font-bold">
                    Detalles del Pedido
                    </label>
                    <textarea id="detalles" cols="30" rows="3"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    placeholder="Describa los detalles del pedido">
                    </textarea>
                </div>

                <input 
                    type="submit" 
                    className="bg-pink-400 w-full p-3 text-white uppercase font-bold hover:bg-purple-400 cursor-pointer transition-all"
                    value="Agregar Pedido" />
            </form>
        </div>
    )
}

export default Formulario