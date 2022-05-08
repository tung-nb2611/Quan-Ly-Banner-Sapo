import axios from "axios";

const SECTION_API_SECTION_URL = "http://localhost:8080/api/sections";

class SectionService {
    getImageList(sectionId) {
        return axios.get(SECTION_API_SECTION_URL + '/' + sectionId);
    }
}

export default new SectionService();