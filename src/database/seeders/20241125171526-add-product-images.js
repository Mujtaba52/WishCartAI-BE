'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ProductImages', [
      {
        "productId": 1,
        "image_url": "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
      },
      {
        "productId": 2,
        "image_url": "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png"
      },
      {
        "productId": 3,
        "image_url": "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png"
      },
      {
        "productId": 4,
        "image_url": "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png"
      },
      {
        "productId": 5,
        "image_url": "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png"
      },
      {
        "productId": 6,
        "image_url": "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/1.png"
      },
      {
        "productId": 6,
        "image_url": "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/2.png"
      },
      {
        "productId": 6,
        "image_url": "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/3.png"
      },
      {
        "productId": 7,
        "image_url": "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/1.png"
      },
      {
        "productId": 7,
        "image_url": "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/2.png"
      },
      {
        "productId": 7,
        "image_url": "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/3.png"
      },
      {
        "productId": 8,
        "image_url": "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/1.png"
      },
      {
        "productId": 8,
        "image_url": "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/2.png"
      },
      {
        "productId": 8,
        "image_url": "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/3.png"
      },
      {
        "productId": 9,
        "image_url": "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/1.png"
      },
      {
        "productId": 9,
        "image_url": "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/2.png"
      },
      {
        "productId": 9,
        "image_url": "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/3.png"
      },
      {
        "productId": 10,
        "image_url": "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/1.png"
      },
      {
        "productId": 10,
        "image_url": "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/2.png"
      },
      {
        "productId": 10,
        "image_url": "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/3.png"
      },
      {
        "productId": 11,
        "image_url": "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/1.png"
      },
      {
        "productId": 11,
        "image_url": "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/2.png"
      },
      {
        "productId": 11,
        "image_url": "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/3.png"
      },
      {
        "productId": 12,
        "image_url": "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/1.png"
      },
      {
        "productId": 12,
        "image_url": "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/2.png"
      },
      {
        "productId": 12,
        "image_url": "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/3.png"
      },
      {
        "productId": 13,
        "image_url": "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/1.png"
      },
      {
        "productId": 13,
        "image_url": "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/2.png"
      },
      {
        "productId": 13,
        "image_url": "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/3.png"
      },
      {
        "productId": 14,
        "image_url": "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/1.png"
      },
      {
        "productId": 14,
        "image_url": "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/2.png"
      },
      {
        "productId": 14,
        "image_url": "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/3.png"
      },
      {
        "productId": 15,
        "image_url": "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/1.png"
      },
      {
        "productId": 15,
        "image_url": "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/2.png"
      },
      {
        "productId": 15,
        "image_url": "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/3.png"
      },
      {
        "productId": 16,
        "image_url": "https://cdn.dummyjson.com/products/images/groceries/Apple/1.png"
      },
      {
        "productId": 17,
        "image_url": "https://cdn.dummyjson.com/products/images/groceries/Beef%20Steak/1.png"
      },
      {
        "productId": 18,
        "image_url": "https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/1.png"
      },
      {
        "productId": 19,
        "image_url": "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/1.png"
      },
      {
        "productId": 19,
        "image_url": "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/2.png"
      },
      {
        "productId": 20,
        "image_url": "https://cdn.dummyjson.com/products/images/groceries/Cooking%20Oil/1.png"
      },
      {
        "productId": 21,
        "image_url": "https://cdn.dummyjson.com/products/images/groceries/Cucumber/1.png"
      },
      {
        "productId": 22,
        "image_url": "https://cdn.dummyjson.com/products/images/groceries/Dog%20Food/1.png"
      },
      {
        "productId": 23,
        "image_url": "https://cdn.dummyjson.com/products/images/groceries/Eggs/1.png"
      },
      {
        "productId": 24,
        "image_url": "https://cdn.dummyjson.com/products/images/groceries/Fish%20Steak/1.png"
      },
      {
        "productId": 25,
        "image_url": "https://cdn.dummyjson.com/products/images/groceries/Green%20Bell%20Pepper/1.png"
      },
      {
        "productId": 26,
        "image_url": "https://cdn.dummyjson.com/products/images/groceries/Green%20Chili%20Pepper/1.png"
      },
      {
        "productId": 27,
        "image_url": "https://cdn.dummyjson.com/products/images/groceries/Honey%20Jar/1.png"
      },
      {
        "productId": 28,
        "image_url": "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/1.png"
      },
      {
        "productId": 28,
        "image_url": "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/2.png"
      },
      {
        "productId": 28,
        "image_url": "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/3.png"
      },
      {
        "productId": 28,
        "image_url": "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/4.png"
      },
      {
        "productId": 29,
        "image_url": "https://cdn.dummyjson.com/products/images/groceries/Juice/1.png"
      },
      {
        "productId": 30,
        "image_url": "https://cdn.dummyjson.com/products/images/groceries/Kiwi/1.png"
      },
      {
        "productId": 31,
        "image_url": "https://cdn.dummyjson.com/products/images/groceries/Lemon/1.png"
      },
      {
        "productId": 32,
        "image_url": "https://cdn.dummyjson.com/products/images/groceries/Milk/1.png"
      },
      {
        "productId": 33,
        "image_url": "https://cdn.dummyjson.com/products/images/groceries/Mulberry/1.png"
      },
      {
        "productId": 34,
        "image_url": "https://cdn.dummyjson.com/products/images/groceries/Nescafe%20Coffee/1.png"
      },
      {
        "productId": 35,
        "image_url": "https://cdn.dummyjson.com/products/images/groceries/Potatoes/1.png"
      },
      {
        "productId": 36,
        "image_url": "https://cdn.dummyjson.com/products/images/groceries/Protein%20Powder/1.png"
      },
      {
        "productId": 37,
        "image_url": "https://cdn.dummyjson.com/products/images/groceries/Red%20Onions/1.png"
      },
      {
        "productId": 38,
        "image_url": "https://cdn.dummyjson.com/products/images/groceries/Rice/1.png"
      },
      {
        "productId": 39,
        "image_url": "https://cdn.dummyjson.com/products/images/groceries/Soft%20Drinks/1.png"
      },
      {
        "productId": 40,
        "image_url": "https://cdn.dummyjson.com/products/images/groceries/Strawberry/1.png"
      },
      {
        "productId": 41,
        "image_url": "https://cdn.dummyjson.com/products/images/groceries/Tissue%20Paper%20Box/1.png"
      },
      {
        "productId": 41,
        "image_url": "https://cdn.dummyjson.com/products/images/groceries/Tissue%20Paper%20Box/2.png"
      },
      {
        "productId": 42,
        "image_url": "https://cdn.dummyjson.com/products/images/groceries/Water/1.png"
      },
      {
        "productId": 43,
        "image_url": "https://cdn.dummyjson.com/products/images/home-decoration/Decoration%20Swing/1.png"
      },
      {
        "productId": 43,
        "image_url": "https://cdn.dummyjson.com/products/images/home-decoration/Decoration%20Swing/2.png"
      },
      {
        "productId": 43,
        "image_url": "https://cdn.dummyjson.com/products/images/home-decoration/Decoration%20Swing/3.png"
      },
      {
        "productId": 44,
        "image_url": "https://cdn.dummyjson.com/products/images/home-decoration/Family%20Tree%20Photo%20Frame/1.png"
      },
      {
        "productId": 45,
        "image_url": "https://cdn.dummyjson.com/products/images/home-decoration/House%20Showpiece%20Plant/1.png"
      },
      {
        "productId": 45,
        "image_url": "https://cdn.dummyjson.com/products/images/home-decoration/House%20Showpiece%20Plant/2.png"
      },
      {
        "productId": 45,
        "image_url": "https://cdn.dummyjson.com/products/images/home-decoration/House%20Showpiece%20Plant/3.png"
      },
      {
        "productId": 46,
        "image_url": "https://cdn.dummyjson.com/products/images/home-decoration/Plant%20Pot/1.png"
      },
      {
        "productId": 46,
        "image_url": "https://cdn.dummyjson.com/products/images/home-decoration/Plant%20Pot/2.png"
      },
      {
        "productId": 46,
        "image_url": "https://cdn.dummyjson.com/products/images/home-decoration/Plant%20Pot/3.png"
      },
      {
        "productId": 46,
        "image_url": "https://cdn.dummyjson.com/products/images/home-decoration/Plant%20Pot/4.png"
      },
      {
        "productId": 47,
        "image_url": "https://cdn.dummyjson.com/products/images/home-decoration/Table%20Lamp/1.png"
      },
      {
        "productId": 48,
        "image_url": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Bamboo%20Spatula/1.png"
      },
      {
        "productId": 49,
        "image_url": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Black%20Aluminium%20Cup/1.png"
      },
      {
        "productId": 49,
        "image_url": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Black%20Aluminium%20Cup/2.png"
      },
      {
        "productId": 50,
        "image_url": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Black%20Whisk/1.png"
      },
      {
        "productId": 51,
        "image_url": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Boxed%20Blender/1.png"
      },
      {
        "productId": 51,
        "image_url": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Boxed%20Blender/2.png"
      },
      {
        "productId": 51,
        "image_url": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Boxed%20Blender/3.png"
      },
      {
        "productId": 51,
        "image_url": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Boxed%20Blender/4.png"
      },
      {
        "productId": 52,
        "image_url": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Carbon%20Steel%20Wok/1.png"
      },
      {
        "productId": 53,
        "image_url": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Chopping%20Board/1.png"
      },
      {
        "productId": 54,
        "image_url": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Citrus%20Squeezer%20Yellow/1.png"
      },
      {
        "productId": 55,
        "image_url": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Egg%20Slicer/1.png"
      },
      {
        "productId": 56,
        "image_url": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Electric%20Stove/1.png"
      },
      {
        "productId": 56,
        "image_url": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Electric%20Stove/2.png"
      },
      {
        "productId": 56,
        "image_url": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Electric%20Stove/3.png"
      },
      {
        "productId": 56,
        "image_url": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Electric%20Stove/4.png"
      },
      {
        "productId": 57,
        "image_url": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Fine%20Mesh%20Strainer/1.png"
      },
      {
        "productId": 58,
        "image_url": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Fork/1.png"
      },
      {
        "productId": 59,
        "image_url": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Glass/1.png"
      },
      {
        "productId": 60,
        "image_url": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Grater%20Black/1.png"
      },
      {
        "productId": 61,
        "image_url": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Hand%20Blender/1.png"
      },
      {
        "productId": 62,
        "image_url": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Ice%20Cube%20Tray/1.png"
      },
      {
        "productId": 63,
        "image_url": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Kitchen%20Sieve/1.png"
      },
      {
        "productId": 64,
        "image_url": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Knife/1.png"
      },
      {
        "productId": 65,
        "image_url": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Lunch%20Box/1.png"
      },
      {
        "productId": 66,
        "image_url": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Microwave%20Oven/1.png"
      },
      {
        "productId": 66,
        "image_url": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Microwave%20Oven/2.png"
      },
      {
        "productId": 66,
        "image_url": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Microwave%20Oven/3.png"
      },
      {
        "productId": 66,
        "image_url": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Microwave%20Oven/4.png"
      },
      {
        "productId": 67,
        "image_url": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Mug%20Tree%20Stand/1.png"
      },
      {
        "productId": 67,
        "image_url": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Mug%20Tree%20Stand/2.png"
      },
      {
        "productId": 68,
        "image_url": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Pan/1.png"
      },
      {
        "productId": 69,
        "image_url": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Plate/1.png"
      },
      {
        "productId": 70,
        "image_url": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Red%20Tongs/1.png"
      },
      {
        "productId": 71,
        "image_url": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Silver%20Pot%20With%20Glass%20Cap/1.png"
      },
      {
        "productId": 72,
        "image_url": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Slotted%20Turner/1.png"
      },
      {
        "productId": 73,
        "image_url": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Spice%20Rack/1.png"
      },
      {
        "productId": 74,
        "image_url": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Spoon/1.png"
      },
      {
        "productId": 75,
        "image_url": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Tray/1.png"
      },
      {
        "productId": 76,
        "image_url": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Wooden%20Rolling%20Pin/1.png"
      },
      {
        "productId": 77,
        "image_url": "https://cdn.dummyjson.com/products/images/kitchen-accessories/Yellow%20Peeler/1.png"
      },
      {
        "productId": 78,
        "image_url": "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/1.png"
      },
      {
        "productId": 78,
        "image_url": "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/2.png"
      },
      {
        "productId": 78,
        "image_url": "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/3.png"
      },
      {
        "productId": 79,
        "image_url": "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/1.png"
      },
      {
        "productId": 79,
        "image_url": "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/2.png"
      },
      {
        "productId": 79,
        "image_url": "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/3.png"
      },
      {
        "productId": 80,
        "image_url": "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/1.png"
      },
      {
        "productId": 80,
        "image_url": "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/2.png"
      },
      {
        "productId": 80,
        "image_url": "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/3.png"
      },
      {
        "productId": 81,
        "image_url": "https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%20920/1.png"
      },
      {
        "productId": 81,
        "image_url": "https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%20920/2.png"
      },
      {
        "productId": 81,
        "image_url": "https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%20920/3.png"
      },
      {
        "productId": 82,
        "image_url": "https://cdn.dummyjson.com/products/images/laptops/New%20DELL%20XPS%2013%209300%20Laptop/1.png"
      },
      {
        "productId": 82,
        "image_url": "https://cdn.dummyjson.com/products/images/laptops/New%20DELL%20XPS%2013%209300%20Laptop/2.png"
      },
      {
        "productId": 82,
        "image_url": "https://cdn.dummyjson.com/products/images/laptops/New%20DELL%20XPS%2013%209300%20Laptop/3.png"
      },
      {
        "productId": 83,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20&%20Black%20Check%20Shirt/1.png"
      },
      {
        "productId": 83,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20&%20Black%20Check%20Shirt/2.png"
      },
      {
        "productId": 83,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20&%20Black%20Check%20Shirt/3.png"
      },
      {
        "productId": 83,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20&%20Black%20Check%20Shirt/4.png"
      },
      {
        "productId": 84,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-shirts/Gigabyte%20Aorus%20Men%20Tshirt/1.png"
      },
      {
        "productId": 84,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-shirts/Gigabyte%20Aorus%20Men%20Tshirt/2.png"
      },
      {
        "productId": 84,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-shirts/Gigabyte%20Aorus%20Men%20Tshirt/3.png"
      },
      {
        "productId": 84,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-shirts/Gigabyte%20Aorus%20Men%20Tshirt/4.png"
      },
      {
        "productId": 85,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Plaid%20Shirt/1.png"
      },
      {
        "productId": 85,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Plaid%20Shirt/2.png"
      },
      {
        "productId": 85,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Plaid%20Shirt/3.png"
      },
      {
        "productId": 85,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Plaid%20Shirt/4.png"
      },
      {
        "productId": 86,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Short%20Sleeve%20Shirt/1.png"
      },
      {
        "productId": 86,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Short%20Sleeve%20Shirt/2.png"
      },
      {
        "productId": 86,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Short%20Sleeve%20Shirt/3.png"
      },
      {
        "productId": 86,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Short%20Sleeve%20Shirt/4.png"
      },
      {
        "productId": 87,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-shirts/Men%20Check%20Shirt/1.png"
      },
      {
        "productId": 87,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-shirts/Men%20Check%20Shirt/2.png"
      },
      {
        "productId": 87,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-shirts/Men%20Check%20Shirt/3.png"
      },
      {
        "productId": 87,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-shirts/Men%20Check%20Shirt/4.png"
      },
      {
        "productId": 88,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Red%20And%20Black/1.png"
      },
      {
        "productId": 88,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Red%20And%20Black/2.png"
      },
      {
        "productId": 88,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Red%20And%20Black/3.png"
      },
      {
        "productId": 88,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Red%20And%20Black/4.png"
      },
      {
        "productId": 89,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Baseball%20Cleats/1.png"
      },
      {
        "productId": 89,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Baseball%20Cleats/2.png"
      },
      {
        "productId": 89,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Baseball%20Cleats/3.png"
      },
      {
        "productId": 89,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Baseball%20Cleats/4.png"
      },
      {
        "productId": 90,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-shoes/Puma%20Future%20Rider%20Trainers/1.png"
      },
      {
        "productId": 90,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-shoes/Puma%20Future%20Rider%20Trainers/2.png"
      },
      {
        "productId": 90,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-shoes/Puma%20Future%20Rider%20Trainers/3.png"
      },
      {
        "productId": 90,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-shoes/Puma%20Future%20Rider%20Trainers/4.png"
      },
      {
        "productId": 91,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20&%20Red/1.png"
      },
      {
        "productId": 91,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20&%20Red/2.png"
      },
      {
        "productId": 91,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20&%20Red/3.png"
      },
      {
        "productId": 91,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20&%20Red/4.png"
      },
      {
        "productId": 92,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20Red/1.png"
      },
      {
        "productId": 92,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20Red/2.png"
      },
      {
        "productId": 92,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20Red/3.png"
      },
      {
        "productId": 92,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20Red/4.png"
      },
      {
        "productId": 93,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/1.png"
      },
      {
        "productId": 93,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/2.png"
      },
      {
        "productId": 93,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/3.png"
      },
      {
        "productId": 94,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-watches/Longines%20Master%20Collection/1.png"
      },
      {
        "productId": 94,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-watches/Longines%20Master%20Collection/2.png"
      },
      {
        "productId": 94,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-watches/Longines%20Master%20Collection/3.png"
      },
      {
        "productId": 95,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Date%20Black%20Dial/1.png"
      },
      {
        "productId": 95,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Date%20Black%20Dial/2.png"
      },
      {
        "productId": 95,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Date%20Black%20Dial/3.png"
      },
      {
        "productId": 96,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Moonphase/1.png"
      },
      {
        "productId": 96,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Moonphase/2.png"
      },
      {
        "productId": 96,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Moonphase/3.png"
      },
      {
        "productId": 97,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Datejust/1.png"
      },
      {
        "productId": 97,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Datejust/2.png"
      },
      {
        "productId": 97,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Datejust/3.png"
      },
      {
        "productId": 98,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/1.png"
      },
      {
        "productId": 98,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/2.png"
      },
      {
        "productId": 98,
        "image_url": "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/3.png"
      },
      {
        "productId": 99,
        "image_url": "https://cdn.dummyjson.com/products/images/mobile-accessories/Amazon%20Echo%20Plus/1.png"
      },
      {
        "productId": 99,
        "image_url": "https://cdn.dummyjson.com/products/images/mobile-accessories/Amazon%20Echo%20Plus/2.png"
      },
      {
        "productId": 100,
        "image_url": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/1.png"
      },
      {
        "productId": 100,
        "image_url": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/2.png"
      },
      {
        "productId": 100,
        "image_url": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/3.png"
      },
      {
        "productId": 101,
        "image_url": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Max%20Silver/1.png"
      },
      {
        "productId": 102,
        "image_url": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpower%20Wireless%20Charger/1.png"
      },
      {
        "productId": 103,
        "image_url": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20HomePod%20Mini%20Cosmic%20Grey/1.png"
      },
      {
        "productId": 104,
        "image_url": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20iPhone%20Charger/1.png"
      },
      {
        "productId": 104,
        "image_url": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20iPhone%20Charger/2.png"
      },
      {
        "productId": 105,
        "image_url": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20MagSafe%20Battery%20Pack/1.png"
      },
      {
        "productId": 105,
        "image_url": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20MagSafe%20Battery%20Pack/2.png"
      },
      {
        "productId": 106,
        "image_url": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Watch%20Series%204%20Gold/1.png"
      },
      {
        "productId": 106,
        "image_url": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Watch%20Series%204%20Gold/2.png"
      },
      {
        "productId": 106,
        "image_url": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Watch%20Series%204%20Gold/3.png"
      },
      {
        "productId": 107,
        "image_url": "https://cdn.dummyjson.com/products/images/mobile-accessories/Beats%20Flex%20Wireless%20Earphones/1.png"
      },
      {
        "productId": 108,
        "image_url": "https://cdn.dummyjson.com/products/images/mobile-accessories/iPhone%2012%20Silicone%20Case%20with%20MagSafe%20Plum/1.png"
      },
      {
        "productId": 108,
        "image_url": "https://cdn.dummyjson.com/products/images/mobile-accessories/iPhone%2012%20Silicone%20Case%20with%20MagSafe%20Plum/2.png"
      },
      {
        "productId": 108,
        "image_url": "https://cdn.dummyjson.com/products/images/mobile-accessories/iPhone%2012%20Silicone%20Case%20with%20MagSafe%20Plum/3.png"
      },
      {
        "productId": 108,
        "image_url": "https://cdn.dummyjson.com/products/images/mobile-accessories/iPhone%2012%20Silicone%20Case%20with%20MagSafe%20Plum/4.png"
      },
      {
        "productId": 109,
        "image_url": "https://cdn.dummyjson.com/products/images/mobile-accessories/Monopod/1.png"
      },
      {
        "productId": 109,
        "image_url": "https://cdn.dummyjson.com/products/images/mobile-accessories/Monopod/2.png"
      },
      {
        "productId": 110,
        "image_url": "https://cdn.dummyjson.com/products/images/mobile-accessories/Selfie%20Lamp%20with%20iPhone/1.png"
      },
      {
        "productId": 111,
        "image_url": "https://cdn.dummyjson.com/products/images/mobile-accessories/Selfie%20Stick%20Monopod/1.png"
      },
      {
        "productId": 112,
        "image_url": "https://cdn.dummyjson.com/products/images/mobile-accessories/TV%20Studio%20Camera%20Pedestal/1.png"
      },
      {
        "productId": 113,
        "image_url": "https://cdn.dummyjson.com/products/images/motorcycle/Generic%20Motorcycle/1.png"
      },
      {
        "productId": 113,
        "image_url": "https://cdn.dummyjson.com/products/images/motorcycle/Generic%20Motorcycle/2.png"
      },
      {
        "productId": 113,
        "image_url": "https://cdn.dummyjson.com/products/images/motorcycle/Generic%20Motorcycle/3.png"
      },
      {
        "productId": 113,
        "image_url": "https://cdn.dummyjson.com/products/images/motorcycle/Generic%20Motorcycle/4.png"
      },
      {
        "productId": 114,
        "image_url": "https://cdn.dummyjson.com/products/images/motorcycle/Kawasaki%20Z800/1.png"
      },
      {
        "productId": 114,
        "image_url": "https://cdn.dummyjson.com/products/images/motorcycle/Kawasaki%20Z800/2.png"
      },
      {
        "productId": 114,
        "image_url": "https://cdn.dummyjson.com/products/images/motorcycle/Kawasaki%20Z800/3.png"
      },
      {
        "productId": 114,
        "image_url": "https://cdn.dummyjson.com/products/images/motorcycle/Kawasaki%20Z800/4.png"
      },
      {
        "productId": 115,
        "image_url": "https://cdn.dummyjson.com/products/images/motorcycle/MotoGP%20CI.H1/1.png"
      },
      {
        "productId": 115,
        "image_url": "https://cdn.dummyjson.com/products/images/motorcycle/MotoGP%20CI.H1/2.png"
      },
      {
        "productId": 115,
        "image_url": "https://cdn.dummyjson.com/products/images/motorcycle/MotoGP%20CI.H1/3.png"
      },
      {
        "productId": 115,
        "image_url": "https://cdn.dummyjson.com/products/images/motorcycle/MotoGP%20CI.H1/4.png"
      },
      {
        "productId": 116,
        "image_url": "https://cdn.dummyjson.com/products/images/motorcycle/Scooter%20Motorcycle/1.png"
      },
      {
        "productId": 116,
        "image_url": "https://cdn.dummyjson.com/products/images/motorcycle/Scooter%20Motorcycle/2.png"
      },
      {
        "productId": 116,
        "image_url": "https://cdn.dummyjson.com/products/images/motorcycle/Scooter%20Motorcycle/3.png"
      },
      {
        "productId": 116,
        "image_url": "https://cdn.dummyjson.com/products/images/motorcycle/Scooter%20Motorcycle/4.png"
      },
      {
        "productId": 117,
        "image_url": "https://cdn.dummyjson.com/products/images/motorcycle/Sportbike%20Motorcycle/1.png"
      },
      {
        "productId": 117,
        "image_url": "https://cdn.dummyjson.com/products/images/motorcycle/Sportbike%20Motorcycle/2.png"
      },
      {
        "productId": 117,
        "image_url": "https://cdn.dummyjson.com/products/images/motorcycle/Sportbike%20Motorcycle/3.png"
      },
      {
        "productId": 117,
        "image_url": "https://cdn.dummyjson.com/products/images/motorcycle/Sportbike%20Motorcycle/4.png"
      },
      {
        "productId": 118,
        "image_url": "https://cdn.dummyjson.com/products/images/skin-care/Attitude%20Super%20Leaves%20Hand%20Soap/1.png"
      },
      {
        "productId": 118,
        "image_url": "https://cdn.dummyjson.com/products/images/skin-care/Attitude%20Super%20Leaves%20Hand%20Soap/2.png"
      },
      {
        "productId": 118,
        "image_url": "https://cdn.dummyjson.com/products/images/skin-care/Attitude%20Super%20Leaves%20Hand%20Soap/3.png"
      },
      {
        "productId": 119,
        "image_url": "https://cdn.dummyjson.com/products/images/skin-care/Olay%20Ultra%20Moisture%20Shea%20Butter%20Body%20Wash/1.png"
      },
      {
        "productId": 119,
        "image_url": "https://cdn.dummyjson.com/products/images/skin-care/Olay%20Ultra%20Moisture%20Shea%20Butter%20Body%20Wash/2.png"
      },
      {
        "productId": 119,
        "image_url": "https://cdn.dummyjson.com/products/images/skin-care/Olay%20Ultra%20Moisture%20Shea%20Butter%20Body%20Wash/3.png"
      },
      {
        "productId": 120,
        "image_url": "https://cdn.dummyjson.com/products/images/skin-care/Vaseline%20Men%20Body%20and%20Face%20Lotion/1.png"
      },
      {
        "productId": 120,
        "image_url": "https://cdn.dummyjson.com/products/images/skin-care/Vaseline%20Men%20Body%20and%20Face%20Lotion/2.png"
      },
      {
        "productId": 120,
        "image_url": "https://cdn.dummyjson.com/products/images/skin-care/Vaseline%20Men%20Body%20and%20Face%20Lotion/3.png"
      },
      {
        "productId": 121,
        "image_url": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/1.png"
      },
      {
        "productId": 121,
        "image_url": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/2.png"
      },
      {
        "productId": 121,
        "image_url": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/3.png"
      },
      {
        "productId": 122,
        "image_url": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%206/1.png"
      },
      {
        "productId": 122,
        "image_url": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%206/2.png"
      },
      {
        "productId": 122,
        "image_url": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%206/3.png"
      },
      {
        "productId": 123,
        "image_url": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/1.png"
      },
      {
        "productId": 123,
        "image_url": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/2.png"
      },
      {
        "productId": 123,
        "image_url": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/3.png"
      },
      {
        "productId": 124,
        "image_url": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/1.png"
      },
      {
        "productId": 124,
        "image_url": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/2.png"
      },
      {
        "productId": 124,
        "image_url": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/3.png"
      },
      {
        "productId": 125,
        "image_url": "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20A57/1.png"
      },
      {
        "productId": 125,
        "image_url": "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20A57/2.png"
      },
      {
        "productId": 125,
        "image_url": "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20A57/3.png"
      },
      {
        "productId": 126,
        "image_url": "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20F19%20Pro%20Plus/1.png"
      },
      {
        "productId": 126,
        "image_url": "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20F19%20Pro%20Plus/2.png"
      },
      {
        "productId": 126,
        "image_url": "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20F19%20Pro%20Plus/3.png"
      },
      {
        "productId": 127,
        "image_url": "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20K1/1.png"
      },
      {
        "productId": 127,
        "image_url": "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20K1/2.png"
      },
      {
        "productId": 127,
        "image_url": "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20K1/3.png"
      },
      {
        "productId": 127,
        "image_url": "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20K1/4.png"
      },
      {
        "productId": 128,
        "image_url": "https://cdn.dummyjson.com/products/images/smartphones/Realme%20C35/1.png"
      },
      {
        "productId": 128,
        "image_url": "https://cdn.dummyjson.com/products/images/smartphones/Realme%20C35/2.png"
      },
      {
        "productId": 128,
        "image_url": "https://cdn.dummyjson.com/products/images/smartphones/Realme%20C35/3.png"
      },
      {
        "productId": 129,
        "image_url": "https://cdn.dummyjson.com/products/images/smartphones/Realme%20X/1.png"
      },
      {
        "productId": 129,
        "image_url": "https://cdn.dummyjson.com/products/images/smartphones/Realme%20X/2.png"
      },
      {
        "productId": 129,
        "image_url": "https://cdn.dummyjson.com/products/images/smartphones/Realme%20X/3.png"
      },
      {
        "productId": 130,
        "image_url": "https://cdn.dummyjson.com/products/images/smartphones/Realme%20XT/1.png"
      },
      {
        "productId": 130,
        "image_url": "https://cdn.dummyjson.com/products/images/smartphones/Realme%20XT/2.png"
      },
      {
        "productId": 130,
        "image_url": "https://cdn.dummyjson.com/products/images/smartphones/Realme%20XT/3.png"
      },
      {
        "productId": 131,
        "image_url": "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S7/1.png"
      },
      {
        "productId": 131,
        "image_url": "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S7/2.png"
      },
      {
        "productId": 131,
        "image_url": "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S7/3.png"
      },
      {
        "productId": 132,
        "image_url": "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S8/1.png"
      },
      {
        "productId": 132,
        "image_url": "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S8/2.png"
      },
      {
        "productId": 132,
        "image_url": "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S8/3.png"
      },
      {
        "productId": 133,
        "image_url": "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S10/1.png"
      },
      {
        "productId": 133,
        "image_url": "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S10/2.png"
      },
      {
        "productId": 133,
        "image_url": "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S10/3.png"
      },
      {
        "productId": 134,
        "image_url": "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20S1/1.png"
      },
      {
        "productId": 134,
        "image_url": "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20S1/2.png"
      },
      {
        "productId": 134,
        "image_url": "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20S1/3.png"
      },
      {
        "productId": 135,
        "image_url": "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20V9/1.png"
      },
      {
        "productId": 135,
        "image_url": "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20V9/2.png"
      },
      {
        "productId": 135,
        "image_url": "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20V9/3.png"
      },
      {
        "productId": 136,
        "image_url": "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20X21/1.png"
      },
      {
        "productId": 136,
        "image_url": "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20X21/2.png"
      },
      {
        "productId": 136,
        "image_url": "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20X21/3.png"
      },
      {
        "productId": 137,
        "image_url": "https://cdn.dummyjson.com/products/images/sports-accessories/American%20Football/1.png"
      },
      {
        "productId": 138,
        "image_url": "https://cdn.dummyjson.com/products/images/sports-accessories/Baseball%20Ball/1.png"
      },
      {
        "productId": 139,
        "image_url": "https://cdn.dummyjson.com/products/images/sports-accessories/Baseball%20Glove/1.png"
      },
      {
        "productId": 139,
        "image_url": "https://cdn.dummyjson.com/products/images/sports-accessories/Baseball%20Glove/2.png"
      },
      {
        "productId": 139,
        "image_url": "https://cdn.dummyjson.com/products/images/sports-accessories/Baseball%20Glove/3.png"
      },
      {
        "productId": 140,
        "image_url": "https://cdn.dummyjson.com/products/images/sports-accessories/Basketball/1.png"
      },
      {
        "productId": 141,
        "image_url": "https://cdn.dummyjson.com/products/images/sports-accessories/Basketball%20Rim/1.png"
      },
      {
        "productId": 142,
        "image_url": "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Ball/1.png"
      },
      {
        "productId": 143,
        "image_url": "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Bat/1.png"
      },
      {
        "productId": 144,
        "image_url": "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Helmet/1.png"
      },
      {
        "productId": 144,
        "image_url": "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Helmet/2.png"
      },
      {
        "productId": 144,
        "image_url": "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Helmet/3.png"
      },
      {
        "productId": 144,
        "image_url": "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Helmet/4.png"
      },
      {
        "productId": 145,
        "image_url": "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Wicket/1.png"
      },
      {
        "productId": 146,
        "image_url": "https://cdn.dummyjson.com/products/images/sports-accessories/Feather%20Shuttlecock/1.png"
      },
      {
        "productId": 147,
        "image_url": "https://cdn.dummyjson.com/products/images/sports-accessories/Football/1.png"
      },
      {
        "productId": 148,
        "image_url": "https://cdn.dummyjson.com/products/images/sports-accessories/Golf%20Ball/1.png"
      },
      {
        "productId": 149,
        "image_url": "https://cdn.dummyjson.com/products/images/sports-accessories/Iron%20Golf/1.png"
      },
      {
        "productId": 150,
        "image_url": "https://cdn.dummyjson.com/products/images/sports-accessories/Metal%20Baseball%20Bat/1.png"
      },
      {
        "productId": 151,
        "image_url": "https://cdn.dummyjson.com/products/images/sports-accessories/Tennis%20Ball/1.png"
      },
      {
        "productId": 152,
        "image_url": "https://cdn.dummyjson.com/products/images/sports-accessories/Tennis%20Racket/1.png"
      },
      {
        "productId": 153,
        "image_url": "https://cdn.dummyjson.com/products/images/sports-accessories/Volleyball/1.png"
      },
      {
        "productId": 154,
        "image_url": "https://cdn.dummyjson.com/products/images/sunglasses/Black%20Sun%20Glasses/1.png"
      },
      {
        "productId": 154,
        "image_url": "https://cdn.dummyjson.com/products/images/sunglasses/Black%20Sun%20Glasses/2.png"
      },
      {
        "productId": 154,
        "image_url": "https://cdn.dummyjson.com/products/images/sunglasses/Black%20Sun%20Glasses/3.png"
      },
      {
        "productId": 155,
        "image_url": "https://cdn.dummyjson.com/products/images/sunglasses/Classic%20Sun%20Glasses/1.png"
      },
      {
        "productId": 155,
        "image_url": "https://cdn.dummyjson.com/products/images/sunglasses/Classic%20Sun%20Glasses/2.png"
      },
      {
        "productId": 155,
        "image_url": "https://cdn.dummyjson.com/products/images/sunglasses/Classic%20Sun%20Glasses/3.png"
      },
      {
        "productId": 156,
        "image_url": "https://cdn.dummyjson.com/products/images/sunglasses/Green%20and%20Black%20Glasses/1.png"
      },
      {
        "productId": 156,
        "image_url": "https://cdn.dummyjson.com/products/images/sunglasses/Green%20and%20Black%20Glasses/2.png"
      },
      {
        "productId": 156,
        "image_url": "https://cdn.dummyjson.com/products/images/sunglasses/Green%20and%20Black%20Glasses/3.png"
      },
      {
        "productId": 157,
        "image_url": "https://cdn.dummyjson.com/products/images/sunglasses/Party%20Glasses/1.png"
      },
      {
        "productId": 157,
        "image_url": "https://cdn.dummyjson.com/products/images/sunglasses/Party%20Glasses/2.png"
      },
      {
        "productId": 157,
        "image_url": "https://cdn.dummyjson.com/products/images/sunglasses/Party%20Glasses/3.png"
      },
      {
        "productId": 158,
        "image_url": "https://cdn.dummyjson.com/products/images/sunglasses/Sunglasses/1.png"
      },
      {
        "productId": 158,
        "image_url": "https://cdn.dummyjson.com/products/images/sunglasses/Sunglasses/2.png"
      },
      {
        "productId": 158,
        "image_url": "https://cdn.dummyjson.com/products/images/sunglasses/Sunglasses/3.png"
      },
      {
        "productId": 159,
        "image_url": "https://cdn.dummyjson.com/products/images/tablets/iPad%20Mini%202021%20Starlight/1.png"
      },
      {
        "productId": 159,
        "image_url": "https://cdn.dummyjson.com/products/images/tablets/iPad%20Mini%202021%20Starlight/2.png"
      },
      {
        "productId": 159,
        "image_url": "https://cdn.dummyjson.com/products/images/tablets/iPad%20Mini%202021%20Starlight/3.png"
      },
      {
        "productId": 159,
        "image_url": "https://cdn.dummyjson.com/products/images/tablets/iPad%20Mini%202021%20Starlight/4.png"
      },
      {
        "productId": 160,
        "image_url": "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20S8%20Plus%20Grey/1.png"
      },
      {
        "productId": 160,
        "image_url": "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20S8%20Plus%20Grey/2.png"
      },
      {
        "productId": 160,
        "image_url": "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20S8%20Plus%20Grey/3.png"
      },
      {
        "productId": 160,
        "image_url": "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20S8%20Plus%20Grey/4.png"
      },
      {
        "productId": 161,
        "image_url": "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20White/1.png"
      },
      {
        "productId": 161,
        "image_url": "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20White/2.png"
      },
      {
        "productId": 161,
        "image_url": "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20White/3.png"
      },
      {
        "productId": 161,
        "image_url": "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20White/4.png"
      },
      {
        "productId": 162,
        "image_url": "https://cdn.dummyjson.com/products/images/tops/Blue%20Frock/1.png"
      },
      {
        "productId": 162,
        "image_url": "https://cdn.dummyjson.com/products/images/tops/Blue%20Frock/2.png"
      },
      {
        "productId": 162,
        "image_url": "https://cdn.dummyjson.com/products/images/tops/Blue%20Frock/3.png"
      },
      {
        "productId": 162,
        "image_url": "https://cdn.dummyjson.com/products/images/tops/Blue%20Frock/4.png"
      },
      {
        "productId": 163,
        "image_url": "https://cdn.dummyjson.com/products/images/tops/Girl%20Summer%20Dress/1.png"
      },
      {
        "productId": 163,
        "image_url": "https://cdn.dummyjson.com/products/images/tops/Girl%20Summer%20Dress/2.png"
      },
      {
        "productId": 163,
        "image_url": "https://cdn.dummyjson.com/products/images/tops/Girl%20Summer%20Dress/3.png"
      },
      {
        "productId": 163,
        "image_url": "https://cdn.dummyjson.com/products/images/tops/Girl%20Summer%20Dress/4.png"
      },
      {
        "productId": 164,
        "image_url": "https://cdn.dummyjson.com/products/images/tops/Gray%20Dress/1.png"
      },
      {
        "productId": 164,
        "image_url": "https://cdn.dummyjson.com/products/images/tops/Gray%20Dress/2.png"
      },
      {
        "productId": 164,
        "image_url": "https://cdn.dummyjson.com/products/images/tops/Gray%20Dress/3.png"
      },
      {
        "productId": 164,
        "image_url": "https://cdn.dummyjson.com/products/images/tops/Gray%20Dress/4.png"
      },
      {
        "productId": 165,
        "image_url": "https://cdn.dummyjson.com/products/images/tops/Short%20Frock/1.png"
      },
      {
        "productId": 165,
        "image_url": "https://cdn.dummyjson.com/products/images/tops/Short%20Frock/2.png"
      },
      {
        "productId": 165,
        "image_url": "https://cdn.dummyjson.com/products/images/tops/Short%20Frock/3.png"
      },
      {
        "productId": 165,
        "image_url": "https://cdn.dummyjson.com/products/images/tops/Short%20Frock/4.png"
      },
      {
        "productId": 166,
        "image_url": "https://cdn.dummyjson.com/products/images/tops/Tartan%20Dress/1.png"
      },
      {
        "productId": 166,
        "image_url": "https://cdn.dummyjson.com/products/images/tops/Tartan%20Dress/2.png"
      },
      {
        "productId": 166,
        "image_url": "https://cdn.dummyjson.com/products/images/tops/Tartan%20Dress/3.png"
      },
      {
        "productId": 166,
        "image_url": "https://cdn.dummyjson.com/products/images/tops/Tartan%20Dress/4.png"
      },
      {
        "productId": 167,
        "image_url": "https://cdn.dummyjson.com/products/images/vehicle/300%20Touring/1.png"
      },
      {
        "productId": 167,
        "image_url": "https://cdn.dummyjson.com/products/images/vehicle/300%20Touring/2.png"
      },
      {
        "productId": 167,
        "image_url": "https://cdn.dummyjson.com/products/images/vehicle/300%20Touring/3.png"
      },
      {
        "productId": 167,
        "image_url": "https://cdn.dummyjson.com/products/images/vehicle/300%20Touring/4.png"
      },
      {
        "productId": 167,
        "image_url": "https://cdn.dummyjson.com/products/images/vehicle/300%20Touring/5.png"
      },
      {
        "productId": 167,
        "image_url": "https://cdn.dummyjson.com/products/images/vehicle/300%20Touring/6.png"
      },
      {
        "productId": 168,
        "image_url": "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/1.png"
      },
      {
        "productId": 168,
        "image_url": "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/2.png"
      },
      {
        "productId": 168,
        "image_url": "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/3.png"
      },
      {
        "productId": 168,
        "image_url": "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/4.png"
      },
      {
        "productId": 168,
        "image_url": "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/5.png"
      },
      {
        "productId": 168,
        "image_url": "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/6.png"
      },
      {
        "productId": 169,
        "image_url": "https://cdn.dummyjson.com/products/images/vehicle/Dodge%20Hornet%20GT%20Plus/1.png"
      },
      {
        "productId": 169,
        "image_url": "https://cdn.dummyjson.com/products/images/vehicle/Dodge%20Hornet%20GT%20Plus/2.png"
      },
      {
        "productId": 169,
        "image_url": "https://cdn.dummyjson.com/products/images/vehicle/Dodge%20Hornet%20GT%20Plus/3.png"
      },
      {
        "productId": 169,
        "image_url": "https://cdn.dummyjson.com/products/images/vehicle/Dodge%20Hornet%20GT%20Plus/4.png"
      },
      {
        "productId": 169,
        "image_url": "https://cdn.dummyjson.com/products/images/vehicle/Dodge%20Hornet%20GT%20Plus/5.png"
      },
      {
        "productId": 169,
        "image_url": "https://cdn.dummyjson.com/products/images/vehicle/Dodge%20Hornet%20GT%20Plus/6.png"
      },
      {
        "productId": 170,
        "image_url": "https://cdn.dummyjson.com/products/images/vehicle/Durango%20SXT%20RWD/1.png"
      },
      {
        "productId": 170,
        "image_url": "https://cdn.dummyjson.com/products/images/vehicle/Durango%20SXT%20RWD/2.png"
      },
      {
        "productId": 170,
        "image_url": "https://cdn.dummyjson.com/products/images/vehicle/Durango%20SXT%20RWD/3.png"
      },
      {
        "productId": 170,
        "image_url": "https://cdn.dummyjson.com/products/images/vehicle/Durango%20SXT%20RWD/4.png"
      },
      {
        "productId": 170,
        "image_url": "https://cdn.dummyjson.com/products/images/vehicle/Durango%20SXT%20RWD/5.png"
      },
      {
        "productId": 170,
        "image_url": "https://cdn.dummyjson.com/products/images/vehicle/Durango%20SXT%20RWD/6.png"
      },
      {
        "productId": 171,
        "image_url": "https://cdn.dummyjson.com/products/images/vehicle/Pacifica%20Touring/1.png"
      },
      {
        "productId": 171,
        "image_url": "https://cdn.dummyjson.com/products/images/vehicle/Pacifica%20Touring/2.png"
      },
      {
        "productId": 171,
        "image_url": "https://cdn.dummyjson.com/products/images/vehicle/Pacifica%20Touring/3.png"
      },
      {
        "productId": 171,
        "image_url": "https://cdn.dummyjson.com/products/images/vehicle/Pacifica%20Touring/4.png"
      },
      {
        "productId": 171,
        "image_url": "https://cdn.dummyjson.com/products/images/vehicle/Pacifica%20Touring/5.png"
      },
      {
        "productId": 171,
        "image_url": "https://cdn.dummyjson.com/products/images/vehicle/Pacifica%20Touring/6.png"
      },
      {
        "productId": 172,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-bags/Blue%20Women's%20Handbag/1.png"
      },
      {
        "productId": 172,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-bags/Blue%20Women's%20Handbag/2.png"
      },
      {
        "productId": 172,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-bags/Blue%20Women's%20Handbag/3.png"
      },
      {
        "productId": 173,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-bags/Heshe%20Women's%20Leather%20Bag/1.png"
      },
      {
        "productId": 173,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-bags/Heshe%20Women's%20Leather%20Bag/2.png"
      },
      {
        "productId": 173,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-bags/Heshe%20Women's%20Leather%20Bag/3.png"
      },
      {
        "productId": 174,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-bags/Prada%20Women%20Bag/1.png"
      },
      {
        "productId": 174,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-bags/Prada%20Women%20Bag/2.png"
      },
      {
        "productId": 174,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-bags/Prada%20Women%20Bag/3.png"
      },
      {
        "productId": 175,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-bags/White%20Faux%20Leather%20Backpack/1.png"
      },
      {
        "productId": 175,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-bags/White%20Faux%20Leather%20Backpack/2.png"
      },
      {
        "productId": 175,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-bags/White%20Faux%20Leather%20Backpack/3.png"
      },
      {
        "productId": 176,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-bags/Women%20Handbag%20Black/1.png"
      },
      {
        "productId": 176,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-bags/Women%20Handbag%20Black/2.png"
      },
      {
        "productId": 176,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-bags/Women%20Handbag%20Black/3.png"
      },
      {
        "productId": 177,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-dresses/Black%20Women's%20Gown/1.png"
      },
      {
        "productId": 177,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-dresses/Black%20Women's%20Gown/2.png"
      },
      {
        "productId": 177,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-dresses/Black%20Women's%20Gown/3.png"
      },
      {
        "productId": 177,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-dresses/Black%20Women's%20Gown/4.png"
      },
      {
        "productId": 178,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-dresses/Corset%20Leather%20With%20Skirt/1.png"
      },
      {
        "productId": 178,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-dresses/Corset%20Leather%20With%20Skirt/2.png"
      },
      {
        "productId": 178,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-dresses/Corset%20Leather%20With%20Skirt/3.png"
      },
      {
        "productId": 178,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-dresses/Corset%20Leather%20With%20Skirt/4.png"
      },
      {
        "productId": 179,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-dresses/Corset%20With%20Black%20Skirt/1.png"
      },
      {
        "productId": 179,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-dresses/Corset%20With%20Black%20Skirt/2.png"
      },
      {
        "productId": 179,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-dresses/Corset%20With%20Black%20Skirt/3.png"
      },
      {
        "productId": 179,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-dresses/Corset%20With%20Black%20Skirt/4.png"
      },
      {
        "productId": 180,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-dresses/Dress%20Pea/1.png"
      },
      {
        "productId": 180,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-dresses/Dress%20Pea/2.png"
      },
      {
        "productId": 180,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-dresses/Dress%20Pea/3.png"
      },
      {
        "productId": 180,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-dresses/Dress%20Pea/4.png"
      },
      {
        "productId": 181,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-dresses/Marni%20Red%20&%20Black%20Suit/1.png"
      },
      {
        "productId": 181,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-dresses/Marni%20Red%20&%20Black%20Suit/2.png"
      },
      {
        "productId": 181,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-dresses/Marni%20Red%20&%20Black%20Suit/3.png"
      },
      {
        "productId": 181,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-dresses/Marni%20Red%20&%20Black%20Suit/4.png"
      },
      {
        "productId": 182,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Crystal%20Earring/1.png"
      },
      {
        "productId": 182,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Crystal%20Earring/2.png"
      },
      {
        "productId": 182,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Crystal%20Earring/3.png"
      },
      {
        "productId": 183,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Oval%20Earring/1.png"
      },
      {
        "productId": 183,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Oval%20Earring/2.png"
      },
      {
        "productId": 183,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Oval%20Earring/3.png"
      },
      {
        "productId": 184,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-jewellery/Tropical%20Earring/1.png"
      },
      {
        "productId": 184,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-jewellery/Tropical%20Earring/2.png"
      },
      {
        "productId": 184,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-jewellery/Tropical%20Earring/3.png"
      },
      {
        "productId": 185,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-shoes/Black%20&%20Brown%20Slipper/1.png"
      },
      {
        "productId": 185,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-shoes/Black%20&%20Brown%20Slipper/2.png"
      },
      {
        "productId": 185,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-shoes/Black%20&%20Brown%20Slipper/3.png"
      },
      {
        "productId": 185,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-shoes/Black%20&%20Brown%20Slipper/4.png"
      },
      {
        "productId": 186,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-shoes/Calvin%20Klein%20Heel%20Shoes/1.png"
      },
      {
        "productId": 186,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-shoes/Calvin%20Klein%20Heel%20Shoes/2.png"
      },
      {
        "productId": 186,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-shoes/Calvin%20Klein%20Heel%20Shoes/3.png"
      },
      {
        "productId": 186,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-shoes/Calvin%20Klein%20Heel%20Shoes/4.png"
      },
      {
        "productId": 187,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-shoes/Golden%20Shoes%20Woman/1.png"
      },
      {
        "productId": 187,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-shoes/Golden%20Shoes%20Woman/2.png"
      },
      {
        "productId": 187,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-shoes/Golden%20Shoes%20Woman/3.png"
      },
      {
        "productId": 187,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-shoes/Golden%20Shoes%20Woman/4.png"
      },
      {
        "productId": 188,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-shoes/Pampi%20Shoes/1.png"
      },
      {
        "productId": 188,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-shoes/Pampi%20Shoes/2.png"
      },
      {
        "productId": 188,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-shoes/Pampi%20Shoes/3.png"
      },
      {
        "productId": 188,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-shoes/Pampi%20Shoes/4.png"
      },
      {
        "productId": 189,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-shoes/Red%20Shoes/1.png"
      },
      {
        "productId": 189,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-shoes/Red%20Shoes/2.png"
      },
      {
        "productId": 189,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-shoes/Red%20Shoes/3.png"
      },
      {
        "productId": 189,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-shoes/Red%20Shoes/4.png"
      },
      {
        "productId": 190,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-watches/IWC%20Ingenieur%20Automatic%20Steel/1.png"
      },
      {
        "productId": 190,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-watches/IWC%20Ingenieur%20Automatic%20Steel/2.png"
      },
      {
        "productId": 190,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-watches/IWC%20Ingenieur%20Automatic%20Steel/3.png"
      },
      {
        "productId": 191,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Cellini%20Moonphase/1.png"
      },
      {
        "productId": 191,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Cellini%20Moonphase/2.png"
      },
      {
        "productId": 191,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Cellini%20Moonphase/3.png"
      },
      {
        "productId": 192,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Datejust%20Women/1.png"
      },
      {
        "productId": 192,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Datejust%20Women/2.png"
      },
      {
        "productId": 192,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Datejust%20Women/3.png"
      },
      {
        "productId": 193,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-watches/Watch%20Gold%20for%20Women/1.png"
      },
      {
        "productId": 193,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-watches/Watch%20Gold%20for%20Women/2.png"
      },
      {
        "productId": 193,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-watches/Watch%20Gold%20for%20Women/3.png"
      },
      {
        "productId": 194,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-watches/Women's%20Wrist%20Watch/1.png"
      },
      {
        "productId": 194,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-watches/Women's%20Wrist%20Watch/2.png"
      },
      {
        "productId": 194,
        "image_url": "https://cdn.dummyjson.com/products/images/womens-watches/Women's%20Wrist%20Watch/3.png"
      }
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ProductImages', null, {});
  }
};
