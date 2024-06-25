using AppBuyMe.Data.Dto;
using AppBuyMe.rules;
using backend.Models;

namespace AppBuyMe.Services
{
    public class ProdutoService
    {
        private ProdutoRegras _produtoRegras;

        public ProdutoService(ProdutoRegras produtoRegras)
        {
            _produtoRegras = produtoRegras;
        }

        public async Task<Response<List<Produto>>> Produtos()
        {
            return await _produtoRegras.TodosProdutos();
        }

        public async Task<Response<string>> RemoverProduto(string id)
        {
            return await _produtoRegras.RemoveAsync(id);
        }

        public async Task<Response<Produto>> Produto(string id)
        {
            return await _produtoRegras.Produto(id);
        }
        public async Task<Response<List<Produto>>> ProdutoCategoria(string categoria)
        {
            return await _produtoRegras.ProdutoCategoria(categoria);
        }

    }
}
