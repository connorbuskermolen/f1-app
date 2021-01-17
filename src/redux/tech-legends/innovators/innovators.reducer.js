const INITIAL_STATE = {
    designers: [
        {
            id: 1,
            name: 'Adrian Newey',
            teams: 'March, Willaims, McLaren, Red Bull Racing',
            wcc: '10',
            wcc: '10',
            image: 'https://cdn-1.motorsport.com/images/amp/6A3WDAo2/s6/f1-united-states-gp-2016-adrian-newey-chief-technical-officer-of-red-bull-racing.jpg',
            teamColour: 'red-bull'
        },
        {
            id: 2,
            name: 'Gordon Murray',
            teams: 'Brabham, McLaren',
            wcc: '4',
            wdc: '6',
            image: 'https://images.cdn.circlesix.co/image/1/640/0/uploads/posts/2019/06/069130d89c14d28bbc92d51378e2d3b8.jpg',
            teamColour: 'brabham'
        },
        {
            id: 3,
            name: 'Patrick Head',
            teams: 'Williams',
            wcc: '9',
            wdc: '7',
            image: 'https://f1i.com/wp-content/uploads/2019/03/Patrick-Head-725x500.jpg',
            teamColour: 'williams'
        },
        {
            id: 4,
            name: 'Aldo Costa',
            teams: 'Ferrari, Mercedes',
            wcc: '14',
            wdc: '12',
            image: 'https://f1i.com/wp-content/uploads/2018/07/Aldo-Costa-725x500.jpg',
            teamColour: 'mercedes'
        },
        {
            id: 5,
            name: 'Rory Byrne',
            teams: 'Toleman/Benetton, Ferrari',
            wcc: '7',
            wdc: '7',
            image: 'https://www.f1-fansite.com/wp-content/uploads/2013/02/55509_070002ung-Large.jpg',
            teamColour: 'ferrari'
        },
        {
            id: 6,
            name: 'Andy Cowell',
            teams: 'Mercedes',
            wcc: '7',
            wdc: '7',
            image: 'https://motorsport-magazine.s3.eu-west-1.amazonaws.com/wp-content/uploads/2020/06/15160647/Andy-Cowell.jpg',
            teamColour: 'mercedes'
        },
        {
            id: 7,
            name: 'John Barnard',
            teams: 'McLaren, Ferrari, Benetton, Arrows, Prost',
            wcc: '2',
            wdc: '3',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/John_Barnard.jpg/1024px-John_Barnard.jpg',
            teamColour: 'ferrari'
        }
    ]
}

const innovatorsReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default innovatorsReducer;