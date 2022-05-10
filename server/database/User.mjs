import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: { type: String, require: true },
  password: { type: String, require: true },
  list: { type: Array, require: true },
});

 export default mongoose.model("User", userSchema);
