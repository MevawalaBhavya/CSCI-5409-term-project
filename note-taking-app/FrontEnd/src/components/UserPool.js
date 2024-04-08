import {CognitoUserPool} from 'amazon-cognito-identity-js';

const poolData = {
	UserPoolId: process.env.UserPoolId,//'us-east-1_1U9Bz9QXM', // Your user pool id here
	ClientId: process.env.ClientId // Your client id here
};

export default new CognitoUserPool(poolData);