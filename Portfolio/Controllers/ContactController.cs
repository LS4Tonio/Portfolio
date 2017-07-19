using Microsoft.AspNetCore.Mvc;

namespace Portfolio.Controllers
{
    [Route("api/[controller]")]
    public class ContactController : Controller
    {
        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }
    }
}