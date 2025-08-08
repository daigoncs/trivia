import { getAuth, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default () => {
    const containerWelcome = document.createElement("div");
    const googleSignInBtn = document.getElementById("google-sign-in-btn");
    const templateWelcome = `
    <div class="containerWel">
    <img src="../src/imgs/imglogo.png" >
        <h1 class="titleOne">Trivia</h1>
        <p class="titleTwo">Mitologia Grega</p>
        <div class="btns">
        <button class="btn google" id="google-sign-in-btn">Google</button>
        <button>Facebook</button>
        </div>
    </div>
    `;



    containerWelcome.innerHTML = templateWelcome;

    return containerWelcome;
}