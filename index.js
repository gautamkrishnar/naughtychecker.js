module.exports = {
   strvalidate: function(input) {
       var fs = require("fs");
       var blns = JSON.parse(fs.readFileSync("blns.json"));
       if (blns.indexOf(input)>=0) {
           return true;
       }
       else
       {
           return false;
       }
   },
   strvalidateonline: function(input){
       var request = require("request");
       var url = "https://raw.githubusercontent.com/minimaxir/big-list-of-naughty-strings/master/blns.json";
       request({
           url: url,
           json: true
       }, function (error, response, data) {
           if (!error && response.statusCode === 200) {
               if(data.indexOf(input)>=0){
                   return true;
               }
           else
           {
               return false;
           }
    }});   
   }
};
