import { formatearMonto } from '../utils/whatsapp.js'

export default function Catalogo({ productos, onAgregarAlPedido }) {
  return (
    <section className="seccion">
      <h2>Catálogo</h2>

      {productos.length === 0 ? (
        <p className="texto-vacio">El catálogo está vacío. Agrega productos para empezar.</p>
      ) : (
        <ul className="lista-productos">
          {productos.map((producto) => (
            <li key={producto.id} className="fila-producto">
              <div className="datos-producto">
                <span className="nombre-producto">{producto.nombre}</span>
                <span className="precio-producto">S/ {formatearMonto(producto.precio)}</span>
              </div>
              <button
                type="button"
                className="boton boton-primario"
                onClick={() => onAgregarAlPedido(producto)}
              >
                Agregar al pedido
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
