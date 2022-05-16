package com.banner_management.backend.entity;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.sql.Timestamp;

@Entity
@Table(name = "views")
public class ViewEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;

    @Column(name = "banner_id")
    @NotNull(message = "Thiếu mã bannner")
    private Integer bannerID;

    @Column(name = "section_id")
    @NotNull(message = "Thiếu mã khu vực")
    private Integer sectionID;

    @Column(name = "time_view")
    @NotNull(message = "Thiếu thời gian xem banner")
    private Timestamp timeView;

    @Column(name = "browser_name")
    @NotEmpty(message = "Thiếu tên trình duyệt")
    private String browserName;

    @Column(name = "user_view")
    @NotEmpty(message = "Thiếu người xem")
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
