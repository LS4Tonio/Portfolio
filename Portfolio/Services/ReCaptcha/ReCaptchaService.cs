using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;

namespace Portfolio.Services.ReCaptcha
{
    public class ReCaptchaService : IReCaptchaService
    {
        private readonly ReCaptchaConfiguration _captchaConfiguration;

        /// <summary>
        /// Constructor - get recaptcha configuration
        /// </summary>
        /// <param name="captchaConfig">ReCaptcha configuration</param>
        public ReCaptchaService(IOptions<ReCaptchaConfiguration> captchaConfig)
        {
            _captchaConfiguration = captchaConfig.Value;
        }

        /// <summary>
        /// Validates a ReCaptcha with to provided token
        /// </summary>
        /// <param name="token">Token from ReCaptcha widget</param>
        /// <returns></returns>
        public async Task<bool> ValidateReCaptcha(string token)
        {
            if (string.IsNullOrEmpty(token)) return false;

            using (var http = new HttpClient())
            {
                const string url = "https://www.google.com/recaptcha/api/siteverify";
                var parameters = new FormUrlEncodedContent(new[]
                {
                    new KeyValuePair<string, string>("secret", _captchaConfiguration.Private),
                    new KeyValuePair<string, string>("response", token)
                });
                var response = await http.PostAsync(url, parameters);

                var json = await response.Content.ReadAsStringAsync();
                var reCaptchaResponse = JsonConvert.DeserializeObject<ReCaptchaResponse>(json);

                return reCaptchaResponse.Success;
            }
        }
    }
}