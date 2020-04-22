export const defaultState = {
    users:[{
        id: "U1",
        name: "Dev"
    },{
        id: "U2",
        name: "Jacob"
    },{
        id: "U3",
        name: "Jean"
    },{
        id: "U4",
        name: "Eliot"
    }],
    groups:[{
        name:"To Do",
        id:"G1",
        owner:"U1"
    },{
        name:"Doing",
        id:"G2",
        owner:"U1"
    },{
        name:"Done",
        id:"G3",
        owner:"U1"
    },{
        name:"Archived",
        id:"G4",
        owner:"U1"
    }],
    tasks:[{
        name: "Do tests",
        id:"T1",
        group:"G1",
        owner:"U1",
        isComplete:false
    },{
        name: "Refactor tests",
        id:"T2",
        group:"G1",
        owner:"U1",
        isComplete:false
    },{
        name: "Write tests",
        id:"T3",
        group:"G1",
        owner:"U1",
        isComplete:false
    }],
    comments:[{
        owner:"U1",
        id:"C1",
        task:"T1",
        content:"Great work!!!"
},
{
    owner:"U1",
    id:"C2",
    task:"T2",
    content:"Excellent work!!!"
},
{
    owner:"U1",
    id:"C3",
    task:"T3",
    content:"Bad work!!!"
}]
}