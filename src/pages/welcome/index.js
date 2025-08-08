export default () => {
    const containerWelcome = document.createElement("div");

    const templateWelcome = `
    <div class="containerWel">
    <img src="../src/imgs/imglogo.png" >
        <h1 class="titleOne">Trivia</h1>
        <p class="titleTwo">Mitologia Grega</p>
        <div class="btns">
        <button class="btn google" id="buttonGoogle">Google</button>
        <button>Facebook</button>
        </div>
    </div>
    `;

    containerWelcome.innerHTML = templateWelcome;

    return containerWelcome;
}