import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { messageError } from "../utils/alertsAplication";
import { messages } from "../utils/messageinvensys";
import { AuthGoogleAdmin } from "../utils/AuthCount";
import { AuthGoogle } from "../apis/ApiData";
export const AuthGoogleA = () => {
  const setDataGoogl = async (data) => {
    const { email, name, picture } = data;
    const postDataUser = { email, name, picture };
    const response = await AuthGoogle(postDataUser);
    if (response.status === 200) {
      await AuthGoogleAdmin(response.data);
      window.location.href = "/perfil";
    } else {
      messageError(messages.MESSAGE_AUTH_GOOGLE_ERROR);
    }
  };
  return (
    <div>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          let decode = jwt_decode(credentialResponse.credential);
          setDataGoogl(decode);
        }}
        onError={() => {}}
        useOneTap
        locale
        type="standard"
        shape="pill"
        theme="filled_black"
        logo_alignment="left"
      />
    </div>
  );
};
