# Research: Tienda Virtual WhatsApp

**Feature**: 001-crea-especificaci-sistema  
**Date**: 2026-10-24

## Decisions

### 1. Stack
- **Decision**: React + Vite (JavaScript/TypeScript)
- **Rationale**: Simple, rápido para v1, cumple AGENTS.md
- **Alternatives**: Vanilla JS (más simple pero menos componentes reutilizables) - React elegido por estructura clara

### 2. Persistencia
- **Decision**: LocalStorage
- **Rationale**: Ligero, sin servidor, persiste entre recargas, cumple "persistencia ligera"
- **Alternatives**: SQLite (más complejo para web estática/local-first sin setup) - LocalStorage suficiente

### 3. Envío por WhatsApp
- **Decision**: Generar URL `https://wa.me/?text=...` con mensaje codificado (encodeURIComponent)
- **Rationale**: Abre WhatsApp web/app sin backend, simple
- **Alternatives**: API de WhatsApp Business (complejo, requiere config) - fuera de alcance

### 4. Formato de mensaje
- **Decision**: Texto plano legible en español con lista, cantidades, subtotales y total en `S/`
- **Rationale**: Verificable visualmente, claro para vendedor/cliente
- **Alternatives**: JSON (no legible para humano) - rechazado

## Resolved
Todos los aspectos ambiguos resueltos con decisiones simples acordes a constitución.
