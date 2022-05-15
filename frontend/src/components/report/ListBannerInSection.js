import axios from "axios";
import React, { useEffect, useState } from "react";
import BannerService from "../../services/BannerService";
import BannerInSectionInfor from "./BannerInSectionInfor";
import ReportBannerInfor from "./ReportBannerInfor";
import { useLocation, useParams } from "react-router-dom";
import { Line, Bar } from 'react-chartjs-2';
import ReportService from "../../services/ReportService";

const ListBannerInSection = () => {
    const [data2, setData2] = useState([]);
    const [category, setCategory] = useState([]);
    const [data1, setData1] = useState([]);
    let { id } = useParams();
    const [bannerList, setBannerList] = useState([]);
    useEffect(() => {
        let Viewws = []
        let Name = []
        let Click = []
        ReportService.getListClickandviewInmonth(id).then(res => {
            console.log(res);
            for (const dataObj of res.data) {
                Viewws.push(parseInt(dataObj.numberView));
                console.log('viewsdata', dataObj.numberClick);
                Name.push(dataObj.month);
                Click.push(parseInt(dataObj.numberClick));

            }
            setData2(Viewws)
            setCategory(Name)
            setData1(Click)
        })
    }, [id]);
    var data = {
        labels: category,
        datasets: [
            {
                label: 'lượng click banner',
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
                ],
                borderWidth: 1,
                fill: false
            },
            {
                label: 'lượng views banner',
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
    console.log(data1, data2)
    useEffect(() => {
        BannerService.getLisstBannerBySectionId(id).then((response) => {
            const info = response.data;
            setBannerList(info);
            console.log(info)
        });

    }, []);
    const displayBanner = bannerList.map((bannerInfo) => {
        return (
            <div className="col-md-12 col-lg-6 mb-3" key={bannerInfo.id}>
                <BannerInSectionInfor bannerInfo={bannerInfo} bannerList={bannerList} setBannerList={setBannerList} />;
            </div>
        );
    });
    return (
        <div className="banner-list m-2">
            <div style={{ width: '80%', height: '50vh' }}>
                <Bar
                    data={data}
                    height={400}
                    options={options}
                />
            </div>
            <div className="list">
                {displayBanner}
            </div>

        </div>
    );

}
export default ListBannerInSection;