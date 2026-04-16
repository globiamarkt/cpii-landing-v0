# MANAGEMENT — Protocolo Bibliotecario v7.0
_Guía operativa para la gestión de memoria y colaboración con Cursor_

## 1. MISIÓN
Actuar como el **Guardián de la Memoria Técnica** del proyecto. Este archivo asegura que cualquier agente de IA (Cursor, Antigravity, etc.) o humano pueda heredar el contexto completo, las decisiones arquitectónicas y los aprendizajes sin pérdida de información entre sesiones o entornos.

---

## 2. ÍNDICE DE RUTAS ABSOLUTAS (Matriz Universal)
> [!IMPORTANT]
> Para asegurar la portabilidad, utiliza siempre estas rutas como anclaje principal. Si clonas este proyecto, actualiza el prefijo de la raíz.

**RAÍZ DEL PROYECTO:** `c:\BreederHub\CPII_v1.0`

| Archivo | Ruta Absoluta | Propósito |
| :--- | :--- | :--- |
| **Índice Global** | `c:\BreederHub\CPII_v1.0\.bibliotecario\INDEX.md` | Registro de todos los archivos auditados y su estado. |
| **Log de Sesiones** | `c:\BreederHub\CPII_v1.0\.bibliotecario\AUDIT_LOG.md` | Historial cronológico de cambios y comportamiento de IA. |
| **Playbook** | `c:\BreederHub\CPII_v1.0\.bibliotecario\LEARNINGS.md` | Conocimiento destilado, patrones y "estratagemas" de diseño. |
| **Manual de Gestión** | `c:\BreederHub\CPII_v1.0\.bibliotecario\MANAGEMENT.md` | Este archivo (instrucciones de uso de la carpeta). |
| **Carpeta Audits** | `c:\BreederHub\CPII_v1.0\.bibliotecario\audits\` | Fichas técnicas detalladas de cada archivo (`BR-XX.md`). |

---

## 3. MASTERCLASS: TRABAJANDO CON CURSOR
Basado en los "Learnings" extraídos del proyecto CPII, estas son las reglas de oro para maximizar la eficiencia de Cursor:

### A. Señales de Contexto Explicitas
*   **Trigger**: Antes de pedir una refactorización, usa: *"Consulta .bibliotecario/INDEX.md y LEARNINGS.md para entender el chasis actual"*.
*   **Pausa de Auditoría**: Instruye a la IA para que primero genere un plan y espere confirmación.

### B. Gestión de Rutas y Alucinaciones
*   Cursor trabaja mejor con **Rutas Absolutas**. Referenciar archivos por su ruta completa evita que la IA cree versiones fantasma de archivos en carpetas incorrectas.
*   **Update Proactivo**: Si Cursor crea un archivo nuevo, oblígalo a actualizar el `INDEX.md` al finalizar la tarea.

### C. Registro de Cambios "Sticky"
*   Fomenta el uso de **Changelogs en cabeceras**. Documentar cambios evolutivos directamente en los archivos core facilita el traspaso de contexto entre diferentes modelos.

---

## 4. PROTOCOLO OPERATIVO (Flujo de Sesión)
1.  **Lectura**: La IA lee `INDEX.md` y `LEARNINGS.md`.
2.  **Auditoría (BR)**: Si se edita un archivo nuevo, se crea su ficha en `audits/BR-XXX.md`.
3.  **Ejecución**: Se realizan los cambios en el código.
4.  **Cierre**: 
    *   Actualizar `AUDIT_LOG.md` (resumen de la sesión).
    *   Actualizar `INDEX.md` (estado de archivos).
    *   Extraer aprendizajes a `LEARNINGS.md`.

---

## 5. CHECKLIST PARA NUEVOS PROYECTOS
Para clonar este sistema en un nuevo entorno:
- [ ] Crear carpeta `.bibliotecario` y `audits/`.
- [ ] Copiar `INDEX.md`, `AUDIT_LOG.md` y `LEARNINGS.md` (limpiar contenidos previos pero mantener estructura).
- [ ] Editar `MANAGEMENT.md` para actualizar la **RAÍZ DEL PROYECTO** en el índice de rutas absolutas.
- [ ] Realizar una primera auditoría de los archivos base del nuevo proyecto.
