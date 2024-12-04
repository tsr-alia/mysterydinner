import Game from "../models/Game.js";

class GameService {
  static async getGameBySlug(slug) {
    try {
      return await Game.findOne(
        { slug },
        "title description publicInfo stages characters"
      );
    } catch (error) {
      throw new Error("Error fetching game");
    }
  }

  static async createGame(gameData) {
    try {
      const game = new Game(gameData);
      return await game.save();
    } catch (error) {
      throw new Error("Error creating game");
    }
  }

  static async updateGame(slug, updatedData) {
    try {
      return await Game.findOneAndUpdate({ slug }, updatedData, { new: true });
    } catch (error) {
      throw new Error("Error updating game");
    }
  }

  static async deleteGame(slug) {
    try {
      return await Game.findOneAndDelete({ slug });
    } catch (error) {
      throw new Error("Error deleting game");
    }
  }
}

export default GameService;
