package com.banner_management.backend.dto;

public class BannerMappingDto {
    private int id;
    private String name;
    private String imgUrl;
    private String url;
    private int numberView;
    private int numberClick;
    private int sectionID;
    private String webName;

    public BannerMappingDto(int id, String name, String imgUrl, String url, int numberView, int numberClick, int sectionID, String webName) {
        this.id = id;
        this.name = name;
        this.imgUrl = imgUrl;
        this.url = url;
        this.numberView = numberView;
        this.numberClick = numberClick;
        this.sectionID = sectionID;
        this.webName = webName;
    }

    public BannerMappingDto(int id, String imgUrl, String url, int sectionID) {
    }

    @Override
    public String toString() {
        return "BannerMappingDto{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", imgUrl='" + imgUrl + '\'' +
                ", url='" + url + '\'' +
                ", numberView=" + numberView +
                ", numberClick=" + numberClick +
                ", sectionID=" + sectionID +
                ", websiteID=" + webName +
                '}';
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public int getNumberView() {
        return numberView;
    }

    public void setNumberView(int numberView) {
        this.numberView = numberView;
    }

    public int getNumberClick() {
        return numberClick;
    }

    public void setNumberClick(int numberClick) {
        this.numberClick = numberClick;
    }

    public int getSectionID() {
        return sectionID;
    }

    public void setSectionID(int sectionID) {
        this.sectionID = sectionID;
    }

    public String getWebsiteID() {
        return webName;
    }

    public void setWebsiteID(String webName) {
        this.webName = webName;
    }
}

