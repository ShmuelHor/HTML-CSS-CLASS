const BASE_URL = "http://localhost:3000";

const userName = document.getElementById("user-name") as HTMLInputElement;
const userPassword = document.getElementById("user-password") as HTMLInputElement;
const loginButton = document.getElementById("login-button") as HTMLButtonElement;

document.getElementById("login")!.addEventListener('submit', function(event) {
    event.preventDefault();
    login();
});
async function login():Promise<void> {
    const message = document.getElementById("message") as HTMLHeadingElement;
    try {
        const response = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userName: userName.value, password: userPassword.value })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Network error");
        }
        
        const listPlayers: any = await response.json();
        message.innerHTML = `id user : ${listPlayers.userid}`;
    } catch (error:any) {
        console.error(error);
        message.innerHTML = error.message;
    }
}

