import React, { useState, useEffect } from "react";
import axios from "axios";
import BannerService from "../../services/BannerService";
import { Bar, Line } from 'react-chartjs-2';
import ViewService from "../../services/views/ViewService";

const Views = () => {
    const [category, setCategory] = useState([])
    const [data1, setData1] = useState([])
    const [data2, setData2] = useState([])
    const [chart, setChart] = useState({})
    const [bannerName, setBannerName] = useState([])
    useEffect(() => {
        let Viewws = []
        let id = []
        ViewService.getView().then(res => {
            console.log(res);
            for (const dataObj of res.data) {
                Viewws.push(parseInt(dataObj.bannerID));
                id.push((dataObj.timeView));
                console.log('viewsdata', Viewws, id);

            }
            setData2(id)
            setCategory(Viewws)
        })
    }, []);


    // useEffect(() => {
    //     const age = [];
    //     const salary = [];
    //     BannerService.getListBanner().then((response) => {
    //         response.data.map(item => {
    //             console.log("item", item)
    //             age.push(item.id);
    //             salary.push(item.name)
    //         })

    //         setData1(age)

    //         console.log("age", age, salary)
    //     }).catch(e => {
    //         alert(e);
    //     });
    // }, []);

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
        // <div style={{ width: '80%', height: '50%' }}>
        <Bar
            data={data}
            height={400}
            options={options}
        />
        // </div>
    )
}

export default Views;