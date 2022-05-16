import axios from "axios";

const REPORT_API_SECTION_URL = "http://localhost:8080/api/banners/report";

class ReportService {
    getClickAndView() {
        return axios.get(REPORT_API_SECTION_URL);
    }
    getSumClickAndViewInBannerId(bannerID) {
        return axios.get("http://localhost:8080/api/banners/report/click-and-view/bannerID=" + bannerID)
    }
}

export default new ReportService();