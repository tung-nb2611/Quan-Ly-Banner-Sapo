import axios from "axios";

// const BANNER_STATUS_API_BASE_URL = "http://localhost:8080/api/banner-status";
class BannerStatusService {
    // lay danh sach banner
    getListBannerStatusViaRandom(sectionID) {
        return axios.get("http://localhost:8080/api/banner-mapping/random/" + sectionID);
    }

    updateBannerStatusViaRandom(bannerStatusItem) {
        return axios.put("http://localhost:8080/api/banner-mapping/random", bannerStatusItem);
    }
    updateBannerStatus(bannerStatusItem, id) {
        return axios.post("http://localhost:8080/api/banner-mapping/random/" + id, bannerStatusItem);
    }

    updateBannerStatusViaPercentage(bannerStatusArray) {
        return axios.put("http://localhost:8080/api/banner-mapping/percentage", bannerStatusArray);
    }
    getListBannerStatusViaPercentage(bannerID, sectionID) {
        return axios.get("http://localhost:8080/api/banner-mapping/percentage/" + sectionID + "/" + bannerID);
    }

    getListStatus(sectionId, number) {
        return axios.get("http://localhost:8080/api/banner-mapping/rate/" + sectionId + "/" + number);
    }

    getImageUrlByPercentage(sectionId) {
        return axios.get("http://localhost:8080/api/banner-mapping/percents/" + sectionId);
    }
    getListBannerMpaing(bannerID) {
        return axios.get("http://localhost:8080/api/banner-mapping/" + bannerID);
    }

    updateBannerStatusList(bannerStatusArray){
        return axios.put("http://localhost:8080/api/banner-status/update", bannerStatusArray);
    }
}
export default new BannerStatusService();