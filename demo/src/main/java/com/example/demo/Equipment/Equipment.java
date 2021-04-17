package com.example.demo.Equipment;
import javax.persistence.*;
import com.example.demo.Soldier.Soldier;
import com.example.demo.Vehicle.Vehicle;
@Entity
@Table(name = "equipment")
public class Equipment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long equipmentId;

    private String name;

    private int weight;

//    @JsonIgnore
//    @ManyToOne(fetch = FetchType.EAGER)
//    @JoinColumn(name = "soldier1_id", nullable = true)
//    private Soldier soldier;

    @Column(name = "soldier_id")//, insertable = false, updatable = false)
    private Long soldierId;


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getEquipmentId() {
        return equipmentId;
    }

    public void setEquipmentId(Long equipmentId) {
        this.equipmentId = equipmentId;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

//    public Soldier getSoldier() {
//        return soldier;
//    }
//
//    public void setSoldier(Soldier soldier) {
//        this.soldier = soldier;
//    }

    public Long getSoldierId() {
        return soldierId;
    }

    public void setSoldierId(Long soldierId) {
        this.soldierId = soldierId;
    }
}
