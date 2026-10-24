# Feature Specification: Tienda Virtual WhatsApp (Catálogo de productos)

**Feature Branch**: `001-crea-especificaci-sistema`
**Created**: 2026-10-24
**Status**: Draft
**Input**: User description: "Crea la especificación de un sistema de tienda virtual como catálogo de productos. Debe permitir agregar y quitar productos del catálogo (sin pasarelas de pago). Los clientes deben poder explorar el catálogo, seleccionar productos, armar un pedido y enviarlo por WhatsApp generando un mensaje formateado con la lista de productos seleccionados, cantidades y el total expresado en Soles (S/)."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Administrar catálogo (agregar/quitar productos) (Priority: P1)

Como administrador/gestor de la tienda, quiero agregar y quitar productos del catálogo para mantenerlo actualizado.

**Why this priority**: Sin catálogo no hay pedidos. Es la base del sistema.

**Independent Test**: Desde la app se puede agregar un producto (nombre, precio en S/) y quitarlo; al recargar persiste o se elimina según acción, verificable sin código.

**Acceptance Scenarios**:

1. **Given** catálogo vacío, **When** agrego un producto con nombre y precio en S/, **Then** aparece en el catálogo.
2. **Given** producto existente en el catálogo, **When** lo quito, **Then** deja de aparecer en el catálogo.

---

### User Story 2 - Explorar catálogo y armar pedido (Priority: P1)

Como cliente, quiero explorar el catálogo, seleccionar productos y armar un pedido indicando cantidades.

**Why this priority**: Flujo principal para generar un pedido.

**Independent Test**: Se puede navegar el catálogo, agregar unidades de un producto al carrito/pedido y ver subtotal/total.

**Acceptance Scenarios**:

1. **Given** catálogo con productos, **When** exploro, **Then** veo lista con nombre y precio en S/.
2. **Given** producto en catálogo, **When** selecciono cantidad > 0, **Then** se añade/actualiza en el pedido con cantidad y subtotal.
3. **Given** pedido con items, **When** ajusto cantidades, **Then** el total se actualiza en S/.

---

### User Story 3 - Enviar pedido por WhatsApp (Priority: P1)

Como cliente, quiero enviar mi pedido por WhatsApp con un mensaje formateado que incluya lista de productos, cantidades y total en Soles (S/).

**Why this priority**: Es el objetivo del sistema (envío vía WhatsApp).

**Independent Test**: Con pedido armado, al pulsar "Enviar por WhatsApp" se genera/abre un mensaje con formato legible, lista de items, cantidades y total en S/.

**Acceptance Scenarios**:

1. **Given** pedido con al menos un producto y cantidades, **When** envío por WhatsApp, **Then** se genera un mensaje que incluye: productos, cantidades, precios/subtotales o totales y total en S/.
2. **Given** pedido vacío, **When** intento enviar, **Then** no se permite o se indica que no hay productos (comportamiento simple).

---

### Edge Cases

- ¿Qué pasa si precio es 0 o inválido? Debe manejarse de forma simple (rechazar o no permitir) sin complejidad.
- ¿Qué pasa si cantidad es 0 o negativa? Tratar como quitar item o no permitir cantidad inválida.
- ¿Qué pasa si se recarga la página? El catálogo/pedido según persistencia elegida debe comportarse de forma predecible (ver AGENTS.md).
- Mensaje muy largo: debe seguir legible para WhatsApp.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: El sistema DEBE permitir agregar productos al catálogo (nombre y precio en Soles S/).
- **FR-002**: El sistema DEBE permitir quitar productos del catálogo.
- **FR-003**: El sistema NO DEBE incluir pasarelas de pago.
- **FR-004**: Los clientes DEBEN poder explorar el catálogo.
- **FR-005**: Los clientes DEBEN poder seleccionar productos y armar un pedido con cantidades.
- **FR-006**: El sistema DEBE generar un mensaje formateado para enviar por WhatsApp con: lista de productos seleccionados, cantidades y total expresado en Soles (S/).
- **FR-007**: El producto DEBE estar en español de Perú y usar moneda S/.
- **FR-008**: La interfaz DEBE ser verificable por una persona no técnica (acciones y resultados visibles).

### Key Entities *(include if data involved)*

- **Producto**: id, nombre, precio (número/decimal en S/).
- **ItemPedido**: productoId, cantidad, subtotal (calculado).
- **Pedido**: lista de ItemPedido, total (calculado en S/).

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Una persona no técnica puede agregar/quitar un producto y verlo reflejado en menos de 1 minuto.
- **SC-002**: Un cliente puede armar un pedido con al menos 2 productos y diferentes cantidades en menos de 2 minutos.
- **SC-003**: Al enviar por WhatsApp se genera un mensaje que contiene todos los productos, sus cantidades y el total en S/ (verificable visualmente).
- **SC-004**: No existe funcionalidad de pago/pasarela en la interfaz.
- **SC-005**: Todo el texto visible está en español de Perú y los montos usan S/.
