package com.example.demo.Mission;


import com.example.demo.Vehicle.Vehicle;
import javax.persistence.*;

@Entity
@Table(name="mission")
public class Mission {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long missionId;

    private String name;

    private Boolean missionStatus=false;

    private String BLUF;

//    @OneToMany(mappedBy = "mission", fetch = FetchType.LAZY,
//                cascade = CascadeType.ALL)
//    private Set<Vehicle> vehicleList;

    public Long getMissionId()
    {
        return missionId;
    }

    public void setMissionId(Long missionId)
    {
        this.missionId = missionId;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public Boolean getMissionStatus()
    {
        return missionStatus;
    }

    public void setMissionStatus(Boolean missionStatus)
    {
        this.missionStatus = missionStatus;
    }

    public String getBLUF()
    {
        return BLUF;
    }

    public void setBLUF(String BLUF)
    {
        this.BLUF = BLUF;
    }

//    public Set<Vehicle> getVehicleList() {
//        return vehicleList;
//    }
//
//    public void setVehicleList(Set<Vehicle> vehicles) {
//        this.vehicleList = vehicles;
//    }
}
