using BaseProjectApi.Models;

namespace BaseProjectApi.Services.UserServices
{
    public interface IUserDBServices
    {
        Task<ServiceModel> RegisterUser(UsersModel usrm, UsersProfile usrp);
        Task<ServiceModel> UserLogin(string UserName); //think this shoud be string not bool
        Task<ServiceModel> GetSingleUser(string UserId);
        Task<ServiceModel> GetAllUsers(SelectionFilterModel payload); // added according to notes 
        Task<ServiceModel> UpdateUser(UsersModel usrm);
        Task<ServiceModel> DeleteSingleUser(string UserId); //double check this later
        Task<ServiceModel> DeleteAllUsers();
    }
}
