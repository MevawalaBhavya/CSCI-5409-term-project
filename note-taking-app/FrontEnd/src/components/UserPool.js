import {CognitoUserPool} from 'amazon-cognito-identity-js';

const poolData = {
	UserPoolId: 'us-east-1_1U9Bz9QXM', // Your user pool id here
	ClientId: '3d0oj001eet7bmq6anvqu01e3j' // Your client id here
};

export default new CognitoUserPool(poolData);