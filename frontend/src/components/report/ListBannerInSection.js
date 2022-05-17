import axios from "axios";
import React, { useEffect, useState } from "react";
import BannerService from "../../services/BannerService";
import BannerInSectionInfor from "./BannerInSectionInfor";
import ReportBannerInfor from "./ReportBannerInfor";
import { useLocation, useParams } from "react-router-dom";
import { Line, Bar } from 'react-chartjs-2';
import ReportService from "../../services/ReportService";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs'

const ListBannerInSection = () => {
    const [data2, setData2] = useState([]);
    const [category, setCategory] = useState([]);
    const [data1, setData1] = useState([]);
    let { id } = useParams();
    const [bannerList, setBannerList] = useState([]);
    const [listChar, setListChar] = useState()
    const [showChar, setShowChar] = useState(false)
    const [dataYear1, setDataYear1] = useState([])
    const [dataYear2, setDataYear2] = useState([])
    const [year, setYear] = useState([]);


    useEffect(() => {
        let Viewws = []
        let Name = []
        let Click = []
        ReportService.getListClickandviewInYear(id).then(res => {
            console.log(res);
            for (const dataObj of res.data) {
                Viewws.push(parseInt(dataObj.numberView));
                console.log('viewsdata', dataObj.numberView);
                Name.push(dataObj.year);
                Click.push(parseInt(dataObj.numberClick));

            }
            setDataYear1(Viewws)

            setDataYear2(Click)
        })
    }, []);

    useEffect(() => {
        let Viewws = []
        let Name = []
        let Click = []
        let Year = []
        ReportService.getListClickandviewInmonth(id).then(res => {
            console.log(res);
            for (const dataObj of res.data) {
                Viewws.push(parseInt(dataObj.numberView));
                // console.log('viewsdata', dataObj.numberClick);
                Name.push(dataObj.month);
                Click.push(parseInt(dataObj.numberClick));
                Year.push(dataObj.year)

            }
            setData2(Viewws)
            setCategory(Name)
            setData1(Click)
            setYear(Year)
        })
    }, [id]);
    var dataMouth = {
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

    var optionsMounth = {
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

    var dataYear = {
        labels: year,
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

    var optionsYear = {
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



    useEffect(() => {
        BannerService.getLisstBannerBySectionId(id).then((response) => {
            const info = response.data;
            setBannerList(info);
            console.log(info)
        });

    }, []);
    const displayBanner = bannerList.map((bannerInfo) => {
        return (
            <>
                <div className="col-md-12 col-lg-6 mb-3" key={bannerInfo.id}>
                    <BannerInSectionInfor bannerInfo={bannerInfo} bannerList={bannerList} setBannerList={setBannerList} />;
                </div>

            </>
        );
    });
    console.log("year:", dataYear, dataYear1, dataYear2)
    return (
        <div className="banner-list m-2">
            <div className="char">

                <button onClick={() => setShowChar(false)}>
                    Tháng
                </button>
                <button onClick={() => setShowChar(true)}>
                    Năm
                </button>

                <div class="tab-content">
                    <>
                    {showChar === false ? (
                        <div id="Bar" style={{ width: '80%', height: '50vh' }}>
                            <Bar
                                data={dataMouth}
                                height={400}
                                options={optionsMounth}
                            />
                        </div>
                    ) : (
                        <div id="line" style={{ width: '80%', height: '50vh' }}>
                            <Line
                                data={dataYear}
                                height={400}
                                options={optionsYear}
                            />


                        </div>
                    )
                    }


                    </>


                </div>
            </div>
            <div className="list">
                {displayBanner}
            </div>

        </div>
    );

}
export default ListBannerInSection;