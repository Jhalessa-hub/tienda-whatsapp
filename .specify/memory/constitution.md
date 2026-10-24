<!--
Sync Impact Report
- Version change: none → 1.0.0
- Modified principles: N/A (initial)
- Added sections: None (template sections repurposed)
- Removed sections: None
- Templates requiring updates: ⚠ pending (plan/spec/tasks) — follow-up
- Follow-up TODOs: None
-->

# Tienda WhatsApp Constitution

## Core Principles

### I. Simplicidad ante todo
Ante dos soluciones, siempre se elige la más simple. Esta es una versión 1; no se implementa complejidad anticipada. Toda funcionalidad debe justificar su necesidad con el menor diseño posible.

### II. Idioma y mercado
Todo el producto debe estar en español de Perú. La moneda utilizada es el sol peruano (S/). Etiquetas, mensajes, validaciones y textos visibles al usuario deben seguir este idioma y formato monetario.

### III. Cero alcance fantasma
NO se implementará ninguna funcionalidad que no esté escrita explícitamente en la especificación (spec). Si surge una idea nueva, solo se propone — no se construye. Cualquier desviación requiere actualizar la spec primero.

### IV. Verificable por una persona no técnica
Cada criterio de éxito debe poder comprobarse usando la aplicación, sin leer código. Las pruebas de aceptación deben describirse en términos de acciones e indicadores visibles en la interfaz.

### V. Datos del usuario con respeto
Solo se debe pedir lo imprescindible al usuario. No se introducirán claves, tokens ni secretos en el código fuente. Cualquier dato sensible debe manejarse con el mínimo necesario y sin exposición en repositorio.

## Alcance del Producto

Esta constitución rige el desarrollo de una herramienta web de tienda virtual, usada como catálogo de productos. El alcance se limita estrictamente a lo que figure en la especificación vigente.

## Flujo de Desarrollo

- Toda nueva funcionalidad debe partir de una especificación aprobada.
- La implementación debe ceñirse a los criterios de éxito verificables por usuario no técnico.
- Se prioriza legibilidad y simplicidad sobre generalización.

## Governance

- **Enmiendas**: Cualquier cambio a esta Constitución requiere actualización documentada, con justificación y actualización de versión.
- **Cumplimiento**: Todo trabajo debe verificar cumplimiento con estos principios. Si existe conflicto entre conveniencia y principios, priman los principios.
- **Versionado**: Esta Constitución sigue versionado semántico (MAJOR.MINOR.PATCH). Cambios incompatibles con principios vigentes son MAJOR; adiciones de principio/guía material son MINOR; aclaraciones/correcciones son PATCH.
- **Revisión**: En cada etapa (especificación/plan/tareas/implementación) se debe validar el cumplimiento antes de avanzar.

**Version**: 1.0.0 | **Ratified**: 2026-10-24 | **Last Amended**: 2026-10-24
