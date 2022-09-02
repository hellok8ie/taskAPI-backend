import mongoose from "mongoose";

const connectionString: string = 'mongodb://localhost:27017/testDB';

mongoose.connect(connectionString).then(
    () => console.log('database connection successful!'), 
    err => console.log('Error connecting to the database', err));