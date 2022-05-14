import axios from "axios";

const REPORT_API_SECTION_URL = "http://localhost:8080/api/banners/report";

class ReportService {
    getClickAndView() {
        return axios.get(REPORT_API_SECTION_URL);
    }
<<<<<<< HEAD
    getSumClickAndViewInBannerId(bannerID) {
        return axios.get("http://localhost:8080/api/banners/report/click-and-view/bannerID=" + bannerID)
    }
    getSumClickAndViewInSection(sectionID) {
        return axios.get("http://localhost:8080/api/banners/report/click-and-view/sectionID" + sectionID)
    }
    getSumClickAndViewInBannerIdBySectionId(bannerID, sectionID) {
        return axios.get("http://localhost:8080/api/banners/report/click-and-view/" + sectionID + '/' + bannerID)
    }
=======
    getSumClickAndViewInBannerId(bannerID){
        return axios.get("http://localhost:8080/api/banners/report/click-and-view/bannerID=" + bannerID)
    }
>>>>>>> 21a008dd5fd8e5676ff0c00d6ace9145ee0bba21
}

export default new ReportService();