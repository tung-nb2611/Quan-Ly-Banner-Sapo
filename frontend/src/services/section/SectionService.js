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

    getAllSections() {
        return axios.get('http://localhost:8080/api/websites/all');
    }

    // getWebsiteByPage(number){
    //     return axios.get(SECTION_API_SECTION_URL + '/page/' + number);
    // }

    updateSectionStatus(section) {
        return axios.put(SECTION_API_SECTION_URL + '/status', section);
    }

    getSectionById(id) {
        return axios.get(SECTION_API_SECTION_URL + '/' + id);
    }
    updateSection(sectionItem, sectionId) {
        return axios.put(SECTION_API_SECTION_URL + '/' + sectionId, sectionItem, sectionId)
    }
    deleteSection(id) {
        return axios.delete(SECTION_API_SECTION_URL + '/' + id)
    }
    getDivId(id) {
        return axios.get(SECTION_API_SECTION_URL + '/' + id + '/getDiv')
    }
}

export default new SectionService();