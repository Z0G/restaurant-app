export const restaurants = [
  {
    id: 1,
    name: "Italian Bistro",
    cuisine: "Italian",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400",
    description: "Authentic Italian cuisine with a modern twist",
    rating: 4.5,
    menu: {
      appetizers: [
        { id: 1, name: "Bruschetta", price: 8.99, description: "Toasted bread with tomatoes and basil" },
        { id: 2, name: "Caprese Salad", price: 12.99, description: "Fresh mozzarella, tomatoes, and basil" },
        { id: 3, name: "Antipasto Platter", price: 16.99, description: "Assorted Italian meats and cheeses" }
      ],
      mains: [
        { id: 4, name: "Spaghetti Carbonara", price: 18.99, description: "Classic Roman pasta with eggs and pancetta" },
        { id: 5, name: "Margherita Pizza", price: 15.99, description: "Traditional pizza with tomato sauce and mozzarella" },
        { id: 6, name: "Chicken Parmigiana", price: 22.99, description: "Breaded chicken with tomato sauce and cheese" },
        { id: 7, name: "Risotto Mushroom", price: 19.99, description: "Creamy risotto with wild mushrooms" }
      ],
      desserts: [
        { id: 8, name: "Tiramisu", price: 7.99, description: "Classic Italian coffee-flavored dessert" },
        { id: 9, name: "Gelato", price: 5.99, description: "Artisanal Italian ice cream" }
      ]
    }
  },
  {
    id: 2,
    name: "Sushi Zen",
    cuisine: "Japanese",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400",
    description: "Fresh sushi and traditional Japanese dishes",
    rating: 4.7,
    menu: {
      appetizers: [
        { id: 10, name: "Edamame", price: 6.99, description: "Steamed soybeans with sea salt" },
        { id: 11, name: "Gyoza", price: 9.99, description: "Pan-fried pork dumplings" },
        { id: 12, name: "Miso Soup", price: 4.99, description: "Traditional soybean paste soup" }
      ],
      mains: [
        { id: 13, name: "Salmon Sashimi", price: 24.99, description: "Fresh salmon slices" },
        { id: 14, name: "California Roll", price: 12.99, description: "Crab, avocado, and cucumber roll" },
        { id: 15, name: "Chicken Teriyaki", price: 18.99, description: "Grilled chicken with teriyaki sauce" },
        { id: 16, name: "Beef Ramen", price: 16.99, description: "Rich broth with tender beef and noodles" }
      ],
      desserts: [
        { id: 17, name: "Mochi Ice Cream", price: 8.99, description: "Sweet rice cake with ice cream filling" },
        { id: 18, name: "Dorayaki", price: 6.99, description: "Pancake sandwich with sweet filling" }
      ]
    }
  },
  {
    id: 3,
    name: "Tex-Mex Grill",
    cuisine: "Mexican",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400",
    description: "Spicy Tex-Mex favorites and craft cocktails",
    rating: 4.3,
    menu: {
      appetizers: [
        { id: 19, name: "Guacamole & Chips", price: 9.99, description: "Fresh avocado dip with tortilla chips" },
        { id: 20, name: "Nachos Supreme", price: 13.99, description: "Loaded nachos with cheese and jalapeños" },
        { id: 21, name: "Quesadillas", price: 11.99, description: "Grilled tortillas with cheese and peppers" }
      ],
      mains: [
        { id: 22, name: "Beef Tacos", price: 14.99, description: "Three soft tacos with seasoned beef" },
        { id: 23, name: "Chicken Burrito", price: 16.99, description: "Large burrito with grilled chicken and rice" },
        { id: 24, name: "Fajitas", price: 19.99, description: "Sizzling peppers and onions with your choice of meat" },
        { id: 25, name: "Enchiladas", price: 17.99, description: "Rolled tortillas with sauce and cheese" }
      ],
      desserts: [
        { id: 26, name: "Churros", price: 7.99, description: "Fried dough with cinnamon sugar" },
        { id: 27, name: "Flan", price: 6.99, description: "Traditional caramel custard" }
      ]
    }
  }
];
