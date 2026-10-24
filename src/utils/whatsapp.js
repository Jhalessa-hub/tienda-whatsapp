export function formatearMonto(valor) {
  return Number(valor || 0).toFixed(2)
}

export function calcularSubtotal(precio, cantidad) {
  return Number(precio) * Number(cantidad)
}

export function calcularTotal(items) {
  return items.reduce((suma, item) => suma + item.subtotal, 0)
}

export function generarMensajePedido(items) {
  const lineas = ['*Pedido - Tienda Virtual WhatsApp*', '', '*Productos:*']

  items.forEach((item, indice) => {
    lineas.push(
      `${indice + 1}. ${item.nombre} - Cant: ${item.cantidad} - P.Unit: S/ ${formatearMonto(
        item.precio,
      )} - Subtotal: S/ ${formatearMonto(item.subtotal)}`,
    )
  })

  lineas.push('', `*Total: S/ ${formatearMonto(calcularTotal(items))}*`)
  return lineas.join('\n')
}

export function abrirWhatsApp(mensaje) {
  const url = `https://wa.me/?text=${encodeURIComponent(mensaje)}`
  window.open(url, '_blank', 'noopener,noreferrer')
}
