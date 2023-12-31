﻿
using API_TravelRequest.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_TravelRequest.Repository
{
    public class TravelRepository : ITravelRepository
    {
        private readonly ApplicationDbContext _context;

        public TravelRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<TravelRequest>> GetTravelRequests()
        {
            return await _context.TravelRequests.ToListAsync();
        }

        public async Task<TravelRequest> AddTravelRequest(TravelRequest travelRequest)
        {
            if (travelRequest != null)
            {
                await _context.AddAsync(travelRequest);
                await _context.SaveChangesAsync();
            }
            return travelRequest;
        }

        public async Task DeleteTravelRequest(int requestId)
        {
            TravelRequest? travelRequest = _context.TravelRequests.FirstOrDefault(x => x.RequestId == requestId);
            if (travelRequest != null)
            {
                _context.Remove(travelRequest);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<TravelRequest> GetTravelRequestById(int requestId)
        {
            TravelRequest? travelRequest = _context.TravelRequests.FirstOrDefault(x => x.RequestId == requestId);
            return travelRequest;
        }

        public async Task UpdateTravelRequest(TravelRequest travelRequest, int requestId)
        {
            TravelRequest? travelRequestOld = _context.TravelRequests.FirstOrDefault(x => x.RequestId == requestId);
            if (travelRequestOld != null)
            {
                
                travelRequestOld.FromLocation = travelRequest.FromLocation;
                travelRequestOld.ToLocation = travelRequest.ToLocation;
                travelRequestOld.RequestDate = travelRequest.RequestDate;
                travelRequestOld.ApproveStatus = travelRequest.ApproveStatus;
                travelRequestOld.BookingStatus = travelRequest.BookingStatus;
                travelRequestOld.CurrentStatus = travelRequest.CurrentStatus;

                await _context.SaveChangesAsync();
            }
        }
        public async Task ApproveTravelRequestAsync(int id, string status)
        {
            TravelRequest tr = await _context.TravelRequests.FirstOrDefaultAsync(x => x.RequestId == id);

            if (tr != null)
            {
                tr.ApproveStatus = status;

                if (tr.ApproveStatus == "Not Approved")
                {
                    tr.CurrentStatus = "Close";
                    tr.BookingStatus = " - ";
                }
                else if (tr.ApproveStatus == "Approved")
                {
                    tr.CurrentStatus = "Open"; 
                    tr.BookingStatus = "Pending"; 
                }

                await _context.SaveChangesAsync();
            }
        }


        public async Task BookTravelRequestAsync(int id, string status)
        {
            TravelRequest tr = await _context.TravelRequests.FirstOrDefaultAsync(x => x.RequestId == id);

            if (tr != null)
            {
               
                if (tr.ApproveStatus == "Approved" || tr.ApproveStatus == "Pending")
                {
                    tr.BookingStatus = status;
                    tr.CurrentStatus = "Close";
                    await _context.SaveChangesAsync(true);
                }
                else
                {
                    
                    tr.BookingStatus = "Not Available";
                    tr.CurrentStatus = "Close";
                    await _context.SaveChangesAsync(true);
                }
            }
        }
    }
}
