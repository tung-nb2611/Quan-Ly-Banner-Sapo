import axios from "axios";
import React, { useEffect, useState } from "react";
import BannerService from "../../services/BannerService";
import BannerInSectionInfor from "./BannerInSectionInfor";
import { useLocation, useParams } from "react-router-dom";


const ListBannerInSection = () => {
    let { id } = useParams();
    const [bannerList, setBannerList] = useState([]);
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
            <div className="list">
                {displayBanner}
            </div>

        </div>
    );

}
export default ListBannerInSection;