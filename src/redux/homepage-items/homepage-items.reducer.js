const INITIAL_STATE = {
    sections: [
        {
            title: 'f1 records',
            image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/10recordslewishamilton-1605899954.jpg',
            linkUrl: 'records',
            id: 1,
            side: 'left'
        },
        {
            title: 'team history',
            image: 'https://wallpapercave.com/wp/BqAlgKS.jpg',
            linkUrl: 'history',
            id: 2,
            side: 'right'
        },
        {
            title: 'tracks',
            image: 'https://wallpapercave.com/wp/wp3067760.jpg',
            linkUrl: 'tracks',
            id: 3,
            side: 'left'
        },
        {
            title: 'cool stats',
            image: 'https://wallpapercave.com/wp/wp8029062.jpg ',
            linkUrl: 'stats',
            id: 4,
            side: 'right'
        },
        {
            title: 'terminology',
            image: 'https://wallpapercave.com/wp/wp4497264.jpg ',
            linkUrl: 'terminology',
            id: 5,
            side: 'left'
        }
    ]
};

const homePageItemsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state
    }
};

export default homePageItemsReducer;




// https://wallpapercave.com/wp/wp3067760.jpg - monaco gp water
// https://wallpapercave.com/wp/wp3067871.jpg - brawngp
// https://wallpapercave.com/wp/BqAlgKS.jpg - ham on track
// https://wallpapercave.com/wp/wp4497264.jpg - fans
// https://wallpapercave.com/wp/wp4497247.jpg - fans turn