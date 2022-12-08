var AWS = require('aws-sdk'); 

AWS.config = new AWS.Config();
AWS.config.accessKeyId = "AKIASXB6ZF7XISCH7RU3";
AWS.config.secretAccessKey = "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";
AWS.config.region = "us-east-1";

//Create a Table

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

var params = {
  AttributeDefinitions: [
    {
      AttributeName: 'EMP_ID',
      AttributeType: 'S'
    }
  ],
  KeySchema: [
    {
      AttributeName: 'EMP_ID',
      KeyType: 'HASH'
    }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1
  },
  TableName: 'EMPLOYEE',
  StreamSpecification: {
    StreamEnabled: false
  }
};

// Call DynamoDB to create the table
ddb.createTable(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Table Created", data);
  }
});