import { formatearMonto, calcularTotal } from '../utils/whatsapp.js'

export default function Carrito({ items, onCambiarCantidad, onQuitar }) {
  const total = calcularTotal(items)

  return (
    <section className="seccion">
      <h2>Mi pedido</h2>

      {items.length === 0 ? (
        <p className="texto-vacio">Todavía no agregaste productos a tu pedido.</p>
      ) : (
        <>
          <ul className="lista-productos">
            {items.map((item) => (
              <li key={item.productoId} className="fila-producto">
                <div className="datos-producto">
                  <span className="nombre-producto">{item.nombre}</span>
                  <span className="detalle-producto">
                    S/ {formatearMonto(item.precio)} × {item.cantidad} = S/{' '}
                    {formatearMonto(item.subtotal)}
                  </span>
                </div>

                <div className="acciones-cantidad">
                  <button
                    type="button"
                    className="boton boton-cantidad"
                    onClick={() => onCambiarCantidad(item.productoId, item.cantidad - 1)}
                    aria-label={`Quitar una unidad de ${item.nombre}`}
                  >
                    −
                  </button>
                  <span className="cantidad">{item.cantidad}</span>
                  <button
                    type="button"
                    className="boton boton-cantidad"
                    onClick={() => onCambiarCantidad(item.productoId, item.cantidad + 1)}
                    aria-label={`Agregar una unidad de ${item.nombre}`}
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <p className="total-pedido">Total: S/ {formatearMonto(total)}</p>
        </>
      )}
    </section>
  )
}
