package com.banner_management.backend.dto;

public class SectionDto {
    private String divId;
    private int webId;

    public SectionDto(String divId, int webId) {
        this.divId = divId;
        this.webId = webId;
    }

    public String getDivId() {
        return divId;
    }

    public void setDivId(String divId) {
        this.divId = divId;
    }

    public int getWebId() {
        return webId;
    }

    public void setWebId(int webId) {
        this.webId = webId;
    }
}
