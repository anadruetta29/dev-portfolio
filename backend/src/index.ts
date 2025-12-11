import express from "express";
import EmailRoute from "./routes/EmailRoute";

const app = express();
app.use(express.json());

app.use("/api/email", EmailRoute);

app.listen(4000, () => console.log("Servidor corriendo en puerto 4000"));
