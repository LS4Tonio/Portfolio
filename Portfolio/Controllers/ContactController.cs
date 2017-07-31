using Microsoft.AspNetCore.Mvc;
using Portfolio.Models;
using Portfolio.Services.Email;
using Portfolio.Services.ReCaptcha;
using System;
using System.Net;

namespace Portfolio.Controllers
{
    [Route("api/[controller]")]
    public class ContactController : Controller
    {
        private readonly IEmailService _emailService;
        private readonly IReCaptchaService _reCaptchaService;

        /// <summary>
        /// Constructor - Initializes the email service
        /// </summary>
        /// <param name="emailService">Email service</param>
        /// <param name="reCaptchaService">ReCaptcha service</param>
        public ContactController(IEmailService emailService, IReCaptchaService reCaptchaService)
        {
            _emailService = emailService;
            _reCaptchaService = reCaptchaService;
        }

        /// <summary>
        /// Sends a mail
        /// </summary>
        /// <param name="email">Email informations</param>
        [HttpPost]
        public async void Post([FromBody] ContactModel email)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    // Validate ReCaptcha token
                    var isReCaptchaValid = await _reCaptchaService.ValidateReCaptcha(email.Token);
                    if (!isReCaptchaValid)
                    {
                        Response.StatusCode = (int)HttpStatusCode.Forbidden;
                        return;
                    }

                    // Send mail
                    await _emailService.SendEmailAsync(email.Name, email.Email, email.Subject, email.Message);
                }
                else
                {
                    Response.StatusCode = (int)HttpStatusCode.BadRequest;
                }
            }
            catch (Exception)
            {
                Response.StatusCode = (int)HttpStatusCode.InternalServerError;
            }
        }
    }
}