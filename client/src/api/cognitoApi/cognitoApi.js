import { Auth } from 'aws-amplify';

export const signIn = async (email, password) => {
  try {
    const signinResponse = await Auth.signIn(email, password);
    if (signinResponse.challengeName === 'NEW_PASSWORD_REQUIRED') {
      await Auth.completeNewPassword(signinResponse, password,
        signinResponse.challengeParam.requiredAttributes);
    }
    return signinResponse;
  } catch (err) {
    throw err.message;
  }
};

export const getCurrentUser = () => Auth.currentAuthenticatedUser();

export const signOut = () => Auth.signOut({ global: true });

export const signUp = async (email, password) => {
  try {
    return await Auth.signUp({
      username: email,
      password,
    });
  } catch (err) {
    throw err.message;
  }
};
