import React from "react";
import CharViewAndClik from "../components/report/CharViewAndClik";
import ChoiceSection from "../components/report/ChoiceSection";
import ListBannerInSection from "../components/report/ListBannerInSection";
import ListBannerReport from "../components/report/ListBannerReport";
import Views from "../components/report/Views";
import * as BiIcons from "react-icons/bi";
import Widget from "../components/widget/Widget"

const Report = () => {
    // const [currentTime, setCurrentTime] = Date.now();
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    return (
        <div className="p-3 d-flex flex-column gap-4">
            <div className="header d-flex justify-content-between">
                <div className="d-inline-flex gap-3">
                    <h3>WEBSITE</h3>
                    <BiIcons.BiRightArrow className="mt-2" />
                    <ChoiceSection />
                </div>
                <h3>{date}</h3>
            </div>

            <div>
                <Views />
            </div>
            <div>
                <ListBannerReport />
            </div>
            <div>
                {/* <ListBannerInSection /> */}
            </div>
        </div>
    );
};

export default Report;
