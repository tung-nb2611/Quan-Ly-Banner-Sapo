package com.banner_management.backend.entity;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "clicks")
public class ClicksEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ID;

    // code ở đây là loại click: click xem banner hay là click đóng banner
    @Column(name = "code")
    private String code;

    @Column(name = "time_click")
    private Timestamp timeClick;

    @Column(name = "user_name")
    private String userClick;



    @Column(name = "banner_id")
    private int bannerID;

    @Column(name = "section_id")
    private int sectionID;


    public ClicksEntity() {
    }

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public Timestamp getTimeClick() {
        return timeClick;
    }

    public void setTimeClick(Timestamp timeClick) {
        this.timeClick = timeClick;
    }

    public String getUserClick() {
        return userClick;
    }

    public void setUserClick(String userClick) {
        this.userClick = userClick;
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

    @Override
    public String toString() {
        return "ClicksEntity{" +
                "ID=" + ID +
                ", code='" + code + '\'' +
                ", timeClick=" + timeClick +
                ", userClick='" + userClick + '\'' +
                ", bannerID=" + bannerID +
                ", sectionID=" + sectionID +
                '}';
    }
}
