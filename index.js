const express = require("express");

const app = express();
app.use(express.json());

// log every incoming request
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url} body=${JSON.stringify(req.body)}`);
  next();
});

// fake database, resets on every restart
const database = [];

app.post("/data", (req, res) => {
  const { name } = req.body;

  // wrong data: crash outside Express so the process really dies
  if (typeof name !== "string" || name.trim() === "") {
    setTimeout(() => {
      throw new Error("Bad payload, app is crashing");
    }, 0);
    return;
  }

  database.push(name);
  res.json({ message: "saved", total: database.length, database });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}, pid ${process.pid}`);
});