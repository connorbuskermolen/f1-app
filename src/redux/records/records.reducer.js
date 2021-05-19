const INITIAL_STATE = { 
    records: [
        {
            id: 1,
            recordName: 'Most Race Wins',
            holder: 'Lewis Hamilton',
            record: '95',
            acheived: '2020 Bahrain Grand Prix'
        },
        {
            id: 2,
            recordName: 'Most Consecutive Race Wins',
            holder: 'Sebastian Vettel',
            record: '9',
            acheived: '2013 Belgian Grand Prix - 2013 Brazilian Grand Prix'
        },
        {
            id: 3,
            recordName: 'Youngest Race Winner',
            holder: 'Max Verstappen',
            record: '18 years, 228 days',
            acheived: '2016 Spanish Grand Prix'
        },
        {
            id: 4,
            recordName: 'Most Wins in a Season',
            holder: 'Michael Schumacher | Sebastian Vettel',
            record: '13',
            acheived: 'MS:2004 | SV:2013'
        },
        {
            id: 5,
            recordName: 'Most Pole Positions',
            holder: 'Lewis Hamilton',
            record: '98',
            acheived: '2020 Bahrain Grand Prix'
        },
        {
            id: 6,
            recordName: 'Most Consecutive Pole Positions',
            holder: 'Ayrton Senna',
            record: '8',
            acheived: '1998 Spanish GP - 1989 United States GP'
        },
        {
            id: 7,
            recordName: 'Most Pole Positions in a Season',
            holder: 'Sebastian Vettel',
            record: '15',
            acheived: '2011'
        },
        {
            id: 8,
            recordName: 'Youngest Pole Sitter',
            holder: 'Sebastian Vettel',
            record: '21 years, 72 days',
            acheived: '2008 Italian Grand Prix'
        },
        {
            id: 9,
            recordName: 'Most Fastest Laps',
            holder: 'Michael Schumacher',
            record: '77',
            acheived: '2012 German Grand Prix'
        },
        {
            id: 10,
            recordName: 'Youngest Fastest Lap Setter',
            holder: 'Max Verstappen',
            record: '19 years, 44 days',
            acheived: '2016 Brazilian Grand Prix'
        },
        {
            id: 11,
            recordName: 'Most Podiums',
            holder: 'Lewis Hamilton',
            record: '165',
            acheived: '2020 Bahrain Grand Prix'
        },
        {
            id: 12,
            recordName: 'Most Podiums in a Season',
            holder: 'Michael, Sebastian Vettel Lewis Hamilton',
            record: '17',
            acheived: 'MS:2002 | SV:2011 | LH:2015-16, 2018-19'
        },
        {
            id: 13,
            recordName: 'Youngest Podium Finish',
            holder: 'Max Verstappen',
            record: '18 years, 228 days',
            acheived: '2016 Spanish Grand Prix'
        },
        {
            id: 14,
            recordName: 'Most Hat-Tricks (Pole, Win, Fastest Lap in Same Race)',
            holder: 'Michael Schumacher',
            record: '22',
            acheived: '2006 French Grand Prix'
        },
        {
            id: 15,
            recordName: "Most World Drivers' Championships",
            holder: 'Michael Schumacher Lewis Hamilton',
            record: '7',
            acheived: 'MS: 2004 | LH: 2020'
        },
        {
            id: 16,
            recordName: "Youngest World Drivers' Champion",
            holder: 'Sebastian Vettel',
            record: '23 years, 134 days',
            acheived: '2010'
        },
        {
            id: 17,
            recordName: 'Most Pitstops by a Winning Driver',
            holder: 'Jenson Button',
            record: '6',
            acheived: '2011 Canadian Grand Prix'
        },
        {
            id: 18,
            recordName: 'Shortest Time Before Earning a Penalty',
            holder: 'Sebastian Vettel',
            record: '9 seconds - Speeding in the Pit Lane',
            acheived: '2006 Turkish Grand Prix'
        },
        {
            id: 19,
            recordName: 'Most Race Entries',
            holder: 'Kimi Räikkönen',
            record: '332',
            acheived: '2020 Abu Dhabi Grand Prix'
        },{
            id: 20,
            recordName: 'Most Wins (Constructors)',
            holder: 'Ferrari',
            record: '238',
            acheived: '2019'
        },
        {
            id: 21,
            recordName: 'Most Consecutive Wins (Constructors)',
            holder: 'McLaren',
            record: '11',
            acheived: '1988'
        },
        {
            id: 22,
            recordName: "Most World Constructors' Championships",
            holder: 'Ferrari',
            record: '16',
            acheived: '2008'
        },
        {
            id: 23,
            recordName: 'Most Consecutive Championships (Constructors)',
            holder: 'Mercedes',
            record: '7',
            acheived: '2014-2020'
        },
        
    ]
};

const recordsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default recordsReducer;