import supabase from '../../../initSupabase.js';

// Food Recipe routes
export const getRecipes = async (req, res) => {
  const { data, error } = await supabase
    .from('food')
    .select();

  if (error) {
    res.send(error);
  }

  res.send(data);
};

export const getRecipeByID = async (req, res) => {
  const { data, error } = await supabase
    .from('food')
    .select()
    .eq('id', req.params.id);

  if (error) {
    res.send(error);
  }

  if (data) {
    res.send(data);
  } else {
    res.sendStatus(404);
  }
};

export const createRecipe = async (req, res) => {
  const { error } = await supabase
    .from('food')
    .insert({
      name: req.body.name,
      author: req.body.author,
      reference: req.body.reference,
      description: req.body.description,
      prepTime: req.body.prepTime,
      cookTime: req.body.cookTime,
      keywords: req.body.keywords,
      servings: req.body.servings,
      category: req.body.category,
      cuisine: req.body.cuisine,
      calories: req.body.calories,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions,
      additionalNotes: req.body.additionalNotes,
    });
  if (error) {
    res.send(error);
  }
  res.send('created!!');
};

export const updateRecipeByID = async (req, res) => {
  const { error } = await supabase
    .from('food')
    .update({
      name: req.body.name,
      author: req.body.author,
      reference: req.body.reference,
      description: req.body.description,
      prepTime: req.body.prepTime,
      cookTime: req.body.cookTime,
      keywords: req.body.keywords,
      servings: req.body.servings,
      category: req.body.category,
      cuisine: req.body.cuisine,
      calories: req.body.calories,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions,
      additionalNotes: req.body.additionalNotes,
    })
    .eq('id', req.params.id);
  if (error) {
    res.send(error);
  }
  res.send('updated');
};

export const deleteRecipeByID = async (req, res) => {
  const { error } = await supabase
    .from('food')
    .delete()
    .eq('id', req.params.id);
  if (error) {
    res.send(error);
  }
  res.send('deleted');
};
