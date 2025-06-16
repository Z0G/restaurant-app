export const categories = [
  { id: 1, name: 'Appetizers', description: 'Perfect starters to begin your meal' },
  { id: 2, name: 'Soups & Salads', description: 'Fresh and hearty options' },
  { id: 3, name: 'Main Courses', description: 'Our signature dishes' },
  { id: 4, name: 'Pasta & Pizza', description: 'Italian favorites' },
  { id: 5, name: 'Seafood', description: 'Fresh catch of the day' },
  { id: 6, name: 'Asian Cuisine', description: 'Authentic flavors from the East' },
  { id: 7, name: 'Mexican', description: 'Spicy and flavorful dishes' },
  { id: 8, name: 'Desserts', description: 'Sweet endings to your perfect meal' },
  { id: 9, name: 'Beverages', description: 'Refreshing drinks and cocktails' }
];

export const recipes = [
  // Bella Italia Recipes
  {
    id: 1,
    menu_item_id: 1,
    dish_name: 'Margherita Pizza',
    restaurant_name: 'Bella Italia',
    prep_time: 30,
    cook_time: 15,
    servings: 4,
    difficulty: 'Medium',
    instructions: `1. Prepare pizza dough and let it rise for 1 hour
2. Preheat oven to 500°F (260°C) with pizza stone if available
3. Roll out dough into 12-inch circle
4. Spread thin layer of tomato sauce, leaving 1-inch border
5. Add torn fresh mozzarella pieces evenly
6. Drizzle with olive oil and season with salt and pepper
7. Bake for 10-15 minutes until crust is golden and cheese is bubbly
8. Remove from oven and immediately top with fresh basil leaves
9. Let cool for 2-3 minutes before slicing`,
    ingredients: [
      { name: 'Pizza dough', quantity: '1', unit: 'ball' },
      { name: 'Tomato sauce', quantity: '1/2', unit: 'cup' },
      { name: 'Fresh mozzarella', quantity: '8', unit: 'oz' },
      { name: 'Fresh basil leaves', quantity: '1/4', unit: 'cup' },
      { name: 'Extra virgin olive oil', quantity: '2', unit: 'tbsp' },
      { name: 'Salt', quantity: '1', unit: 'tsp' },
      { name: 'Black pepper', quantity: '1/2', unit: 'tsp' }
    ]
  },
  {
    id: 2,
    menu_item_id: 2,
    dish_name: 'Spaghetti Carbonara',
    restaurant_name: 'Bella Italia',
    prep_time: 15,
    cook_time: 15,
    servings: 4,
    difficulty: 'Medium',
    instructions: `1. Bring large pot of salted water to boil for pasta
2. Cut pancetta into small cubes and cook in large skillet until crispy
3. In bowl, whisk together eggs, grated Parmesan, and black pepper
4. Cook spaghetti according to package directions until al dente
5. Reserve 1 cup pasta cooking water before draining
6. Add hot, drained pasta to skillet with pancetta
7. Remove from heat and quickly stir in egg mixture
8. Add pasta water gradually until creamy sauce forms
9. Serve immediately with extra Parmesan and black pepper`,
    ingredients: [
      { name: 'Spaghetti', quantity: '1', unit: 'lb' },
      { name: 'Pancetta', quantity: '6', unit: 'oz' },
      { name: 'Large eggs', quantity: '3', unit: 'whole' },
      { name: 'Parmesan cheese (grated)', quantity: '1', unit: 'cup' },
      { name: 'Freshly ground black pepper', quantity: '1', unit: 'tsp' },
      { name: 'Salt', quantity: 'to taste', unit: '' }
    ]
  },
  {
    id: 3,
    menu_item_id: 3,
    dish_name: 'Chicken Parmesan',
    restaurant_name: 'Bella Italia',
    prep_time: 25,
    cook_time: 30,
    servings: 4,
    difficulty: 'Medium',
    instructions: `1. Preheat oven to 425°F (220°C)
2. Pound chicken breasts to 1/2-inch thickness
3. Set up breading station: flour, beaten eggs, breadcrumb mixture
4. Season chicken with salt and pepper, then bread: flour, egg, breadcrumbs
5. Heat oil in large oven-safe skillet over medium-high heat
6. Cook chicken 3-4 minutes per side until golden
7. Top each piece with marinara sauce and mozzarella
8. Transfer skillet to oven and bake 15-20 minutes
9. Garnish with fresh basil and serve over pasta`,
    ingredients: [
      { name: 'Chicken breasts', quantity: '4', unit: 'pieces' },
      { name: 'All-purpose flour', quantity: '1', unit: 'cup' },
      { name: 'Eggs', quantity: '2', unit: 'beaten' },
      { name: 'Italian breadcrumbs', quantity: '2', unit: 'cups' },
      { name: 'Marinara sauce', quantity: '2', unit: 'cups' },
      { name: 'Fresh mozzarella', quantity: '8', unit: 'oz' },
      { name: 'Vegetable oil', quantity: '1/4', unit: 'cup' },
      { name: 'Fresh basil', quantity: '1/4', unit: 'cup' }
    ]
  },
  {
    id: 4,
    menu_item_id: 4,
    dish_name: 'Tiramisu',
    restaurant_name: 'Bella Italia',
    prep_time: 45,
    cook_time: 0,
    servings: 8,
    difficulty: 'Hard',
    instructions: `1. Brew strong espresso and let cool completely
2. Whisk egg yolks and sugar until thick and pale
3. Add mascarpone to egg mixture and beat until smooth
4. In separate bowl, whip heavy cream to soft peaks
5. Gently fold whipped cream into mascarpone mixture
6. Quickly dip each ladyfinger in espresso and arrange in dish
7. Spread half the mascarpone mixture over ladyfingers
8. Repeat with another layer of dipped ladyfingers and remaining cream
9. Refrigerate for at least 4 hours or overnight
10. Before serving, dust with cocoa powder`,
    ingredients: [
      { name: 'Strong espresso', quantity: '2', unit: 'cups' },
      { name: 'Egg yolks', quantity: '6', unit: 'large' },
      { name: 'Sugar', quantity: '3/4', unit: 'cup' },
      { name: 'Mascarpone cheese', quantity: '1', unit: 'lb' },
      { name: 'Heavy cream', quantity: '1', unit: 'cup' },
      { name: 'Ladyfinger cookies', quantity: '2', unit: 'packages' },
      { name: 'Unsweetened cocoa powder', quantity: '2', unit: 'tbsp' }
    ]
  },

  // Sakura Sushi Recipes
  {
    id: 5,
    menu_item_id: 5,
    dish_name: 'Sushi Platter',
    restaurant_name: 'Sakura Sushi',
    prep_time: 60,
    cook_time: 20,
    servings: 4,
    difficulty: 'Hard',
    instructions: `1. Rinse sushi rice until water runs clear, then cook according to package
2. Season hot rice with rice vinegar, sugar, and salt mixture
3. Let rice cool to room temperature
4. Slice fish into sashimi pieces (1/4 inch thick)
5. With wet hands, form rice into oval shapes for nigiri
6. Place fish slices on rice, pressing gently
7. For rolls: lay nori on bamboo mat, spread rice, add fillings
8. Roll tightly using bamboo mat, seal with water
9. Slice rolls with sharp, wet knife
10. Arrange on platter with wasabi, ginger, and soy sauce`,
    ingredients: [
      { name: 'Sushi rice', quantity: '2', unit: 'cups' },
      { name: 'Rice vinegar', quantity: '1/4', unit: 'cup' },
      { name: 'Fresh salmon', quantity: '8', unit: 'oz' },
      { name: 'Fresh tuna', quantity: '8', unit: 'oz' },
      { name: 'Nori sheets', quantity: '10', unit: 'sheets' },
      { name: 'Cucumber', quantity: '1', unit: 'large' },
      { name: 'Avocado', quantity: '2', unit: 'ripe' },
      { name: 'Wasabi paste', quantity: '2', unit: 'tbsp' },
      { name: 'Pickled ginger', quantity: '1/4', unit: 'cup' }
    ]
  },
  {
    id: 6,
    menu_item_id: 6,
    dish_name: 'Chicken Teriyaki',
    restaurant_name: 'Sakura Sushi',
    prep_time: 15,
    cook_time: 20,
    servings: 4,
    difficulty: 'Easy',
    instructions: `1. Cut chicken thighs into bite-sized pieces
2. Season chicken with salt and pepper
3. Heat oil in large skillet over medium-high heat
4. Cook chicken pieces until golden brown on all sides
5. In small bowl, whisk together soy sauce, mirin, sake, and sugar
6. Pour teriyaki sauce over chicken
7. Simmer until sauce thickens and glazes chicken (5-7 minutes)
8. Garnish with sesame seeds and green onions
9. Serve over steamed rice with steamed vegetables`,
    ingredients: [
      { name: 'Chicken thighs', quantity: '2', unit: 'lbs' },
      { name: 'Soy sauce', quantity: '1/2', unit: 'cup' },
      { name: 'Mirin', quantity: '1/4', unit: 'cup' },
      { name: 'Sake', quantity: '2', unit: 'tbsp' },
      { name: 'Sugar', quantity: '3', unit: 'tbsp' },
      { name: 'Vegetable oil', quantity: '2', unit: 'tbsp' },
      { name: 'Sesame seeds', quantity: '1', unit: 'tbsp' },
      { name: 'Green onions', quantity: '2', unit: 'stalks' }
    ]
  },
  {
    id: 7,
    menu_item_id: 7,
    dish_name: 'Ramen Bowl',
    restaurant_name: 'Sakura Sushi',
    prep_time: 30,
    cook_time: 45,
    servings: 4,
    difficulty: 'Medium',
    instructions: `1. Prepare broth by simmering pork bones for 2-3 hours (or use instant)
2. Season broth with miso paste, soy sauce, and sake
3. Cook ramen noodles according to package directions
4. Prepare toppings: slice pork, soft-boil eggs, chop green onions
5. Heat broth and taste for seasoning
6. Divide noodles among bowls
7. Ladle hot broth over noodles
8. Arrange toppings: pork slices, halved eggs, nori, green onions
9. Serve immediately while hot`,
    ingredients: [
      { name: 'Fresh ramen noodles', quantity: '4', unit: 'portions' },
      { name: 'Pork broth', quantity: '6', unit: 'cups' },
      { name: 'Miso paste', quantity: '3', unit: 'tbsp' },
      { name: 'Soy sauce', quantity: '2', unit: 'tbsp' },
      { name: 'Soft-boiled eggs', quantity: '4', unit: 'eggs' },
      { name: 'Sliced pork belly', quantity: '8', unit: 'oz' },
      { name: 'Green onions', quantity: '4', unit: 'stalks' },
      { name: 'Nori sheets', quantity: '2', unit: 'sheets' }
    ]
  },

  // El Mariachi Recipes
  {
    id: 8,
    menu_item_id: 9,
    dish_name: 'Tacos Al Pastor',
    restaurant_name: 'El Mariachi',
    prep_time: 20,
    cook_time: 15,
    servings: 4,
    difficulty: 'Medium',
    instructions: `1. Marinate pork with achiote paste, orange juice, and spices for 2 hours
2. Heat large skillet or grill pan over high heat
3. Cook marinated pork until slightly charred and cooked through
4. Warm corn tortillas on dry skillet
5. Dice onions and pineapple into small pieces
6. Chop cilantro and cut lime into wedges
7. Fill each tortilla with pork, onions, pineapple, and cilantro
8. Serve with lime wedges and salsa verde
9. Optional: top with crumbled queso fresco`,
    ingredients: [
      { name: 'Pork shoulder', quantity: '2', unit: 'lbs' },
      { name: 'Achiote paste', quantity: '2', unit: 'tbsp' },
      { name: 'Orange juice', quantity: '1/4', unit: 'cup' },
      { name: 'Corn tortillas', quantity: '16', unit: 'small' },
      { name: 'White onion', quantity: '1', unit: 'medium' },
      { name: 'Fresh pineapple', quantity: '1', unit: 'cup diced' },
      { name: 'Fresh cilantro', quantity: '1/2', unit: 'cup' },
      { name: 'Limes', quantity: '4', unit: 'whole' }
    ]
  },
  {
    id: 9,
    menu_item_id: 10,
    dish_name: 'Chicken Fajitas',
    restaurant_name: 'El Mariachi',
    prep_time: 15,
    cook_time: 15,
    servings: 4,
    difficulty: 'Easy',
    instructions: `1. Slice chicken breasts into strips and season with fajita spices
2. Cut bell peppers and onions into strips
3. Heat large skillet or cast iron pan over high heat
4. Cook chicken strips until golden and cooked through
5. Add peppers and onions, cook until slightly softened
6. Warm flour tortillas in microwave or dry skillet
7. Serve chicken and vegetables on sizzling platter
8. Provide warm tortillas and toppings on the side
9. Let guests assemble their own fajitas`,
    ingredients: [
      { name: 'Chicken breasts', quantity: '2', unit: 'lbs' },
      { name: 'Bell peppers', quantity: '3', unit: 'mixed colors' },
      { name: 'Large onion', quantity: '1', unit: 'sliced' },
      { name: 'Fajita seasoning', quantity: '2', unit: 'tbsp' },
      { name: 'Flour tortillas', quantity: '12', unit: 'large' },
      { name: 'Sour cream', quantity: '1', unit: 'cup' },
      { name: 'Guacamole', quantity: '1', unit: 'cup' },
      { name: 'Shredded cheese', quantity: '1', unit: 'cup' }
    ]
  },
  {
    id: 10,
    menu_item_id: 11,
    dish_name: 'Guacamole & Chips',
    restaurant_name: 'El Mariachi',
    prep_time: 15,
    cook_time: 0,
    servings: 6,
    difficulty: 'Easy',
    instructions: `1. Cut avocados in half, remove pits, and scoop into large bowl
2. Mash avocados with fork, leaving some chunks for texture
3. Finely dice onion, tomato, and jalapeño
4. Mince garlic and roughly chop cilantro
5. Add lime juice, salt, and cumin to avocados
6. Fold in diced vegetables and cilantro
7. Taste and adjust seasoning with more lime or salt
8. Cover with plastic wrap touching surface to prevent browning
9. Serve immediately with warm tortilla chips`,
    ingredients: [
      { name: 'Ripe avocados', quantity: '6', unit: 'large' },
      { name: 'Lime juice', quantity: '1/4', unit: 'cup' },
      { name: 'Red onion', quantity: '1/4', unit: 'cup diced' },
      { name: 'Roma tomato', quantity: '1', unit: 'diced' },
      { name: 'Jalapeño', quantity: '1', unit: 'seeded and minced' },
      { name: 'Garlic', quantity: '2', unit: 'cloves minced' },
      { name: 'Fresh cilantro', quantity: '1/4', unit: 'cup' },
      { name: 'Salt', quantity: '1', unit: 'tsp' },
      { name: 'Tortilla chips', quantity: '1', unit: 'large bag' }
    ]
  },

  // Ocean's Bounty Recipes
  {
    id: 11,
    menu_item_id: 13,
    dish_name: 'Grilled Salmon',
    restaurant_name: "Ocean's Bounty",
    prep_time: 10,
    cook_time: 15,
    servings: 4,
    difficulty: 'Easy',
    instructions: `1. Preheat grill to medium-high heat
2. Pat salmon fillets dry and season with salt and pepper
3. Brush grill grates with oil to prevent sticking
4. Grill salmon skin-side down for 6-8 minutes
5. Flip carefully and grill 4-6 minutes more until flakes easily
6. Meanwhile, melt butter with lemon juice, herbs, and garlic
7. Remove salmon from grill and let rest 2 minutes
8. Drizzle with herb butter and serve with lemon wedges
9. Serve with roasted vegetables or rice pilaf`,
    ingredients: [
      { name: 'Salmon fillets', quantity: '4', unit: '6 oz each' },
      { name: 'Butter', quantity: '4', unit: 'tbsp' },
      { name: 'Lemon juice', quantity: '2', unit: 'tbsp' },
      { name: 'Fresh dill', quantity: '2', unit: 'tbsp' },
      { name: 'Fresh parsley', quantity: '2', unit: 'tbsp' },
      { name: 'Garlic', quantity: '2', unit: 'cloves minced' },
      { name: 'Salt', quantity: '1', unit: 'tsp' },
      { name: 'Black pepper', quantity: '1/2', unit: 'tsp' }
    ]
  },
  {
    id: 12,
    menu_item_id: 14,
    dish_name: 'Fish Tacos',
    restaurant_name: "Ocean's Bounty",
    prep_time: 20,
    cook_time: 10,
    servings: 4,
    difficulty: 'Medium',
    instructions: `1. Season fish with cumin, chili powder, salt, and pepper
2. Make slaw by combining cabbage, lime juice, and cilantro
3. Mix lime crema with mayo, lime juice, and garlic
4. Heat oil in large skillet over medium-high heat
5. Cook fish 3-4 minutes per side until flakes easily
6. Warm corn tortillas in dry skillet
7. Break fish into chunks and fill tortillas
8. Top with cabbage slaw and lime crema
9. Garnish with cilantro and serve with lime wedges`,
    ingredients: [
      { name: 'Mahi-mahi fillets', quantity: '1.5', unit: 'lbs' },
      { name: 'Corn tortillas', quantity: '12', unit: 'small' },
      { name: 'Cabbage', quantity: '2', unit: 'cups shredded' },
      { name: 'Mayonnaise', quantity: '1/2', unit: 'cup' },
      { name: 'Lime juice', quantity: '1/4', unit: 'cup' },
      { name: 'Cumin', quantity: '1', unit: 'tsp' },
      { name: 'Chili powder', quantity: '1', unit: 'tsp' },
      { name: 'Fresh cilantro', quantity: '1/2', unit: 'cup' }
    ]
  },
  {
    id: 13,
    menu_item_id: 15,
    dish_name: 'Crab Cakes',
    restaurant_name: "Ocean's Bounty",
    prep_time: 25,
    cook_time: 10,
    servings: 4,
    difficulty: 'Medium',
    instructions: `1. Pick through crab meat to remove any shell pieces
2. In large bowl, mix mayo, egg, Dijon mustard, and Worcestershire
3. Add breadcrumbs, parsley, Old Bay seasoning, and lemon zest
4. Gently fold in crab meat, being careful not to break it up
5. Form mixture into 8 patties and refrigerate 30 minutes
6. Heat oil in large skillet over medium heat
7. Cook crab cakes 3-4 minutes per side until golden
8. Make remoulade by mixing mayo, capers, herbs, and lemon
9. Serve hot with remoulade sauce and lemon wedges`,
    ingredients: [
      { name: 'Lump crab meat', quantity: '1', unit: 'lb' },
      { name: 'Mayonnaise', quantity: '1/3', unit: 'cup' },
      { name: 'Large egg', quantity: '1', unit: 'beaten' },
      { name: 'Dijon mustard', quantity: '1', unit: 'tsp' },
      { name: 'Panko breadcrumbs', quantity: '1/2', unit: 'cup' },
      { name: 'Fresh parsley', quantity: '2', unit: 'tbsp' },
      { name: 'Old Bay seasoning', quantity: '1', unit: 'tsp' },
      { name: 'Lemon zest', quantity: '1', unit: 'tsp' }
    ]
  },

  // Garden Fresh Recipes
  {
    id: 14,
    menu_item_id: 17,
    dish_name: 'Caesar Salad',
    restaurant_name: 'Garden Fresh',
    prep_time: 15,
    cook_time: 5,
    servings: 4,
    difficulty: 'Easy',
    instructions: `1. Wash and dry romaine lettuce thoroughly
2. Make croutons by tossing bread cubes with olive oil and garlic
3. Bake croutons at 375°F for 8-10 minutes until golden
4. For dressing, whisk together mayo, lemon juice, Worcestershire
5. Add anchovy paste, garlic, and Dijon mustard to dressing
6. Tear romaine into bite-sized pieces in large bowl
7. Toss lettuce with dressing until well coated
8. Add croutons and half the Parmesan cheese
9. Serve immediately with remaining cheese and black pepper`,
    ingredients: [
      { name: 'Romaine lettuce', quantity: '2', unit: 'large heads' },
      { name: 'Mayonnaise', quantity: '1/3', unit: 'cup' },
      { name: 'Lemon juice', quantity: '2', unit: 'tbsp' },
      { name: 'Worcestershire sauce', quantity: '1', unit: 'tsp' },
      { name: 'Anchovy paste', quantity: '1', unit: 'tsp' },
      { name: 'Garlic', quantity: '2', unit: 'cloves minced' },
      { name: 'Parmesan cheese', quantity: '1/2', unit: 'cup grated' },
      { name: 'Bread cubes', quantity: '2', unit: 'cups' }
    ]
  },
  {
    id: 15,
    menu_item_id: 18,
    dish_name: 'Mediterranean Bowl',
    restaurant_name: 'Garden Fresh',
    prep_time: 25,
    cook_time: 15,
    servings: 4,
    difficulty: 'Easy',
    instructions: `1. Cook quinoa according to package directions and let cool
2. Dice cucumber, tomatoes, and red onion
3. Crumble feta cheese and slice olives
4. Make vinaigrette with olive oil, lemon juice, oregano, and garlic
5. Season quinoa with salt, pepper, and half the vinaigrette
6. Divide quinoa among bowls
7. Top with cucumber, tomatoes, onion, feta, and olives
8. Drizzle with remaining vinaigrette
9. Garnish with fresh herbs and serve at room temperature`,
    ingredients: [
      { name: 'Quinoa', quantity: '1', unit: 'cup dry' },
      { name: 'Cucumber', quantity: '1', unit: 'large diced' },
      { name: 'Cherry tomatoes', quantity: '2', unit: 'cups halved' },
      { name: 'Red onion', quantity: '1/4', unit: 'cup diced' },
      { name: 'Feta cheese', quantity: '4', unit: 'oz crumbled' },
      { name: 'Kalamata olives', quantity: '1/2', unit: 'cup' },
      { name: 'Olive oil', quantity: '1/4', unit: 'cup' },
      { name: 'Lemon juice', quantity: '2', unit: 'tbsp' },
      { name: 'Dried oregano', quantity: '1', unit: 'tsp' }
    ]
  }
];

