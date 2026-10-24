import { generarMensajePedido, abrirWhatsApp } from '../utils/whatsapp.js'

export default function BotonWhatsApp({ items }) {
  function enviarPedido() {
    if (items.length === 0) return
    abrirWhatsApp(generarMensajePedido(items))
  }

  return (
    <div className="bloque-whatsapp">
      <button
        type="button"
        className="boton boton-whatsapp"
        onClick={enviarPedido}
        disabled={items.length === 0}
      >
        Enviar pedido por WhatsApp
      </button>

      {items.length === 0 && (
        <p className="ayuda">Agrega al menos un producto para enviar tu pedido.</p>
      )}
    </div>
  )
}
