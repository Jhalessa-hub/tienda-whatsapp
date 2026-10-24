# Quickstart: Tienda Virtual WhatsApp

**Feature**: 001-crea-especificaci-sistema  
**Fecha**: 2026-10-24

## Prerequisitos
- Node.js instalado
- npm

## Setup
```bash
npm install
```

## Ejecutar en local
```bash
npm run dev
```
Abrir `http://localhost:5173`

## Validación (verificable sin código)
1. **Administrar catálogo**
   - Agregar producto: nombre "Arroz", precio 5.50 → aparece en catálogo
   - Agregar otro producto
   - Quitar un producto → desaparece

2. **Armar pedido**
   - Ver catálogo
   - Seleccionar producto y cantidad 2 → aparece en pedido con subtotal
   - Cambiar cantidad → total se actualiza en S/

3. **Enviar por WhatsApp**
   - Con pedido con items, pulsar "Enviar por WhatsApp"
   - Se abre WhatsApp con mensaje que incluye productos, cantidades y total en S/
   - Pedido vacío: no permite enviar o muestra aviso

4. **Persistencia**
   - Agregar producto al catálogo, recargar página → producto persiste (LocalStorage)
   - Todo en español de Perú, montos con S/

## Criterios de éxito
- [ ] Agregar/quitar productos funciona
- [ ] Explorar catálogo y armar pedido funciona
- [ ] Mensaje WhatsApp formateado con productos/cantidades/total S/
- [ ] Sin pasarelas de pago
- [ ] Verificable por persona no técnica
