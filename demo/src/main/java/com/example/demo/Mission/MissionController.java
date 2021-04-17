package com.example.demo.Mission;


import com.example.demo.Vehicle.Vehicle;
import netscape.javascript.JSObject;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/convoys/mission")
@CrossOrigin(origins = "http://localhost:3000")
public class MissionController {
    private final MissionRepo repo;

    public MissionController(MissionRepo repo) {
        this.repo = repo;
    }

    @PostMapping("")
    public Mission saveMission(@RequestBody Mission mission)
    {
        return   this.repo.save(mission);
    }

    @GetMapping("")
    public Iterable<Mission> all(){
        return this.repo.findAll();
    }

    @DeleteMapping("/{id}")
    public String deleteMission(@PathVariable Long id) {
        repo.deleteById(id);
        return "Mission has been deleted";
    }


//    @PatchMapping("/{id}")
//    public Mission patchById(@RequestBody Mission mission, @PathVariable Long id){
//
//        Optional<Mission> old=this.repo.findById(id);
//
//
//        if(old.isPresent()){
//           mission.setMissionId(old.get().getMissionId());
//        }
//
//        return this.repo.save(mission);
//
//
//    }


    @PatchMapping("/{id}")
    public Mission patchById(@RequestBody Mission mission, @PathVariable Long id){

        //get existing equipment info , selectively update properties or else simply save new one passed in body
        if(this.repo.existsById(id)){
            Mission updateobj=new Mission();
            updateobj.setName(this.repo.findById(id).get().getName());
            updateobj.setBLUF(this.repo.findById(id).get().getBLUF());
            updateobj.setMissionStatus(this.repo.findById(id).get().getMissionStatus());
            updateobj.setMissionId(id);

            if (mission.getBLUF()!=null)
                updateobj.setBLUF(mission.getBLUF());

            if(mission.getName()!=null)
                updateobj.setName(mission.getName());

            return this.repo.save(updateobj);
        }
        else return this.repo.save(mission);


    }


}
