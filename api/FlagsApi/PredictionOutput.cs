// To parse this JSON data, add NuGet 'Newtonsoft.Json' then do:
//
//    using QuickType;
//
//    var predictionOutput = PredictionOutput.FromJson(jsonString);

namespace QuickType
{
    using System;
    using System.Collections.Generic;

    using System.Globalization;
    using Newtonsoft.Json;
    using Newtonsoft.Json.Converters;

    public partial class PredictionOutput
    {
        [JsonProperty("Results")]
        public Results Results { get; set; }
    }

    public partial class Results
    {
        [JsonProperty("output1")]
        public Dictionary<string, string>[] Output1 { get; set; }
    }

    public partial class PredictionOutput
    {
        public static PredictionOutput FromJson(string json) => JsonConvert.DeserializeObject<PredictionOutput>(json, QuickType.Converter.Settings);
    }

    public static class Serialize
    {
        public static string ToJson(this PredictionOutput self) => JsonConvert.SerializeObject(self, QuickType.Converter.Settings);
    }

    internal static class Converter
    {
        public static readonly JsonSerializerSettings Settings = new JsonSerializerSettings
        {
            MetadataPropertyHandling = MetadataPropertyHandling.Ignore,
            DateParseHandling = DateParseHandling.None,
            Converters = {
                new IsoDateTimeConverter { DateTimeStyles = DateTimeStyles.AssumeUniversal }
            },
        };
    }
}
