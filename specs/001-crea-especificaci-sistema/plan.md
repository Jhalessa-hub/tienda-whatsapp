# Implementation Plan: Tienda Virtual WhatsApp (Catálogo de productos)

**Branch**: `001-crea-especificaci-sistema` | **Date**: 2026-10-24 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-crea-especificaci-sistema/spec.md`

## Summary

Crear una aplicación web tipo catálogo de productos para tienda virtual con envío de pedidos vía WhatsApp. Debe permitir agregar/quitar productos del catálogo, explorar productos, armar pedido con cantidades y generar un mensaje formateado con productos, cantidades y total en Soles (S/). Sin pasarelas de pago. En español de Perú.

## Technical Context

**Language/Version**: JavaScript/TypeScript con React + Vite  
**Primary Dependencies**: React, Vite (sin dependencias pesadas)  
**Storage**: LocalStorage (persistencia ligera). Alternativa SQLite solo si realmente necesario, pero priorizar LocalStorage por simplicidad.  
**Testing**: Manual/verificable desde la app (sin tests complejos requeridos para v1)  
**Target Platform**: Navegador web (responsive simple)  
**Project Type**: Web application (frontend único)  
**Performance Goals**: Inmediato para uso local/pequeña tienda  
**Constraints**: Sin pasarelas de pago, sin claves/secretos, todo en español Perú, moneda S/, verificable por persona no técnica  
**Scale/Scope**: Catálogo pequeño, uso local/vendedor único

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Simplicidad ante todo: Usar React+Vite + LocalStorage, sin arquitectura compleja. ✓
- Idioma y mercado: Español de Perú, S/. ✓
- Cero alcance fantasma: Solo lo especificado. ✓
- Verificable por una persona no técnica: Acciones/resultados visibles. ✓
- Datos del usuario con respeto: Solo lo imprescindible, sin secretos. ✓

Sin violaciones.

## Project Structure

### Documentation (this feature)

```text
specs/001-crea-especificaci-sistema/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output (mínimo)
└── tasks.md             # Phase 2 output
```

### Source Code (repository root)

```text
src/
├── components/
│   ├── Catalogo.jsx / Catalogo.tsx
│   ├── ProductoForm.jsx / ProductoForm.tsx
│   ├── Carrito.jsx / Carrito.tsx
│   └── BotonWhatsApp.jsx / BotonWhatsApp.tsx
├── pages/
│   └── Tienda.jsx / Tienda.tsx
├── utils/
│   ├── storage.js / storage.ts  # LocalStorage helpers
│   └── whatsapp.js / whatsapp.ts # Generador de mensaje
├── App.jsx / App.tsx
└── main.jsx / main.tsx

public/
index.html
package.json
vite.config.js / tsconfig.json (según elección)
```

**Structure Decision**: Web app con frontend único (React+Vite). Persistencia con LocalStorage. Sin backend.

## Complexity Tracking

N/A - Sin violaciones de constitución.
