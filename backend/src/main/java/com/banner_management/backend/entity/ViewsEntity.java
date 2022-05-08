package com.banner_management.backend.entity;

import javax.persistence.*;

@Entity
@Table(name = "views")
public class ViewsEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ID;

    @Column(name = "banner_id")
    private int bannerID;

    @Column(name = "section_id")
    private int sectionID;

    @Column(name = "number")
    private int number;

    public ViewsEntity() {
    }

    public ViewsEntity(int bannerID, int sectionID, int number) {
        this.bannerID = bannerID;
        this.sectionID = sectionID;
        this.number = number;
    }

    @Override
    public String toString() {
        return "ViewsEntity{" +
                "ID=" + ID +
                ", bannerID=" + bannerID +
                ", sectionID=" + sectionID +
                ", number=" + number +
                '}';
    }

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
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

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }
}
