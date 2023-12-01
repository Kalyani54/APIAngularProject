using System.ComponentModel.DataAnnotations;

namespace API_TravelRequest.Models
{
    public class Employee
    {
       

        [Key]
        public int EmployeeId { get; set; }
        public string? EmployeeName { get; set; }
     
        public string? Contact { get; set; }
        public string? Dept { get; set; }
        public string? Address { get; set; }
        public DateTime? Dob { get; set; }
        public virtual ICollection<TravelRequest>? TravelRequests { get; set; }
    }
}
