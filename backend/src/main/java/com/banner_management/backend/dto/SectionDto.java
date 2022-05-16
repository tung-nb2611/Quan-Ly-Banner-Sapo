package com.banner_management.backend.dto;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

public class SectionDto {

    @NotEmpty(message = "Thiếu tên thẻ div")
    private String divId;

    @NotNull(message = "Thiếu mã trang web")
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
