import axios from "axios";

// const BANNER_STATUS_API_BASE_URL = "http://localhost:8080/api/banner-status";
class BannerStatusService {
    getAllBannerStatus(){

    }

    // lay danh sach banner
    getListBannerStatusViaRandom(sectionID) {
        return axios.get("http://localhost:8080/api/banner-status/random/" + sectionID);
    }

    updateBannerStatusViaRandom(bannerStatusItem) {
        return axios.put("http://localhost:8080/api/banner-status/random", bannerStatusItem);
    }
    updateBannerStatus(bannerStatusItem, id) {
        return axios.post("http://localhost:8080/api/banner-status/random/" + id, bannerStatusItem);
    }

    updateBannerStatusViaPercentage(bannerStatusArray) {
        return axios.put("http://localhost:8080/api/banner-status/percentage", bannerStatusArray);
    }
    getListBannerStatusViaPercentage(bannerID, sectionID) {
        return axios.get("http://localhost:8080/api/banner-status/percentage/" + sectionID + "/" + bannerID);
    }

    getListStatus(sectionId, number) {
        return axios.get("http://localhost:8080/api/banner-status/rate/" + sectionId + "/" + number);
    }

    getImageUrlByPercentage(sectionId) {
        return axios.get("http://localhost:8080/api/banner-status/percents/" + sectionId);
    }

}
export default new BannerStatusService();