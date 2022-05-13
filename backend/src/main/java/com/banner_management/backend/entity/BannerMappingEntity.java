package com.banner_management.backend.entity;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.sql.Timestamp;

@Entity
@Table(name = "banner_mapping")
public class BannerMappingEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "banner_id", nullable = false)
    @NotNull
    private Integer bannerId;

    @Column(name = "section_id", nullable = false)
    @NotNull
    private Integer sectionId;

    @Column(name = "state", nullable = false)
    @NotNull
    private Short state;

    @Column(name = "percentage",columnDefinition = "0")
    private Integer percentage;

    @Column(name = "time_display", nullable = false)
    private Timestamp timeDisplay;

    @Column(name = "number_click",columnDefinition = "0",nullable = true)
    private Integer numberClick;

    @Column(name = "number_view", columnDefinition = "0",nullable = true)
    private Integer numberView;

    public BannerMappingEntity(int bannerId, int sectionId, short state) {
        this.bannerId = bannerId;
        this.sectionId = sectionId;
        this.state = state;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getBannerId() {
        return bannerId;
    }

    public void setBannerId(int bannerId) {
        this.bannerId = bannerId;
    }

    public int getSectionID() {
        return sectionId;
    }

    public void setSectionID(int sectionID) {
        this.sectionId = sectionID;
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
                ", bannerId=" + bannerId +
                ", sectionId=" + sectionId +
                ", state=" + state +
                ", percentage=" + percentage +
                ", timeDisplay=" + timeDisplay +
                ", numberClick=" + numberClick +
                ", numberView=" + numberView +
                '}';
    }
}
