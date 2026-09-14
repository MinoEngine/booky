
# Booky / YES BEAUTY

Frontend de una experiencia de reservas para un salon de manicure, nail art y servicios de belleza. La interfaz esta construida en espanol con Next.js App Router, TypeScript, Tailwind CSS, Framer Motion y componentes de Lucide.

## Estado del proyecto

La V1 frontend esta implementada como prototipo navegable. Incluye la landing page, catalogo de servicios, galeria de disenos, detalle de cada diseno, formulario de reserva y formulario de comprobante de pago. Los datos y envios son locales o ficticios mientras se construye el backend.

## Requisitos

- Node.js 20+
- npm

## Instalacion y desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Comandos

| Comando | Uso |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run lint` | ESLint |
| `npm run build` | Build de produccion |
| `npm run start` | Servir el build |

## Rutas frontend

| Ruta | Funcion |
| --- | --- |
| `/` | Landing: hero, propuesta, servicios, galeria, testimonios y CTA |
| `/servicios` | Catalogo de servicios y precios |
| `/disenos` | Galeria de inspiracion |
| `/disenos/[id]` | Detalle de un diseno |
| `/reservar` | Solicitud de cita en dos pasos |
| `/comprobar-pago` | Carga simulada del comprobante |

## Arquitectura breve

- `app/`: rutas y metadata de Next.js.
- `components/home/`: secciones de la landing.
- `components/booking/`: formularios interactivos de reserva y pago.
- `components/layout/`: header y footer globales.
- `data/mockData.ts`: contratos TypeScript y datos temporales.
- `public/`: imagenes locales que deben incorporarse y validarse.

## Alcance y pendientes

Este repositorio cubre solo frontend. La disponibilidad real, persistencia de reservas, autenticacion, carga segura de comprobantes, validacion de pagos, panel administrativo y notificaciones pertenecen al backend o a una integracion posterior.

Pendientes visibles del frontend: crear o retirar el enlace `/sobre-mi`, incorporar las imagenes locales referenciadas por los datos, sustituir contactos de prueba, conectar formularios a API y completar estados de error, carga y accesibilidad.

## Flujo de trabajo

Usa ramas `feature/<issue>-descripcion`, enlaza cada pull request con su issue (`Closes #N`) y valida con `npm run lint` y `npm run build` antes de integrar. No se han creado commits en este repositorio todavia; la secuencia propuesta esta documentada para que el historial inicial sea claro y verificable.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
