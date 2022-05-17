import axios from "axios";
const SECTOR_API_BASE_URL = "/section_id={section_id}/sectors";
class SectorService {
    // lay thông tin Luong click
    getSectorByWebsiteId(websiteId) {
        return axios.get("http://localhost:8080/api/websiteID=" + websiteId + "/sections");
    }

}
export default new SectorService();