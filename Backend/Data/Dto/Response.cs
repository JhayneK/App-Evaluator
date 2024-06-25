﻿namespace AppBuyMe.Data.Dto
{
    public class Response<T>
    {
        public bool Success { get; set; }
        public T Data { get; set; }
        public string ErrorMessage { get; set; }
        public string Text { get; set; }
    }
}