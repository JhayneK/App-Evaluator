using AppBuyMe.Data.Dto;
using backend.Models;

namespace AppBuyMe.Interfaces
{
    public interface IProduto
    {
        public Task<Response<List<Produto>>> GetAsync();
        public Task<Response<Produto>> GetAsync(string id);
        public Task<Response<string>> CreateAsync(Produto produto);
        public Task<Response<string>> UpdateAsync(string id, Produto produto);
        public Task<Response<string>> RemoveAsync(string id);
        public Task<Response<List<Produto>>> GetAsyncProdutosCategoria(string categoria);
    }
}
