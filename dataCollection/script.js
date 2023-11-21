// import { rawProducts } from './rawCollections/rawProducts.js';
// import { champagne } from './rawCollections/champagne.js';
// import { spirits } from './rawCollections/spirits.js';
import { cider } from './rawCollections/cider.js';

const rawProducts = cider;
const getAllProductCollectionNames = ()=>{
    let rawProductstCollectionNames = [];
    for(let i=0; i<rawProducts.length; i++){
        const collections = rawProducts[i].collections.map(collection=>collection.title);
        rawProductstCollectionNames = [...rawProductstCollectionNames, ...collections];
    }
    const uniqueCollectionNames = [...new Set(rawProductstCollectionNames)];
    console.log(uniqueCollectionNames);
};
// getAllProductCollectionNames();


const checkMappingAccuracy = ()=>{
    const mapping = {
        "549": "Hard Cider"
    };
    const knwonCategories = Object.values(mapping);
    const unknownCategories = [];
    for(let i=0; i<rawProducts.length; i++){
        const collections = rawProducts[i].collections.map(collection=>collection.title);
        let matched = false;
        for(let j=0; j<collections.length; j++){
            if(knwonCategories.includes(collections[j])){
                // console.log(collections[j])
                matched = true;
            }
        }
        if(!matched){
            unknownCategories.push(collections);
        }
    }
    console.log('unknownCategoriesProducts',unknownCategories);
    // unique unknown categories
    const allUnknownCategories = [];
    for(let i=0; i<unknownCategories.length; i++){
        allUnknownCategories.push(...unknownCategories[i]);
    }
    const uniqueUnknownCategories = [...new Set(allUnknownCategories)];
    console.log('unknownCategors',uniqueUnknownCategories);
};
// checkMappingAccuracy();



const checkVariationsProducts = ()=>{
    const variationsProducts = [];
    for(let i=0; i<rawProducts.length; i++){
        if(rawProducts[i].variants.length > 1){
            variationsProducts.push(rawProducts[i]);
        }
    }
    console.log(variationsProducts);
};
// checkVariationsProducts();

const checkOfferPrices = ()=>{
    const offerPrices = [];
    for(let i=0; i<rawProducts.length; i++){
        for(let j=0; j<rawProducts[i].variants.length; j++){
            if(rawProducts[i].variants[j].compare_at_price){
                offerPrices.push(rawProducts[i].variants[j].compare_at_price);
            }
        }
    }
    console.log(offerPrices);
};
// checkOfferPrices();

const checkForSizes = ()=>{
    const sizes = [];
    let noSizesCount = 0;
    for(let i=0; i<rawProducts.length; i++){
        let hasSize = false;
        for(let j=0; j<rawProducts[i].tags.length; j++){
            if(rawProducts[i].tags[j].includes('Size: ')){
                hasSize = true;
                sizes.push(rawProducts[i].tags[j].replace('Size: ', ''));
            }
        }
        if(!hasSize){
            noSizesCount++;
            console.log(rawProducts[i].handle)
        }
    }
    console.log(noSizesCount,sizes);
}
// checkForSizes();

const checkForTagsKeys = ()=>{
    const tagsKeys = [];
    for(let i=0; i<rawProducts.length; i++){
        for(let j=0; j<rawProducts[i].tags.length; j++){
            if(rawProducts[i].tags[j].split(':').length == 2){
                tagsKeys.push(rawProducts[i].tags[j].split(':')[0].trim());
                if(rawProducts[i].tags[j].split(':')[0].trim() == 'Pairing'){
                    console.log(rawProducts[i].tags[j].split(':')[1].trim());
                    console.log(rawProducts[i].handle)
                }
            }
        }
    }
    const uniqueTagsKeys = [...new Set(tagsKeys)];
    console.log(uniqueTagsKeys);
};
// checkForTagsKeys();

