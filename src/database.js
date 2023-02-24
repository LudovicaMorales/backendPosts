import mongoose from "mongoose";

mongoose.set("strictQuery", false);

export const connectDb = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      "La base de datos ha sido conectada con éxito a",
      db.connection.name
    );
  } catch (error) {
    console.log(
      `Ha sucedido un error al conectar a la base de datos ${error.message}`
    );
  }
};
