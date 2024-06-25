using AppBuyMe.Data.Context;
using AppBuyMe.Data.Dto;
using AppBuyMe.Interfaces;
using backend.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace AppBuyMe.Data.Repositories
{
    public class ProdutoRepositoy : IProduto
    {
        private IMongoCollection<Produto> _produtoCollection;
        public ProdutoRepositoy(IOptions<MongoDbConfig> mongoConfig)
        {
            var mongoClient = new MongoClient(mongoConfig.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(mongoConfig.Value.DatabaseName);
            _produtoCollection = mongoDatabase.GetCollection<Produto>("Produtos");
        }

        public async Task<Response<string>> CreateAsync(Produto produto)
        {
            try
            {
                // Executar a operação de inserção assíncrona
                await _produtoCollection.InsertOneAsync(produto);

                // A operação de inserção foi concluída com sucesso
                return new Response<string> { Success = true, Text = "Produto criado com sucesso", Data = produto.Id.ToString() };
            }
            catch (Exception ex)
            {           
                return new Response<string> { Success = false, ErrorMessage = "Falha ao inserir registro no banco: " + ex.Message };
            }
        }

        public async Task<Response<List<Produto>>> GetAsync()
        {
            try
            {
                var produtos = await _produtoCollection.Find(x => true).ToListAsync();

                return new Response<List<Produto>> { Success = true, Data = produtos };
            }
            catch (Exception e)
            {
                return new Response<List<Produto>> { Success = false, ErrorMessage = "Erro interno: " + e.Message };
            }

        }

        public async Task<Response<Produto>> GetAsync(string id)
        {
            try
            {
                var receita = await _produtoCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

                return receita == null
                ? new Response<Produto> { Success = false, ErrorMessage = "Produto não encontrado" }
                : new Response<Produto> { Success = true, Data = receita };

            }
            catch (Exception ex)
            {
                return new Response<Produto> { Success = false, ErrorMessage = "Erro interno: " + ex.Message };
            }
        }

        public async Task<Response<List<Produto>>> GetAsyncProdutosCategoria(string categoria)
        {
            try
            {
                var produtos = await _produtoCollection.Find(x => x.Category == categoria).ToListAsync();

                return produtos.Count == 0
                ? new Response<List<Produto>> { Success = false, ErrorMessage = "Produto não encontrado" }
                : new Response<List<Produto>> { Success = true, Data = produtos };

            }
            catch (Exception ex)
            {
                return new Response<List<Produto>> { Success = false, ErrorMessage = "Erro interno: " + ex.Message };
            }
        }


        public async Task<Response<string>> UpdateAsync(string id, Produto produto)
        {
            try
            {
                var response = await _produtoCollection.ReplaceOneAsync(x => x.Id == id, produto);

                if (response.ModifiedCount == 0)
                {
                    return new Response<string> { Success = false, ErrorMessage = "Documento não encontrado ou não modificado" };
                }

                return new Response<string> { Success = true, Text = "Documento atualizado com sucesso", Data = id };
            }
            catch (Exception ex)
            {
                return new Response<string> { Success = false, ErrorMessage = "Erro interno: " + ex.Message };
            }
        }


        public async Task<Response<string>> RemoveAsync(string id)
        {
            try
            {
                var response = await _produtoCollection.DeleteOneAsync(x => x.Id == id);

                return new Response<string> { Success = true };
            }
            catch (Exception ex)
            {
                return new Response<string> { Success = false, ErrorMessage = "Erro interno: " + ex.Message };
            }
        }

    }
}
