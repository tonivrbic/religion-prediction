using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace FlagsApi.Controllers
{
    [Produces("application/json")]
    [Route("api/Flags")]
    public class FlagsController : Controller
    {
        // POST: api/Flags
        [HttpGet]
        public async Task<ActionResult> DetectReligion()
        {
            using (var client = new HttpClient())
            {
                var scoreRequest = new
                {

                    Inputs = new Dictionary<string, StringTable>() {
                        {
                            "input1",
                            new StringTable()
                            {
                                ColumnNames = new string[] {"religion", "crosses", "mainhue-blue", "white", "botright-green", "blue", "botright-blue", "quarters", "topleft-red", "saltires", "topleft-gold", "green", "circles", "red", "stripes", "topleft-white", "mainhue-green", "topleft-blue", "mainhue-red", "botright-orange", "sunstars"},
                                Values = new string[,] {  { "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0" },  { "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0" },  }
                            }
                        },
                    },
                    GlobalParameters = new Dictionary<string, string>()
                    {
                    }
                };
                const string apiKey = "E25I29g3ENARZoRALbP3msGPQnQHpbpI6BjhuBLNznlscmkvmq+wRGKfA8xsnzJzdqOnvehBKU7qVL8GLyLr+A=="; // Replace this with the API key for the web service
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", apiKey);

                client.BaseAddress = new Uri("https://ussouthcentral.services.azureml.net/workspaces/e797c3fe4feb442592cc171d725d7b01/services/9b7db248c026431da562464f78b80850/execute?api-version=2.0&details=true");

                // WARNING: The 'await' statement below can result in a deadlock if you are calling this code from the UI thread of an ASP.Net application.
                // One way to address this would be to call ConfigureAwait(false) so that the execution does not attempt to resume on the original context.
                // For instance, replace code such as:
                //      result = await DoSomeTask()
                // with the following:
                //      result = await DoSomeTask().ConfigureAwait(false)

                var myContent = JsonConvert.SerializeObject(scoreRequest);
                var buffer = System.Text.Encoding.UTF8.GetBytes(myContent);
                var byteContent = new ByteArrayContent(buffer);

                byteContent.Headers.ContentType = new MediaTypeHeaderValue("application/json");

                HttpResponseMessage response = await client.PostAsync("", byteContent);

                if (response.IsSuccessStatusCode)
                {
                    var result = JsonConvert.DeserializeObject<RootObject>(await response.Content.ReadAsStringAsync());
                    
                    Console.WriteLine("Result: {0}", result);
                    return Ok(result.Results.output1.value.Values[0].GetRange(13,9));
                }
                else
                {
                    Console.WriteLine(string.Format("The request failed with status code: {0}", response.StatusCode));

                    // Print the headers - they include the requert ID and the timestamp, which are useful for debugging the failure
                    Console.WriteLine(response.Headers.ToString());

                    string responseContent = await response.Content.ReadAsStringAsync();
                    Console.WriteLine(responseContent);
                    return BadRequest(responseContent);
                }
            }
        }

    }

    public class StringTable
    {
        public string[] ColumnNames { get; set; }
        public string[,] Values { get; set; }
    }

}
