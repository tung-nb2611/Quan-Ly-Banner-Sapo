package com.banner_management.backend.dto;

public class WebsiteDto {
    private String name;
    private String code;
    private String url;
    private String userAdd;

    public WebsiteDto(String name, String code, String url, String userAdd) {
        this.name = name;
        this.code = code;
        this.url = url;
        this.userAdd = userAdd;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getUserAdd() {
        return userAdd;
    }

    public void setUserAdd(String userAdd) {
        this.userAdd = userAdd;
    }
}

