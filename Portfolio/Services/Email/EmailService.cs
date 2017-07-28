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

        /// <summary>
        /// Constructor - get email configuration
        /// </summary>
        /// <param name="emailConfig"></param>
        public EmailService(IOptions<EmailConfiguration> emailConfig)
        {
            _emailConfig = emailConfig.Value;
        }

        /// <summary>
        /// Sends an email to me and user
        /// </summary>
        /// <param name="name">Name of the sender</param>
        /// <param name="email">Email of the sender</param>
        /// <param name="subject">Subject of the email</param>
        /// <param name="message">Content of the email</param>
        /// <returns></returns>
        public async Task SendEmailAsync(string name, string email, string subject, string message)
        {
            try
            {
                using (var client = new SmtpClient())
                {
                    // Create email
                    var emailMessage = new MimeMessage
                    {
                        Body = new TextPart(TextFormat.Html) { Text = message },
                        Subject = subject
                    };
                    emailMessage.From.Add(new MailboxAddress(name, email));
                    emailMessage.To.Add(new MailboxAddress(name, _emailConfig.ServerEmail));
                    emailMessage.To.Add(new MailboxAddress(name, email));

                    // Connect to mail server and send mail
                    await client.ConnectAsync(_emailConfig.SmtpServer, _emailConfig.SmtpPort, SecureSocketOptions.StartTls).ConfigureAwait(false);
                    await client.AuthenticateAsync(new NetworkCredential(_emailConfig.ServerEmail, _emailConfig.ServerPassword)).ConfigureAwait(false);
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