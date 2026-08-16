const products = [

    {
        id: 1,
        name: "Rice 5kg",
        category: "Food"
    },

    {
        id: 2,
        name: "Sugar 1kg",
        category: "Food"
    },

    {
        id: 3,
        name: "Cooking Oil 1L",
        category: "Food"
    },

    {
        id: 4,
        name: "Beans 1kg",
        category: "Food"
    },


   
    {
        id: 5,
        name: "Phone Charger",
        category: "Electronics"
    },

    {
        id: 6,
        name: "Earphones",
        category: "Electronics"
    },


    
    {
        id: 7,
        name: "T-Shirt",
        category: "Clothing"
    },

    {
        id: 8,
        name: "Jeans",
        category: "Clothing"
    },


   
    {
        id: 9,
        name: "Bottled Water",
        category: "Drinks"
    },

    {
        id: 10,
        name: "Juice 1L",
        category: "Drinks"
    },


   
    {
        id: 11,
        name: "Sewing Thread",
        category: "Materials"
    },

    {
        id: 12,
        name: "cement",
        category: "Materials"
    }

];


const shops = [

   
    {
        id: 1,
        name: "Mama Sarah Shop",
        location: "Nakawa",
        address: "Nakawa Market",
        phone: "0700000000"
    },

    {
        id: 2,
        name: "John's Shop",
        location: "Nakawa",
        address: "Nakawa Main Street",
        phone: "0711111111"
    },


    {
        id: 3,
        name: "Market Shop",
        location: "Ntinda",
        address: "Ntinda Market",
        phone: "0722222222"
    },

    {
        id: 4,
        name: "Grace Mini Shop",
        location: "Kalerwe",
        address: "Kalerwe Trading Centre",
        phone: "0733333333"
    },


   
    {
        id: 5,
        name: "Kalerwe Family Shop",
        location: "humura",
        address: "Kalerwe Market",
        phone: "0744444444"
    },

    {
        id: 6,
        name: "Hope General Store",
        location: "Bukere",
        address: "Kalerwe Main Street",
        phone: "0755555555"
    }

];


