CREATE TABLE IF NOT EXISTS carros(
    id serial primary key,
    marca text,
    modelo text,
    ano integer,
    cor text,
    valor integer
);