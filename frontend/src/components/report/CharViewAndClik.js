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
        let View1 = []
        let month = []
        let View2 = []
        ViewService.getListSumViewsInWebsite().then(res => {
            console.log(res);
            for (const dataObj of res.data) {
                View1.push(dataObj);
                console.log('viewsdata', dataObj.webView);
                month.push(dataObj.month)
                View2.push(dataObj.webView.sapofnb);
            }
            setData2(View1)
            setCategory(month)
            setData1(View2)
        })
    }, []);

    console.log("Views", category,);

    var data = {
        labels: category,
        datasets: [
            data2.map((dataObj) => ({
                label: dataObj.webView,
                data: dataObj.webView,
                borderColor: [
                    "red",],
                borderWidth: 1,
                fill: false

            })),
        ]
    };
    console.log("test", data)
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
        <div className="chart my-3" style={{ width: '100%', height: '65vh' }}>
            <Line
                data={data}
                height={400}
                options={options}
            />
        </div>
    )
}

export default Views;