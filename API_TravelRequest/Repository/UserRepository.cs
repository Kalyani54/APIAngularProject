using ClassLiabrary_API_TravelRequest;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;


namespace API_TravelRequest.Repository
{
    public class UserRepository:IUserRepository
    {
        private UserManager<IdentityUser> _userManager;

        private readonly IConfiguration _configuration;

        // Do a dependency injection to that service

        public UserRepository(UserManager<IdentityUser> userManager, IConfiguration configuration)
        {
            _configuration = configuration;
            _userManager = userManager;
        }

        public async Task<UserManagerResponse> RegisterUserAsync(RegisterViewModel model)
        {
            if (model == null)
            {
                throw new ArgumentNullException("Register model is not null");
            }

            if (model.Password != model.ConfirmPassword)
                return new UserManagerResponse
                {
                    Message = "Confirm Password doesn't match the password",
                    IsSuccess = false
                };
            // If the password and confirmed password match - create a new user

            var IdentityUser = new IdentityUser
            {
                Email = model.Email,
                UserName = model.Email
            };

            //Use the _userManager service to create a new user
            var result = await _userManager.CreateAsync(IdentityUser, model.Password);

            if (result.Succeeded)
            {
                return new UserManagerResponse
                {
                    Message = "User created successfully",
                    IsSuccess = true
                };

            }
            return new UserManagerResponse
            {
                Message = "User is not created",
                IsSuccess = false,
                Errors = result.Errors.Select(e => e.Description)
            };
        }

        public async Task<UserManagerResponse> LoginUserAsync(LoginViewModel model)
        {
            var user = await _userManager.FindByEmailAsync(model.Email);
            if (user == null)
            {
                return new UserManagerResponse
                {
                    Message = "There is no users with that email Address",
                    IsSuccess = false,

                };
            }
            var result = await _userManager.CheckPasswordAsync(user, model.Password);
            if (!result)
                return new UserManagerResponse
                {
                    Message = "Invalid Password",
                    IsSuccess = false,
                };
            var claims = new[]
            {
         new Claim("Email",model.Email),
         new Claim(ClaimTypes.NameIdentifier,user.Id)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(
                _configuration["AuthSettings:Key"]));

            var token = new JwtSecurityToken
                (issuer: _configuration["AuthSettings:Issuer"],
                audience: _configuration["AuthSettings:Audience"],
                claims: claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: new SigningCredentials(key, SecurityAlgorithms.HmacSha256));

            string tokenString = new JwtSecurityTokenHandler().WriteToken(token);

            return new UserManagerResponse
            {
                Message = tokenString,
                IsSuccess = false,
                ExpireDate = token.ValidTo

            };


        }
    }

   
}
