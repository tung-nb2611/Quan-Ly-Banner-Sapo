package com.banner_management.backend.dto;

public class ClickAndViewDto {
    private String webName;
    private int sectionID;
    private int numberClick;
    private int numberView;

    public ClickAndViewDto(String webName, int sectionID, int numberClick, int numberView) {
        this.webName = webName;
        this.sectionID = sectionID;
        this.numberClick = numberClick;
        this.numberView = numberView;
    }

    @Override
    public String toString() {
        return "ClickAndViewDto{" +
                "webName='" + webName + '\'' +
                ", sectionID=" + sectionID +
                ", numberClick=" + numberClick +
                ", numberView=" + numberView +
                '}';
    }

    public String getWebName() {
        return webName;
    }

    public void setWebName(String webName) {
        this.webName = webName;
    }

    public int getSectionID() {
        return sectionID;
    }

    public void setSectionID(int sectionID) {
        this.sectionID = sectionID;
    }

    public int getNumberClick() {
        return numberClick;
    }

    public void setNumberClick(int numberClick) {
        this.numberClick = numberClick;
    }

    public int getNumberView() {
        return numberView;
    }

    public void setNumberView(int numberView) {
        this.numberView = numberView;
    }
}
