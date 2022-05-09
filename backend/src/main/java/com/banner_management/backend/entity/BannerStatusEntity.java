package com.banner_management.backend.entity;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.sql.Timestamp;

@Entity
@Table(name = "banner_status")
public class BannerStatusEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "banner_id")
    @NotNull
    private int bannerID;

    @Column(name = "section_id")
    @NotNull
    private int sectionID;

    @Column(name = "state")
    @NotNull
    private short state;

    @Column(name = "percentage")
    private int percentage;

    @Column(name = "time_display")
    private Timestamp timeDisplay;

    public BannerStatusEntity() {
    }

    @Override
    public String toString() {
        return "BannerStatusEntity{" +
                "id=" + id +
                ", bannerID=" + bannerID +
                ", sectionID=" + sectionID +
                ", state=" + state +
                ", percentage=" + percentage +
                ", timeDisplay=" + timeDisplay +
                '}';
    }

    public int getPercentage() {
        return percentage;
    }

    public void setPercentage(int percentage) {
        this.percentage = percentage;
    }

    public BannerStatusEntity(int bannerID , int sectionID, short state) {
        this.bannerID = bannerID;
        this.sectionID = sectionID;
        this.state = state;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public short getState() {
        return state;
    }

    public void setState(short state) {
        this.state = state;
    }

    public Timestamp getTimeDisplay() {
        return timeDisplay;
    }

    public void setTimeDisplay(Timestamp timeDisplay) {
        this.timeDisplay = timeDisplay;
    }

}
