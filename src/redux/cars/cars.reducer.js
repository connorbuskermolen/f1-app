const INITIAL_STATE= {
    cars: [
        {
            id: 1,
            car: "McLaren MP4/4",
            designer: 'Stephen Nichols, Gordon Murray',
            races: 16,
            wins: 15,
            wcc: 1,
            wdc: 1,
            seasons: '1988',
            image: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/McLaren_MP4-4_front-right_Honda_Collection_Hall.jpg'
        },
        {
            id: 2,
            car: "Brawn BGP 001",
            designer: 'Ross Brawn, Jörg Zander, Craig Wilson, Loic Bigois',
            races: 17,
            wins: 8,
            wcc: 1,
            wdc: 1,
            seasons: '2009',
            image :'https://cdn-1.motorsport.com/static/img/amp/900000/950000/950000/950300/950303/s6_5461365/f1-australian-gp-2009-rubens-barrichello-brawn-gp-5461365.jpg'
        },
        {
            id: 3,
            car: "Red Bull RB9",
            designer: 'Adrian Newey, Rob Marshall, Peter Prodromou',
            races: 19,
            wins: 13,
            wcc: 1,
            wdc: 1,
            seasons: '2013',
            image: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Sebastian_Vettel_2013_Malaysia_FP1.jpg'
        },
        {
            id: 4,
            car: 'Lotus 79',
            designer: 'Colin Chapman, Geoff Aldridge, Martin Ogilvie, Tony Rudd, Peter Wright',
            races: 26,
            wins: 6,
            wcc: 1,
            wdc: 1,
            seasons: '1978-79',
            image: 'https://motorsport-magazine.s3.eu-west-1.amazonaws.com/wp-content/uploads/2018/05/04104530/andretti_zolder.jpg'
        },
        {
            id: 5,
            car: "Lotus 72",
            designer: 'Colin Chapman, Tony Rudd, Maurice Philippe',
            races: 75,
            wins: 20,
            wcc: 3,
            wdc: 2,
            seasons: '1970-75',
            image: 'https://lacar.com/wp-content/uploads/2020/04/LOTUS-72-LAT-image.jpg'
        },
        {
            id: 6,
            car: "Mercedes W07 Hybrid",
            designer: 'Paddy Lowe, Aldo Costa, Geoff Willis, Mark Ellis, John Owen, Mike Elliot',
            races: 21,
            wins: 19,
            wcc: 1,
            wdc: 1,
            seasons: '2016',
            image: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Lewis_Hamilton_2016_Malaysia_FP2_1.jpg'
        },
        {
            id: 7,
            car: "Ferrari F2002",
            designer: 'Ross Brawn, Rory Byrne, Aldo Costa, Marco Fainello, Nikolas Tombazis',
            races: 19,
            wins: 15,
            wcc: 2,
            wdc: 2,
            seasons: '2002-03',
            image: 'https://www.carscoops.com/wp-content/uploads/2019/12/Ferrari-F2002-111.jpg'
        },
        {
            id: 8,
            car: "Renault R25",
            designer: 'Pat Symonds, Bob Bell, James Allison, Tim Densham, Dino Toso',
            races: 19,
            wins: 8,
            wcc: 1,
            wdc: 1,
            seasons: '2005',
            image: 'https://i.pinimg.com/originals/63/49/32/634932d0c08ef3a5af869c552d71d6fa.jpg'
        },
        {
            id: 9,
            car: "McLaren MP4/6",
            designer: 'Niel Oatley, Mike Gascoyne',
            races: 18,
            wins: 8,
            wcc: 1,
            wdc: 1,
            seasons: '1991',
            image: 'https://www.statsf1.com/constructeurs/photos/68/92.jpg'
        },
        {
            id: 10,
            car: "Willaims FW14",
            designer: 'Adrian Newey, Patrick Head, Paddy Lowe, Eghbal Hamidy',
            races: 32,
            wins: 17,
            wcc: 1,
            wdc: 1,
            seasons: '1991-92',
            image: 'https://s1.cdn.autoevolution.com/images/news/1992-williams-renault-fw14b-f1car-sold-for-record-337-million-at-goodwood-135824-7.jpg'
        },
        {
            id: 11,
            car: "Benetton B195",
            designer: 'Ross Brawn, Rory Byrne, Nikolas Tombazis',
            races: 17,
            wins: 11,
            wcc: 1,
            wdc: 1,
            seasons: '1995',
            image: 'https://www.statsf1.com/constructeurs/photos/15/188.jpg'
        },
        {
            id: 12,
            car: "Willaims FW18",
            designer: 'Adrian Newey, Patrick Head, Eghbal Hamidy',
            races: 16,
            wins: 12,
            wcc: 1,
            wdc: 1,
            seasons: '1996',
            image: 'https://www.statsf1.com/constructeurs/photos/102/202.jpg'
        },
        {
            id: 13,
            car: "Mercedes W10 Hybrid",
            designer: 'James Allison, John Owen, Mike Elliot, Loïc Serra, Aldo Costa, Jarrod Murphy',
            races: 21,
            wins: 15,
            wcc: 1,
            wdc: 1,
            seasons: '2019',
            image: 'https://www.mercedesamgf1.com/en/car/f1-w10-eq-power/_jcr_content/root/slider_0/sliderchilditems/slideritem_0/image/MQ7-0-image-20191104195545/00main4252-1.jpeg'
        },
        {
            id: 14,
            car: "McLaren MP4/13",
            designer: 'Adrian Newey, Steve Nichols, Neil Oatley, Henri Durand',
            races: 16,
            wins: 9,
            wcc: 1,
            wdc: 1,
            seasons: '1998',
            image: 'https://media-cdn.mclaren.com/media/images/heritage/hero/1998_1.jpg'
        },
        {
            id: 15,
            car: "Ferrari F2004",
            designer: 'Ross Brawn, Rory Byrne, Aldo Costa, Marco Fainello, John Iley',
            races: 20,
            wins: 15,
            wcc: 1,
            wdc: 1,
            seasons: '2004',
            image: 'https://sportsbase.io/images/gpfans/copy_704x396/f4c02cee3bbf808e8475506370266ded46fa7c23.jpg'
        },
        {
            id: 16,
            car: "Ferrari 156",
            designer: 'Carlo Chiti',
            races: 29,
            wins: 7,
            wcc: 2,
            wdc: 1,
            seasons: '1961-64',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/LGHA_2018_-_Les_monoplaces_%2811%29.jpg/1200px-LGHA_2018_-_Les_monoplaces_%2811%29.jpg'
        },
        {
            id: 17,
            car: "Brabham BT24",
            designer: 'Ron Tauranac',
            races: 21,
            wins: 3,
            wcc: 1,
            wdc: 1,
            seasons: '1967-69',
            image: 'https://www.statsf1.com/constructeurs/photos/18/610.jpg'
        },
        {
            id: 18,
            car: "Brabham BT46 (Fan Car)",
            designer: 'Gordon Murray',
            races: 15,
            wins: 2,
            wcc: 0,
            wdc: 0,
            seasons: '1978-79',
            image: 'https://i.ytimg.com/vi/EANM3DR56Gg/maxresdefault.jpg'
        }
    ]
}

const carsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default carsReducer;