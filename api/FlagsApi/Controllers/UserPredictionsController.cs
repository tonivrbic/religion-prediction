using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FlagsApi.Models;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;

namespace FlagsApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class UserPredictionsController : ControllerBase
    {
        private readonly PredictionContext _context;
        private readonly string userId;

        public UserPredictionsController(PredictionContext context, IHttpContextAccessor httpContextAccessor)
        {
            _context = context;
            var identity = httpContextAccessor.HttpContext.User.Identity as ClaimsIdentity;
            userId = identity.Claims.Where(c => c.Type == "user_id").FirstOrDefault().Value;
        }

        // GET: api/UserPredictions
        [HttpGet]
        public IEnumerable<UserPrediction> GetUserPredictions()
        {
            return _context.UserPredictions.Where(x => x.UserId == userId);
        }

        // GET: api/UserPredictions/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUserPrediction([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userPrediction = await _context.UserPredictions.FindAsync(id);

            if (userPrediction == null || userPrediction.UserId != userId)
            {
                return NotFound();
            }


            return Ok(userPrediction);
        }

        // POST: api/UserPredictions
        [HttpPost]
        public async Task<IActionResult> PostUserPrediction([FromBody] UserPrediction userPrediction)
        {
            userPrediction.CreationDate = DateTime.Now;
            userPrediction.UserId = userId;
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.UserPredictions.Add(userPrediction);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUserPrediction", new { id = userPrediction.Id }, userPrediction);
        }

        // DELETE: api/UserPredictions/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUserPrediction([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userPrediction = await _context.UserPredictions.FindAsync(id);
            if (userPrediction == null || userPrediction.UserId != userId)
            {
                return NotFound();
            }

            _context.UserPredictions.Remove(userPrediction);
            await _context.SaveChangesAsync();

            return Ok(userPrediction);
        }

        private bool UserPredictionExists(int id)
        {
            return _context.UserPredictions.Any(e => e.Id == id);
        }
    }
}