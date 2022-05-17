package com.banner_management.backend.dto;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

public class ViewDto {
    private HashMap<String, Integer> webView;

    private String month;

    public ViewDto(HashMap<String, Integer> webView, String month) {
        this.webView = webView;
        this.month = month;
    }

    @Override
    public String toString() {
        return "ViewDto{" +
                "webView=" + webView +
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
