
# Mini Portafolio

## Descripción

Mini portafolio personal desarrollado con React y Vite para presentar mi perfil académico, habilidades, proyectos y medios de contacto.

El diseño utiliza una paleta de colores azul y gris, tarjetas y una estructura adaptable a distintos tamaños de pantalla.

## Secciones

- **Inicio:** presentación personal y accesos a las secciones.
- **Sobre mí:** información académica, intereses y fotografía.
- **Habilidades:** tecnologías y herramientas informáticas.
- **Proyectos:** presentación de proyectos mediante tarjetas reutilizables.
- **Contacto:** formulario con validación de datos y mensajes de confirmación.

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- CSS
- React Router DOM
- Git y GitHub

## Requisitos

- Node.js compatible con la versión de Vite utilizada.
- npm.
- Git.

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/panxulita/mini_portafolio.git        
```

Entrar a la carpeta del proyecto:

```bash
cd mini_portafolio
```

Instalar las dependencias:

```bash
npm install
```

## Ejecución

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

Abrir en el navegador la dirección local que muestra la terminal.

## Compilación

Para comprobar que el proyecto puede compilarse:

```bash
npm run build
```

## Estructura del proyecto

```text
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Layout.jsx
│   ├── TarjetaProyecto.jsx
│   └── FormularioContacto.jsx
├── pages/
│   ├── Inicio.jsx
│   ├── SobreMi.jsx
│   ├── Habilidades.jsx
│   ├── Proyectos.jsx
│   └── Contacto.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Rutas

| Ruta | Contenido |
|---|---|
| `/` | Inicio |
| `/sobre-mi` | Presentación personal |
| `/habilidades` | Habilidades y herramientas |
| `/proyectos` | Proyectos personales |
| `/contacto` | Formulario de contacto |

## Componentes reutilizables

- `Header`: menú de navegación mediante React Router.
- `Footer`: pie de página con nombre y año actual.
- `Layout`: estructura común de las páginas.
- `TarjetaProyecto`: muestra información de proyectos mediante props.
- `FormularioContacto`: administra los campos, valida los datos y muestra mensajes de resultado.

## Dificultades y soluciones

Durante el desarrollo surgieron dificultades al configurar el proyecto y conectar sus componentes.

1. **Configuración inicial:** se creó el proyecto con Vite y se instalaron las dependencias necesarias.
2. **Pantalla en blanco:** se identificaron errores de exportación en páginas importadas desde `App.jsx`. Se corrigieron las exportaciones predeterminadas de los componentes.
3. **Navegación:** se configuraron las rutas con React Router para mostrar las páginas sin recargar el sitio.
4. **Diseño:** se ajustaron los estilos CSS para organizar la presentación, las tarjetas y la navegación.

## Autora

Francisca Alvarado  
Estudiante de Ingeniería Civil Informática  
Universidad Católica de Temuco
