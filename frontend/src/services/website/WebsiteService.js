import axios from "axios";

const WEBSITE_API_SECTION_URL = "http://localhost:8080/api/websites";

class WebsiteService {
    getImageList(sectionId) {
        return axios.get(WEBSITE_API_SECTION_URL + '/' + sectionId);
    }

    getWebsiteByPageAndUserAdd(userAdd, number){
        return axios.get(WEBSITE_API_SECTION_URL + '/page/user=' + userAdd + '/' + number);
    }

    getWebsiteByPage(number){
        return axios.get(WEBSITE_API_SECTION_URL + '/page/' + number);
    }
}

export default new WebsiteService();