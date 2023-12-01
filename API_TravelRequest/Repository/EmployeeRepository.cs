﻿using API_TravelRequest.Models;
using Microsoft.EntityFrameworkCore;

namespace API_TravelRequest.Repository
{
    public class EmployeeRepository:IEmployeeRepository
    {
        private readonly ApplicationDbContext _context;

        public EmployeeRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<Employee>> GetEmployees()
        {
            return await _context.Employees.ToListAsync();
        }
        //Add Employee
        public async Task<Employee> AddEmployee(Employee emp)
        {
            if (emp != null)
            {
                await _context.AddAsync(emp);
                await _context.SaveChangesAsync();
            }
            return emp;

        }
        public async Task DeleteEmployee(int EmployeeID)
        {
            Employee? emp = _context.Employees.FirstOrDefault(x => x.EmployeeId == EmployeeID);
            if (emp != null)
            {
                 _context.Remove(emp);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<Employee> GetEmployeeById(int EmployeeId)
        {
            Employee? emp = _context.Employees.FirstOrDefault(x => x.EmployeeId == EmployeeId);
            return emp;
        }

        public async Task UpdateEmployee(Employee emp, int EmployeeId)
        {
            Employee? emp_old = _context.Employees.FirstOrDefault(x => x.EmployeeId == EmployeeId);
            if (emp_old != null)
            {
                emp_old.EmployeeName = emp.EmployeeName;
                emp_old.Contact = emp.Contact;
                emp_old.Dept = emp.Dept;
                emp_old.Address = emp.Address;
                emp_old.Dob = emp.Dob;
                await _context.SaveChangesAsync();

            }

        }
    }
}
