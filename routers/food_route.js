// add all routes here
import express from 'express';
import { addBulkFoods, addFoods, deleteFoods, getFoods, updateFoods } from '../controllers/foods_controller.js';


const app = express();

//get food details
app.get('/get-foods', getFoods);

//add food details
app.post('/add-food', addFoods);

//add bulk food details
app.post('/add-bulk-foods', addBulkFoods);

//update food details
app.put('/update-food/:id', updateFoods);

//delete food details
app.delete('/delete-food/:id', deleteFoods);

export default app;










