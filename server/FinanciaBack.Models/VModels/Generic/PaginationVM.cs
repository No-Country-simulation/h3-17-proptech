﻿

namespace FinanciaBack.Models
{
    

    // T = Entity, X = DTO
    public class PaginationVM<T, X> where T : class where X : class
    {
        public int? PageSize { get; set; } = 10;
        public int? PageNumber { get; set; } = 1;
        public string? SearchString { get; set; }
        public bool DisablePrevPage
        {
            get
            {
                return PageNumber == 1;
            }
        }

        public bool DisableNextPage
        {
            get
            {
                if (Items == null) return false;

                return Items.Count() == 0 || Items.Count() < PageSize;
            }
        }

        public IEnumerable<X>? Items { get; set; }
    }

    // T = Entity
    public class PaginationVM<T> where T : class
    {
        public int? PageSize { get; set; } = 10;
        public int? PageNumber { get; set; } = 1;
        public string? SearchString { get; set; }
        public bool DisablePrevPage
        {
            get
            {
                return PageNumber == 1;
            }
        }

        public bool DisableNextPage
        {
            get
            {
                if (Items == null) return false;

                return Items.Count() == 0 || Items.Count() < PageSize;
            }
        }

        public IEnumerable<T>? Items { get; set; }
    }
}
