import express, { response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import "dotenv/config";
import session from "express-session";
import User from "./database/User.mjs";
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

mongoose.connect(
  "mongodb://localhost:27017/userLogin",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("DB connected");
  }
);

//----------------GET REQUESTS-------------------//

// -----------------Post REQUESTS_---------------------------

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });
  
  if (user) {
    if (bcrypt.compareSync(password,user.password)) {
      res.send({ message: "Login successful", user: user });
    } else {
      res.send({ message: "Password didn't match" });
    }
  } else {
    res.send({ message: "User not registered" });
  }
});

app.post("/register", async (req, res) => {
  const { name, email, password, list } = req.body;
  var salt = bcrypt.genSaltSync(12);
  var hash = bcrypt.hashSync(password,salt);
  const user = await User.findOne({ email: email });
  if (user) {
    res.send({ message: "User already registered" });
  } else {
    const user = new User({
      name,
      email,
      list,
      password:hash,
    });

    await user.save((err) => {
      if (err) {
        console.log(err);
      } else {
        res.send({ message: "Successfully Registered" });
      }
    });
  }
});

app.post("/additem", async (req, res) => {
  console.log("hello");
  const { user, item } = req.body;

  const foundUser = await User.findOne({ email: user.email });
  if (foundUser) {
    foundUser.list = [
      ...foundUser.list,
      {
        email: item["email"],
        website: item["website"],
        password: item["password"],
      },
    ];
    console.log("User after update", foundUser);
    await foundUser.save();
    res.send(foundUser);
  } else {
    console.log("Error during add item");
  }
});

app.post("/saveitem", async (req, res) => {
  console.log("reached server saveitem");
  const { user, editItem } = req.body;
  const { email, list } = user;
  console.log("user at save item", user);
  console.log("edit item at /saveitem", editItem);
  const newlist = user.list.slice(0);
  console.log("Index of item to be edited",editItem.itemindex);
  const idx = list.length - editItem.itemindex - 1;
  console.log("Actual index",idx)
  newlist[idx] = {
    email: editItem.email,
    website: editItem.website,
    password: editItem.password,
  };
  console.log("currentlist", user.list);
  console.log("newlist", newlist);
  const newUser = await User.findOne({ email: email });
  newUser.list = newlist;
  await newUser.save();
  console.log("final user", newUser);
  res.send(newUser);
});

app.post("/deleteItem", async (req, res) => {
  const { user, index } = req.body;

  const newUser = await User.findOne({ email: user.email });
  console.log("index", index);
  const idx = newUser.list.length - 1 - index;
  console.log("idx", idx);
  const newList = newUser.list.slice(0).filter((key, i) => {
    return i != idx;
  });

  newUser.list = newList;
  await newUser.save();

  res.send({ message: "Deleted", newUser: newUser });
});

// --------------------------------------------------------------------------------------------------------------------

app.listen(9002, () => {
  console.log("Server started at port 9002");
});
