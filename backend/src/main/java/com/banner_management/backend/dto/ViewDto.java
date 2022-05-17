package com.banner_management.backend.dto;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

public class ViewDto {
    private HashMap<String, Integer> webView;

    private String webname;
    private Integer numberView;
    private String month;

    public ViewDto(String webname, int numberView, String month) {
        this.webname = webname;
        this.numberView = numberView;
        this.month = month;
    }

    public String getWebname() {
        return webname;
    }

    public void setWebname(String webname) {
        this.webname = webname;
    }

    public Integer getNumberView() {
        return numberView;
    }

    public void setNumberView(Integer numberView) {
        this.numberView = numberView;
    }

    public ViewDto(HashMap<String, Integer> webView, String month) {
        this.webView = webView;
        this.month = month;
    }


    @Override
    public String toString() {
        return "ViewDto{" +
                "webView=" + webView +
                ", webname='" + webname + '\'' +
                ", numberView=" + numberView +
                ", month='" + month + '\'' +
                '}';
    }

    public HashMap<String, Integer> getWebView() {
        return webView;
    }

    public void setWebView(HashMap<String, Integer> webView) {
        this.webView = webView;
    }

    public String getMonth() {
        return month;
    }

    public void setMonth(String month) {
        this.month = month;
    }
}
