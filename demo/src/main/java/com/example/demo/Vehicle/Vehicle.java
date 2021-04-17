package com.example.demo.Vehicle;

import com.example.demo.Mission.Mission;
import com.example.demo.Soldier.Soldier;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="vehicle")
public class Vehicle{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long vehicleId;

    private String type;

    private String bumperNum;

    private int capacity;

//    @JsonIgnore
//    @ManyToOne(fetch = FetchType.EAGER)
//    @JoinColumn(name = "mission_id", nullable = true)
//    private Mission mission;

    @Column(name = "mission_id")//, insertable = false, updatable = false)
    private Long missionId;

//    @OneToMany(mappedBy = "vehicle", fetch = FetchType.LAZY,
//            cascade = CascadeType.ALL)
//    private Set<Soldier> soldierlist;

//    public Set<Soldier> getSoldierlist() {
//        return soldierlist;
//    }
//
//    public void setSoldierlist(Set<Soldier> soldierlist) {
//        this.soldierlist = soldierlist;
//    }

    public Long getVehicleId() {
        return vehicleId;
    }

    public void setVehicleId(Long vehicleId) {
        this.vehicleId = vehicleId;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getBumperNum() {
        return bumperNum;
    }

    public void setBumperNum(String bumperNum) {
        this.bumperNum = bumperNum;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

//    public Mission getMission() {
//        return mission;
//    }
//
//    public void setMission(Mission mission) {
//        this.mission = mission;
//    }

    public Long getMissionId() {
        return missionId;
    }

    public void setMissionId(Long missionId) {
        this.missionId = missionId;
    }
}
