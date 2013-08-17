var http = require('http')

var buckit = function (bucketName, cb) {

  var url = "http://" + bucketName + ".s3.amazonaws.com/";
  http.get(url, function(xml) {
    console.log(xml.body)
    var keys = xml.getElementsByTagName('Key');
    var files = []
    for (i in keys) {
      var file = keys[i].textContent
      if (file) files.push(file)
    }
    cb(files);
  })
}

module.exports = buckit

buckit('s3-mixtape-test', function(files) {console.log(files)})