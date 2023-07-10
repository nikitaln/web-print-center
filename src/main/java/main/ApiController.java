package main;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ApiController {

    Storage storage;
    private int idCounter = 0;

    @PostMapping(value = "/task")
    public int addTask(Task task) {
        idCounter = idCounter + 1;
        task.setId(idCounter);
        System.out.println(task.toString());
        storage.tasks.add(task);
        return task.getId();
    }


    @GetMapping("/tasks")
    public List<Task> listTask() {

        System.out.println("кол-во заявок: " + storage.tasks.size());
        return storage.tasks;
    }

}
