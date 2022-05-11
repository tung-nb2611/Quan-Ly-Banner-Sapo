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
}
export default new ClickService();
