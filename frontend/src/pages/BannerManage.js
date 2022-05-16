import BannerList from "../components/banner/BannerList"
import "../styles/banner/BannerManage.css";
import { Link } from "react-router-dom";

const BannerManage = () => {
    return (
        <div className="manage p-3">
            <div className="d-flex justify-content-between">
                <h2>
                    Quản lý Banner
                </h2>
                <Link className="link btn btn-primary btn-block pb-0" to={"/banner/create/0"}>
                    <h4>Thêm Banner</h4>
                </Link>
            </div>
            <hr/>
            <h4 className="text-center pb-2">Danh sách các banner</h4>
            <BannerList/>   
        </div>
    )
}

export default BannerManage;