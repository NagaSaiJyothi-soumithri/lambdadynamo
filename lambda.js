var AWS = require('aws-sdk');


AWS.config.region = "us-east-1";

// Create the IAM service object
var lambda = new AWS.Lambda({apiVersion: '2015-03-31'});


var params = {
  Code: { /* required */
    S3Bucket: 'lambdaupdate001',
    S3Key: 'index.zip'
  },
  FunctionName: 'insertdata', /* required */
  Handler: 'index.handler', /* required */
  Role: 'arn:aws:iam::186962751470:role/demolambda', /* required */
  Runtime: 'nodejs12.x', /* required */
  Description: 'Insert Items into table',
};
lambda.createFunction(params, function(err, data) {
  if (err) console.log(err); // an error occurred
  else     console.log(data);           // successful response
});