const INITIAL_STATE = {
    sections: [
        {
            title: 'upcoming events',
            image: 'https://wallpapercave.com/wp/wp5738601.jpg',
            linkUrl: 'events',
            id: 1,
            side: 'left'
        },
        {
            title: 'team history',
            image: 'https://wallpapercave.com/wp/wp4800116.jpg',
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
            image: 'https://wallpapercave.com/wp/wp3067871.jpg',
            linkUrl: 'stats',
            id: 4,
            side: 'right'
        },
        {
            title: 'terminology',
            image: 'https://wallpapercave.com/wp/BqAlgKS.jpg',
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

// https://wallpapercave.com/wp/wp4800116.jpg - car streaks
// https://wallpapercave.com/wp/wp5484952.jpg - mp4/4
// https://wallpapercave.com/wp/wp5738601.jpg - 2020 calendar
// https://wallpapercave.com/wp/wp3067760.jpg - monaco gp water
// https://wallpapercave.com/wp/wp3067871.jpg - brawngp
// https://wallpapercave.com/wp/BqAlgKS.jpg - ham on track
// https://wallpapercave.com/wp/wp4497264.jpg - fans
// https://wallpapercave.com/wp/wp4497247.jpg - fans turn