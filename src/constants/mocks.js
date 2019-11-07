const categories = [
    {
        id: 'utensils',
        name: 'Utensils',
        tags: ['products'],
        count: 147,
        image: require('../../assets/images/utensil.jpg')
    },
    {
        id:'accessories',
        name: 'Accessories',
        tags: ['products'],
        count: 15,
        image: require('../../assets/images/accessories.jpg')
    },
    {
        id: 'bulkgroceries',
        name: 'Bulk Groceries',
        tags: ['products'],
        count: 147,
        image: require('../../assets/images/bulk-groceries.jpg')
    },
    {
        id: 'outfits',
        name: 'Outfits',
        tags: ['products'],
        count: 89,
        image: require('../../assets/images/outfit.jpg')
    },
    {
        id: 'toys',
        name: 'Toys',
        tags: ['products'],
        count: 17,
        image: require('../../assets/images/toy.jpg')
    },
    {
        id: 6,
        name: 'Utensils',
        tags: ['products'],
        count: 89,
        image: require('../../assets/images/utensil.jpg')
    },
];

const products = [
    {
        id:1,
        name:'',
        description:'', 
        tags: ['food'],
        gallery: [
            require('../../assets/images/bulk-groceries.jpg'),
            //showing only 3 image, show +3 for the rest
        ]
    }
];
const explore = [
    //images
    require('../../assets/images/explore_1.jpg'),
    require('../../assets/images/explore_2.jpg'),
    require('../../assets/images/explore_3.jpg'),
    require('../../assets/images/explore_4.jpg'),
    require('../../assets/images/explore_5.jpg'),
]
const profile = {};

export {
    categories,
    explore,
    products,
    profile,
}