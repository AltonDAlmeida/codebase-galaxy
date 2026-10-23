import os
import psycopg
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow the Next.js frontend (port 3000) to call this API from the browser
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_conn():
    return psycopg.connect(os.environ["DATABASE_URL"])


@app.get("/health")
def health():
    return {"status": "ok"}


@app.get("/repos")
def list_repos():
    with get_conn() as conn:
        rows = conn.execute("SELECT id, url, status FROM repos").fetchall()
    return [{"id": r[0], "url": r[1], "status": r[2]} for r in rows]