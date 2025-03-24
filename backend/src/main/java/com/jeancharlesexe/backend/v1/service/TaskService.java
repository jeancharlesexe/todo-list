package com.jeancharlesexe.backend.v1.service;

import com.jeancharlesexe.backend.v1.model.Task;
import com.jeancharlesexe.backend.v1.repository.TaskRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;

    public List<Task> getAllTasks() {
        List<Task> tasks = taskRepository.findAll();

        if(tasks.isEmpty()){
            throw new EntityNotFoundException("None task found");
        }

        try{
            return tasks;
        }catch (Exception e){
            throw new RuntimeException("Error gettin all tasks: " + e.getMessage());
        }
    }
}
