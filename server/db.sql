\c pokeshop

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    username text PRIMARY KEY UNIQUE,
    password text NOT NULL
);


