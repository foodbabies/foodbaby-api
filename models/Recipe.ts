import mongoose from "mongoose"

const RecipeSchema = new mongoose.Schema({
  name: String,
  author: String,
  reference: String,
  description: String,
  prepTime: Number,
  cookTime: Number,
  keywords: [String],
  servings: Number,
  category: String,
  cuisine: String,
  calories: Number,
  ingredients: [String],
  instructions: [String],
  additionalNotes: [String],
}, { collection: "food"})

export const Recipe = mongoose.model('recipes', RecipeSchema)
