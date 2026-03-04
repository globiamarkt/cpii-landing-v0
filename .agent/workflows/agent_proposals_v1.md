# PROPUESTA DE NUEVOS AGENTES: Ecosistema Antigravity

A partir del trabajo de arquitectura, indexación (Bibliotecario) y construcción de prototipos en `04_entregas`, he identificado 3 roles específicos de Agentes que se beneficiarían del formato de *Workflow/Prompt* en `.agents/workflows/`:

---

## 1. EL ARQUITECTO DE COMPONENTES (Stitch Maker)
**Casos de uso detectados:** Creación de los Web Components (`wd-cifi-assets`, `wd-cifi-killswitch`).
**Por qué se necesita:** Hay una doctrina estricta (usar Shadow DOM, no depender de frameworks, prefijo `wd-`, usar CSS variables del Layout Trinity). Un agente genérico suele olvidar el Shadow DOM o importar React.
*   **Trigger de ejecución:** `/stitch_maker [nombre-widget]`
*   **Doctrina Base:** 
    *   Prohibido usar frameworks (React/Vue).
    *   Obligatorio aislar estilos con `:host`.
    *   Obligatorio inyectar estado vía atributos HTML (`data-state`).

## 2. EL AUDITOR DE CUMPLIMIENTO (Gatekeeper Enforcer)
**Casos de uso detectados:** Implementación del Nivel 2 de Autoridad (`SECURITY_GATEKEEPER_MATRIZ.md`).
**Por qué se necesita:** La seguridad (Triple Esclusa Fractal, Custom Claims) es el punto crítico de CIFI-AIP. Cuando se escribe lógica en el cliente o Reglas de Firestore, este agente debe auditar el código asumiendo una mentalidad "Zero-Trust" antes de hacer un commit.
*   **Trigger de ejecución:** `/audit_gatekeeper [ruta-archivo]`
*   **Doctrina Base:**
    *   Todo acceso a datos debe requerir verificación de `tenant_id` y `region`.
    *   Si es operación financiera, debe requerir `kyc_status: verified`.
    *   Debe buscar fugas visuales: ¿Se está omitiendo el botón solo por CSS en lugar de bloquear el evento JS?

## 3. EL INGENIERO DE PROMPTS (AIMON Whisperer)
**Casos de uso detectados:** Revisión del tono de voz (Hermetismo Técnico, *Anti-Broker*) y la segmentación (BR-12, BR-38).
**Por qué se necesita:** El "Tono" no es solo marketing, es UI. Al crear los JSON de configuración para el `AIMON_GENESIS_CIFI_BRIEF.md`, este agente traduciría las reglas de negocio a prompts del sistema protegidos (System Instructions) para las LLMs subyacentes del proyecto.
*   **Trigger de ejecución:** `/aimon_prompt_review [ruta-archivo-prompt]`
*   **Doctrina Base:**
    *   Verificar que toda interacción de error tenga un "Upsell Engine" pasivo.
    *   Validar la regla del *Magic Circle* (lenguaje técnico/quirúrgico sin sobreexplicar).
    *   Detectar debilidades de "Prompt Injection" que el usuario pudiera intentar.

---

### ¿Cómo proceder?
Si alguna de estas propuestas (o las tres) encaja con tu visión de la cadena de montaje, puedo crear los archivos `.md` en la carpeta `.agents/workflows/` (ej: `stitch_maker.md`) con las reglas declaradas, de la misma forma que con el `/bibliotecario_v2`.
