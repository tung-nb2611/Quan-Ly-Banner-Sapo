package com.banner_management.backend.dto;

public class ClickAndViewDto {
    private String webName;
    private int sectionID;
    private int numberClick;
    private int numberView;
    private  int bannerID;
    private  String month;
   private int year ;
    private String date;

    public String getDate() {
        return date;
    }

    @Override
    public String toString() {
        return "ClickAndViewDto{" +
                "webName='" + webName + '\'' +
                ", sectionID=" + sectionID +
                ", numberClick=" + numberClick +
                ", numberView=" + numberView +
                ", bannerID=" + bannerID +
                ", month='" + month + '\'' +
                ", year=" + year +
                ", date='" + date + '\'' +
                '}';
    }

    public void setDate(String date) {
        this.date = date;
    }

    public ClickAndViewDto(String name, int sectionID, int sumClick, int sumView, int year, String month, String dayOfMonth) {
        this.webName = name;
        this.sectionID = sectionID;
        this.numberClick = sumClick;
        this.numberView = sumView;
        this.year = year;
        this.month = month;
        this.date = dayOfMonth;
    }

    public ClickAndViewDto(String name, int sectionID, int sumClick, int sumView, String monthName, int year) {
        this.webName = name;
        this.sectionID = sectionID;
        this.numberClick = sumClick;
        this.numberView = sumView;
        this.month = monthName;
        this.year = year;
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


    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
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
