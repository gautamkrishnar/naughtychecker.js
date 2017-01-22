var fs = require("fs");
var request = require("request");

var blns = JSON.parse(fs.readFileSync("blns.json"));
var url = "https://raw.githubusercontent.com/minimaxir/big-list-of-naughty-strings/master/blns.json";

module.exports = {
   strvalidate: function(input) {
       if (blns.indexOf(input) >= 0) {
           return true;
       }
       return false;
   },

   strvalidateonline: function(input) {
       request({
           url: url,
           json: true
       }, function (error, response, data) {
             if (!error && response.statusCode === 200) {
                if (data.indexOf(input) >= 0) {
                    return true;
                }
                return false;
             }
          }
       );
   }
};
