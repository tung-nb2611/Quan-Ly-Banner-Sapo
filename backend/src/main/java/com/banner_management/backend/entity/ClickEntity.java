package com.banner_management.backend.entity;

import org.springframework.stereotype.Repository;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.sql.Timestamp;

@Entity
@Table(name = "clicks")
public class ClickEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ID;

    @Column(name = "banner_id", nullable = false)
    @NotNull
    private int bannerId;

    @Column(name = "section_id", nullable = false)
    @NotNull
    private int sectionId;

    @Column(name = "browser_name")
    @NotNull
    private String browserName;

    @Column(name = "time_click")
    @NotNull
    private Timestamp timeClick;

    @Column(name = "user_click")
    @NotNull
    private String userClick;

    public ClickEntity() {
    }

    @Override
    public String toString() {
        return "ClicksEntity{" +
                "ID=" + ID +
                ", bannerId=" + bannerId +
                ", sectionId=" + sectionId +
                ", browserName='" + browserName + '\'' +
                ", timeClick=" + timeClick +
                ", userClick='" + userClick + '\'' +
                '}';
    }

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public int getBannerId() {
        return bannerId;
    }

    public void setBannerId(int bannerId) {
        this.bannerId = bannerId;
    }

    public int getSectionId() {
        return sectionId;
    }

    public void setSectionId(int sectionId) {
        this.sectionId = sectionId;
    }

    public String getBrowserName() {
        return browserName;
    }

    public void setBrowserName(String browserName) {
        this.browserName = browserName;
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
}
