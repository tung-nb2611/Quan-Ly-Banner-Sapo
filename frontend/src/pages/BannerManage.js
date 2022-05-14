import BannerList from "../components/banner/BannerList"
import "../styles/banner/BannerManage.css";

import { Link } from "react-router-dom";

const BannerManage = () => {
    return (
        <div className="manage p-3">
            <Link className="link btn btn-primary mb-3" to={"/banner/create/0"}>Thêm Banner</Link>
            <BannerList/>   
        </div>
    )
}

export default BannerManage;