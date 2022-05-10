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

    @Column(name = "position_web")
    @NotNull
    private  String position_web;

    @Column(name = "code")
    @NotNull
    private String code;

    @Column(name = "url")
    private String url;

    @Column(name = "user_add")
    private String user_add;

    public SectionEntity() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPosition_web() {
        return position_web;
    }

    public void setPosition_web(String position_web) {
        this.position_web = position_web;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getUser_add() {
        return user_add;
    }

    public void setUser_add(String user_add) {
        this.user_add = user_add;
    }

    @Override
    public String toString() {
        return "SectionEntity{" +
                "id=" + id +
                ", position_web='" + position_web + '\'' +
                ", code='" + code + '\'' +
                ", url='" + url + '\'' +
                ", user_add='" + user_add + '\'' +
                '}';
    }
}
