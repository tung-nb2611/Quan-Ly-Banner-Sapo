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



    return (
        <div>
            hello 123

        </div>
    )
}