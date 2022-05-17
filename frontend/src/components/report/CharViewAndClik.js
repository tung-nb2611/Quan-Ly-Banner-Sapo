import React, { useState, useEffect } from "react";
import BannerService from "../../services/BannerService";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import ViewService from "../../services/views/ViewService";
import ReportService from "../../services/ReportService";
import '../../styles/report/ChartViewAndClick.css'

const Views = () => {
    const [category, setCategory] = useState([])
    const [data1, setData1] = useState([])
    const [data2, setData2] = useState([])
    const [chart, setChart] = useState({})
    const [bannerName, setBannerName] = useState([])
    useEffect(() => {
        let Viewws = []
        let Name = []
        let Click = []
        ReportService.getSumClicksAndViewsInMounth().then(res => {
            console.log(res);
            for (const dataObj of res.data) {
                Viewws.push(parseInt(dataObj.numberView));
                console.log('viewsdata', dataObj);
                Name.push(dataObj.month)
                Click.push(parseInt(dataObj.numberClick))
            }
            setData2(Viewws)
            setCategory(Name)
            setData1(Click)
        })
    }, []);

    console.log("Views", category, data2);

    var data = {
        labels: category,
        datasets: [
            {
                label: 'SapoWeb',
                data: data2,
                borderColor: [
                    "red",

                    "red",

                    "red",
                    "red",
                    "red",
                    "red",

                    "red",
                    "red",
                    "red",
                    "red",

                    "red",
                    "red",
                    "red",
                    "red",
                    "red",

                    "red",
                    "red",
                    "red",
                    "red",
                    "red",

                    "red",
                    "red",

                ],
                borderWidth: 1,
                fill: false
            },
            {
                label: 'SapoFnb',
                data: data1,
                borderColor: [
                    "blue",
                    "blue",
                    "blue",
                    "blue",
                    "blue",
                    "blue",
                    "blue",
                    "blue",
                    "blue",
                    "blue",
                    "blue",
                    "blue",
                    "blue",
                    "blue",
                    "blue",
                    "blue",
                ],
                borderWidth: 1,
                fill: false
            },


        ]
    };

    var options = {
        maintainAspectRatio: false,
        title: {
            display: true,
            text: "Lượng View tháng tại năm 2022",
            fontSize: 25,
        },
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
        <div className="chart my-3" style={{ width: '100%', height: '70vh' }}>
            <Line
                data={data}
                height={400}
                options={options}
            />
        </div>
    )
}

export default Views;