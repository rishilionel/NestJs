using MongoDB.Driver;

namespace CodeQL.Data.Interfaces
{
    public interface IGateway
    {
        IMongoDatabase GetMongoDB();
    }
}
