const INITIAL_STATE = {
    bosses: [
        {
            id: 1,
            name: 'Toto Wolff',
            teams: 'Mercedes',
            wcc: '7',
            wdc: '7',
            position:'CEO/Team Principle',
            years: '2013-present',
            image: 'https://sm.imgix.net/20/31/toto-wolff.jpg?w=1200&h=1200&auto=compress,format&fit=clip',
            teamColour: 'mercedes'
        },
        {
            id: 2,
            name: 'Jean Todt',
            teams: 'Ferrari',
            wcc: '8',
            wdc: '6',
            position: 'Team Principle/CEO',
            years: '1994-2008',
            image: 'https://s1.cdn.autoevolution.com/images/news/jean-todt-to-step-down-from-fia-world-council-role-3851_1.jpg',
            teamColour: 'ferrari'
        },
        {
            id: 3,
            name: 'Ron Dennis',
            teams: 'McLaren',
            wcc: '7',
            wdc: '10',
            position: 'Team Principle',
            years: '1981-2009',
            image: 'https://www.autodevot.com/wp-content/uploads/2017/06/Ron-Dennis-McLaren.jpg',
            teamColour: 'mclaren'
        },
        {
            id: 4,
            name: 'Colin Chapman',
            teams: 'Lotus',
            wcc: '7',
            wdc: '6',
            position: 'Team Principle/Techinal Director/CEO',
            years: '1958-1982',
            image: 'https://myautoworld.com/lotus/cars/history/history-chapman/Colin_Chapman-1963.jpg',
            teamColour: 'lotus'
        },
        {
            id: 5,
            name: 'Frank Williams',
            teams: 'Williams',
            wcc: '9',
            wdc: '7',
            years: '1977-2020',
            image: 'https://cdn-wp.thesportsrush.com/2020/12/3be52d7d-williams-frank.jpg',
            teamColour: 'williams'
        },
        {
            id: 6,
            name: 'Christian Horner',
            teams: 'Red Bull Racing',
            wcc: '4',
            wdc: '4',
            position: 'Team Principle',
            years: '2005-present',
            image: 'https://www.coupa.com/inspire/2019/emea/img/speaker/keynote_ch_detailpage_440x440.jpg',
            teamColour: 'red-bull'
        },
        {
            id: 7,
            name: 'Ross Brawn',
            teams: 'Benetton, Ferrari, Honda, Brawn GP, Mercedes',
            wcc: '8',
            wdc: '8',
            position:'Technical Director/Team Principle',
            years: '1991-2006, 2008-2013',
            image: 'https://chaarmax.files.wordpress.com/2009/10/ross_brawn.jpg',
            teamColour: 'brawn'
        }
    ]
}

const bossesReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default bossesReducer;