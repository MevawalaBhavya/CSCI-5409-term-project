const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const bucketName = 'cloud-term-project-bucket-1'; 

exports.handler = async (event) => {
    try {

        // List all objects in the bucket
        const listObjectsResponse = await s3.listObjectsV2({ Bucket: bucketName }).promise();
        const files = listObjectsResponse.Contents;

        // Fetch each file's body
        const filesWithBody = await Promise.all(
            files.map(async (file) => {
                const getObjectResponse = await s3.getObject({ Bucket: bucketName, Key: file.Key }).promise();
                const body = getObjectResponse.Body.toString('utf-8'); 
                return { Key: file.Key, Body: body };
            })
        );

        console.log('File body:', filesWithBody);
        return filesWithBody;
    } catch (error) {
        console.error('Error:', error);
        throw error; 
    }
};
