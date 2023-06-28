package main;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiController {

    private Storage storage = new Storage();

    @PostMapping(value = "/newTask")
    public Task getTask(String format, String density) {
        System.out.println("format: " + format);
        System.out.println("density: " + density);

        Task task = new Task();
        task.setFormat(format);
        task.setDensity(density);

        storage.tasks.add(task);
        System.out.println(storage.tasks.size());

        return task;
    }

    @GetMapping("/listTask")
    public Task listTask() {

        System.out.println("GET: " + storage.tasks.get(0).getFormat());
        return storage.tasks.get(0);
    }

}
