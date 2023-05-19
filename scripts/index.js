const usernameField = document.querySelector("#username-field");
const passwordField = document.querySelector("#password-field");
const loginBtn = document.querySelector("#login-btn");

loginBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const jwtToken = await login(usernameField.value, passwordField.value);
    if (jwtToken) {
        
    }
});

const login = (username, password) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");

    const req = JSON.stringify({
        username: username,
        password: password,
    });

    return fetch("https://localhost:3443/users/login", {
        mode: "cors",
        method: "POST",
        headers: headers,
        body: req,
    })
        .then((response) => response.json())
        .then((json) => {
            return json.token;
        })
        .catch((err) => console.error(err));
};
