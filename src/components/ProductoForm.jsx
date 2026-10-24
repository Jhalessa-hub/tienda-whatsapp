import { useState } from 'react'
import { formatearMonto } from '../utils/whatsapp.js'

export default function ProductoForm({ onAgregar }) {
  const [nombre, setNombre] = useState('')
  const [precio, setPrecio] = useState('')
  const [error, setError] = useState('')

  function manejarEnvio(evento) {
    evento.preventDefault()

    const nombreLimpio = nombre.trim()
    const precioNumero = Number(precio)

    if (!nombreLimpio) {
      setError('Escribe el nombre del producto.')
      return
    }

    if (precio === '' || Number.isNaN(precioNumero) || precioNumero <= 0) {
      setError('El precio debe ser un número mayor a 0.')
      return
    }

    onAgregar({ nombre: nombreLimpio, precio: precioNumero })
    setNombre('')
    setPrecio('')
    setError('')
  }

  return (
    <form className="formulario" onSubmit={manejarEnvio}>
      <div className="campo">
        <label htmlFor="nombre-producto">Nombre del producto</label>
        <input
          id="nombre-producto"
          type="text"
          value={nombre}
          placeholder="Ejemplo: Arroz 1 kg"
          onChange={(evento) => setNombre(evento.target.value)}
        />
      </div>

      <div className="campo">
        <label htmlFor="precio-producto">Precio (S/)</label>
        <input
          id="precio-producto"
          type="number"
          min="0.01"
          step="0.01"
          value={precio}
          placeholder="0.00"
          onChange={(evento) => setPrecio(evento.target.value)}
        />
        {precio !== '' && !Number.isNaN(Number(precio)) && (
          <span className="ayuda">Se mostrará como S/ {formatearMonto(precio)}</span>
        )}
      </div>

      <button type="submit" className="boton boton-primario">
        Agregar producto
      </button>

      {error && <p className="mensaje-error">{error}</p>}
    </form>
  )
}
