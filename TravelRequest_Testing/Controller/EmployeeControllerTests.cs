using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using API_TravelRequest.Models;
using API_TravelRequest.Controllers;
using API_TravelRequest.Repository;
using Moq;
using Microsoft.AspNetCore.Mvc;

namespace TravelRequest_Testing.Controller
{
    public class EmployeeControllerTests
    {
        private readonly Mock<IEmployeeRepository> _mockRepo;
        private readonly EmployeeController _controller;

        private IEnumerable<Employee> employees;

        public EmployeeControllerTests()
        {
            _mockRepo = new Mock<IEmployeeRepository>();
            employees = new List<Employee>
        {
            new Employee { EmployeeId = 1, EmployeeName = "John Doe", Contact = "123-456-7890", Dept = "IT" },
            new Employee { EmployeeId = 2, EmployeeName = "Jane Doe", Contact = "987-654-3210", Dept = "HR" }
        };

            _mockRepo.Setup(repo => repo.GetEmployees()).ReturnsAsync(employees);

            _controller = new EmployeeController(_mockRepo.Object);
        }

        [Fact]
        public async Task GetEmployees_ActionExecutes_ReturnsOkResult()
        {
            var result = await _controller.Get();

            var okObjectResult = Assert.IsType<ActionResult<IEnumerable<Employee>>>(result);
            Assert.NotNull(okObjectResult);
            Assert.True(okObjectResult.Result is OkObjectResult);

            var resultEmployees = Assert.IsAssignableFrom<IEnumerable<Employee>>(((OkObjectResult)okObjectResult.Result).Value);
            Assert.Equal(employees, resultEmployees);
        }

        [Fact]
        public async Task GetEmployeeById_ActionExecute_ReturnsOkEmployee()
        {
            _mockRepo.Setup(repo => repo.GetEmployeeById(1)).ReturnsAsync(employees.ElementAt<Employee>(0));

            var result = await _controller.GetEmployeeById(1);

            Assert.NotNull(result);
            var okObjectResult = Assert.IsType<ActionResult<Employee>>(result);

            Assert.True(okObjectResult.Result is OkObjectResult);
            var employee = Assert.IsType<Employee>(((OkObjectResult)okObjectResult.Result).Value);
            Assert.Equal(employees.ElementAt<Employee>(0), employee);
        }

    
    }

}
