package main;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiController {

    Storage storage = new Storage();

    @PostMapping(value = "/newTask")
    public int addTask(Task task) {

        System.out.println("format: " + task.getFormat());
        System.out.println("density: " + task.getDensity());

//        Task task = new Task();
//        task.setId(1);
//        task.setFormat(format);
//        task.setDensity(density);

        task.setId(1);
        storage.tasks.add(task);
        System.out.println(Storage.tasks.size());

        return task.getId();
    }

    @GetMapping("/listTask")
    public Task listTask() {

        System.out.println("GET: " + storage.tasks.get(0).getFormat());

        return storage.tasks.get(0);
    }

}
