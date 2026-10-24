# Data Model: Tienda Virtual WhatsApp

**Feature**: 001-crea-especificaci-sistema  
**Date**: 2026-10-24

## Entities

### Producto
Representa un producto en el catálogo.

| Campo | Tipo | Requerido | Descripción |
|-------|------|-----------|-------------|
| id | string/number (único) | Sí | Identificador único |
| nombre | string | Sí | Nombre del producto (español) |
| precio | number (decimal) | Sí | Precio en Soles (S/) |

**Reglas**:
- Precio debe ser numérico > 0 (manejo simple)
- Nombre no vacío

### ItemPedido
Elemento en el pedido.

| Campo | Tipo | Requerido | Descripción |
|-------|------|-----------|-------------|
| productoId | string/number | Sí | Referencia a Producto.id |
| cantidad | number (entero) | Sí | Cantidad >= 1 |
| subtotal | number | Sí | precio * cantidad (calculado) |

### Pedido
Pedido actual (en memoria/local).

| Campo | Tipo | Requerido | Descripción |
|-------|------|-----------|-------------|
| items | ItemPedido[] | Sí | Lista de items |
| total | number | Sí | Suma de subtotales (calculado en S/) |

## Persistencia
- **Catálogo**: Guardar en LocalStorage bajo clave `tienda_catalogo` (array de Productos)
- **Pedido**: Opcional persistir en LocalStorage `tienda_pedido` o solo en memoria (simple: en memoria, se pierde al recargar; pero verificar comportamiento - mejor persistir pedido también o documentar. Seguir AGENTS.md: "Recargar página para comprobar persistencia" - probablemente catálogo debe persistir; pedido puede ser en memoria o persistido; elegir lo más simple)
  - Recomendado: persistir catálogo en LocalStorage; pedido puede mantenerse en estado de sesión (simple). Verificable.

## Validaciones (simples)
- Agregar producto: nombre no vacío, precio > 0
- Quitar producto: eliminar por id
- Cantidad: >=1, si 0/negativo tratar como quitar o ignorar
- Enviar: requiere al menos un item
