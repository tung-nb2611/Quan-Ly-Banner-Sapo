import React from "react";
import CharViewAndClik from "../components/report/CharViewAndClik";
import ChoiceSection from "../components/report/ChoiceSection";
import ListBannerInSection from "../components/report/ListBannerInSection";
import ListBannerReport from "../components/report/ListBannerReport";
import Views from "../components/report/Views";
<<<<<<< HEAD

const Report = () => {
    return (
        <div >
            <ChoiceSection />
            {/* <Views /> */}
            <ListBannerReport />
            {/* <ListBannerInSection /> */}
=======
import * as BiIcons from "react-icons/bi";

const Report = () => {
    return (
        <div className=" p-3 d-flex flex-column gap-4">
            <div className="d-inline-flex gap-3">
                <h3>WEBSITE</h3>
                <BiIcons.BiRightArrow className="mt-2"/>
                <ChoiceSection />
            </div>
            <div>
                <Views />
            </div>
            <div>
                {/* <ListBannerReport /> */}
            </div>
            <div>
                {/* <ListBannerInSection /> */}
            </div>
>>>>>>> 21a008dd5fd8e5676ff0c00d6ace9145ee0bba21
        </div>
    );
};

export default Report;
