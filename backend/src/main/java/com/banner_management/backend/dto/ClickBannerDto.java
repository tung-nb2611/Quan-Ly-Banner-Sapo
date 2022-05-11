package com.banner_management.backend.dto;

public class ClickBannerDto {

    private String bannerName;
    private int numberViews;
    private int numberClicks;

    public ClickBannerDto() {
    }

    public ClickBannerDto(String bannerName, int numberViews, int numberClicks) {
        this.bannerName = bannerName;
        this.numberViews = numberViews;
        this.numberClicks = numberClicks;
    }

    public String getBannerName() {
        return bannerName;
    }

    public void setBannerName(String bannerName) {
        this.bannerName = bannerName;
    }

    public int getNumberViews() {
        return numberViews;
    }

    public void setNumberViews(int numberViews) {
        this.numberViews = numberViews;
    }

    public int getNumberClicks() {
        return numberClicks;
    }

    public void setNumberClicks(int numberClicks) {
        this.numberClicks = numberClicks;
    }

    @Override
    public String toString() {
        return "ClickBannerDto{" +
                "bannerID=" + bannerName +
                ", numberViews=" + numberViews +
                ", numberClicks=" + numberClicks +
                '}';
    }
}
