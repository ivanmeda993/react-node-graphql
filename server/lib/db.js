const { mongoose } = require("mongoose");

const connectDB = async () => {
  console.log("Connecting to database...");
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(
      `MongoDB connected: ${conn.connection.host}`.cyan.underline.bold,
    );
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

module.exports = connectDB;
