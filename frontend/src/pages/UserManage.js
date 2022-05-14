import UserList from "../components/user/UserList"
import "../styles/banner/BannerManage.css";
import { Link } from "react-router-dom";

const UserManage = () => {
    return (
        <div className="manage p-3">
            <Link className="link btn btn-primary mb-3" to={"/user/create/"}>Thêm Banner</Link>
            <UserList/>   
        </div>
    )
}

export default UserManage;