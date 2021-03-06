import Express from "express";
import fetch from "node-fetch";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = Express();

app.use(cors());
app.use(Express.json());

const Album = mongoose.model("Album", {
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
});

app.use(Express.static("client/build"));

app.get("/api/products", async (req, res) => {
  const { term } = req.query;
  try {
    if (term) {
      res.send(await Album.find({ title: { $regex: term, $options: "gi" } }));
    }
    res.send(await Album.find());
  } catch (e) {
    console.log("error", e);
    throw e;
  }
});

app.get("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    console.log(id);
    res.send(await Album.findById(id));
  } catch (e) {
    throw e;
  }
});

app.post("/api/products", async (req, res) => {
  const { title, description, category, price, image } = req.body;

  const addAlbum = new Album({
    title: title,
    price: price,
    description: description,
    category: category,
    image: image,
  });
  console.log(addAlbum);
  await addAlbum.save(addAlbum);
  res.send(await addAlbum);
});

app.put("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  console.log(body);
  await Album.findByIdAndUpdate(id, body);
  res.send(await Album.find());
});

app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  await Album.findByIdAndDelete(id);
  res.send(await Album.find());
});

async function initProducts() {
  const productsFromDV = await Album.find();
  if (!productsFromDV.length) {
    const res = await fetch("./products.json");
    const products = await res.json();
    console.log(products);
    await Album.insertMany(products);
  }
}

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});

const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;

mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
  (err) => {
    if (err) {
      console.log("dberror", err);
    }
    app.listen(process.env.PORT || 8000, () =>
      console.log("Server is ready on port 8000 and connected to DB")
    );
    initProducts();
  }
);
