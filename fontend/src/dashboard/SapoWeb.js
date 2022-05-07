import React from "react-dom"
import { useState, useContext } from "react";
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import BannerStatusService from "../services/BannerStatusService";
import { CheckboxArrContext } from '../context/CheckboxListContext';
import { Redirect } from "react-router-dom";

import mixpanel from 'mixpanel-browser';
mixpanel.init('a3f0d234c4c4510e16e5824f17c1bf0c',
    { debug: true });



export default function SapoWeb(props) {

    const arrContext = useContext(CheckboxArrContext);
    const location = useLocation();
    const [data, setData] = useState([]);

    const handleClick = (e) => {
        mixpanel.track('sapo - click banner' + data.code,
            { data: data }
        )


    }




    useEffect(() => {


        let check = location.state.random;
        console.log(check);
        if (check === 1) {
            BannerStatusService.getListBannerStatusViaRandom(1).then(res => {
                console.log("data random  lay ra: ", res.data)
                setData(res.data);
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


            <button onClick={handleClick}>
                <img src={data.imgUrl || ''} alt="ảnh banner" ></img>

            </button>
        </div>
    )
}