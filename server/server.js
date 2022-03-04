require("dotenv").config();
const cors = require("cors");
const express = require("express");
const db = require("./db")
const morgan = require("morgan");
const app = express();




//VIDEO: 2:46:31



app.use(cors())
app.use(express.json())
//get all Restaraunts
app.get("/api/v1/restaurants", async (req, res) =>{
    try{
        const results = await db.query("SELECT * FROM restaurants ");

        res.status(200).json({
            status: "success",
            results: results.rows.length,
    
            data: {
                restaurants: results.rows,
            }
            
        });
    }catch(err){
        console.log(err)
    }
   
});

//get a restaurant
app.get("/api/v1/restaurants/:id", async (req, res) =>{
    console.log(req.params.id);
    try {
        const restaurant = await db.query("SELECT * FROM restaurants WHERE id = $1",[req.params.id]);
        
        const reviews = await db.query("SELECT * FROM reviews WHERE id = $1",[req.params.id]);

        res.status(200).json({
            status: "success",
            data: {
                restaurant: restaurant.rows[0],
                reviews: reviews.rows
            },
        });


        
        
    }catch (err){
        console.log(err);
    }

});

//create a restaurant
app.post("/api/v1/restaurants", async (req,res) =>{
    console.log(req.body);

    try {
        const results = await db.query("INSERT INTO restaurants (name, location, price_range) VALUES ($1,$2,$3) returning *", 
        [req.body.name, req.body.location, req.body.price_range])

        console.log(results)
        res.status(201).json({
            status: "success",
            data: {
                restaurant: results.rows[0]
            }
        });

    } catch (err) {
        console.log(err);
    }

});

//update restaurants
app.put("/api/v1/restaurants/:id", async (req, res) => {
    try {
      const results = await db.query(
        "UPDATE restaurants SET name = $1, location = $2, price_range = $3 where id = $4 returning *",
        [req.body.name, req.body.location, req.body.price_range, req.params.id]
      );
      res.status(200).json({
        status: "succes",
        data: {
          restaurant: results.rows[0],
        },
      });
    } catch (err) {
      console.log(err);
    }
    console.log(req.params.id);
    console.log(req.body);
  });

//delete restaurant

app.delete("/api/v1/restaurants/:id",async (req,res) =>{
    try {
        const results = await db.query("DELETE FROM restaurants WHERE id = $1",
        [req.params.id]);

        res.status(204).json({
            status: "success"
        });

    } catch (err) {
        console.log(err);
    }
 
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is up and listeing on port ${port}`);
});