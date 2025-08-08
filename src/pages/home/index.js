export default () => {
    const container = document.createElement("div");

    const template = `
        <div class="containerHome">
            <img src="/src/images/logo.png" alt="logo">
            <h1>TRIVIA</h1>
            <h2>Mitologia Grega</h2>
            <div class="btns">
            <button class="btn google" id="buttonGoogle">Google</button>
            <button>Facebook</button>
        </div>
    `;

    container.innerHTML = template;

    return container;
}