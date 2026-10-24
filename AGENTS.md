# AGENTS.md

## Nombre de la app
**Tienda Virtual WhatsApp** (Catálogo de productos con envío de pedidos vía WhatsApp).

## Stack
- **Frontend**: React + Vite
- **Persistencia**: LocalStorage o SQLite (persistencia ligera)
- **Runtime/Build**: Node.js + Vite
- **Estilo**: CSS/estilos simples (sin frameworks pesados)

## Cómo arrancar y probar en local
1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Arrancar servidor de desarrollo:
   ```bash
   npm run dev
   ```
3. Abrir en navegador: `http://localhost:5173` (puerto por defecto de Vite)
4. Probar:
   - Agregar productos al catálogo (si aplica)
   - Ver catálogo
   - Armar pedido y enviar por WhatsApp (verificar formato del mensaje)
   - Recargar página para comprobar persistencia

## Convenciones de desarrollo
- **Idioma**: Español de Perú. Moneda **S/**.
- **Simplicidad**: Elegir siempre la solución más simple (v1). Evitar complejidad anticipada.
- **Alcance**: Solo lo escrito en la especificación. Si hay una idea nueva, proponerla primero.
- **Verificable**: Cada criterio de éxito debe poder comprobarse desde la app, sin leer código.
- **Datos**: Pedir solo lo imprescindible. Sin claves/secretos en el repositorio.
- **Componentes**: Pequeños, reutilizables y legibles.
- **Commits**: Claros y concisos.

Las reglas de producto viven en specify/memory/constitution.md y el estado del producto en specs/README.md
