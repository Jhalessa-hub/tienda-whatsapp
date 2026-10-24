import { useEffect, useState } from 'react'
import ProductoForm from '../components/ProductoForm.jsx'
import CatalogoAdmin from '../components/CatalogoAdmin.jsx'
import Catalogo from '../components/Catalogo.jsx'
import Carrito from '../components/Carrito.jsx'
import BotonWhatsApp from '../components/BotonWhatsApp.jsx'
import { cargarCatalogo, guardarCatalogo, crearId } from '../utils/storage.js'
import { calcularSubtotal } from '../utils/whatsapp.js'

export default function Tienda() {
  const [productos, setProductos] = useState(() => cargarCatalogo())
  const [items, setItems] = useState([])

  useEffect(() => {
    guardarCatalogo(productos)
  }, [productos])

  function agregarProducto({ nombre, precio }) {
    setProductos((actuales) => [...actuales, { id: crearId(), nombre, precio }])
  }

  function quitarProducto(id) {
    setProductos((actuales) => actuales.filter((producto) => producto.id !== id))
    setItems((actuales) => actuales.filter((item) => item.productoId !== id))
  }

  function agregarAlPedido(producto) {
    setItems((actuales) => {
      const existente = actuales.find((item) => item.productoId === producto.id)

      if (existente) {
        return actuales.map((item) =>
          item.productoId === producto.id
            ? {
                ...item,
                cantidad: item.cantidad + 1,
                subtotal: calcularSubtotal(item.precio, item.cantidad + 1),
              }
            : item,
        )
      }

      return [
        ...actuales,
        {
          productoId: producto.id,
          nombre: producto.nombre,
          precio: producto.precio,
          cantidad: 1,
          subtotal: calcularSubtotal(producto.precio, 1),
        },
      ]
    })
  }

  function cambiarCantidad(productoId, nuevaCantidad) {
    if (nuevaCantidad <= 0) {
      setItems((actuales) => actuales.filter((item) => item.productoId !== productoId))
      return
    }

    setItems((actuales) =>
      actuales.map((item) =>
        item.productoId === productoId
          ? {
              ...item,
              cantidad: nuevaCantidad,
              subtotal: calcularSubtotal(item.precio, nuevaCantidad),
            }
          : item,
      ),
    )
  }

  return (
    <div className="contenedor">
      <header className="encabezado">
        <h1>Tienda Virtual WhatsApp</h1>
        <p className="subtitulo">
          Catálogo de productos con pedidos enviados por WhatsApp. Precios en soles (S/).
        </p>
      </header>

      <main className="contenido">
        <div className="columna">
          <ProductoForm onAgregar={agregarProducto} />
          <CatalogoAdmin productos={productos} onQuitar={quitarProducto} />
        </div>

        <div className="columna">
          <Catalogo productos={productos} onAgregarAlPedido={agregarAlPedido} />
          <Carrito items={items} onCambiarCantidad={cambiarCantidad} />
          <BotonWhatsApp items={items} />
        </div>
      </main>
    </div>
  )
}
