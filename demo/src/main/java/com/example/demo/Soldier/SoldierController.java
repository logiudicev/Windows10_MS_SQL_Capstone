package com.example.demo.Soldier;

import com.example.demo.Vehicle.Vehicle;
import org.springframework.web.bind.annotation.*;
import com.example.demo.Equipment.Equipment;


@RestController
@RequestMapping("/convoys/soldier")
@CrossOrigin(origins = "http://localhost:3000")
public class SoldierController {

    final private SoldierRepository repository;

    public SoldierController(SoldierRepository repository) {
        this.repository = repository;
    }

    @GetMapping("")
    public Iterable<Soldier> getAllSoldier(){
        return this.repository.findAll();
    }

    @PostMapping("")
    public Soldier createSoldier(@RequestBody Soldier soldier){
        return this.repository.save(soldier);
    }

    @DeleteMapping("/{id}")
    public String deleteSoldier(@PathVariable Long id) {
        repository.deleteById(id);
        return "Soldier has been removed";
    }

//    @PatchMapping("/{id}")
//    public Soldier patchById(@RequestBody Soldier soldier, @PathVariable Long id){
//
//        Optional<Soldier> old=this.repository.findById(id);
//
//        if(old.isPresent()){
//            soldier.setSoldierId((old.get().getSoldierId()));
//        }
//
//        return this.repository.save(soldier);
//    }


    @PatchMapping("/{id}")
    public Soldier patchById(@RequestBody Soldier soldier, @PathVariable Long id){


        if(this.repository.existsById(id)){
            Soldier updateobj=new Soldier();
            updateobj.setSoldierId(id);
            updateobj.setName(this.repository.findById(id).get().getName());
            updateobj.setRanks(this.repository.findById(id).get().getRanks());
            updateobj.setRole(this.repository.findById(id).get().getRole());

            if(soldier.getName()!=null)
                updateobj.setName(soldier.getName());
            if(soldier.getRanks()!=null)
                updateobj.setRanks(soldier.getRanks());
            if(soldier.getRole()!=null)
                updateobj.setRole(soldier.getRole());

            return this.repository.save(updateobj);
        }

        else return this.repository.save(soldier);




    }

    @PatchMapping("/add/{id}")
    public  Soldier addToVehicle(@RequestBody Vehicle vehicle, @PathVariable Long id) {

        Soldier soldier = this.repository.findById(id).get();
        soldier.setVehicleId(vehicle.getVehicleId());

        return this.repository.save(soldier);
    }
}
