// import dotenv from "dotenv";
// dotenv.config();

export const GetTokenAPI = async (snsAccessToken, platform) => {
  let postResponse;
  try {
    postResponse = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/login/`, {
      method: 'POST',
      headers: {
        'Authorization': snsAccessToken,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 'login_site': platform }) // body data type must match "Content-Type" header
    });
  } catch (err) {
    alert('fail to connet server');
    return;
  }

  let post;
  try {
    post = await postResponse.json();
  } catch (err) {
    alert('fail to read json');
    return;
  }

  return {
    accessToken: post.access_token,
    refreshToken: post.refresh_token
  };
}

export const RefreshAccessTokenAPI = async (refreshToken) => {
  // To Do...
  alert("Need to update Refresh API");
  return false;
}