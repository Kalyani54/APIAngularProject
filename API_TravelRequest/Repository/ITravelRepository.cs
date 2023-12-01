using API_TravelRequest.Models;

namespace API_TravelRequest.Repository
{
    public interface ITravelRepository
    {
        Task<IEnumerable<TravelRequest>> GetTravelRequests();

        Task<TravelRequest> AddTravelRequest(TravelRequest travelRequest);
        Task DeleteTravelRequest(int requestId);

        Task<TravelRequest> GetTravelRequestById(int requestId);

        Task UpdateTravelRequest(TravelRequest travelRequest, int requestId);

      
        Task ApproveTravelRequestAsync(int id, string status);
        Task BookTravelRequestAsync(int id, string status);

    }
}
