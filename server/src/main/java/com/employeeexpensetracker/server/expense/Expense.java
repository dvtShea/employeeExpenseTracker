package com.employeeexpensetracker.server.expense;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import java.math.BigDecimal;
import jakarta.persistence.Basic;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Lob;

@Entity
@Data
@RequiredArgsConstructor
public class Expense {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long ID;
    private long employeeid; // FK
    private String categoryid; // FK
    private String description;
    private boolean receipt;
    private BigDecimal amount;
    private String dateincurred;

    @Basic(optional = true)
    @Lob
    private String receiptscan;
}