import BannerList from "../components/banner/BannerList"
import { Link } from "react-router-dom";

const BannerManage = () => {
    return (
        <div>
            <Link to={"/banner/create/0"}><button>Thêm Banner</button></Link>
            <BannerList/>   
        </div>
    )
}

export default BannerManage;