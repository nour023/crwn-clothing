const INITIAL_STATE = {
    sections:[
        {
            title:"hats",
            imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",
            id:1,
            linkUrl:"shop/hats"
        },
        {
            title:"jackets",
            imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",
            id:2,
            linkUrl:"shop/jackets"
        },
        {
            title:"sneakers",
            imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",
            id:3,
            linkUrl:"shop/sneakers"
        },
        {
            title:"womens",
            imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",
            id:4,
            linkUrl:"shop/womens"
        },
        {
            title:"mens",
            imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",
            id:5,
            linkUrl:"shop/mens"
        },
    ],
}

const directoryReducer = (state = INITIAL_STATE , action) =>{
    switch(action.type){
        default:
            return state;
    }
}

export default directoryReducer;