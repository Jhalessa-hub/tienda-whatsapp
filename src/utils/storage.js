const CLAVE_CATALOGO = 'tienda_catalogo'

export function cargarCatalogo() {
  try {
    const datos = localStorage.getItem(CLAVE_CATALOGO)
    if (!datos) return []
    const productos = JSON.parse(datos)
    return Array.isArray(productos) ? productos : []
  } catch {
    return []
  }
}

export function guardarCatalogo(productos) {
  try {
    localStorage.setItem(CLAVE_CATALOGO, JSON.stringify(productos))
  } catch {
    // Si el navegador no permite guardar, la app sigue funcionando en memoria.
  }
}

export function crearId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
}
