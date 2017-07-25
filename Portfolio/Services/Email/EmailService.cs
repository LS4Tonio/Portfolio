using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.Extensions.Options;
using MimeKit;
using MimeKit.Text;
using System;
using System.Net;
using System.Threading.Tasks;

namespace Portfolio.Services.Email
{
    public class EmailService : IEmailService
    {
        private readonly EmailConfiguration _emailConfig;

        public EmailService(IOptions<EmailConfiguration> emailConfig)
        {
            _emailConfig = emailConfig.Value;
        }

        public async Task SendEmailAsync(string name, string email, string subject, string message)
        {
            try
            {
                var emailMessage = new MimeMessage
                {
                    Body = new TextPart(TextFormat.Html) { Text = message },
                    Subject = subject
                };
                emailMessage.From.Add(new MailboxAddress(name, email));
                emailMessage.To.Add(new MailboxAddress(_emailConfig.FromName, _emailConfig.FromAddress));
                emailMessage.To.Add(new MailboxAddress(name, email));

                using (var client = new SmtpClient())
                {
                    client.LocalDomain = _emailConfig.LocalDomain;

                    await client.ConnectAsync(_emailConfig.MailServerAddress, Convert.ToInt32(_emailConfig.MailServerPort), SecureSocketOptions.Auto).ConfigureAwait(false);
                    await client.AuthenticateAsync(new NetworkCredential(_emailConfig.UserId, _emailConfig.UserPassword));
                    await client.SendAsync(emailMessage).ConfigureAwait(false);
                    await client.DisconnectAsync(true).ConfigureAwait(false);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                throw;
            }
        }
    }
}