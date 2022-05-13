package com.banner_management.backend.dto;

public class BannerMappingDto {
    private int id;
    private String imgUrl;
    private String url;
    private int sectionID;

    public BannerMappingDto(int id, String imgUrl, String url, int sectionID) {
        this.id = id;
        this.imgUrl = imgUrl;
        this.url = url;
        this.sectionID = sectionID;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public int getSectionID() {
        return sectionID;
    }

    public void setSectionID(int sectionID) {
        this.sectionID = sectionID;
    }

    @Override
    public String toString() {
        return "BannerMappingDto{" +
                "id=" + id +
                ", imgUrl='" + imgUrl + '\'' +
                ", url='" + url + '\'' +
                ", sectionID=" + sectionID +
                '}';
    }
}

