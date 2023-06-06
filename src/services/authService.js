import http from "./httpService";
import apiUrl from "../config.json";
import jwtDecode from "jwt-decode"

const apiEndpoint = apiUrl + "/auth";
const tokenKey = 'sembraSuccess';


export function logout() {
    localStorage.removeItem(tokenKey);
    window.location = "/"
}

export function getCurrentUser() {
    try {
        const jwt = localStorage.getItem(tokenKey);
        return jwtDecode(jwt);
    } catch (ex) {
        return null;
    }
}

export function getJwt() {
    return localStorage.getItem(tokenKey);
}

export default {
    logout,
    getCurrentUser,
    getJwt
}