# 🌐 PlaniCash - Landing Page

<div align="center">
  <h3>Sitio Web Oficial de FirstMillion Systems</h3>
  <p>Landing page moderna y responsiva construida con Angular</p>
  
  ![Angular](https://img.shields.io/badge/Angular-20.x-DD0031?style=for-the-badge&logo=angular)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)
  ![SCSS](https://img.shields.io/badge/SCSS-Styling-CC6699?style=for-the-badge&logo=sass)
</div>

---

## 📋 Descripción

Landing page oficial de **PlaniCash**, la aplicación de gestión financiera personal. Incluye información sobre las características de la app, planes de suscripción, y formulario de contacto.

## ✨ Características

- 🎨 Diseño moderno y responsivo
- 📱 Optimizado para móviles, tablets y desktop
- 🚀 Server-Side Rendering (SSR) con Angular Universal
- 💬 Formulario de contacto integrado con el backend
- 🤖 Chatbot de soporte
- 📄 Páginas de términos y condiciones, política de privacidad
- ⚡ Alto rendimiento y SEO optimizado

## 🛠️ Tecnologías

- **Framework**: Angular 20.x
- **Lenguaje**: TypeScript 5.x
- **Estilos**: SCSS
- **SSR**: Angular Universal
- **HTTP**: Angular HttpClient
- **Routing**: Angular Router

## 📦 Requisitos previos

- Node.js >= 18.x
- Angular CLI >= 20.x
- npm o yarn

## 🚀 Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/IngElmer10/PlaniCash-SitioWeb.git
cd SW2-Grupal-SitioWeb-main
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno (opcional)**

Si usas variables de entorno, crea un archivo de configuración:

```typescript
// src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api'
};
```

## 💻 Desarrollo

Para iniciar el servidor de desarrollo:

```bash
ng serve
```

La aplicación estará disponible en `http://localhost:4200/`. Se recargará automáticamente cuando modifiques archivos.

### Desarrollo con SSR

```bash
npm run dev:ssr
```

## 🏗️ Build

### Build de producción (SPA)

```bash
ng build
```

Los archivos compilados se guardarán en `dist/`.

### Build con SSR

```bash
npm run build:ssr
```

### Servir la aplicación SSR

```bash
npm run serve:ssr:PlaniCash-landing
```

## 🧪 Testing

### Unit tests

```bash
ng test
```

### End-to-end tests

```bash
ng e2e
```

## 📁 Estructura del proyecto

```
src/
├── app/
│   ├── pages/
│   │   ├── inicio/        # Página principal
│   │   ├── chatbot/       # Chatbot de soporte
│   │   ├── policy/        # Política de privacidad
│   │   └── terms/         # Términos y condiciones
│   ├── services/
│   │   └── contact.service.ts  # Servicio de contacto
│   ├── app.ts             # Componente raíz
│   ├── app.routes.ts      # Configuración de rutas
│   └── app.config.ts      # Configuración de la app
├── assets/
│   └── images/            # Imágenes y recursos
├── styles.scss            # Estilos globales
└── index.html             # HTML principal
```

## 🎨 Características de las páginas

### 🏠 Inicio (Home)
- Hero section con call-to-action
- Características principales de la app
- Planes de suscripción
- Formulario de contacto
- Footer con enlaces

### 💬 Chatbot
- Asistente virtual para preguntas frecuentes
- Respuestas automáticas
- Interfaz intuitiva de chat

### 📜 Términos y Políticas
- Términos y condiciones de uso
- Política de privacidad
- Información legal

## 📊 SEO y Performance

- ✅ Meta tags optimizados
- ✅ Open Graph tags para redes sociales
- ✅ Lazy loading de imágenes
- ✅ Server-Side Rendering (SSR)
- ✅ Prerendering de rutas estáticas
- ✅ Lighthouse score optimizado

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-pagina`)
3. Commit tus cambios (`git commit -m 'feat: agregar nueva página'`)
4. Push a la rama (`git push origin feature/nueva-pagina`)
5. Abre un Pull Request

## 📞 Soporte

Si encuentras algún bug o tienes sugerencias:
- Abre un [Issue](../../issues)
- Contacta al equipo de desarrollo

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 👥 Autores

Desarrollado por el equipo de SW2.

---

## 📚 Recursos adicionales

- [Documentación de Angular](https://angular.dev)
- [Angular CLI Reference](https://angular.dev/tools/cli)
- [Angular Universal (SSR)](https://angular.dev/guide/ssr)

---

**Construido con ❤️ usando Angular**
