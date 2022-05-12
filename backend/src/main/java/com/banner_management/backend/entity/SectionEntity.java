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
    private  String webId;

    @Column(name = "div_id")
    @NotNull
    private String divId;

    public SectionEntity() {
    }

    @Override
    public String toString() {
        return "SectionsEntity{" +
                "id=" + id +
                ", webId='" + webId + '\'' +
                ", divId=" + divId +
                '}';
    }
    public void setDivId(String divId) {
        this.divId = divId;
    }
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getWebId() {
        return webId;
    }

    public void setWebId(String webId) {
        this.webId = webId;
    }


}
