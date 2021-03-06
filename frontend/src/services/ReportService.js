import axios from "axios";

const REPORT_API_SECTION_URL = "http://localhost:8080/api/banners/report";

class ReportService {
    getClickAndView() {
        return axios.get(REPORT_API_SECTION_URL);
    }
    getSumClickAndViewInBannerId(bannerID) {
        return axios.get("http://localhost:8080/api/banners/report/click-and-view/bannerID=" + bannerID)
    }
    getSumClickAndViewInSection(sectionID) {
        return axios.get("http://localhost:8080/api/banners/report/click-and-view/sectionID" + sectionID)
    }
    getSumClickAndViewInBannerIdBySectionId(bannerID, sectionID) {
        return axios.get("http://localhost:8080/api/banners/report/click-and-view/" + sectionID + '/' + bannerID)
    }
    getListClickandviewInmonth(sectionID) {
        return axios.get("http://localhost:8080/api/banners/report/click-and-view/sectionID=" + sectionID + "/year=" + "2022" + "/" + "statics")
    }
    getListClickandviewInYear(sectionID) {
        return axios.get("http://localhost:8080/api/banners/report/click-and-view/sectionID=" + sectionID + "/year=" + "2022")
    }
    // getSumClicksAndViewsInMounth() {
    //     return axios.get("http://localhost:8080/api/banners/report/click-and-view/year=2022/statics")
    // }
    getSumSectionbyWebID(webID) {
        return axios.get("http://localhost:8080/api/banners/views/static/website=" + webID + "/" + "year=2022")
    }

}

export default new ReportService();