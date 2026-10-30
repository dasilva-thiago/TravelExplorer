# Travel Explorer

Aplicação web de viagens migrada para uma arquitetura moderna com React, TypeScript, Vite e Tailwind CSS.

## Stack

- React 18+ com componentes funcionais e React Router
- TypeScript em modo strict
- Vite para desenvolvimento e build
- Tailwind CSS via plugin oficial do Vite
- Lucide React para ícones

## Desenvolvimento

```bash
npm install
npm run dev
```

## Validação e produção

```bash
npm run typecheck
npm run build
npm run preview
```

As rotas principais são `/`, `/explorar`, `/login`, `/registrar` e `/confirmacao?type=success`. Os assets legados foram preservados em `public/assets` e a interface foi reorganizada em `src/components`, `src/pages` e `src/data`.
