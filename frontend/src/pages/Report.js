import React from "react";
import CharViewAndClik from "../components/report/CharViewAndClik";
import ChoiceSection from "../components/report/ChoiceSection";
import ListBannerInSection from "../components/report/ListBannerInSection";
import ListBannerReport from "../components/report/ListBannerReport";
import Views from "../components/report/Views";

const Report = () => {
    return (
        <div >
            <ChoiceSection />
            {/* <Views /> */}
            <ListBannerReport />
            {/* <ListBannerInSection /> */}
        </div>
    );
};

export default Report;
