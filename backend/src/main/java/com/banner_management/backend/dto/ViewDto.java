package com.banner_management.backend.dto;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

public class ViewDto {
//    private HashMap<String, Integer> web;
    private List<HashMap<String, Object>> web;
    private String month;


    public ViewDto(List<HashMap<String, Object>> viewDtoList, String monthName) {
        this.web = viewDtoList;
        this.month = monthName;
    }

    public List<HashMap<String, Object>> getWeb() {
        return web;
    }

    public void setWeb(List<HashMap<String, Object>> web) {
        this.web = web;
    }

    @Override
    public String toString() {
        return "ViewDto{" +
                "web=" + web +
                ", month='" + month + '\'' +
                '}';
    }

    public String getMonth() {
        return month;
    }

    public void setMonth(String month) {
        this.month = month;
    }
}
