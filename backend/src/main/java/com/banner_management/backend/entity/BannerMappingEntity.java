package com.banner_management.backend.entity;
import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.sql.Timestamp;

@Entity
@Table(name = "banner_mapping")
public class BannerMappingEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "banner_id", nullable = false)
    @NotNull(message = "thiếu mã banner")
    private Integer bannerId;

    @Column(name = "section_id", nullable = false)
    @NotNull(message = "Thiếu mã khu vực")
    private Integer sectionId;

    @Column(name = "state", nullable = false)
    @NotNull(message = "Thiếu trạng thái hiển thị")
    private Short state;

    @Column(name = "percentage")
    private Integer percentage;

    @Column(name = "number_click", nullable = true , columnDefinition = "0")
    private Integer numberClick;

    @Column(name = "number_view", nullable = true, columnDefinition = "0")
    private Integer numberView;

    public BannerMappingEntity(int bannerId, int sectionId, short state) {
        this.bannerId = bannerId;
        this.sectionId = sectionId;
        this.state = state;
    }

    public BannerMappingEntity(Integer id,  Integer bannerId,  Integer sectionId,  Short state, Integer percentage, Integer numberClick,Integer numberView) {
        this.id = id;
        this.bannerId = bannerId;
        this.sectionId = sectionId;
        this.state = state;
        this.percentage = percentage;
        this.numberClick= numberClick;
        this.numberView= numberView;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getBannerID() {
        return bannerId;
    }

    public void setBannerID(int bannerID) {
        this.bannerId = bannerID;
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
                ", bannerID=" + bannerId +
                ", sectionID=" + sectionId +
                ", state=" + state +
                ", percentage=" + percentage +
                ", numberClick=" + numberClick +
                ", numberView=" + numberView +
                '}';
    }
}
