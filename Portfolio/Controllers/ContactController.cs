using Microsoft.AspNetCore.Mvc;
using Portfolio.Models;
using Portfolio.Services.Email;
using System;
using System.Net;

namespace Portfolio.Controllers
{
    [Route("api/[controller]")]
    public class ContactController : Controller
    {
        private readonly IEmailService _emailService;

        public ContactController(IEmailService emailService)
        {
            _emailService = emailService;
        }

        // POST api/values
        [HttpPost]
        public async void Post([FromBody] EmailModel email)
        {
            try
            {
                if (ModelState.IsValid)
                {
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