const prices = [
    {
        id: 1,
        productId: 1,
        shopId: 1,
        price: 17500,
        updatedAt: "2026-08-10"
    },
    {
        id: 2,
        productId: 1,
        shopId: 2,
        price: 18000,
        updatedAt: "2026-08-10"
    },
    {
        id: 3,
        productId: 1,
        shopId: 3,
        price: 20000,
        updatedAt: "2026-08-10"
    },
    {
        id: 4,
        productId: 2,
        shopId: 1,
        price: 5000,
        updatedAt: "2026-08-10"
    },
    {
        id: 5,
        productId: 2,
        shopId: 2,
        price: 5500,
        updatedAt: "2026-08-10"
    },
    {
        id: 6,
        productId: 2,
        shopId: 3,
        price: 6000,
        updatedAt: "2026-08-10"
    },
    {
        id: 7,
        productId: 3,
        shopId: 1,
        price: 8000,
        updatedAt: "2026-08-10"
    },
    {
        id: 8,
        productId: 3,
        shopId: 2,
        price: 8500,
        updatedAt: "2026-08-10"
    },
    {
        id: 9,
        productId: 3,
        shopId: 3,
        price: 9000,
        updatedAt: "2026-08-10"
    },
    {
        id: 10,
        productId: 4,
        shopId: 1,
        price: 7000,
        updatedAt: "2026-08-10"
    },
    {
        id: 11,
        productId: 4,
        shopId: 2,
        price: 7500,
        updatedAt: "2026-08-10"
    },
    {
        id: 12,
        productId: 4,
        shopId: 3,
        price: 8000,
        updatedAt: "2026-08-10"
    },

   
    {
        id: 13,
        productId: 5,
        shopId: 1,
        price: 25000,
        updatedAt: "2026-08-10"
    },

    {
        id: 14,
        productId: 5,
        shopId: 2,
        price: 28000,
        updatedAt: "2026-08-10"
    },

    {
        id: 15,
        productId: 5,
        shopId: 3,
        price: 30000,
        updatedAt: "2026-08-10"
    },


   
    {
        id: 16,
        productId: 6,
        shopId: 1,
        price: 15000,
        updatedAt: "2026-08-10"
    },

    {
        id: 17,
        productId: 6,
        shopId: 2,
        price: 17000,
        updatedAt: "2026-08-10"
    },

    {
        id: 18,
        productId: 6,
        shopId: 3,
        price: 20000,
        updatedAt: "2026-08-10"
    },


    {
        id: 19,
        productId: 7,
        shopId: 1,
        price: 20000,
        updatedAt: "2026-08-10"
    },

    {
        id: 20,
        productId: 7,
        shopId: 2,
        price: 22000,
        updatedAt: "2026-08-10"
    },

    {
        id: 21,
        productId: 7,
        shopId: 3,
        price: 25000,
        updatedAt: "2026-08-10"
    },


    {
        id: 22,
        productId: 8,
        shopId: 1,
        price: 45000,
        updatedAt: "2026-08-10"
    },

    {
        id: 23,
        productId: 8,
        shopId: 2,
        price: 50000,
        updatedAt: "2026-08-10"
    },

    {
        id: 24,
        productId: 8,
        shopId: 3,
        price: 55000,
        updatedAt: "2026-08-10"
    },


   
    {
        id: 25,
        productId: 9,
        shopId: 1,
        price: 1000,
        updatedAt: "2026-08-10"
    },

    {
        id: 26,
        productId: 9,
        shopId: 2,
        price: 1200,
        updatedAt: "2026-08-10"
    },

    {
        id: 27,
        productId: 9,
        shopId: 3,
        price: 1500,
        updatedAt: "2026-08-10"
    },


    {
        id: 28,
        productId: 10,
        shopId: 1,
        price: 5000,
        updatedAt: "2026-08-10"
    },

    {
        id: 29,
        productId: 10,
        shopId: 2,
        price: 5500,
        updatedAt: "2026-08-10"
    },

    {
        id: 30,
        productId: 10,
        shopId: 3,
        price: 6000,
        updatedAt: "2026-08-10"
    },


   
    {
        id: 31,
        productId: 11,
        shopId: 1,
        price: 3000,
        updatedAt: "2026-08-10"
    },

    {
        id: 32,
        productId: 11,
        shopId: 2,
        price: 3500,
        updatedAt: "2026-08-10"
    },

    {
        id: 33,
        productId: 11,
        shopId: 3,
        price: 4000,
        updatedAt: "2026-08-10"
    },


   
    {
        id: 34,
        productId: 12,
        shopId: 1,
        price: 18000,
        updatedAt: "2026-08-10"
    },

    {
        id: 35,
        productId: 12,
        shopId: 2,
        price: 20000,
        updatedAt: "2026-08-10"
    },

    {
        id: 36,
        productId: 12,
        shopId: 3,
        price: 22000,
        updatedAt: "2026-08-10"
    },
    
    {
        id: 37,
        productId: 1,
        shopId: 4,
        price: 18500,
        updatedAt: "2026-08-10"
    },

    {
        id: 38,
        productId: 1,
        shopId: 5,
        price: 19000,
        updatedAt: "2026-08-10"
    },

    {
        id: 39,
        productId: 1,
        shopId: 6,
        price: 16500,
        updatedAt: "2026-08-10"
    },


   
    {
        id: 40,
        productId: 2,
        shopId: 4,
        price: 5200,
        updatedAt: "2026-08-10"
    },

    {
        id: 41,
        productId: 2,
        shopId: 5,
        price: 5300,
        updatedAt: "2026-08-10"
    },

    {
        id: 42,
        productId: 2,
        shopId: 6,
        price: 4800,
        updatedAt: "2026-08-10"
    },


    
    {
        id: 43,
        productId: 3,
        shopId: 4,
        price: 8200,
        updatedAt: "2026-08-10"
    },

    {
        id: 44,
        productId: 3,
        shopId: 5,
        price: 8300,
        updatedAt: "2026-08-10"
    },

    {
        id: 45,
        productId: 3,
        shopId: 6,
        price: 7800,
        updatedAt: "2026-08-10"
    },


    {
        id: 46,
        productId: 4,
        shopId: 4,
        price: 7200,
        updatedAt: "2026-08-10"
    },

    {
        id: 47,
        productId: 4,
        shopId: 5,
        price: 7300,
        updatedAt: "2026-08-10"
    },

    {
        id: 48,
        productId: 4,
        shopId: 6,
        price: 6800,
        updatedAt: "2026-08-10"
    },


  
    {
        id: 49,
        productId: 5,
        shopId: 4,
        price: 26000,
        updatedAt: "2026-08-10"
    },

    {
        id: 50,
        productId: 5,
        shopId: 5,
        price: 27000,
        updatedAt: "2026-08-10"
    },

    {
        id: 51,
        productId: 5,
        shopId: 6,
        price: 24000,
        updatedAt: "2026-08-10"
    },


    
    {
        id: 52,
        productId: 6,
        shopId: 4,
        price: 16000,
        updatedAt: "2026-08-10"
    },

    {
        id: 53,
        productId: 6,
        shopId: 5,
        price: 18000,
        updatedAt: "2026-08-10"
    },

    {
        id: 54,
        productId: 6,
        shopId: 6,
        price: 14000,
        updatedAt: "2026-08-10"
    },


   
    {
        id: 55,
        productId: 7,
        shopId: 4,
        price: 21000,
        updatedAt: "2026-08-10"
    },

    {
        id: 56,
        productId: 7,
        shopId: 5,
        price: 23000,
        updatedAt: "2026-08-10"
    },

    {
        id: 57,
        productId: 7,
        shopId: 6,
        price: 19000,
        updatedAt: "2026-08-10"
    },


    {
        id: 58,
        productId: 8,
        shopId: 4,
        price: 47000,
        updatedAt: "2026-08-10"
    },

    {
        id: 59,
        productId: 8,
        shopId: 5,
        price: 48000,
        updatedAt: "2026-08-10"
    },

    {
        id: 60,
        productId: 8,
        shopId: 6,
        price: 43000,
        updatedAt: "2026-08-10"
    },



    {
        id: 61,
        productId: 9,
        shopId: 4,
        price: 1000,
        updatedAt: "2026-08-10"
    },

    {
        id: 62,
        productId: 9,
        shopId: 5,
        price: 1300,
        updatedAt: "2026-08-10"
    },

    {
        id: 63,
        productId: 9,
        shopId: 6,
        price: 900,
        updatedAt: "2026-08-10"
    },


  
    {
        id: 64,
        productId: 10,
        shopId: 4,
        price: 5100,
        updatedAt: "2026-08-10"
    },

    {
        id: 65,
        productId: 10,
        shopId: 5,
        price: 5700,
        updatedAt: "2026-08-10"
    },

    {
        id: 66,
        productId: 10,
        shopId: 6,
        price: 4900,
        updatedAt: "2026-08-10"
    },


    {
        id: 67,
        productId: 11,
        shopId: 4,
        price: 3200,
        updatedAt: "2026-08-10"
    },

    {
        id: 68,
        productId: 11,
        shopId: 5,
        price: 3600,
        updatedAt: "2026-08-10"
    },

    {
        id: 69,
        productId: 11,
        shopId: 6,
        price: 2800,
        updatedAt: "2026-08-10"
    },


    {
        id: 70,
        productId: 12,
        shopId: 4,
        price: 19000,
        updatedAt: "2026-08-10"
    },

    {
        id: 71,
        productId: 12,
        shopId: 5,
        price: 21000,
        updatedAt: "2026-08-10"
    },

    {
        id: 72,
        productId: 12,
        shopId: 6,
        price: 17500,
        updatedAt: "2026-08-10"
    }
];





