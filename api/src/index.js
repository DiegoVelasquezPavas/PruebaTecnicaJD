import app from "./app";

app.listen(app.get("port"));

console.log("server en el puerto: ", app.get("port"));
