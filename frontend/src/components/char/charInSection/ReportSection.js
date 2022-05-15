import ReportService from "../../../services/ReportService";
import React, { useState, useEffect } from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';



const ReportSection = ({ id }) => {
    const [data2, setData2] = useState([]);
    const [category, setCategory] = useState([]);
    useEffect(() => {
        let Viewws = []
        let Name = []
        ReportService.getListClickandviewInmonth(id).then(res => {
            console.log(res);
            for (const dataObj of res.data) {
                Viewws.push(parseInt(dataObj.numberView));
                console.log('viewsdata', dataObj);
                Name.push(dataObj.mount)
            }
            setData2(Viewws)
            setCategory(Name)
        })
    }, []);
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
export default ReportSection;