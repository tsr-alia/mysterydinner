import mongoose from "mongoose";

const GameSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  publicInfo: { type: String },
  stages: [
    {
      number: { type: Number, required: true },
      content: { type: String, required: true },
      type: { type: String, enum: ["text", "riddle"], default: "text" },
    },
  ],
  characters: [
    {
      name: { type: String, required: true },
      password: { type: String, required: true },
      info: { type: String },
    },
  ],
});

export default mongoose.model("Game", GameSchema);
