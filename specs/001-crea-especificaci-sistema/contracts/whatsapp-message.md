# Contrato: Mensaje WhatsApp

**Formato del mensaje** (texto plano, en español de Perú):

```
*Pedido - Tienda Virtual WhatsApp*

[Fecha/Hora opcional o simple]

*Productos:*
1. [Nombre] - Cant: [cantidad] - P.Unit: S/ [precio] - Subtotal: S/ [subtotal]
2. ...

*Total: S/ [total]*
```

**Generación**:
- Construir string con saltos de línea
- Usar `encodeURIComponent` para URL `https://wa.me/?text=...`
- Abrir en nueva pestaña/ventana

**Requisitos**:
- Incluir todos los productos seleccionados con cantidades
- Incluir total expresado en Soles (S/)
- Formato legible
- No incluir datos sensibles
