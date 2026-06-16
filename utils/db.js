const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        if (!process.env.MONGODB_URI) {
            console.error("Error: MONGODB_URI is not defined in your .env file!");
            process.exit(1);
        }
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connection successful to DB");
    } catch (error) {
        console.error("Database connection failed details:", error.message); // This will tell us the exact issue
        process.exit(1);
    }
};

module.exports = connectDb;