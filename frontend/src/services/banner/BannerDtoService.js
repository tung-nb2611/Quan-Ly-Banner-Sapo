import axios from "axios";
const BANNER_DTO_BASE_URL = "http://localhost:8080/api/banners/dto/";


class BannerDtoService {
    getBannerEnabledBySectionID(sectionID){
        return axios.get(BANNER_DTO_BASE_URL + "enabled/" + sectionID);
    }

    getBannerHiddenBySectionID(sectionID){
        return axios.get(BANNER_DTO_BASE_URL + "hidden/" + sectionID);
    }
}

export default new BannerDtoService();