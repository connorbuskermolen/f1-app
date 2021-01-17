const INITIAL_STATE = {
    sections: [
        {
            title: '2021 drivers',
            image: 'https://wallpapercave.com/wp/wp4105315.jpg',
            id: 1,
            linkUrl: 'drivers'
        },
        {
            title: 'f1 records',
            image: 'https://wallpapercave.com/wp/wp7964618.jpg',
            id: 2,
            linkUrl: 'records'
        },
        {
            title: 'technical legends',
            image: 'https://wallpapercave.com/wp/wp8272335.jpg ',
            id: 3,
            linkUrl: 'technical-legends'
        },
        {
            title: 'constructors champions',
            image: 'https://www.formula1.com/content/dam/fom-website/sutton/2018/Brazil/Sunday/dcd1811no457.jpg',
            id: 4,
            linkUrl: 'constructors-champions',
            size: 'large',
            side: 'left'
        },
        {
            title: 'drivers champions',
            image: 'https://wallpapercave.com/wp/tpE83rr.jpg',
            id: 5,
            linkUrl: 'drivers-champions',
            size: 'large',
            side: 'right'
        }
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state
    }
};

export default directoryReducer;

// https://wallpapercave.com/wp/MvGQFva.jpg - records?
// https://wallpapercave.com/wp/wp7964618.jpg - hamilton champion
// https://wallpapercave.com/wp/wp8029062.jpg - cool image
// https://wallpapercave.com/wp/wp4800191.jpg - senna/prost
// https://wallpapercave.com/wp/9T4iAyu.jpg - senna champ
// https://wallpapercave.com/wp/tpE83rr.jpg - senna helmet
// https://wallpapercave.com/wp/VlIp4jW.jpg - senna flag
// https://wallpapercave.com/wp/wp8272335.jpg - merc sketch
// https://i.pinimg.com/originals/49/25/35/49253567c32d76ea0771f5c94e404227.jpg - f1 sketch
// https://www.formula1.com/content/dam/fom-website/sutton/2018/Brazil/Sunday/dcd1811no457.jpg - merc team