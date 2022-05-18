import React, { useState, useEffect } from "react";
import BannerService from "../../services/BannerService";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import ViewService from "../../services/views/ViewService";
import ReportService from "../../services/ReportService";
import '../../styles/report/ChartViewAndClick.css';
import DatePicker from "react-datepicker";

const Views = () => {
    const [category, setCategory] = useState([])
    const [data1, setData1] = useState([])
    const [data2, setData2] = useState([])
    const [chart, setChart] = useState({})
    const [bannerName, setBannerName] = useState([])
    const [startDate, setStartDate] = useState(new Date("2014/02/08"));
    const [endDate, setEndDate] = useState(new Date("2014/02/10"));
    useEffect(() => {
        let View1 = []
        let month = []
        let View2 = []
        ViewService.getLisViewInMonth().then(res => {
            console.log(res);
            for (const dataObj of res.data) {
                console.log("test:", dataObj.web.length)
                for (let i = 0; i < dataObj.web.length; i++) {

                    View1.push(dataObj.web[i]);


                    View2.push(dataObj.web[i].numberView);
                }
                month.push(dataObj.month)
            }
            setData2(View1)
            // setCategory(month)
            // setData1(View2)
        })
    }, []);
    console.log("data2:", data2)
    const test = (data2) => {
        let view = [];

        let Arr = new Array();
        let Arr2 = new Array();
        for (let i = 0; i < data2.length; i++) {
            Arr.push(data2[i].webName);
            Arr2.push(data2[i].numberView);
            view.push(Arr);
        }




        console.log("1:", Arr, Arr2);
    }

    var data = {
        labels: category,
        datasets: [
            {

                label: Arr,
                data: Arr2,
                borderColor: [
                    "red",],
                borderWidth: 1,
                fill: false,

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
    };

    // setChart(data);
    // setData1(options);


    console.log(data1)
    test(data2)
    return (
        <>
            <div>
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                />
                <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                />
            </div>

            <div className="chart my-3" style={{ width: '100%', height: '65vh' }}>
                <Line
                    data={data}
                    height={400}
                    options={options}
                />
            </div>



        </>
    )
}

export default Views;