import { formatearMonto } from '../utils/whatsapp.js'

export default function CatalogoAdmin({ productos, onQuitar }) {
  return (
    <section className="seccion">
      <h2>Administrar catálogo</h2>

      {productos.length === 0 ? (
        <p className="texto-vacio">Aún no hay productos en el catálogo.</p>
      ) : (
        <ul className="lista-productos">
          {productos.map((producto) => (
            <li key={producto.id} className="fila-producto">
              <span className="nombre-producto">{producto.nombre}</span>
              <span className="precio-producto">S/ {formatearMonto(producto.precio)}</span>
              <button
                type="button"
                className="boton boton-peligro"
                onClick={() => onQuitar(producto.id)}
                aria-label={`Quitar ${producto.nombre} del catálogo`}
              >
                Quitar
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
