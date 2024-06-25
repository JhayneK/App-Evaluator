using AppBuyMe.Controllers;
using AppBuyMe.Data.Context;
using AppBuyMe.Data.Repositories;
using AppBuyMe.rules;
using AppBuyMe.Services;

var builder = WebApplication.CreateBuilder(args);

//Conexao do banco
//var connectionString = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("ConnectionString"));
//var connection = builder.Configuration["ConnectionString"];

builder.Services.Configure<MongoDbConfig>(builder.Configuration.GetSection("MongoDbConfig"));
builder.Services.AddSingleton<ProdutoRegras>();
builder.Services.AddSingleton<ProdutoController>();
builder.Services.AddSingleton<ProdutoService>();
builder.Services.AddSingleton<ProdutoRepositoy>();

builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
//builder.Services.AddLogging(loggingBuilder =>
//    {
//        // Configurar o logger para escrever logs em um arquivo de texto
//        loggingBuilder.AddFilter("logs/tatsu.txt");
//    });

//builder.Services.AddDbContext<UsuarioContext>(opts =>
//{
//    opts.UseSqlServer(connection);
//});

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
//builder.Services.AddApplicationInsightsTelemetry();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Habilita o CORS
app.UseCors(policy => policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

app.UseAuthorization();

app.MapControllers();

app.Run();
