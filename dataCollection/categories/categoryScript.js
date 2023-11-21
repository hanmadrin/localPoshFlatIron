// 2. get local posh subcategories name and id only
(async()=>{
    const getLocalPoshSubCategoriesNameAndId = ()=>{
        const subcategories = [
            {
                "id": 123,
                "name": "Vodka",
                "description": "A diverse selection of vodka, showcasing different origins, flavors, and styles, vodka, spirits, cocktails, Russian vodka, Polish vodka",
                "image": "",
                "parentId": 57,
                "vendorId": "0",
                "createdAt": "2019-06-30T23:11:11.000000Z",
                "updatedAt": "2022-12-01T06:37:20.000000Z",
                "subCategories": []
            },
            {
                "id": 124,
                "name": "Brandy",
                "description": "A range of brandy options, including Cognac, Armagnac, and fruit brandies, perfect for sipping or mixing, brandy, Cognac, Armagnac, spirits, after-dinner drinks",
                "image": "",
                "parentId": 57,
                "vendorId": "0",
                "createdAt": "2019-06-30T23:15:31.000000Z",
                "updatedAt": "2022-12-01T06:37:20.000000Z",
                "subCategories": []
            },
            {
                "id": 125,
                "name": "Gin",
                "description": "A variety of gins from different regions, featuring a range of botanicals and flavor profiles, gin, spirits, cocktails, London Dry gin, botanicals",
                "image": "",
                "parentId": 57,
                "vendorId": "0",
                "createdAt": "2019-06-30T23:15:50.000000Z",
                "updatedAt": "2022-12-01T06:37:20.000000Z",
                "subCategories": []
            },
            {
                "id": 126,
                "name": "Rum",
                "description": "A diverse collection of rums, including light, dark, and spiced varieties, perfect for mixing or sipping,  rum, spirits, cocktails, dark rum, light rum, spiced rum",
                "image": "",
                "parentId": 57,
                "vendorId": "0",
                "createdAt": "2019-06-30T23:16:27.000000Z",
                "updatedAt": "2022-12-01T06:37:20.000000Z",
                "subCategories": []
            },
            {
                "id": 127,
                "name": "Cognac",
                "description": "A selection of Cognac, a luxurious brandy from the Cognac region of France, ideal for sipping or mixing, Cognac, brandy, French brandy, spirits, after-dinner drinks\n",
                "image": "",
                "parentId": 57,
                "vendorId": "0",
                "createdAt": "2019-06-30T23:16:37.000000Z",
                "updatedAt": "2022-12-01T06:37:20.000000Z",
                "subCategories": []
            },
            {
                "id": 128,
                "name": "Whiskey",
                "description": "An assortment of whiskies from around the world, including Scotch, Bourbon, and Irish whiskey, whiskey, Scotch, Bourbon, Irish whiskey, spirits, sipping whiskey",
                "image": "",
                "parentId": 57,
                "vendorId": "0",
                "createdAt": "2019-06-30T23:16:50.000000Z",
                "updatedAt": "2022-12-01T06:37:20.000000Z",
                "subCategories": []
            },
            {
                "id": 129,
                "name": "Tequila",
                "description": "A range of tequilas, including blanco, reposado, and añejo, perfect for sipping or mixing in cocktails, tequila, spirits, cocktails, Mexican spirits, sipping tequila",
                "image": "",
                "parentId": 57,
                "vendorId": "0",
                "createdAt": "2019-06-30T23:17:04.000000Z",
                "updatedAt": "2022-12-01T06:37:20.000000Z",
                "subCategories": []
            },
            {
                "id": 130,
                "name": "Liqueurs, Bitters, and Mixers",
                "description": "A variety of liqueurs, bitters, and mixers for creating delicious cocktails and enhancing your favorite drinks, liqueurs, bitters, mixers, cocktails, amaro, aperitifs",
                "image": "",
                "parentId": 57,
                "vendorId": "0",
                "createdAt": "2019-06-30T23:17:19.000000Z",
                "updatedAt": "2022-12-01T06:37:20.000000Z",
                "subCategories": []
            },
            {
                "id": 131,
                "name": "Scotch",
                "description": "A selection of Scotch whiskies, showcasing the distinct flavors and characteristics of different regions in Scotland, Scotch, whiskey, spirits, single malt, blended Scotch\n",
                "image": "",
                "parentId": 57,
                "vendorId": "0",
                "createdAt": "2019-06-30T23:19:44.000000Z",
                "updatedAt": "2022-12-01T06:37:20.000000Z",
                "subCategories": []
            },
            {
                "id": 132,
                "name": "Bourbon",
                "description": "A selection of Bourbon whiskies, featuring smooth, rich flavors and a variety of styles, Bourbon, whiskey, spirits, American whiskey, sipping whiskey",
                "image": "",
                "parentId": 57,
                "vendorId": "0",
                "createdAt": "2019-06-30T23:19:50.000000Z",
                "updatedAt": "2022-12-01T06:37:20.000000Z",
                "subCategories": []
            },
            {
                "id": 133,
                "name": "Vermouth",
                "description": "A collection of vermouths, including sweet, dry, and bianco, perfect for mixing in cocktails or enjoying on their own, vermouth, aperitif, cocktails, Martini, Negroni",
                "image": "",
                "parentId": 57,
                "vendorId": "0",
                "createdAt": "2019-06-30T23:11:11.000000Z",
                "updatedAt": "2022-12-01T06:37:20.000000Z",
                "subCategories": []
            },
            {
                "id": 545,
                "name": "Sotol",
                "description": null,
                "image": null,
                "parentId": 57,
                "vendorId": null,
                "createdAt": "2023-11-10T10:29:44.000000Z",
                "updatedAt": "2023-11-10T10:29:44.000000Z",
                "subCategories": []
            },
            {
                "id": 546,
                "name": "Mezcal",
                "description": null,
                "image": null,
                "parentId": 57,
                "vendorId": null,
                "createdAt": "2023-11-10T14:42:49.000000Z",
                "updatedAt": "2023-11-10T14:42:49.000000Z",
                "subCategories": []
            },
            {
                "id": 547,
                "name": "Armagnac",
                "description": null,
                "image": null,
                "parentId": 57,
                "vendorId": null,
                "createdAt": "2023-11-15T12:07:29.000000Z",
                "updatedAt": "2023-11-15T12:07:29.000000Z",
                "subCategories": []
            },
            {
                "id": 548,
                "name": "Grappa",
                "description": null,
                "image": null,
                "parentId": 57,
                "vendorId": null,
                "createdAt": "2023-11-15T12:07:29.000000Z",
                "updatedAt": "2023-11-15T12:07:29.000000Z",
                "subCategories": []
            }
        ];
        const subcategoriesNameAndId = {};
        const getSubcategoriesNameAndId = (subcategories)=>{
            subcategories.forEach((subcategory)=>{
                subcategoriesNameAndId[subcategory.id] = subcategory.name;
            });
        };
        getSubcategoriesNameAndId(subcategories);
        console.log(subcategoriesNameAndId);
        // // keyx and value exchange
        // const subcategoriesIdAndName = {};
        // Object.keys(subcategoriesNameAndId).forEach((key)=>{
        //     subcategoriesIdAndName[subcategoriesNameAndId[key]] = key;
        // });
        // console.log(subcategoriesIdAndName);
    };
    getLocalPoshSubCategoriesNameAndId();
    
})();


// trim
// capitalize
