package com.banner_management.backend.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.sql.Timestamp;

@Table(name = "banners")
@Entity
public class BannerEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "code" , nullable = false, length = 255)
    @NotNull
    private String code;

    @Column(name = "name", nullable = false)
    @NotNull
    private String name;

    @Column(name = "img_url", nullable = false)
    @NotNull
    private String imgUrl;

    @Column(name = "user_add" , nullable = false)
    @NotNull
    private String userAdd;

    @Column(name = "user_fix")
    private String userFix;

    @Column(name = "create_at", nullable = false)
    @NotNull
    private Timestamp createAt;

    @Column(name = "modified_at")
    private Timestamp modifiedAt;

    @Column(name = "url")
    private String url;

    public BannerEntity() {
    }

    public BannerEntity(String code, String name, String imgUrl, String userAdd, Timestamp createAt, String url) {
        this.code = code;
        this.name = name;
        this.imgUrl = imgUrl;
        this.userAdd = userAdd;
        this.createAt = createAt;
        this.url = url;
    }

    @Override
    public String toString() {
        return "BannerEntity{" +
                "id=" + id +
                ", code='" + code + '\'' +
                ", name='" + name + '\'' +
                ", imgUrl='" + imgUrl + '\'' +
                ", userAdd='" + userAdd + '\'' +
                ", userFix='" + userFix + '\'' +
                ", createAt=" + createAt +
                ", modifiedAt=" + modifiedAt +
                ", url='" + url + '\'' +
                '}';
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

    public String getUserFix() {
        return userFix;
    }

    public void setUserFix(String userFix) {
        this.userFix = userFix;
    }



    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public Timestamp getCreateAt() {
        return createAt;
    }

    public void setCreateAt(Timestamp createAt) {
        this.createAt = createAt;
    }

    public Timestamp getModifiedAt() {
        return modifiedAt;
    }

    public void setModifiedAt(Timestamp modifiedAt) {
        this.modifiedAt = modifiedAt;
    }

}
