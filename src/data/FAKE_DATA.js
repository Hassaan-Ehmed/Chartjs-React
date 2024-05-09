const lineChartsData = {


    labels:[

        "Monday",
        "Tuesday",
        "Wedesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ],


    datasets : [
        {
            label:"Temperature",
            data:[3000,5000,4500,6000,8000,7000,9000],
            borderColor: "#FB9B03"
        },
        {
            label:"Humidity",
            data:[3000,5000,5500,8000,1200,11000,15000],
            borderColor: "#03DEFE"
        }
    ]

}

const barChartsData = {
    labels:["Rent","Groceries","Utilities","Entertaiment","Transportation"],

    datasets:[
        {
            label:"Expenses",
            data:[1200,300,150,180,100],
            backgroundColor:"#FF0000",
            borderColor:"#00000",
            borderWidth:1
        }
    ]
}

const pieChartsData = {
    labels:["Facebook","Instagram","Twitter","YouTube","LinkedIn"],

    datasets:[
        {
            label:"Time Spent",
            data:[120,60,30,90,45],
            backgroundColor:[
                "rgba(255,99,132,0.8)",
                "rgba(54,162,235,0.8)",
                "rgba(255,206,86,0.8)",
                "rgba(75,192,192,0.8)",
                "rgba(153,102,255,0.8)",
            ],
            hoverOffset: 4
        }
    ]
}

export {lineChartsData,barChartsData,pieChartsData};