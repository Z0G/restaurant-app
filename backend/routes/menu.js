const express = require('express');
const router = express.Router();
const pool = require('../config/database');

// GET all menu items
router.get('/', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT m.*, c.name as category_name 
      FROM menu_items m 
      LEFT JOIN categories c ON m.category_id = c.id 
      WHERE m.is_available = true
      ORDER BY c.name, m.name
    `);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET menu items by category
router.get('/category/:categoryId', async (req, res) => {
  try {
    const { categoryId } = req.params;
    const result = await pool.query(
      'SELECT * FROM menu_items WHERE category_id = $1 AND is_available = true',
      [categoryId]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET single menu item
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      'SELECT m.*, c.name as category_name FROM menu_items m LEFT JOIN categories c ON m.category_id = c.id WHERE m.id = $1',
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Menu item not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;