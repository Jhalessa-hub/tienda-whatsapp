# Tasks: Tienda Virtual WhatsApp (Catálogo de productos)

**Input**: Design documents from `/specs/001-crea-especificaci-sistema/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/, quickstart.md

**Tests**: No tests automatizados requeridos - validación manual según quickstart.md

**Organization**: Tasks grouped by user story to enable independent implementation and testing.

## Format: `[ID] [P?] [Story] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)

## Path Conventions
- **Web app**: `src/`, `public/` at repository root

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization with React + Vite

- [X] T001 Initialize Vite + React project (npm create vite@latest) with JavaScript/TypeScript según preferencia
- [X] T002 [P] Crear estructura de carpetas: `src/components/`, `src/pages/`, `src/utils/`
- [X] T003 [P] Configurar archivos base: `src/App.jsx`/`tsx`, `src/main.jsx`/`tsx`, `index.html`
- [X] T004 [P] Instalar dependencias mínimas (solo React/Vite)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Utilidades y modelos base reutilizables

**⚠️ CRITICAL**: Debe completarse antes de user stories

- [X] T005 [P] Crear `src/utils/storage.js`/`ts` con helpers para LocalStorage (guardar/cargar catálogo)
- [X] T006 [P] Crear `src/utils/whatsapp.js`/`ts` con generador de mensaje formateado para WhatsApp (según contracts/whatsapp-message.md)
- [X] T007 Crear datos iniciales/vacíos y helpers para IDs

**Checkpoint**: Foundation ready - user stories pueden comenzar

---

## Phase 3: User Story 1 - Administrar catálogo (agregar/quitar productos) (Priority: P1) 🎯 MVP

**Goal**: Permitir agregar y quitar productos del catálogo con persistencia en LocalStorage

**Independent Test**: Agregar producto (nombre, precio S/), quitarlo, recargar página - verificable sin código

### Implementation for User Story 1

- [X] T008 [P] [US1] Crear componente `src/components/ProductoForm.jsx`/`tsx` para agregar producto (nombre, precio en S/)
- [X] T009 [P] [US1] Crear componente `src/components/CatalogoAdmin.jsx`/`tsx` o integrar listado con botón quitar
- [X] T010 [US1] Implementar lógica de agregar/quitar en estado + persistir en LocalStorage via `storage.js`
- [X] T011 [US1] Integrar en página principal `src/pages/Tienda.jsx`/`tsx`

**Checkpoint**: US1 funcional - puede agregar/quitar productos

---

## Phase 4: User Story 2 - Explorar catálogo y armar pedido (Priority: P1)

**Goal**: Cliente explora catálogo, selecciona productos y arma pedido con cantidades, ve total en S/

**Independent Test**: Ver catálogo, agregar cantidades, ver subtotales y total en S/

### Implementation for User Story 2

- [X] T012 [P] [US2] Crear componente `src/components/Catalogo.jsx`/`tsx` para mostrar productos (nombre, precio S/)
- [X] T013 [P] [US2] Crear componente `src/components/Carrito.jsx`/`tsx` para mostrar pedido, cantidades, subtotales, total en S/
- [X] T014 [US2] Implementar lógica de añadir/actualizar/quitar items del pedido
- [X] T015 [US2] Integrar catálogo + carrito en `src/pages/Tienda.jsx`/`tsx`

**Checkpoint**: US2 funcional - armar pedido funciona

---

## Phase 5: User Story 3 - Enviar pedido por WhatsApp (Priority: P1)

**Goal**: Generar mensaje formateado con productos, cantidades y total en S/ y abrir WhatsApp

**Independent Test**: Con pedido con items, pulsar "Enviar por WhatsApp" abre WhatsApp con mensaje correcto

### Implementation for User Story 3

- [X] T016 [P] [US3] Crear componente `src/components/BotonWhatsApp.jsx`/`tsx`
- [X] T017 [US3] Integrar generador de mensaje (`whatsapp.js`) con pedido actual
- [X] T018 [US3] Manejar caso pedido vacío (no enviar o mostrar aviso simple)
- [X] T019 [US3] Integrar botón en `src/pages/Tienda.jsx`/`tsx`

**Checkpoint**: US3 funcional - envío por WhatsApp funciona

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Ajustes finales para cumplir criterios

- [X] T020 [P] Asegurar todo el texto en español de Perú y montos con `S/`
- [X] T021 [P] Verificar no hay pasarelas de pago en UI
- [X] T022 Revisar estilos simples (sin frameworks pesados)
- [X] T023 Validar con quickstart.md

---

## Dependencies & Execution Order

### Phase Dependencies
- Setup (Phase 1): Sin dependencias
- Foundational (Phase 2): Depende de Setup - BLOQUEA todas las stories
- User Stories (Phase 3-5): Dependen de Foundational
- Polish (Phase 6): Depende de todas las stories

### User Story Dependencies
- US1, US2, US3: Pueden desarrollarse tras Foundational; US2/US3 integran con pedido/catalogo pero son verificables independientemente

### Parallel Opportunities
- T002, T003, T004 en paralelo
- T005, T006 en paralelo
- Componentes de cada story marcados [P] pueden hacerse en paralelo

## Implementation Strategy

### MVP First (US1 + US2 + US3 mínimos)
1. Setup + Foundational
2. US1 (administrar catálogo)
3. US2 (armar pedido)
4. US3 (enviar por WhatsApp)
5. Validar con quickstart.md

**MVP**: Catálogo + pedido + envío WhatsApp sin pasarelas, en español Perú, S/.
