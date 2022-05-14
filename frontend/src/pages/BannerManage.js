import BannerList from "../components/banner/BannerList"
import "../styles/banner/BannerManage.css";

<<<<<<< HEAD
import { Link } from "react-router-dom";

const BannerManage = () => {
    return (
        <div className="manage">
            <Link to={"/banner/create/0"}><button>Thêm Banner</button></Link>
=======
const BannerManage = () => {
    return (
        <div className="manage">
>>>>>>> 21a008dd5fd8e5676ff0c00d6ace9145ee0bba21
            <BannerList/>   
        </div>
    )
}

export default BannerManage;