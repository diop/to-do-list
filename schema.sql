DROP DATABASE IF EXISTS todos;
CREATE DATABASE todos;

\c todos

DROP TABLE IF EXISTS items;
CREATE TABLE items (
    ID SERIAL PRIMARY KEY,
    task VARCHAR(40) NOT NULL,
    completed BOOLEAN DEFAULT false,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

INSERT INTO items (task, completed, created_at, updated_at)
    VALUES ('Meditation', true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
