package com.banner_management.backend.dto;


import java.sql.Timestamp;

public class BannerDto {
    private String code;
    private String name;
    private String imgUrl;
    private int sectionID;
    private String userAdd;
    private String userFix;
    private Timestamp createAt;
    private String url;

    public BannerDto(String code, String name, String imgUrl, int sectionID, String userAdd, String userFix, Timestamp createAt, String url) {
        this.code = code;
        this.name = name;
        this.imgUrl = imgUrl;
        this.sectionID = sectionID;
        this.userAdd = userAdd;
        this.userFix = userFix;
        this.createAt = createAt;
        this.url = url;
    }

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

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public int getSectionID() {
        return sectionID;
    }

    public void setSectionID(int sectionID) {
        this.sectionID = sectionID;
    }

    public String getUserAdd() {
        return userAdd;
    }

    public void setUserAdd(String userAdd) {
        this.userAdd = userAdd;
    }

    public String getUserFix() {
        return userFix;
    }

    public void setUserFix(String userFix) {
        this.userFix = userFix;
    }

    public Timestamp getCreateAt() {
        return createAt;
    }

    public void setCreateAt(Timestamp createAt) {
        this.createAt = createAt;
    }
}
