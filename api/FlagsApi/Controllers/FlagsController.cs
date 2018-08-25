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
using QuickType;


namespace FlagsApi.Controllers
{
    [Produces("application/json")]
    [Route("api/Flags")]
    public class FlagsController : Controller
    {
        // POST: api/Flags
        [HttpPost]
        public async Task<ActionResult> DetectReligion(string name, [FromBody] Prediction prediction)
        {
            using (var client = new HttpClient())
            {
                var scoreRequest = new
                {
                    Inputs = new Dictionary<string, List<Dictionary<string, string>>>() {
                        {
                            "input1",
                            new List<Dictionary<string, string>>(){new Dictionary<string, string>(){
                                            {
                                                "religion", prediction.Religion
                                            },
                                            {
                                                "bars", prediction.Bars
                                            },
                                            {
                                                "stripes", prediction.Stripes
                                            },
                                            {
                                                "colours", prediction.Colours
                                            },
                                            {
                                                "red", prediction.Red.ToString()
                                            },
                                            {
                                                "green", prediction.Green.ToString()
                                            },
                                            {
                                                "blue", prediction.Blue.ToString()
                                            },
                                            {
                                                "gold", prediction.Gold.ToString()
                                            },
                                            {
                                                "white", prediction.White.ToString()
                                            },
                                            {
                                                "black", prediction.Black.ToString()
                                            },
                                            {
                                                "orange", prediction.Orange.ToString()
                                            },
                                            {
                                                "mainhue", prediction.Mainhue
                                            },
                                            {
                                                "circles", prediction.Circles
                                            },
                                            {
                                                "crosses", prediction.Crosses
                                            },
                                            {
                                                "saltires", prediction.Saltires
                                            },
                                            {
                                                "quarters", prediction.Quarters
                                            },
                                            {
                                                "sunstars", prediction.Sunstars
                                            },
                                            {
                                                "crescent", prediction.Crescent.ToString()
                                            },
                                            {
                                                "triangle", prediction.Triangle.ToString()
                                            },
                                            {
                                                "icon", prediction.Icon.ToString()
                                            },
                                            {
                                                "animate", prediction.Animate.ToString()
                                            },
                                            {
                                                "text", prediction.Text.ToString()
                                            },
                                            {
                                                "topleft", prediction.Topleft
                                            },
                                            {
                                                "botright", prediction.Botright
                                            },
                                }
                            }
                        },
                    },
                    GlobalParameters = new Dictionary<string, string>()
                    {
                    }
                };

                const string apiKey = "4ApHMne27lXeQB5HIx79llERzzzv2y77mSHqTIm5w+AIqP29sgL3obJodM3lzcVeS9+uyxt9rvCVhVP0+xQCgA=="; // Replace this with the API key for the web service
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", apiKey);
                client.BaseAddress = new Uri("https://ussouthcentral.services.azureml.net/workspaces/e797c3fe4feb442592cc171d725d7b01/services/e6704ff7427b44658cb09aa750b6ba45/execute?api-version=2.0&format=swagger");

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

                //return Ok();

                if (response.IsSuccessStatusCode)
                {
                    var result = await response.Content.ReadAsStringAsync();
                    var predictionOutput = PredictionOutput.FromJson(result);

                    Console.WriteLine("Result: {0}", predictionOutput);
                    return Ok(predictionOutput.Results.Output1[0].Values.ToList().GetRange(19, 9));
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
