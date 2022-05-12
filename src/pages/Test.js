import GoogleLogin from "react-google-login";

const handleLogin = async googleData => {
    // const res = await fetch("/api/v1/auth/google", {
    //     method: "POST",
    //     body: JSON.stringify({
    //         token: googleData.tokenId
    //     }),
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // })
    // const data = await res.json()

    console.log("googleData: ", googleData);


    // store returned user somehow
}

export default function Test() {
    return <GoogleLogin
        clientId="970775754411-trpfcsos0eom5fs9ssav274jo6vifoqh.apps.googleusercontent.com"
        buttonText="Log in with Google"
        onSuccess={handleLogin}
        onFailure={handleLogin}
        cookiePolicy={'single_host_origin'}
    />
}