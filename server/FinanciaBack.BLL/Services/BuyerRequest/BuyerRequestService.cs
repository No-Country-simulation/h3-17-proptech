

using AutoMapper;
using FinanciaBack.DAL;
using FinanciaBack.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using System.Net;

namespace FinanciaBack.BLL
{
    public class BuyerRequestService : BaseManagerGF, IBuyerRequestService
    {
        private readonly ILogger<BuyerRequestService> _logger;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public BuyerRequestService(IUnitOfWork unitOfWork, ILogger<BuyerRequestService> logger, IHttpContextAccessor httpContextAccessor, IMapper mapper) : base(httpContextAccessor)
        {
            _logger = logger;
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }


        public async Task<BusinessResponse> CreateBuyerRequest(CreateBuyerRequestVM model, string email)
        {

            var buyer = await _unitOfWork.Buyers.GetByUserEmailAsync(email);
            if (buyer == null) return GetBusinessResponse(HttpStatusCode.NotFound, "Buyer not found");
            

            var buyerRequest = _mapper.Map<BuyerRequest>(model);
            buyerRequest.Buyer = buyer;
            buyerRequest.StateOfRequest = "Pending";

            await _unitOfWork.BuyersRequest.AddAsync(buyerRequest);
            await _unitOfWork.SaveAsync();

            return GetBusinessResponse(HttpStatusCode.OK, buyerRequest.EntityPublicKey.ToString("N"), null, null);

        }

        public async Task<IEnumerable<ShowBuyerRequestVM>> GetAllMyRequests(string email)
        {
            var buyer = await _unitOfWork.Buyers.GetByUserEmailAsync(email);         

            var items = await _unitOfWork.BuyersRequest.GetAllMyRequestsAsync(buyer!.Id);            

            return _mapper.Map<IEnumerable<ShowBuyerRequestVM>>(items);

        }


    }
   
}
