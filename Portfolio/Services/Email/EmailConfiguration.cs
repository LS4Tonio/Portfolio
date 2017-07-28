namespace Portfolio.Services.Email
{
    public class EmailConfiguration
    {
        public string ServerEmail { get; set; }
        public string ServerPassword { get; set; }

        public string UserName { get; set; }

        public string SmtpServer { get; set; }
        public int SmtpPort { get; set; }
    }
}