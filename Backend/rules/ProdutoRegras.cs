using Amazon.Runtime.Internal.Util;
using AppBuyMe.Data.Dto;
using AppBuyMe.Data.Repositories;
using AutoMapper;
using backend.Models;

namespace AppBuyMe.rules
{
    public class ProdutoRegras
    {
        public ProdutoRegras(ProdutoRepositoy receitaRepositoy, IMapper mapper)
        {
            _produtoRepositoy = receitaRepositoy;
            _mapper = mapper;
        }

        private readonly ProdutoRepositoy _produtoRepositoy;
        private readonly IMapper _mapper;

        public async Task<Response<List<Produto>>> TodosProdutos()
        {
            return await _produtoRepositoy.GetAsync();
        }


        public async Task<Response<Produto>> Produto(string id)
        {
            return await _produtoRepositoy.GetAsync(id);
        }

        public async Task<Response<List<Produto>>> ProdutoCategoria(string categoria)
        {
            return await _produtoRepositoy.GetAsyncProdutosCategoria(categoria);
        }

        public async Task<Response<string>> RemoveAsync(string id)
        {
            return await _produtoRepositoy.RemoveAsync(id);
        }

    }
}
