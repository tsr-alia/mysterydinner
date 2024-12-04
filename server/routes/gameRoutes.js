import express from "express";
import GameService from "../services/GameService.js";

const router = express.Router();

// endpoint to get game data
app.get("/api/games/:slug", async (req, res) => {
  const { slug } = req.params;
  try {
    const game = await GameService.getGameBySlug(req.params.slug);
    if (!game) return res.status(404).json({ error: "Game not found" });

    // Send public game data
    res.json({
      title: game.title,
      description: game.description,
      publicInfo: game.publicInfo, // e.g., additional background text
    });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong." });
  }
});

// handle character password/game start
// app.post('/api/game/:slug/character', async (req, res) => {
//     const { slug } = req.params;
//     const { character, password } = req.body;

//     try {
//       // Fetch the game and validate the character and password
//       const game = await GameModel.findOne({ slug });
//       if (!game) return res.status(404).json({ error: 'Game not found' });

//       const characterData = game.characters.find((c) => c.name === character);
//       if (!characterData || characterData.password !== password) {
//         return res.status(403).json({ error: 'Invalid character or password' });
//       }

//       // Return the game and character-specific data
//       res.json({
//         game: { title: game.title, stages: game.stages }, // General game info
//         character: {
//           name: characterData.name,
//           uniqueInfo: characterData.uniqueInfo, // Character-specific info
//         },
//       });
//     } catch (err) {
//       res.status(500).json({ error: 'Something went wrong.' });
//     }
//   });

export default router;
