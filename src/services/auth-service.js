import axios from "axios";

export const loginHandler = async (username, password) =>{
    try{
        const {data: {token}, status} = await axios.post("https://quizz-app-backend-3y9c.onrender.com/auth/login",{
            userName: username,
            password: password
        });
        if(status == 200){
            localStorage.setItem("token",token);
            return token;
        }

    }catch (e) {
    console.log("Login failed:", e.response?.data?.message || e.message);
    return null; // ❗ ensure it returns null on failure
  }

}