import axios from "axios";

const WEBSITE_API_SECTION_URL = "http://localhost:8080/api/websites";

class WebsiteService {
    getWebsiteByPageAndUserAdd(userAdd, number){
        return axios.get(WEBSITE_API_SECTION_URL + '/page/user=' + userAdd + '/' + number);
    }

    getWebsiteByPage(number){
        return axios.get(WEBSITE_API_SECTION_URL + '/page/' + number);
    }

    createWebsite(websiteItem) {
        return axios.post(WEBSITE_API_SECTION_URL, websiteItem);
    }

    getWebsiteByUserAdd(userAdd){
        return axios.get(WEBSITE_API_SECTION_URL + '/user=' + userAdd);
    }
}

export default new WebsiteService();