import axios from "axios";

const SECTION_API_SECTION_URL = "http://localhost:8080/api/sections";

class SectionService {
    getImageList(sectionId) {
        return axios.get(SECTION_API_SECTION_URL + '/' + sectionId);
    }

    getSectionByPageAndUserAdd(userAdd, number){
        return axios.get(SECTION_API_SECTION_URL + '/page/user=' + userAdd + '/' + number);
    }

    getSectionByPage(number){
        return axios.get(SECTION_API_SECTION_URL + '/page/' + number);
    }
}

export default new SectionService();