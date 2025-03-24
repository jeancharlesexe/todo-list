package com.jeancharlesexe.backend.v1.repository;

import com.jeancharlesexe.backend.v1.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {}
