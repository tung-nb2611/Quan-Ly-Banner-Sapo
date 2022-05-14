import axios from "axios";

const SECTION_API_SECTION_URL = "http://localhost:8080/api/sections";

class SectionService {
    // getImageList(sectionId) {
    //     return axios.get(SECTION_API_SECTION_URL + '/' + sectionId);
    // }

    getSectionByPageAndWebsiteId(webId, number) {
        return axios.get(SECTION_API_SECTION_URL + '/page/websiteId=' + webId + '/' + number);
    }

    createSection(sectionItem) {
        return axios.post(SECTION_API_SECTION_URL, sectionItem);
    }

<<<<<<< HEAD
    getAllSections(){
        return axios.get('http://localhost:8080/api/websites/all');
    }
=======

>>>>>>> 21a008dd5fd8e5676ff0c00d6ace9145ee0bba21

    // getWebsiteByPage(number){
    //     return axios.get(SECTION_API_SECTION_URL + '/page/' + number);
    // }
}

export default new SectionService();