---
description: Protocolo de Blindaje y Reglas de Seguridad de Firestore para Leads
---

# Protocolo de Seguridad Firestore

Para garantizar el cumplimiento de la privacidad y la integridad de los datos en el ecosistema Skeleton Factory:

## 1. Segmentación de Zonas
- **Zona 1 (Leads/Captación)**: 
  - Ubicación: Colección raíz `leads/`.
  - Permiso: Escritura pública (necesaria para el registro sin login), pero **Lectura denegada** para evitar filtración de leads.
- **Zona 2 (CRM/Administración)**:
  - Funcionamiento bajo aislamiento lógico mediante **Custom Claims**.
  - El acceso a los datos de los leads está restringido a usuarios con el rol de `admin` o `club_manager`.

## 2. Validación de Esquema
Ninguna regla de seguridad o cambio en el formulario se despliega sin validar contra el esquema actual:
- Los campos `perfil` y `metadata` son objetos anidados.
- El campo padrino (referidoPor) es **opcional** en la fase de captación; los leads sin prescriptor asumen el estado de "huérfanos" y se enlazan al `club_manager` territorial.

## 3. Despliegue de Reglas
Las reglas deben ser testeadas primero en el emulador local antes de ser publicadas en Firebase Console.
