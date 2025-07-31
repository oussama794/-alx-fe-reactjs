import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  const { favorites, recipes } = useRecipeStore();
  const favoriteRecipes = favorites.map(id => recipes.find(r => r.id === id)).filter(Boolean);

  return (
    <div>
      <h2>Favorites</h2>
      {favoriteRecipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
