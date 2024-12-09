using AutoMapper;

namespace FinanciaBack.Models;
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<CreateBuyerRequestVM, BuyerRequest>();
            CreateMap<BuyerRequest, ShowBuyerRequestVM>()
           .ForMember(dest => dest.FormattedName, opt => opt.MapFrom(src =>
                string.IsNullOrWhiteSpace(src.Name) || string.IsNullOrWhiteSpace(src.SurName)
                ? string.Empty
                : $"{src.Name[0]}. {src.SurName}"));
        }
    }

