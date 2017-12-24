import mongoose from "mongoose";
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  displayName: { type: "String", required: true },
  lastUpdated: { type: "String", required: true },
  rankings: [
    {
      rank: String,
      type: {
        type: { type: String }
      },
      rating: String,
      gamesPlayed: String,
      topPercentile: String,
      rankImage: String
    }
  ],
  stats: [
    {
      saves: String,
      goals: String,
      wins: String
    }
  ]
});

export default mongoose.model("Players", playerSchema);
