# Hero Video Loop Assets

## Requisitos de Optimización

Para cumplir con el estándar **Gemini Pro High** y mantener LCP < 1.5s:

| Archivo | Formato | Tamaño Máx | Resolución | FPS |
|---|---|---|---|---|
| `hero-loop.webm` | VP9 (WebM) | < 800 KB | 1280×720 | 24 |
| `hero-loop.mp4` | H.264 (MP4) | < 1 MB | 1280×720 | 24 |

## Comandos de Conversión (ffmpeg)

```bash
# MP4 optimizado
ffmpeg -i input.mp4 -vf scale=1280:720 -c:v libx264 -crf 28 -preset slow -an -movflags faststart hero-loop.mp4

# WebM (VP9) — mejor compresión
ffmpeg -i input.mp4 -vf scale=1280:720 -c:v libvpx-vp9 -crf 33 -b:v 0 -an hero-loop.webm
```

## Contenido Recomendado
Loop atmosférico oscuro: partículas abstractas, nebulosas, ondas de datos o flujos de luz dorado/cian.
El video se reproduce con `opacity: 6%` como atmósfera cinemática de fondo.
