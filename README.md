# Interactive-Restaurant-Rater(Yelp Clone)
## Description
This is a full stack application that uses the PERN Stack:
- Postgres : SQL based database used for the application
- Express JS : web framework for Node.js (back end)
- React.js : displays data on the client side (front end)
- Node.js : runs javascript on the server side (back end)

This web application displaying a list of restaurants with user reviews and ratings.
As well as allowing users to log in and sign out, using JSON web token authorization .

## To Get Started:
You'll need to download SQL commands to run on the local system:
1. Download and install PostgreSQL 
https://www.postgresql.org/
2. Through SQL Shell (PSQL terminal) run the following commands:
```SQL
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
```



