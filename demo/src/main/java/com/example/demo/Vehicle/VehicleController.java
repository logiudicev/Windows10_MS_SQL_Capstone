package com.example.demo.Vehicle;

import com.example.demo.Equipment.Equipment;
import com.example.demo.Mission.Mission;
import netscape.javascript.JSObject;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/convoys/vehicle")
@CrossOrigin(origins = "http://localhost:3000")
public class VehicleController {

    private final VehicleRepo repository;


    public VehicleController(VehicleRepo repository) {
        this.repository = repository;
    }

    @GetMapping("")
    public Iterable<Vehicle> listVehicles(){
        return this.repository.findAll();
    }

    @GetMapping("/{id}")
    public Optional listVehicles(@PathVariable Long id){
        return this.repository.findById(id);
    }

    @PostMapping("")
    public Vehicle createVehicle(@RequestBody Vehicle vic){
        return this.repository.save(vic);
    }

    @DeleteMapping("/{id}")
    public String deleteVehicle(@PathVariable Long id) {
        repository.deleteById(id);
        return "Vehicle has been removed";
    }

//    @PatchMapping("/{id}")
//    public Vehicle patchById(@RequestBody Vehicle vehicle, @PathVariable Long id){
//        Optional<Vehicle> old=this.repository.findById(id);
//
//        if(old.isPresent()){
//            vehicle.setVehicleId(old.get().getVehicleId());
//        }
//        return this.repository.save(vehicle);
//    }


    @PatchMapping("/{id}")
    public Vehicle patchById(@RequestBody Vehicle vehicle, @PathVariable Long id) {

        Optional<Vehicle> old = this.repository.findById(id);

        Vehicle update = new Vehicle();
        //get existing equipment info , selectively update properties or else simply save new one passed in body
        if (old.isPresent()) {
            update.setVehicleId(id);
            update.setBumperNum(old.get().getBumperNum());
            update.setCapacity(old.get().getCapacity());
            update.setType(old.get().getType());


            if (vehicle.getType() != null)
                update.setType(vehicle.getType());

            if (vehicle.getBumperNum() != null)
                update.setBumperNum(vehicle.getBumperNum());

            if (vehicle.getCapacity() != 0)
                update.setCapacity(vehicle.getCapacity());

            return this.repository.save(update);

        } else return this.repository.save(vehicle);


    }

    @PatchMapping("/add/{id}")
    public Vehicle addToMission(@RequestBody Mission mission,
                                @PathVariable Long id){

        Vehicle vic = this.repository.findById(id).get();
        vic.setMissionId(mission.getMissionId());

        return this.repository.save(vic);
    }

}
