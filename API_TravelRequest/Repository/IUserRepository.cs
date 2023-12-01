using ClassLiabrary_API_TravelRequest;

namespace API_TravelRequest.Repository
{
    public interface IUserRepository
    {

        Task<UserManagerResponse> RegisterUserAsync(RegisterViewModel model);

        Task<UserManagerResponse> LoginUserAsync(LoginViewModel model);
    }
}
