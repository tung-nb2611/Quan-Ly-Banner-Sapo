import axios from "axios";

const SECTION_API_SECTION_URL = "http://localhost:8080/api/sections";

class SectionService {
    // getImageList(sectionId) {
    //     return axios.get(SECTION_API_SECTION_URL + '/' + sectionId);
    // }

    getSectionByPageAndWebsiteId(webId, number) {
        return axios.get(SECTION_API_SECTION_URL + '/page/websiteId=' + webId + '/' + number);

    }



    // getWebsiteByPage(number){
    //     return axios.get(SECTION_API_SECTION_URL + '/page/' + number);
    // }
}

export default new SectionService();