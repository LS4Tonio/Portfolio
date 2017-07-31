using System.Threading.Tasks;

namespace Portfolio.Services.ReCaptcha
{
    public interface IReCaptchaService
    {
        Task<bool> ValidateReCaptcha(string token);
    }
}