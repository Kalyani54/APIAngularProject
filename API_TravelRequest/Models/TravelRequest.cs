using System.ComponentModel.DataAnnotations;

namespace API_TravelRequest.Models
{
    public class TravelRequest
    {
        [Key]
        public int RequestId { get; set; }
        public int? EmployeeId { get; set; }
        public string? FromLocation { get; set; }
        public string? ToLocation { get; set; }
        public DateTime? RequestDate { get; set; }
        public string? ApproveStatus { get; set; }
        public string? BookingStatus { get; set; }
        public string? CurrentStatus { get; set; }

        public virtual Employee? Employee { get; set; }
    }
}
