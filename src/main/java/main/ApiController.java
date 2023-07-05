package main;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ApiController {

    Storage storage;


    @PostMapping(value = "/task")
    public int addTask(Task task) {

        System.out.println("format: " + task.getFormat());
        System.out.println("density: " + task.getDensity());
        task.setId(1);
        storage.tasks.add(task);
        return task.getId();
    }


    @GetMapping("/tasks")
    public List<Task> listTask() {

        return storage.tasks;
    }

}
