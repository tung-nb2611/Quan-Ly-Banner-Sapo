import axios from "axios";
const SECTOR_API_BASE_URL = "/section_id={section_id}/sectors";
class SectorService {
    // lay thông tin Luong click
    getSectorBySectionId(sectionId) {
        return axios.get("http://localhost:8080/api/section_id=" + sectionId + "/sectors");
    }

}
export default new SectorService();
