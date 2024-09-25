"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const BASE_URL = "http://localhost:3000";
const userName = document.getElementById("user-name");
const userPassword = document.getElementById("user-password");
const loginButton = document.getElementById("login-button");
document.getElementById("login").addEventListener('submit', function (event) {
    event.preventDefault();
    login();
});
function login() {
    return __awaiter(this, void 0, void 0, function* () {
        const message = document.getElementById("message");
        try {
            const response = yield fetch(`${BASE_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userName: userName.value, password: userPassword.value })
            });
            if (!response.ok) {
                const errorData = yield response.json();
                throw new Error(errorData.message || "Network error");
            }
            const listPlayers = yield response.json();
            message.innerHTML = `id user : ${listPlayers.userid}`;
        }
        catch (error) {
            console.error(error);
            message.innerHTML = error.message;
        }
    });
}
