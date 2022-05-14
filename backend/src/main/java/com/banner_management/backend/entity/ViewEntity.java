package com.banner_management.backend.entity;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "views")
public class ViewEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;

    @Column(name = "banner_id")
    private int bannerID;

    @Column(name = "section_id")
    private int sectionID;

    @Column(name = "time_view")
    private Timestamp timeView;

    @Column(name = "browser_name")
    private String browserName;

    @Column(name = "user_view")
    private String userView;

    public ViewEntity() {
    }

    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }

    public int getBannerID() {
        return bannerID;
    }

    public void setBannerID(int bannerID) {
        this.bannerID = bannerID;
    }

    public int getSectionID() {
        return sectionID;
    }

    public void setSectionID(int sectionID) {
        this.sectionID = sectionID;
    }

    public Timestamp getTimeView() {
        return timeView;
    }

    public void setTimeView(Timestamp timeView) {
        this.timeView = timeView;
    }

    public String getBrowserName() {
        return browserName;
    }

    public void setBrowserName(String browserName) {
        this.browserName = browserName;
    }

    public String getUserView() {
        return userView;
    }

    public void setUserView(String userView) {
        this.userView = userView;
    }

    @Override
    public String toString() {
        return "ViewsEntity{" +
                "Id=" + Id +
                ", bannerID=" + bannerID +
                ", sectionID=" + sectionID +
                ", timeView=" + timeView +
                ", browserName='" + browserName + '\'' +
                ", userView='" + userView + '\'' +
                '}';
    }
}
