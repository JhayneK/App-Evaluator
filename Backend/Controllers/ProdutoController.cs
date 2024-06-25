using AppBuyMe.Services;
using Microsoft.AspNetCore.Mvc;

namespace AppBuyMe.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProdutoController : Controller
    {
        private readonly ProdutoService _produtoServices;
        public ProdutoController(ProdutoService receitaServices)
        {
            _produtoServices = receitaServices;
        }

        [HttpGet]
        public async Task<ActionResult> Produtos()
        {
            var response = await _produtoServices.Produtos();
            return Ok(response);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> Produto(string id)
        {
            var response = await _produtoServices.Produto(id);
            return Ok(response);
        }

        [HttpGet("categoria/{categoria}")]
        public async Task<ActionResult> ProdutoCategoria(string categoria)
        {
            var response = await _produtoServices.ProdutoCategoria(categoria);
            return Ok(response);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeletarProduto(string id)
        {
            var response = await _produtoServices.RemoverProduto(id);
            return Ok(response);
        }
    }
}
