const express = require('express');
const router = express.Router();
const pool = require('../config/database');

// GET all recipes
router.get('/', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT r.*, m.name as dish_name, m.image_url
      FROM recipes r
      JOIN menu_items m ON r.menu_item_id = m.id
      ORDER BY r.created_at DESC
    `);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET single recipe with ingredients
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    // Get recipe details
    const recipeResult = await pool.query(`
      SELECT r.*, m.name as dish_name, m.image_url
      FROM recipes r
      JOIN menu_items m ON r.menu_item_id = m.id
      WHERE r.id = $1
    `, [id]);
    
    if (recipeResult.rows.length === 0) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    
    // Get ingredients
    const ingredientsResult = await pool.query(
      'SELECT * FROM ingredients WHERE recipe_id = $1 ORDER BY id',
      [id]
    );
    
    const recipe = recipeResult.rows[0];
    recipe.ingredients = ingredientsResult.rows;
    
    res.json(recipe);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;