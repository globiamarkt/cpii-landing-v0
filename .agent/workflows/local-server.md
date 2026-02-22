---
description: Levantar el servidor local para pruebas y auditoría visual
---

Para ejecutar el entorno local y permitir que el asistente (u otros servicios) validen la página:

1. Asegúrate de estar en la raíz del proyecto: `c:\BreederHub\CPII_v0`

// turbo
2. Inicia el servidor HTTP:
```powershell
npx -y http-server -p 8080
```

3. El servidor estará disponible en:
- Dashboard Principal: [http://localhost:8080/index.html](http://localhost:8080/index.html)
- Formulario de Registro: [http://localhost:8080/access-form.html](http://localhost:8080/access-form.html)

4. Si el asistente tiene habilitadas las herramientas de navegador, puede realizar capturas de pantalla o auditorías automáticas apuntando a estas URLs.

> [!NOTE]
> Este comando levanta exclusivamente el Frontend. Para pruebas de backend y validación de Reglas de Seguridad locales, utilizar `firebase emulators:start`.
