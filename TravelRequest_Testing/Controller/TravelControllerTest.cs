using API_TravelRequest.Controllers;
using API_TravelRequest.Models;
using API_TravelRequest.Repository;
using Microsoft.AspNetCore.Mvc;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TravelRequest_Testing.Controller
{
    public class TravelControllerTest
    {
        private readonly Mock<ITravelRepository> _mockRepo;
        private readonly TravelController _controller;

        private IEnumerable<TravelRequest> travelRequests;

        public TravelControllerTest()
        {
            _mockRepo = new Mock<ITravelRepository>();
            travelRequests = new List<TravelRequest>
        {
            new TravelRequest { RequestId = 1, FromLocation = "City A", ToLocation = "City B", ApproveStatus = "Pending", BookingStatus = "NotBooked" },
            new TravelRequest { RequestId = 2, FromLocation = "City X", ToLocation = "City Y", ApproveStatus = "Approved", BookingStatus = "Booked" }
        };

            _mockRepo.Setup(repo => repo.GetTravelRequests())
               .ReturnsAsync(travelRequests);

            _controller = new TravelController(_mockRepo.Object);
        }

        [Fact]
        public async Task GetTravelRequests_ActionExecutes_ReturnsOkResult()
        {
            var result = await _controller.Get();

            var okObjectResult = Assert.IsType<ActionResult<IEnumerable<TravelRequest>>>(result);
            Assert.NotNull(okObjectResult);
            Assert.True(okObjectResult.Result is OkObjectResult);

            var resultTravelRequests = Assert.IsAssignableFrom<IEnumerable<TravelRequest>>(((OkObjectResult)okObjectResult.Result).Value);
            Assert.Equal(travelRequests, resultTravelRequests);
        }

        [Fact]
        public async Task GetTravelRequestById_ActionExecute_ReturnsOkTravelRequest()
        {
            _mockRepo.Setup(repo => repo.GetTravelRequestById(1)).ReturnsAsync(travelRequests.ElementAt<TravelRequest>(0));

            var result = await _controller.GetTravelRequestById(1);

            Assert.NotNull(result);
            var okObjectResult = Assert.IsType<ActionResult<TravelRequest>>(result);

            Assert.True(okObjectResult.Result is OkObjectResult);
            var travelRequest = Assert.IsType<TravelRequest>(((OkObjectResult)okObjectResult.Result).Value);
            Assert.Equal(travelRequests.ElementAt<TravelRequest>(0), travelRequest);
        }

      
    }

}