export const restaurants = [
  {
    id: 1,
    name: "Bella Italia",
    cuisine: "Italian",
    rating: 4.8,
    description: "Authentic Italian cuisine with traditional recipes",
    icon: "🇮🇹"
  },
  {
    id: 2,
    name: "Sakura Sushi",
    cuisine: "Japanese",
    rating: 4.9,
    description: "Fresh sushi and traditional Japanese dishes",
    icon: "🇯🇵"
  },
  {
    id: 3,
    name: "El Mariachi",
    cuisine: "Mexican",
    rating: 4.7,
    description: "Spicy and authentic Mexican flavors",
    icon: "🇲🇽"
  },
  {
    id: 4,
    name: "Ocean's Bounty",
    cuisine: "Seafood",
    rating: 4.6,
    description: "Fresh seafood from the ocean to your plate",
    icon: "🌊"
  },
  {
    id: 5,
    name: "Garden Fresh",
    cuisine: "Healthy",
    rating: 4.5,
    description: "Healthy, organic, and fresh ingredients",
    icon: "🥗"
  }
];

// Update menuItems to include recipe_id references
export const menuItems = [
  // Bella Italia - Italian Restaurant
  { id: 1, name: 'Margherita Pizza', price: 15.99, description: 'Fresh mozzarella, tomato sauce, and fresh basil on wood-fired crust', category_id: 4, category_name: 'Pasta & Pizza', restaurant_id: 1, restaurant_name: 'Bella Italia', recipe_id: 1, image_url: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=300&fit=crop', is_available: true },
  { id: 2, name: 'Spaghetti Carbonara', price: 17.99, description: 'Classic pasta with pancetta, eggs, and parmesan cheese', category_id: 4, category_name: 'Pasta & Pizza', restaurant_id: 1, restaurant_name: 'Bella Italia', recipe_id: 2, image_url: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop', is_available: true },
  { id: 3, name: 'Chicken Parmesan', price: 19.99, description: 'Breaded chicken with marinara and fresh mozzarella', category_id: 3, category_name: 'Main Courses', restaurant_id: 1, restaurant_name: 'Bella Italia', recipe_id: 3, image_url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop', is_available: true },
  { id: 4, name: 'Tiramisu', price: 7.99, description: 'Classic Italian coffee-flavored dessert with mascarpone', category_id: 8, category_name: 'Desserts', restaurant_id: 1, restaurant_name: 'Bella Italia', recipe_id: 4, image_url: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop', is_available: true },

  // Sakura Sushi - Japanese Restaurant
  { id: 5, name: 'Sushi Platter', price: 28.99, description: 'Assorted fresh sushi and sashimi with wasabi and ginger', category_id: 6, category_name: 'Asian Cuisine', restaurant_id: 2, restaurant_name: 'Sakura Sushi', recipe_id: 5, image_url: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop', is_available: true },
  { id: 6, name: 'Chicken Teriyaki', price: 18.99, description: 'Grilled chicken with teriyaki glaze and steamed rice', category_id: 6, category_name: 'Asian Cuisine', restaurant_id: 2, restaurant_name: 'Sakura Sushi', recipe_id: 6, image_url: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop', is_available: true },
  { id: 7, name: 'Ramen Bowl', price: 13.99, description: 'Rich pork broth with noodles, egg, and fresh toppings', category_id: 6, category_name: 'Asian Cuisine', restaurant_id: 2, restaurant_name: 'Sakura Sushi', recipe_id: 7, image_url: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop', is_available: true },
  { id: 8, name: 'Miso Soup', price: 4.99, description: 'Traditional soybean paste soup with tofu and seaweed', category_id: 2, category_name: 'Soups & Salads', restaurant_id: 2, restaurant_name: 'Sakura Sushi', recipe_id: null, image_url: 'https://images.unsplash.com/photo-1606756790138-261d2b6c2441?w=400&h=300&fit=crop', is_available: true },

  // El Mariachi - Mexican Restaurant
  { id: 9, name: 'Tacos Al Pastor', price: 12.99, description: 'Marinated pork with pineapple, onions, and cilantro', category_id: 7, category_name: 'Mexican', restaurant_id: 3, restaurant_name: 'El Mariachi', recipe_id: 8, image_url: 'https://images.unsplash.com/photo-1565299585323-38174c13c5f9?w=400&h=300&fit=crop', is_available: true },
  { id: 10, name: 'Chicken Fajitas', price: 17.99, description: 'Sizzling chicken with peppers, onions, and tortillas', category_id: 7, category_name: 'Mexican', restaurant_id: 3, restaurant_name: 'El Mariachi', recipe_id: 9, image_url: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=400&h=300&fit=crop', is_available: true },
  { id: 11, name: 'Guacamole & Chips', price: 8.99, description: 'Fresh avocado dip with crispy tortilla chips', category_id: 1, category_name: 'Appetizers', restaurant_id: 3, restaurant_name: 'El Mariachi', recipe_id: 10, image_url: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=300&fit=crop', is_available: true },
  { id: 12, name: 'Churros', price: 6.99, description: 'Fried dough sticks with cinnamon sugar and chocolate sauce', category_id: 8, category_name: 'Desserts', restaurant_id: 3, restaurant_name: 'El Mariachi', recipe_id: null, image_url: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop', is_available: true },

  // Ocean's Bounty - Seafood Restaurant
  { id: 13, name: 'Grilled Salmon', price: 24.99, description: 'Atlantic salmon with lemon herb butter and vegetables', category_id: 5, category_name: 'Seafood', restaurant_id: 4, restaurant_name: "Ocean's Bounty", recipe_id: 11, image_url: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop', is_available: true },
  { id: 14, name: 'Fish Tacos', price: 16.99, description: 'Grilled mahi-mahi with cabbage slaw and lime crema', category_id: 5, category_name: 'Seafood', restaurant_id: 4, restaurant_name: "Ocean's Bounty", recipe_id: 12, image_url: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=300&fit=crop', is_available: true },
  { id: 15, name: 'Crab Cakes', price: 24.99, description: 'Maryland-style crab cakes with spicy remoulade', category_id: 5, category_name: 'Seafood', restaurant_id: 4, restaurant_name: "Ocean's Bounty", recipe_id: 13, image_url: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&h=300&fit=crop', is_available: true },
  { id: 16, name: 'Seafood Paella', price: 29.99, description: 'Traditional Spanish rice with mixed seafood and saffron', category_id: 5, category_name: 'Seafood', restaurant_id: 4, restaurant_name: "Ocean's Bounty", recipe_id: null, image_url: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=400&h=300&fit=crop', is_available: true },

  // Garden Fresh - Healthy Restaurant
  { id: 17, name: 'Caesar Salad', price: 12.99, description: 'Fresh romaine with caesar dressing and garlic croutons', category_id: 2, category_name: 'Soups & Salads', restaurant_id: 5, restaurant_name: 'Garden Fresh', recipe_id: 14, image_url: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop', is_available: true },
  { id: 18, name: 'Mediterranean Bowl', price: 14.99, description: 'Quinoa bowl with feta, olives, and herb vinaigrette', category_id: 2, category_name: 'Soups & Salads', restaurant_id: 5, restaurant_name: 'Garden Fresh', recipe_id: 15, image_url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop', is_available: true },
  { id: 19, name: 'Grilled Chicken Wrap', price: 11.99, description: 'Healthy wrap with grilled chicken and fresh vegetables', category_id: 3, category_name: 'Main Courses', restaurant_id: 5, restaurant_name: 'Garden Fresh', recipe_id: null, image_url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop', is_available: true },
  { id: 20, name: 'Fresh Fruit Bowl', price: 8.99, description: 'Seasonal fresh fruits with honey and mint', category_id: 8, category_name: 'Desserts', restaurant_id: 5, restaurant_name: 'Garden Fresh', recipe_id: null, image_url: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=400&h=300&fit=crop', is_available: true }
];
