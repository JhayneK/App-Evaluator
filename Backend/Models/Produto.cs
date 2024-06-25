using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace backend.Models
{
    public class Dimensions
    {
        public double Width { get; set; }
        public double Height { get; set; }
        public double Depth { get; set; }
    }

    public class Review
    {
        [BsonElement("rating")]
        public int Rating { get; set; }

        [BsonElement("comment")]
        public string Comment { get; set; }

        [BsonElement("date")]
        public DateTime Date { get; set; }

        [BsonElement("reviewerName")]
        public string ReviewerName { get; set; }

        [BsonElement("reviewerEmail")]
        public string ReviewerEmail
        {
            get; set;
        }
    }

    public class Meta
    {
        [BsonElement("createdAt")]
        public DateTime CreatedAt { get; set; }

        [BsonElement("updatedAt")]
        public DateTime UpdatedAt { get; set; }

        [BsonElement("barcode")]
        public string Barcode { get; set; }

        [BsonElement("qrCode")]
        public string QrCode { get; set; }
    }

    [BsonIgnoreExtraElements]
    public class Produto
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("title")]
        public string Title { get; set; }

        [BsonElement("description")]
        public string Description { get; set; }

        [BsonElement("category")]
        public string Category { get; set; }

        [BsonElement("price")]
        public decimal Price { get; set; }

        [BsonElement("discountPercentage")]
        public decimal DiscountPercentage { get; set; }

        [BsonElement("rating")]
        public double Rating { get; set; }

        [BsonElement("stock")]
        public int Stock { get; set; }

        [BsonElement("tags")]
        public List<string> Tags { get; set; }

        [BsonElement("brand")]
        public string Brand { get; set; }

        [BsonElement("sku")]
        public string Sku { get; set; }

        [BsonElement("weight")]
        public double Weight { get; set; }

        [BsonElement("dimensao")]
        public Dimensions Dimensions { get; set; }

        [BsonElement("warrantyInformation")]
        public string WarrantyInformation { get; set; }

        [BsonElement("shippingInformation")]
        public string ShippingInformation { get; set; }

        [BsonElement("availabilityStatus")]
        public string AvailabilityStatus { get; set; }

        [BsonElement("feedback")]
        public List<Review> Review { get; set; }

        [BsonElement("returnPolicy")]
        public string ReturnPolicy { get; set; }

        [BsonElement("minimumOrderQuantity")]
        public int MinimumOrderQuantity { get; set; }

        [BsonElement("meta")]
        public Meta Meta { get; set; }

        [BsonElement("images")]
        public List<string> Images { get; set; }

        [BsonElement("thumbnail")]
        public string Thumbnail { get; set; }
    }
}