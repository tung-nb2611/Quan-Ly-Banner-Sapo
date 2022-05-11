import axios from "axios";

const REPORT_API_SECTION_URL = "http://localhost:8080/api/banners/report";

class ReportService {
    getClickAndView() {
        return axios.get(REPORT_API_SECTION_URL);
    }
}

export default new ReportService();