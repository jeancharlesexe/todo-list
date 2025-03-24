package com.jeancharlesexe.backend.v1.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "tasks")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotNull(message = "The task status must be informed")
    private Boolean checked = false;

    @NotBlank(message = "The title cant be blank.")
    @Size(min = 3, max = 100, message = "The title must have between 3 and 100 characters.")
    private String title;

    @NotNull(message = "The creation c")
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

}
