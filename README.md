# Paperclip Projects

A full-stack application built with React, TypeScript, Vite, and Node.js.

## Prerequisites

- Node.js 18.x or 20.x
- npm

## Getting Started

### Frontend

```bash
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## CI/CD

This project uses GitHub Actions for continuous integration. The CI pipeline runs on every push and pull request to `main` and includes:
- Linting (frontend and backend)
- Building (frontend and backend)

## Branch Protection

The `main` branch is protected. All changes must go through pull requests with passing CI checks.
