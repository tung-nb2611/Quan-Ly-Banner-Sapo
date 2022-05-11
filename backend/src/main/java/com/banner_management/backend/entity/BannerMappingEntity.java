package com.banner_management.backend.entity;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.sql.Timestamp;

@Entity
@Table(name = "banner_mapping")
public class BannerMappingEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "banner_id", nullable = false)
    @NotNull
    private int bannerID;

    @Column(name = "section_id", nullable = false)
    @NotNull
    private int sectionID;

    @Column(name = "state", nullable = false)
    @NotNull
    private short state;

    @Column(name = "percentage")
    private int percentage;

    @Column(name = "time_display", nullable = false)
    @NotNull
    private Timestamp timeDisplay;

    @Column(name = "number_click")
    private int numberClick;

    @Column(name = "number_view")
    private int numberView;

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

    public int getPercentage() {
        return percentage;
    }

    public void setPercentage(int percentage) {
        this.percentage = percentage;
    }

    public Timestamp getTimeDisplay() {
        return timeDisplay;
    }

    public void setTimeDisplay(Timestamp timeDisplay) {
        this.timeDisplay = timeDisplay;
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

    public BannerMappingEntity() {
    }

    @Override
    public String toString() {
        return "BannerMappingEntity{" +
                "id=" + id +
                ", bannerID=" + bannerID +
                ", sectionID=" + sectionID +
                ", state=" + state +
                ", percentage=" + percentage +
                ", timeDisplay=" + timeDisplay +
                ", numberClick=" + numberClick +
                ", numberView=" + numberView +
                '}';
    }
}
