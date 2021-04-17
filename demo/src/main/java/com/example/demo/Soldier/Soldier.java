package com.example.demo.Soldier;

import com.example.demo.Equipment.Equipment;
import com.example.demo.Mission.Mission;
import com.example.demo.Vehicle.Vehicle;
import javax.persistence.*;

@Entity
@Table(name = "soldier")
public class Soldier {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long soldierId;

    private String name;

    private String ranks;

    private String role;

//    @JsonIgnore
//    @ManyToOne(fetch = FetchType.EAGER)
//    @JoinColumn(name = "vehicle_id", nullable = true)
//    private Vehicle vehicle;

    @Column(name = "vehicle_id")//, insertable = false, updatable = false)
    private Long vehicleId;

//    @OneToMany(mappedBy = "soldier", fetch = FetchType.LAZY,
//            cascade = CascadeType.ALL)
//    private Set<Equipment> equipmentlist;

    public Long getSoldierId() {
        return soldierId;
    }

    public void setSoldierId(Long soldierId) {
        this.soldierId = soldierId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRanks() {
        return ranks;
    }

    public void setRanks(String ranks) {
        this.ranks = ranks;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

//    public Vehicle getVehicle() {
//        return vehicle;
//    }
//
//    public void setVehicle(Vehicle vehicle) {
//        this.vehicle = vehicle;
//    }

    public Long getVehicleId() {
        return vehicleId;
    }

    public void setVehicleId(Long vehicleId) {
        this.vehicleId = vehicleId;
    }

//    public Set<Equipment> getEquipmentlist() {
//        return equipmentlist;
//    }
//
//    public void setEquipmentlist(Set<Equipment> equipmentlist) {
//        this.equipmentlist = equipmentlist;
//    }
}
