import axios from "axios";
const BANNER_API_BASE_URL = "http://localhost:8080/api/banners/views";
class ViewService {
    // lay thông tin Luong view
    getListView(bannerId) {
        return axios.get("http://localhost:8080/api/banners/views/" + bannerId);
    }
    getView() {
        return axios.get(BANNER_API_BASE_URL)
    }
}
export default new ViewService();
