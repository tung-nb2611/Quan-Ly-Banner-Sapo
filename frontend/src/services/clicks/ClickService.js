import axios from "axios";
const Click_API_BASE_URL = "http://localhost:8080/api/clicks-banner";
class ClickService {
    // lay thông tin Luong click
    getCountClickByBanerId(bannerId) {
        return axios.get("http://localhost:8080/api/clicks-banner/count" + '/' + bannerId);
    }
    getAllClick() {
        return axios.get(Click_API_BASE_URL);
    }


    // Lấy thông tin của từng click chuột của mỗi banner
    getClickInfoByBannerId(bannerId) {
        return axios.get("http://localhost:8080/api/banners/click" + '/' + bannerId);
    }

    // Lấy thông tin của từng click chuột của mỗi banner và có phân trang
    getClickInfoByPage(bannerId, page) {
        return axios.get("http://localhost:8080/api/clicks-banner/info" + '/' + bannerId + '/' + page);

    }

}
export default new ClickService();
