package com.banner_management.backend.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "websites")
public class WebsiteEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name")
    @NotEmpty(message = "thiếu tên website")
    private  String name;

    @Column(name = "url")
    @NotEmpty(message = "thiếu liên kết trang web")
    private String url;

    @Column(name = "user_add")
    @NotEmpty(message = "Thiếu người tạo trang web")
    private String userAdd;

    @Column(name = "code")
    @NotEmpty(message = "Thiếu mã trang web")
    private String code;

    public WebsiteEntity() {
    }

    public WebsiteEntity(String name, String url, String userAdd, String code) {
        this.name = name;
        this.url = url;
        this.userAdd = userAdd;
        this.code = code;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getUserAdd() {
        return userAdd;
    }

    public void setUserAdd(String userAdd) {
        this.userAdd = userAdd;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    @Override
    public String toString() {
        return "WebsitesEntity{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", url='" + url + '\'' +
                ", user_add='" + userAdd + '\'' +
                '}';
    }
}
