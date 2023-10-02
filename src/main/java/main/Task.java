package main;

import java.io.File;

public class Task {

    private int id;
    private String format;
    private String density;
    private String fold;
    private int copyCount;
    private String userName;
    private String telNumber;
    private File file;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFormat() {
        return format;
    }

    public void setFormat(String format) {
        this.format = format;
    }

    public String getDensity() {
        return density;
    }

    public void setDensity(String density) {
        this.density = density;
    }

    public String getFold() {
        return fold;
    }

    public void setFold(String fold) {
        this.fold = fold;
    }

    public int getCopyCount() {
        return copyCount;
    }

    public void setCopyCount(int copyCount) {
        this.copyCount = copyCount;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getTelNumber() {
        return telNumber;
    }

    public void setTelNumber(String telNumber) {
        this.telNumber = telNumber;
    }

    @Override
    public String toString() {
        return "Task{" +
                "id=" + id +
                ", format='" + format + '\'' +
                ", density='" + density + '\'' +
                ", fold='" + fold + '\'' +
                ", copyCount=" + copyCount +
                ", userName='" + userName + '\'' +
                ", telNumber='" + telNumber + '\'' +
                '}';
    }
}
