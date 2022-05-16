import UserList from "../components/user/UserList"
import "../styles/banner/BannerManage.css";
import { Link } from "react-router-dom";

const UserManage = () => {
    return (
        <div className="manage p-3">
            <div className="d-flex justify-content-between">
                <h2>
                    Quản lý người dùng
                </h2>
                <Link className="link btn btn-primary btn-block pb-0" to={"/user/create/"}>
                    <h4>Thêm người dùng</h4>
                </Link>
            </div>
            <hr/>
            <h4 className="text-center pb-2">Danh sách người dùng</h4>
            <UserList/>   
        </div>
    )
}

export default UserManage;