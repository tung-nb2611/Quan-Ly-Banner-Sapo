package com.banner_management.backend.dto;

public class ClickAndViewDto {
    private String webName;
    private int sectionID;
    private int numberClick;
    private int numberView;
<<<<<<< HEAD
    private  int bannerID;
    private  String month;
=======


    public ClickAndViewDto(String webName, int sectionID, int numberClick, int numberView) {
        this.webName = webName;
        this.sectionID = sectionID;
        this.numberClick = numberClick;
        this.numberView = numberView;

    }
>>>>>>> 21a008dd5fd8e5676ff0c00d6ace9145ee0bba21

    @Override
    public String toString() {
        return "ClickAndViewDto{" +
                "webName='" + webName + '\'' +
                ", sectionID=" + sectionID +
                ", numberClick=" + numberClick +
                ", numberView=" + numberView +
<<<<<<< HEAD
                ", bannerID=" + bannerID +
                ", month='" + month + '\'' +
                '}';
    }

    public int getBannerID() {
        return bannerID;
    }

    public String getMonth() {
        return month;
    }

    public void setMonth(String month) {
        this.month = month;
    }

    public ClickAndViewDto(int sectionID, int numberView, int numberClick, String month) {
        this.sectionID = sectionID;
        this.numberView = numberView;
        this.numberClick = numberClick;
        this.month = month;
    }

    public void setBannerID(int bannerID) {
        this.bannerID = bannerID;
    }

    public ClickAndViewDto(int numberClick, int numberView, int bannerID) {
        this.numberClick = numberClick;
        this.numberView = numberView;
        this.bannerID = bannerID;
    }

    public ClickAndViewDto(String webName, int sectionID, int numberClick, int numberView, int bannerID) {
        this.webName = webName;
        this.sectionID = sectionID;
        this.numberClick = numberClick;
        this.numberView = numberView;
        this.bannerID = bannerID;
    }

    public ClickAndViewDto(String webName, int sectionID, int numberClick, int numberView) {
        this.webName = webName;
        this.sectionID = sectionID;
        this.numberClick = numberClick;
        this.numberView = numberView;

    }
=======

                '}';
    }


>>>>>>> 21a008dd5fd8e5676ff0c00d6ace9145ee0bba21


    public String getWebName() {
        return webName;
    }

    public void setWebName(String webName) {
        this.webName = webName;
    }

    public int getSectionID() {
        return sectionID;
    }

    public void setSectionID(int sectionID) {
        this.sectionID = sectionID;
    }

    public int getNumberClick() {
        return numberClick;
    }

    public void setNumberClick(int numberClick) {
        this.numberClick = numberClick;
    }

    public int getNumberView() {
        return numberView;
    }

    public void setNumberView(int numberView) {
        this.numberView = numberView;
    }
}
