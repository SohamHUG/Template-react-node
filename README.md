# Monorepo Template: React + Vite (Frontend) + Node.js (Backend)


## Overview

This monorepo template is designed to quickly start modern fullstack projects.  
It includes a **React + Vite frontend** and a **Node.js backend** pre-configured with TypeScript, essential libraries, and best practices for smooth development.


## ⚡ Frontend Dependencies

- **React** & **React DOM**
- **Vite** (fast build)
- **TypeScript**
- **TailwindCSS** (styling)
- **Redux Toolkit** (state management)
- **React Router DOM** (routing)
- **Three.js** + **React Three Fiber** + **Drei** (3D)
- **GSAP** (animations)
- **Lenis** (smooth scroll)
- **React Icons** (icons)


## ⚡ Backend Dependencies

- **Node.js**
- **TypeScript**
- **Express** (API server)
- **PostgreSQL** (database)
- **Drizzle ORM** (database ORM)
- **JWT** (authentication)
- **Cookie Parser**
- **Zod** (validation)
- **Dotenv** (environment variables)


## 🔄 Automatic Dependency Updates

Both frontend and backend use **[Dependabot](https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot)** to check for updates and open pull requests automatically.


## 📦 Installation

### Prerequisites
* Node.js  
* PostgreSQL  
* pnpm

```bash
# Clone the repository
git clone https://github.com/SohamHUG/Template-react-node.git new-project
cd new-project

# Duplicate the .env.example file in /packages/server to .env 
# and fill in the required values

# Install dependencies
pnpm install
```

## 🚀 Useful Scripts

```bash
|        Command        |                 Description                  |
|-----------------------|----------------------------------------------|
| `pnpm run dev:client` | Start the frontend (React + Vite)            |
| `pnpm run dev:server` | Start the backend (Node.js + TypeScript)     |
| `pnpm run dev`        | Start both frontend and backend concurrently |
| `pnpm run migrate`    | Apply database migrations                    |
| `pnpm run generate`   | Generate ORM schema                          |

```

## 💡 Notes
* This monorepo template allows you to start fullstack projects quickly.
* All major libraries are pre-configured and ready to use.
* Dependabot ensures both frontend and backend dependencies stay up-to-date.
