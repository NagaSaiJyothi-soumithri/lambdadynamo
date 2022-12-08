var AWS = require('aws-sdk');
AWS.config = new AWS.Config();
AWS.config.accessKeyId = "AKIASXB6ZF7XISCH7RU3";
AWS.config.secretAccessKey = "uciELCV9Vj2enwl3gwjfR8sfeDWXcndXofAp6VsD";
// you shouldn't hardcode your keys in production! See http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-configuring.html
//AWS.config.update({accessKeyId: 'akid', secretAccessKey: 'secret'});
AWS.config.region = "us-east-1";

var lambda = new AWS.Lambda();
const input = require('./input.json');

var params = {
  FunctionName: 'deleteItem', /* required */
  Payload: JSON.stringify(input) //stringify method converts a JavaScript value to a JSON string, 

};
const cc = lambda.invoke(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});