# Codebase Galaxy

Chat with any GitHub repo and explore it as an interactive 3D graph.
Ask a question, get a cited answer (file and line), and watch the retrieved code light up.

**Status:** in development (Day 1: full-stack skeleton running)

## Stack
Next.js, FastAPI, PostgreSQL + pgvector, Docker Compose
(planned: tree-sitter, React Three Fiber, Claude API)

## Run locally

1. Start the database and API:
   ```
   docker compose up --build
   ```
2. In a second terminal, start the frontend:
   ```
   cd apps/web
   npm install
   npm run dev
   ```
3. Open http://localhost:3000 (API docs at http://localhost:8000/docs)