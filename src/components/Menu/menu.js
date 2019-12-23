const sideMenu = [
    { key:'00', name:'Home', icon:'home', linkTo:'/'},
    { key:'01', name:'Users', icon:'user',
        child: [
            { key:'0101', name:'Wiezman', icon:'man', linkTo:'/user/Wiezman'},
            { key:'0102', name:'Iris', icon:'woman', linkTo:'/user/Iris'},
            { key:'0103', name:'Tom', icon:'woman', linkTo:'/user/Tom'},
        ]
    },
    { key:'02', name:'Login', icon:'lock', linkTo:'/login'},
    { key:'03', name:'no subMenu no icon'},
    { key:'04', name:'Teams', icon:'team',
        child: [
            { key:'0401', name:'A Team', icon:'play-circle',
                child: [
                    { key: '040101', name:'level3-1', icon:'check', linkTo:'/team/TeamA'},
                    { key: '040102', name:'level3-2', icon:'open'},
                    { key: '040103', name:'level3-3', icon:'close'},
                    { key: '040104', name:'level3-4'}
            ]
            },
            { key:'0402', name:'Menu 4 option 2', icon:'android'},
            { key:'0403', name:'Menu 4 option 3', icon:'bulb',
                child: [
                { key: '040301', name:'level4-1', icon:'check'},
                { key: '040302', name:'level4-2', icon:'open'},
                { key: '040303', name:'level4-3', icon:'close'},
                { key: '040304', name:'level4-4'},
            ]},
        ]
    },
    { key:'05', name:'OptionA', icon:'lock', linkTo:'/optiona'},

]

export default sideMenu