import axios from "axios";

const BANNER_API_BASE_URL = "http://localhost:8080/api/banners";
class BannerService {
    // lay danh sach banner
    getListBanner() {
        return axios.get(BANNER_API_BASE_URL);
    }

    createBanner(banner) {
        return axios.post(BANNER_API_BASE_URL, banner);
    }

    getBannerById(id) {
        return axios.get(BANNER_API_BASE_URL + '/' + id);
    }

    updateBanner(banner, id) {
        return axios.put(BANNER_API_BASE_URL + '/' + id, banner);
    }

    deleteBanner(id) {
        return axios.delete(BANNER_API_BASE_URL + '/' + id);
    }
    getListStatus(sectionId, number) {
        return axios.get("http://localhost:8080/api/banners/rate/" + sectionId + "/" + number);
    }
}
export default new BannerService();