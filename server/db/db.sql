CREATE DATABASE restaurantsDB;


create TABLE restaurants(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL check(price_range >= 1 and price_range <= 5)
    
);

CREATE TABLE reviews(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    restaurant_id BIGINT NOT NULL REFERENCES restaurants(id),
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    rating INT NOT NULL check(rating >= 1 and rating <= 5)
);

CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);


--Inserting users example:

INSERT INTO users(user_name, user_email, user_password) VALUES ('John', 'john323@gmail.com', 'johnnyboy32');

--Inserting restaurants example:
INSERT INTO restaurants(name, location, price_range) VALUES ("McDonalds", "Los Angeles", 2)