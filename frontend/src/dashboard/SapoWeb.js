import React from "react-dom"
import { useState, useContext } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BannerStatusService from "../services/BannerStatusService";
import { CheckboxArrContext } from '../context/CheckboxListContext';



export default function SapoWeb(props) {

    const arrContext = useContext(CheckboxArrContext);
    const location = useLocation();
    const [data, setData] = useState();


    useEffect(() => {


        let check = location.state.random;
        console.log(check);
        if (check === 1) {
            BannerStatusService.getListBannerStatusViaRandom(1).then(res => {
                console.log("data random  lay ra: ", res.data)
                setData(res.data.imgUrl);
            })
        }
        else {
            BannerStatusService.getImageUrlByPercentage(1).then(res => {

                console.log("received data : ", res.data);
                setData(res.data);
            })
            console.log("dada", data);
        }

    }, []);
    return (
        <div>
            <img src={data || ''} alt="ảnh banner" ></img>
        </div>
    )
}