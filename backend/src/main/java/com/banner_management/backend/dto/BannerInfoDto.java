package com.banner_management.backend.dto;


import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

public class BannerInfoDto {

    private int id;

    @NotNull(message = "Thiếu id banner")
    private int bannerID;

    @NotEmpty(message = "Thiếu mã banner")
    private String code;

    @NotEmpty(message = "Thiếu tên banner")
    private String name;

    @NotEmpty(message = "Thiếu ảnh")
    private String imgUrl;

    @NotNull(message = "Thiếu mã khu vực")
    private int sectionID;

    @NotEmpty(message = "Thiếu liên kết ảnh")
    private String url;

    private short state;

    private int percentage;

    public BannerInfoDto(int id, int bannerID, String code, String name, String imgUrl, int sectionID, String url,
                         short state, int percentage) {
        this.id = id;
        this.bannerID = bannerID;
        this.code = code;
        this.name = name;
        this.imgUrl = imgUrl;
        this.sectionID = sectionID;
        this.url = url;
        this.state = state;
        this.percentage = percentage;
    }

    public int getId() { return id; }

    public void setId(int id) { this.id = id; }

    public int getBannerID() {return bannerID;}

    public void setBannerID(int bannerID) {this.bannerID = bannerID;}

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImgUrl() {return imgUrl;}

    public void setImgUrl() {this.imgUrl = imgUrl;}

    public int getSectionID() {
        return sectionID;
    }

    public void setSectionID(int sectionID) {
        this.sectionID = sectionID;
    }

    public short getState(){return state;}

    public void setState(short State) {this.state = state;}

    public int getPercentage() {return percentage;}

    public void setPercentage(int percentage){this.percentage = percentage;}
}
