const INITIAL_STATE = {
    teams: [
        {
            id: 1,
            team: 'ferrari',
            founders: 'Enzo Ferrari',
            wcc: 16,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgrfdhGFjGJSMn_rn8fYvGDACsWaXKJ_eDhA&usqp=CAU'
        },
        {
            id: 2,
            team: 'willaims',
            founders: 'Frank Williams, Patrick Head',
            wcc: 9,
            image: 'https://i.pinimg.com/originals/ce/97/ed/ce97ed6be99003209de5a968f32985cc.jpg'
        },
        {
            id: 3,
            team: 'mclaren',
            founders: 'Bruce McLaren',
            wcc: 8,
            image: 'https://play-lh.googleusercontent.com/fyEfyAj6JjgQl3bQj1JnkgLtgNn_YdN_qATyjfUKB3fY65wYlPF8RFoJNDVSRVdjYsE'
        },
        {
            id: 4,
            team: 'lotus',
            founders: 'Colin Champman',
            wcc: 7,
            image: 'https://cdn.worldvectorlogo.com/logos/lotus-f1-team.svg'
        },
        {
            id: 5,
            team: 'mercedes',
            founders: 'previously Brawn GP',
            wcc: 7,
            image: 'https://pbs.twimg.com/profile_images/1255768764341248001/M7ZWOZfL_400x400.jpg'
        },
        {
            id: 6,
            team: 'red bull racing',
            founders: 'Dietrich Mateschitz',
            wcc: 4,
            image: 'https://i.redd.it/e3a3aakmjm701.jpg'
        },
        {
            id: 7,
            team: 'cooper',
            founders: 'Charles Cooper, John Cooper',
            wcc: 2,
            image: 'https://www.philippelague.com/wp-content/uploads/2017/06/cooper-logo.png'
        },
        {
            id: 8,
            team: 'brabham',
            founders: 'Jack Brabham, Ron Tauranac',
            wcc: 2,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRleKD_TCDPRk_7djKpnLCJFt03eaerjn2RoQ&usqp=CAU'
        },
        {
            id: 9,
            team: 'renault',
            founders: 'previously Lotus F1',
            wcc: 2,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGwRgQ3LjCpd3k5MnvaQc0hqC469ZpItYShw&usqp=CAU'
        },
        {
            id: 10,
            team: 'vanwall',
            founders: 'Tony Vandervell',
            wcc: 1,
            image: 'http://cdn.shopify.com/s/files/1/0323/9972/0581/products/VAN-D_451214dc-61cb-4e15-a66e-fb8330971830_1200x1200.jpg?v=1583791005'
        },
        {
            id: 11,
            team: 'brm',
            founders: 'Raymond Mays, Peter Berthon',
            wcc: 1,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7AQi0ePuOCP0RzXuOGwo2MuIgJN04lKr05w&usqp=CAU'
        },
        {
            id: 12,
            team: 'matra',
            founders: 'Jean-Luc Lagardère, Marcel Chassagny',
            wcc: 1,
            image: 'https://upload.wikimedia.org/wikipedia/en/4/4b/Matra_Sports.gif'
        },
        {
            id: 13,
            team: 'tyrrell',
            founders: 'Ken Tyrrell',
            wcc: 1,
            image: 'https://cdn.worldvectorlogo.com/logos/tyrrell-f1.svg'
        },
        {
            id: 14,
            team: 'benetton',
            founders: 'previously Toleman Motorsport',
            wcc: 1,
            image: 'https://upload.wikimedia.org/wikipedia/en/5/54/Benetton_Formula_logo.jpg'
        },
        {
            id: 15,
            team: 'brawn gp',
            founders: 'Ross Brawn',
            wcc: 1,
            image: 'https://i.pinimg.com/originals/a2/b2/d0/a2b2d0162cea18a556d3b766d2c54ad5.jpg'
        }
    ]
}

const wccReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default wccReducer;