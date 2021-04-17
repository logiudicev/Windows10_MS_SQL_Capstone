package com.example.demo.Equipment;
import com.example.demo.Soldier.Soldier;
import com.example.demo.Vehicle.Vehicle;
import com.example.demo.Soldier.*;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/convoys/equipment")
@CrossOrigin(origins = "http://localhost:3000")

public class EquipmentController {

    private final EquipmentRepo repo;

    public EquipmentController(EquipmentRepo repo) {
        this.repo = repo;
    }

    @PostMapping("")
    public Equipment saveEquipment(@RequestBody Equipment equip) {
        return this.repo.save(equip);
    }

    @GetMapping("")
    public Iterable<Equipment> returnAllEquipment(){
        return this.repo.findAll();
    }

    @DeleteMapping("/{id}")
    public String deleteEquipment(@PathVariable Long id){
        repo.deleteById(id);
        return "Equipment has been deleted";
    }

//    @PatchMapping("/{id}")
//    public Equipment patchById(@RequestBody Equipment equip, @PathVariable Long id){
//        Optional<Equipment> old=this.repo.findById(id);
//
//        if(old.isPresent()){
//            equip.setEquipmentId(old.get().getEquipmentId());
//        }
//
//        return this.repo.save(equip);
//    }

    @PatchMapping("/{id}")
    public Equipment newPatch(@RequestBody Equipment equip,
                              @PathVariable Long id){
        if(this.repo.existsById(id)){
            //get existing equipment info , selectively update properties or else simply save new one passed in body

            Equipment currEquip = new Equipment();
            currEquip.setWeight(this.repo.findById(id).get().getWeight());
            currEquip.setName(this.repo.findById(id).get().getName());
            currEquip.setEquipmentId(equip.getEquipmentId());

            if(equip.getWeight() != 0){
                currEquip.setWeight(equip.getWeight());
            }
            if(currEquip.getName() != null){
                currEquip.setName(equip.getName());
            }
            return this.repo.save(currEquip);
        } else{
            return this.repo.save(equip);
        }
    }

    //sends patch request with Soldier in the body and adds it the the equipmentId
    @PatchMapping("/add/{id}")
    public Equipment addToSoldier(@RequestBody Soldier soldier, @PathVariable Long id) {
        Equipment equipment = this.repo.findById(id).get();
        equipment.setSoldierId(soldier.getSoldierId());

        return this.repo.save(equipment);
    }

}