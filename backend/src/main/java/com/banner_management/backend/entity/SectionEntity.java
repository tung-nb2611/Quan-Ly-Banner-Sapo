package com.banner_management.backend.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "sections")
public class SectionEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "web_id")
    @NotNull
    private  int webId;

    @Column(name = "div_id")
    @NotNull
    private String divId;

    @Column(name = "status", columnDefinition = "0")
    private short status;


    public SectionEntity() {
    }

    public SectionEntity(int webId, String divId) {
        this.webId = webId;
        this.divId = divId;
    }

    @Override
    public String toString() {
        return "SectionsEntity{" +
                "id=" + id +
                ", webId='" + webId + '\'' +
                ", divId=" + divId +
                '}';
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getWebId() {
        return webId;
    }

    public void setWebId(int webId) {
        this.webId = webId;
    }

    public String getDivId() {
        return divId;
    }

    public void setDivId(String divId) {
        this.divId = divId;
    }

    public Short getStatus() {return status;}

    public void setStatus(short status) {this.status = status;};
}
