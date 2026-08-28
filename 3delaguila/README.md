# 3 del Águila

Sitio estático responsive para 3deaguila.com.

## Publicar datos comerciales

Editar `site-config.js` con información confirmada por el negocio. Los campos vacíos se ocultan automáticamente para no publicar teléfonos, direcciones, horarios ni perfiles sin verificar.

- `phone`: teléfono con código de país.
- `whatsapp`: número de WhatsApp con código de país.
- `email`: correo corporativo.
- `address`: dirección completa.
- `mapUrl`: enlace compartido de Google Maps.
- `hours`: un renglón por horario, por ejemplo `['Lun-Vie · 9:00-18:00', 'Sáb · 9:00-14:00']`.
- `social`: enlaces oficiales de Instagram y Facebook.

## Vista local

Desde la carpeta `carlosbr`:

```bash
python3 -m http.server 8765
```

Abrir `http://localhost:8765/3delaguila/`.

## Publicación

El directorio incluye favicon, metadatos Open Graph, datos estructurados, `robots.txt` y `sitemap.xml`. Antes de publicar se deben confirmar los datos comerciales del archivo de configuración y configurar Analytics/Search Console con las cuentas del cliente.
