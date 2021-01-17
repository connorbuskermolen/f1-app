const INITIAL_STATE = {
    drivers: [
        {
            id:1,
            name: 'Michael Schumacher',
            championships: 7,
            seasons: '1994, 1995, 2000-2004',
            image: 'https://www.formula1.com/content/fom-website/en/drivers/hall-of-fame/Michael_Schumacher/_jcr_content/featureContent/manual_gallery_0/image5.img.1024.medium.jpg/1421255057622.jpg'
        },
        {
            id: 2,
            name: 'Lewis Hamilton',
            championships: 7,
            seasons: '2008, 2014, 2015, 2017-2020',
            image: 'https://assets.lewishamilton.com/media/heroes/GettyImages-1285771774.jpg'
        },
        {
            id: 3,
            name: 'Juan Manuel Fangio',
            championships: 5,
            seasons: '1951, 1954-1957',
            image: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Fangio.png'
        },
        {
            id: 4,
            name: 'Alain Prost',
            championships: 4,
            seasons: '1985, 1986, 1989, 1993',
            image: 'https://database.motorsportmagazine.com/sites/default/files/people/profile/87bra_prost_01.jpg'
        },
        {
            id: 5,
            name: 'Sebastian Vettel',
            championships: 4,
            seasons: '2010-2013',
            image: 'https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Fbeyondtheflag.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2016%2F04%2F451764367-850x560.jpeg'
        },
        {
            id: 6,
            name: 'Jack Brabham',
            championships: 3,
            seasons: '1959, 1960, 1966',
            image: 'https://cdn-1.motorsport.com/images/amp/0L1WxyN2/s6/jack-brabham-cooper-1.jpg'
        },
        {
            id: 7,
            name: 'Jackie Stewert',
            championships: 3,
            seasons: '1969, 1971, 1973',
            image: 'https://i.pinimg.com/originals/19/be/17/19be178a9fe1124411b86e035d725511.jpg'
        },
        {
            id: 8,
            name: 'Niki Lauda',
            championships: 3,
            seasons: '1975, 1977, 1984',
            image: 'https://motorsport-magazine.s3.eu-west-1.amazonaws.com/wp-content/uploads/2019/05/24161618/niki_lauda_1977.jpg'
        },
        {
            id: 9,
            name: 'Nelson Piquet',
            championships: 3,
            seasons: '1981, 1983, 1987',
            image: 'https://database.motorsportmagazine.com/sites/default/files/styles/driver_profile_image/public/people/profile/83_bra08.jpg?itok=aC4odEUy'
        },
        {
            id: 10,
            name: 'Ayrton Senna',
            championships: 3,
            seasons: '1988, 1990, 1991',
            image: 'https://www.ayrtonsenna.com.br/wp-content/uploads/2017/11/91BR_D008-MCJ-1.jpg'
        },
        {
            id: 11,
            name: 'Alberto Ascari',
            championships: 2,
            seasons: '1952, 1953',
            image: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Ascari_last_photo_in_car.jpg'
        },
        {
            id: 12,
            name: 'Graham Hill',
            championships: 2,
            seasons: '1962, 1968',
            image: 'https://www.telegraph.co.uk/content/dam/formula-1/2017/04/13/TELEMMGLPICT000125876954_trans_NvBQzQNjv4BqlOQfQyDfS2CmpbHpNzZ5_F9G3Tn_rP08qDVFgYTL4Ww.jpeg?imwidth=450'
        },
        {
            id: 13,
            name: 'Jim Clark',
            championships:2,
            seasons: '1963, 1965',
            image: 'https://cdn.images.autosport.com/f1greatestdrivers/mug/1936030400.jpg'
        },
        {
            id: 14,
            name: 'Emerson Fittipaldi',
            championships: 2,
            seasons: '1972, 1974',
            image: 'https://i.pinimg.com/originals/d5/9f/4d/d59f4dedd125c028093f8d4ee2132ab1.jpg'
        },
        {
            id: 15,
            name: 'Mika Häkkinen',
            championships: 2,
            seasons: '1998, 1999',
            image: 'https://i.guim.co.uk/img/media/0fd8cc843756ca1f47ae0634e571698240ad5c28/90_87_1906_1143/master/1906.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=11d19308d6ff655edc08bfa3c446b28c'
        },
        {
            id: 16,
            name: 'Fernando Alonso',
            championships: 2,
            seasons: '2005, 2006',
            image: 'https://www.formula1.com/content/fom-website/en/drivers/hall-of-fame/Fernando_Alonso/_jcr_content/image16x9.img.1536.high.jpg'
        },
        {
            id: 17,
            name: 'Guiseppe Farina',
            championships: 1,
            seasons: '1950',
            image: 'https://www.formula1.com/content/fom-website/en/drivers/hall-of-fame/Nino_Farina/_jcr_content/featureContent/manual_gallery/image1.img.640.medium.jpg/1421331017360.jpg'
        },
        {
            id: 18,
            name: 'Mike Hawthorn',
            championships:1,
            seasons: '1958',
            image: 'https://images.findagrave.com/photos250/photos/2006/10/12930129_113704018407.jpg'
        },
        {
            id: 19,
            name: 'Phil Hill',
            championships: 1,
            seasons: '1961',
            image: 'https://lh3.googleusercontent.com/proxy/zSJ1Zm4ZvCmZZyO6JERFcAfj6SRzVWiqji77efxvGKAQ54ulznVODUahmDG4s-6S3RFBW4tX-UDGXZ0bIEqh-CY9WPC62Rui6A'
        },
        {
            id: 20,
            name: 'John Surtees',
            championships: 1,
            seasons: '1964',
            image: 'https://cdn.images.express.co.uk/img/dynamic/24/590x/john-surtees-779482.jpg'
        },
        {
            id: 21,
            name: 'Denny Hulme',
            championships: 1,
            seasons: '1967',
            image: 'data:image/jpeg;base64,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'
        },
        {
            id: 22,
            name: 'Jochen Rindt',
            championships: 1,
            seasons: '1970',
            image: 'https://www.fr.de/bilder/2020/09/04/90036671/23880486-jochen-rindt-1970-in-hocknheim-2yGfLZWcfee9.jpg'
        },
        {
            id: 23,
            name: 'James Hunt',
            championships: 1,
            seasons: '1976',
            image: 'https://www.formula1.com/content/fom-website/en/drivers/hall-of-fame/James_Hunt/_jcr_content/featureContent/manual_gallery/image4.img.jpg'
        },
        {
            id: 24,
            name: 'Mario Andretti',
            championships: 1,
            seasons: '1978',
            image: 'https://www.formula1.com/content/fom-website/en/drivers/hall-of-fame/Mario_Andretti/_jcr_content/featureContent/manual_gallery/image7.img.jpg'
        },
        {
            id: 25,
            name: 'Jody Scheckter',
            championships: 1,
            seasons: '1979',
            image: 'https://www.racinghalloffamecollection.com/wp-content/uploads/Jody-Ferrari-Burton-artwork-b.jpg'
        },
        {
            id: 26,
            name: 'Alan Jones',
            championships: 1,
            seasons: '1980',
            image: 'https://i.pinimg.com/originals/3a/df/7b/3adf7bec1dc4a879a5e74feecc0677b0.jpg'
        },
        {
            id: 27,
            name: 'Keke Rosberg',
            championships: 1,
            seasons: '1982',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQznlM4bAOqxecNrjsp7F5TxYbJMmq1GbvBQA&usqp=CAU'
        },
        {
            id: 28,
            name: 'Nigel Mansell',
            championships: 1,
            seasons: '1992',
            image: 'https://www.essentiallysports.com/wp-content/uploads/F1-Mansell.jpg'
        },
        {
            id: 29,
            name: 'Damon Hill',
            championships: 1,
            seasons: '1996',
            image: 'https://cdn-images.motorsportstats.com/large/driverProfilePicture/driverProfilePicture-bd5d5c56-a171-454b-a221-58db74788046.jpg'
        },
        {
            id: 30,
            name: 'Jacques Villeneuve',
            championships: 1,
            seasons: '1997',
            image: 'https://pbs.twimg.com/media/Dh94qKWWAAA74Kw.jpg'
        },
        {
            id: 31,
            name: 'Kimi Räikkönen',
            championships: 1,
            seasons: '2007',
            image: 'https://www.formula1.com/content/fom-website/en/latest/features/2016/11/f1-brazil-gp-title-deciders-championship/_jcr_content/featureContent/image_1.img.jpg/1478273855124.jpg'
        },
        {
            id: 32,
            name: 'Jenson Button',
            championships: 1,
            seasons: '2009',
            image: 'https://img.bleacherreport.net/img/images/photos/002/558/396/hi-res-88368132-jenson-button-of-great-britain-and-brawn-gp-celebrates_crop_north.jpg?1382093491&w=3072&h=2048'
        },
        {
            id: 33,
            name: 'Nico Rosberg',
            championships: 1,
            seasons: '2016',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx53B_DJe_n9A66O88tQ_9rS2JxhRVa_OGSg&usqp=CAU'
        },

    ]
};

const wdcReducer =  (state=INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default wdcReducer;