import React, { useState, useEffect } from "react";


import BannerService from "../../services/BannerService";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


import { Bar } from 'react-chartjs-2';

import ViewService from "../../services/views/ViewService";
import ReportService from "../../services/ReportService";




const Views = () => {
    const [category, setCategory] = useState([])
    const [data1, setData1] = useState([])
    const [data2, setData2] = useState([])
    const [chart, setChart] = useState({})
    const [bannerName, setBannerName] = useState([])
    useEffect(() => {
        let Viewws = []
        let Name = []
        ReportService.getClickAndView().then(res => {
            console.log(res);
            for (const dataObj of res.data) {
                Viewws.push(parseInt(dataObj.numberViews));
                console.log('viewsdata', dataObj);
                Name.push(dataObj.bannerName)
            }
            setData2(Viewws)
            setCategory(Name)
        })
    }, []);






    console.log("Views", category, data2);

    var data = {
        labels: category,
        datasets: [
            {
                label: 'lượng views banner',
                data: data2,
                borderColor: [

                ],
                borderWidth: 1,
                fill: false
            },

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
        <div style={{ width: '100%', height: '50vh' }}>
            <Bar
                data={data}
                height={400}
                options={options}
            />
        </div>
    )
}

export default Views;