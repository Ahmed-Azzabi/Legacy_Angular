import mongoose from "mongoose";

const supportSchema = mongoose.Schema({
  name: String,
  email: String,
  website: String,
  message: String,
});
const Support = mongoose.model("support", supportSchema);
export default Support;
