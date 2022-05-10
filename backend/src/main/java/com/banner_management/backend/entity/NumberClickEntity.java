package com.banner_management.backend.entity;

import javax.persistence.*;

@Entity
@Table(name = "number_clicks")
public class NumberClickEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ID;

    @Column(name = "code")
    private int code;

    @Column(name = "banner_id")
    private int bannerID;

    @Column(name = "section_id")
    private int sectionID;

    @Column(name = "number")
    private int number;

    public NumberClickEntity() {
    }

    public NumberClickEntity(int code, int bannerID, int sectionID, int number) {
        this.code = code;
        this.bannerID = bannerID;
        this.sectionID = sectionID;
        this.number = number;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
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

    @Override
    public String toString() {
        return "NumberClickEntity{" +
                "ID=" + ID +
                ", code=" + code +
                ", bannerID=" + bannerID +
                ", sectionID=" + sectionID +
                ", number=" + number +
                '}';
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
