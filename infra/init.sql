-- Turn on the pgvector extension (adds a "vector" column type)
CREATE EXTENSION IF NOT EXISTS vector;

-- One row per GitHub repo the user submits
CREATE TABLE repos (
  id SERIAL PRIMARY KEY,
  url TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- A sample row so we have something to display on Day 1
INSERT INTO repos (url) VALUES ('https://github.com/example/hello');