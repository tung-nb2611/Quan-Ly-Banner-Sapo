import React, { useState, useEffect } from "react";
// import { Line } from "react-chartjs-2";
import axios from "axios";
import BannerService from "../../services/BannerService";
// import Chart from 'react-apexcharts'
// const Views = () => {

//     const [category, setCategory] = useState([])
//     const [data1, setData1] = useState([])
//     const [data2, setData2] = useState([])
//     useEffect(() => {
//         const age = [];
//         const salary = [];
//         BannerService.getListBanner().then((response) => {
//             response.data.map(item => {
//                 console.log("item", item)
//                 age.push(item.id);
//                 salary.push(item.name)
//             })
//             setCategory(salary)
//             setData1(age)

//             console.log("age", age, salary)
//         }).catch(e => {
//             alert(e);



//         });
//     }, []);

//     return (
//         <Chart options={{
//             chart: {
//                 id: 'apexchart-example'
//             },
//             xaxis: {
//                 categories: category
//             }
//         }}
//             series={[{
//                 name: 'series-1',
//                 data: data
//             }]} type="line" width={800} height={500} />
//     );
// };

// export default Views;

// import { useEffect, useState } from 'react';
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
// } from 'chart.js';

// import { Bar } from 'react-chartjs-2';
// // ChartJS.register(
// //     CategoryScale,
// //     LinearScale,
// //     BarElement,
// //     Title,
// //     Tooltip,
// //     Legend
// // );
// const options = {
//     indexAxis: 'y',
//     elements: {
//         bar: {
//             borderWidth: 2,
//         },
//     },
//     responsive: true,
//     plugins: {
//         legend: {
//             position: 'right',
//         },
//         title: {
//             display: true,
//             text: 'Chart.js Horizontal Bar Chart',
//         },
//     },
// };

// const Horizontalchart = () => {
//     const [data, setData] = useState({
//         // labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
//         // datasets: [
//         //     {
//         //         label: 'bannerId',
//         //         data: [],
//         //         borderColor: 'rgb(255, 99, 132)',
//         //         backgroundColor: 'rgba(25, 90, 13, 0.5)',
//         //     },
//         //     {
//         //         label: 'Lượt views',
//         //         data: [],
//         //         borderColor: 'rgb(53, 162, 235)',
//         //         backgroundColor: 'rgba(53, 162, 235, 0.5)',
//         //     },
//         // ],
//     });
//     useEffect(() => {
//         const fetchData = async () => {
//             const urlViews = 'http://localhost:8080/api/banners/views';
//             // const urlClicks = 'http://localhost:8080/api/clicks-banner';


//             const labelSet = []
//             const dataSet1 = [];
//             const dataSet2 = [];
//             await fetch(urlViews).then((data) => {
//                 console.log("Api data", data)
//                 const res = data.json();
//                 return res
//             }).then((res) => {
//                 console.log("ressss", res)
//                 for (const val of res) {
//                     labelSet.push(val.id)
//                     dataSet1.push(val.bannerID);
//                     dataSet2.push(val.number)
//                     // labelSet.push(val.name)
//                 }
//                 setData({
//                     labels: labelSet,
//                     datasets: [
//                         {
//                             label: 'bannerId',
//                             data: dataSet1,
//                             borderColor: 'rgb(255, 99, 132)',
//                             backgroundColor: 'rgba(99, 132, 0.5)',
//                         },
//                         {
//                             label: 'views',
//                             data: dataSet2,
//                             borderColor: 'rgb(53, 162, 235)',
//                             backgroundColor: 'rgba(53, 235, 0.5)',
//                         },
//                     ],
//                 })
//                 console.log("arrData", dataSet1, dataSet2)
//             }).catch(e => {
//                 console.log("error", e)
//             })
//         }

//         fetchData();
//     }, [])

//     return (
//         <div style={{ width: '80%', height: '50%' }}>
//             {
//                 console.log("dataaaaaaaa", data)
//             }
//             <Bar data={data} options={options} />
//         </div>)
// }
// export default Horizontalchart;

// import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


import { Bar } from 'react-chartjs-2';
import ClickService from "../../services/clicks/ClickService";
import ViewService from "../../services/views/ViewService";

// ChartJS.register(ArcElement, Tooltip, Legend);


const Views = () => {
    const [category, setCategory] = useState([])
    const [data1, setData1] = useState([])
    const [data2, setData2] = useState([])
    const [chart, setChart] = useState({})
    const [bannerName, setBannerName] = useState([])
    useEffect(() => {
        let Viewws = []

        ViewService.getView().then(res => {
            console.log(res);
            for (const dataObj of res.data) {
                Viewws.push(parseInt(dataObj.number));
                console.log('viewsdata', dataObj.number)

            }
            setData2(Viewws)

        })
    }, []);


    useEffect(() => {
        const age = [];
        const salary = [];
        BannerService.getListBanner().then((response) => {
            response.data.map(item => {
                console.log("item", item)
                age.push(item.id);
                salary.push(item.name)
            })
            setCategory(salary)
            setData1(age)

            console.log("age", age, salary)
        }).catch(e => {
            alert(e);



        });


    }, []);
    // useEffect(() => {
    //     const clicks = [];

    //     ClickService.getListClick().then((response) => {
    //         response.data.map(item => {
    //             console.log("itemclis", item)
    //             clicks.push(item);

    //         })

    //         setData2(clicks)

    //         console.log("clicks", clicks)
    //     }).catch(e => {
    //         alert(e);



    //     });
    // }, []);



    console.log("Views", data2);

    var data = {
        labels: category,
        datasets: [
            {
                label: 'lượng views banner',
                data: data2,
                borderColor: [
                    // 'rgba(255, 99, 132, 1)',
                    // 'rgba(255, 206, 86, 1)',
                    // 'rgba(255, 206, 86, 1)',
                    // 'rgba(75, 192, 192, 1)',
                    // 'rgba(153, 102, 255, 1)',
                    // 'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
                fill: false
            },
            // {
            //     label: 'lượng clicks banner',
            //     data: data2,
            //     // backgroundColor: [
            //     //     'rgba(255, 99, 132, 0.2)',
            //     //     'rgba(54, 162, 235, 0.2)',
            //     //     'rgba(255, 206, 86, 0.2)',
            //     //     'rgba(75, 192, 192, 0.2)',
            //     //     'rgba(153, 102, 255, 0.2)',
            //     //     'rgba(255, 159, 64, 0.2)'
            //     // ],
            //     borderColor: [
            //         'rgba(255, 99, 132, 1)',
            //         'rgba(54, 162, 235, 1)',
            //         'rgba(255, 206, 86, 1)',
            //         'rgba(75, 192, 192, 1)',
            //         'rgba(153, 102, 255, 1)',
            //         'rgba(255, 159, 64, 1)'
            //     ],
            //     borderWidth: 1,
            //     fill: false
            // }
        ]
    };

    var options = {
        maintainAspectRatio: false,
        scales: {
        },
        legend: {
            display: true,
            position: "bottom",
            labels: {
                fontSize: 25,
            },
        },
    }

    return (
        <div style={{ width: '80%', height: '40%' }}>
            <Bar
                data={data}
                height={400}
                options={options}
            />
        </div>
    )
}

export default Views;