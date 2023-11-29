export interface ReceipeInterface {
  id: string;
  name: string;
  author: string;
  reference: string;
  description: string;
  prepTime: number;
  cookTime: number;
  keywords: string[];
  servings: number;
  category: string;
  cuisine: string;
  calories: number;
  ingredients: string[];
  instructions: string[];
  additionalNotes: string[];
}