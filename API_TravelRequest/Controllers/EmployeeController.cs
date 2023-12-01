using API_TravelRequest.Models;
using API_TravelRequest.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API_TravelRequest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeRepository _repository;

        public EmployeeController(IEmployeeRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Employee>>> Get()
        {
            IEnumerable<Employee> lstEmp = await _repository.GetEmployees();
            if (lstEmp != null)
            {
                return Ok(lstEmp);
            }
            return BadRequest();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Employee>> GetEmployeeById(int id)
        {
            Employee emp = await _repository.GetEmployeeById(id);

            if (emp != null)
            {
                return Ok(emp);
            }
            return NotFound(); 
        }

        [HttpPost]
        public async Task<ActionResult> Create([FromBody] Employee emp)
        {
            if (emp == null)
            {
                return BadRequest();
            }
            await _repository.AddEmployee(emp);
            return CreatedAtAction(nameof(GetEmployeeById), new { id = emp.EmployeeId }, emp);
        }


        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteEmployee(int id)
        {
            Employee? emp = await _repository.GetEmployeeById(id);
            if (emp != null)
            {
                await _repository.DeleteEmployee(id);
                //await _repository.DeleteEmployee(id);
                return NoContent();
            }

            return NotFound();
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Put(int id, [FromBody] Employee emp)
        {
            if (emp == null)
            {
                return BadRequest();
            }
            await _repository.UpdateEmployee(emp, id);
            return Ok(emp);
        }


    }
}
