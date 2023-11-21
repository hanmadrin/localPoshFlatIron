// 1. get all product by collections
(async ()=>{
    // shopify websites
    const collections = {
        allWines: {
            handle: 'all-wines',
            id: 149841805369
        },
        champagne: {
            handle: 'CHAMPAGNE',
            id: 57048891449
        },
        spirits: {
            handle: 'spirits',
            id: 57046564921
        },
        cider:{
            handle: 'cider',
            id : 57047121977
        }
        
    };
    const currentCollection = collections.cider;
    const getProductsUrl = ({
        collectionId,
        page,
        limit
    })=>{
        return `https://services.mybcapps.com/bc-sf-filter/filter?_=pf&shop=flatironwines.myshopify.com&page=${page}&limit=${limit}&sort=created-descending&display=grid&collection_scope=${collectionId}`;
    };
    const getTotalProductCount = async (collectionId)=>{
        const url = getProductsUrl({
            collectionId,
            page: 1,
            limit: 1
        });
        const res = await fetch(url);
        const data = await res.json();
        return data.total_product;
    };
    const totalProductCount = await getTotalProductCount(currentCollection.id);
    const limit = 50;
    const totalPages = Math.ceil(totalProductCount / limit);
    const products = [];
    for(let page = 1; page <= totalPages; page++){
        console.log(`${page} / ${totalPages}`);
        const url = getProductsUrl({
            collectionId: currentCollection.id,
            page,
            limit
        });
        const res = await fetch(url);
        const data = await res.json();
        products.push(...data.products);
    }
    console.log(products);
})();




