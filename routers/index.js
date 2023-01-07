// add all routes here
import express from 'express';
import userRoutes from './user/user_route.js';
import adminRoutes from './admin/admin_route.js';
import foodRoutes from './admin/food_route.js';

const app = express();


app.use('/user', userRoutes);
app.use('/admin', adminRoutes);
app.use('/food', foodRoutes);


export default app;