const stableProductData = ()=>{
    const products = rawProducts;
    let results = [];
    let count = 0;
    for(let i=0;i<products.length;i++){
        const productId = products[i].id;
        const product = products[i];
        const categories = product.collections.map(collection=>collection.title);
        const sizes = (() => {
            const tags = product.tags;
            for(let i=0; i<tags.length; i++){
                if(tags[i].includes('Size: ')){
                    return tags[i].replace('Size: ', '');
                }
            }
            // count++;
            return null;
        })();
        const productImage = (()=>{
            const images = product.images_info;
            const result = [];
            for(let i=0; i<images.length; i++){
                result.push(images[i].src);
            }
            if(result.length == 0){
                // console.log(product.handle);
                // count++;
            }
            return result;
        })();
        const cat = (()=>{
            // [{"category":15,"subcategory":243}]
            
            const mainCatId = 58;
            const defaultSubCatId = 549;
            let result = [{
                category: mainCatId,
                subcategory: defaultSubCatId
            }];
            // mapping.json
            const subcats = (()=>{
                const mapping = {
                    "549": "Hard Cider"
                };
                // change key and value
                const result = {};
                for(const key in mapping){
                    result[mapping[key]] = +key;
                }
                return result;
            })();
            let found = false;
            for(let i=0; i<categories.length; i++){
                if(subcats[categories[i]]){
                    found = true;
                    result = [{
                        category: mainCatId,
                        subcategory: subcats[categories[i]]
                    }]
                }
            }
            if(!found){
                // console.log(result);
                // count++;
            }else{
                // console.log(result);
            }
            return result;
        })();
        const description = (()=>{
            let result = `\n`;
            const tags = product.tags;
            const allowedKeys = [
                "Body",
                "Country",
                "Grape Variety",
                // "instock-12424052793",
                "Maturity",
                "Pairing",
                // "Private Col",
                "Producer",
                "Region",
                "Size",
                "Sweetness",
                "Vintage",
                "Farming Practice",
                // "last_sold",
                // "Adjusted",
                // "Author",
                "Style",
                // "Provenence",
                "Subregion",
                "Seasonal",
                // "instock-15117713465",
                // "instock-34475900985",
                // "instock-34490155065",
                "Village",
                // "Location",
                // "Eric Asimov",
                // "[Night Inn] One Step Deeper",
                "Brand",
                // "DI Offer",
                // "instock-34467840057",
                // "AMP",
                "Pair With",
                // "Created On",
                // "Descriptor"
            ];
            let hasSuffuxDescription = false;
            for(let i=0; i<tags.length; i++){
                if(tags[i].split(':').length ==2){
                    const key = tags[i].split(':')[0].trim();
                    if(!allowedKeys.includes(key)){
                        continue;
                    }
                    // console.log(key);
                    hasSuffuxDescription = true;
                    const value = tags[i].split(':')[1].trim();
                    result += `${key}: ${value}\n`;
                }
            }
            if(!hasSuffuxDescription){
                // console.log(product.handle);
                count++;
            }
            // throw new Error('description');
            return result;
        })();
        const productInventory = (()=>{
            const result = [];
            for(let i=0; i<product.variants.length; i++){
                const variant = product.variants[i];
                const price = variant.compare_at_price?variant.compare_at_price:variant.price;
                const discountedprice = variant.compare_at_price?variant.price:"";
                const size = sizes || '1 pc';
                const weight = "1";
                const quantity = "12";
                const color = "";
                const colorName = "";
                const salesTax = "";
                const overSized = [];
                result.push({
                    size,
                    weight,
                    quantity,
                    color,
                    colorName,
                    price,
                    discountedprice,
                    salesTax,
                    overSized
                });
            }
            // if(result.length > 1){
            //     console.log(result);
            // }6
            return result;
        })();
        const result = {
            collectionId: productId,
            title : product.title,
            description: description,
            cat: cat,
            productImage: productImage,
            productInventory: productInventory,
        }
        results.push(result);
    }
    console.log(`count: ${count}`)
    console.log(results)
};
stableProductData();