using System.Threading.Tasks;

namespace Portfolio.Services.Email
{
    public interface IEmailService
    {
        Task SendEmailAsync(string name, string email, string subject, string message);
    }
}