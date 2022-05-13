import React from "react";
import CharViewAndClik from "../components/report/CharViewAndClik";
import ChoiceSection from "../components/report/ChoiceSection";
import ListBannerReport from "../components/report/ListBannerReport";
import Views from "../components/report/Views";

const Report = () => {
    return (
        <div >
            <ChoiceSection></ChoiceSection>

            {/* <Views /> */}
            <ListBannerReport />
        </div>
    );
};

export default Report;
