---
description: Protocolo de Expansión Multilingüe y Auditoría de Interfaz
---

# Protocolo de Auditoría i18n

Para asegurar que el proyecto mantenga su integridad políglota y visual:

## 1. Cobertura Obligatoria (Regla de las 4 Ramas)
Toda clave nueva añadida al diccionario `translations` en `i18n.js` **debe existir** simultáneamente en:
- `pt` (Português - Idioma base)
- `es` (Español)
- `en` (English)
- `fr` (Français)

## 2. Estándares de Atributos HTML
Para que el motor `i18n.js` funcione correctamente, se deben usar los siguientes atributos:
- `data-i18n`: Para nodos de texto plano.
- `data-i18n-placeholder`: Específicamente para `input` (placeholders) y el primer `option` de los `select`.
- `data-i18n-html="true"`: Mandatorio para bloques legales o textos que contengan etiquetas `<a>`, `<strong>` o `<br />`.

## 3. Validación Visual
- **Desbordamientos**: Al añadir contenido, verificar el renderizado en Francés (suele ser hasta un 30% más largo).
- **Selector**: Asegurar que cada página nueva incluya el componente `<select id="lang-selector">` en el header para persistencia de contexto.
