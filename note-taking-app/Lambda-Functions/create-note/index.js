const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");

const awsS3 = new AWS.S3();
const awsDynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  console.log("Create File API !! ");
  const fileId = uuidv4(); 
  const s3Input = {
    Bucket: "cloud-term-project-bucket-1",
    Key: `${fileId}.html`,
    Body: "",
    ContentType: "text/html",
  };

  // Add file to S3
  await awsS3.putObject(s3Input).promise();

  // Add entry to DynamoDB
  const dbParams = {
    TableName: "cloud-term-project-DB-1",
    Item: { fileId: fileId },
  };
  await awsDynamoDB.put(dbParams).promise();

  return {
    statusCode: 200,
    fileId: fileId,
  };
};
