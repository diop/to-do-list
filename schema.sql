DROP DATABASE IF EXISTS todos;
CREATE DATABASE todos;

\c todos;

DROP TABLE IF EXISTS items;
CREATE TABLE items (
    ID SERIAL PRIMARY KEY,
    task VARCHAR(140) NOT NULL,
    isComplete BOOLEAN DEFAULT false
);

INSERT INTO items (task, isComplete) VALUES ('Get A Healthy 7+ Hours of Sleep', false);
INSERT INTO items (task, isComplete) VALUES ('Prayer and Meditation to Facilitate Clarity and Abundance', false);
INSERT INTO items (task, isComplete) VALUES ('Hard Physical Activity', false);
INSERT INTO items (task, isComplete) VALUES ('Consume 30 Grams of Protein', false);
INSERT INTO items (task, isComplete) VALUES ('Take a Cold Shower', false);
INSERT INTO items (task, isComplete) VALUES ('Listen to/Read Uplifting Content', false);
INSERT INTO items (task, isComplete) VALUES ('Review Your Life Vision', false);
INSERT INTO items (task, isComplete) VALUES ('Do at Least One Thing Toward Long-Term Goals', false);
