/**
 * Verifica si el usuario está logueado revisando el localStorage.
 * @returns {boolean} - Retorna true si está logueado, false en caso contrario.
 */
export function checkLoginStatus() {
  return localStorage.getItem("loggedIn") === "true";
}

/**
 * Redirige al usuario a la página de login si no está logueado.
 */
export function redirectToLogin() {
  window.location.href = "../login/index.html";
}

/**
 * Redirige al usuario a la página del dashboard.
 */
export function redirectToDashboard() {
  window.location.href = "../dashboard/dashboard.html";
}

/**
 * Almacena datos en sessionStorage.
 * @param {string} key - La clave con la que se almacenará el dato.
 * @param {string} value - El valor que se almacenará.
 */
export function setSessionData(key, value) {
  sessionStorage.setItem(key, value);
}

/**
 * Obtiene datos de sessionStorage.
 * @param {string} key - La clave con la que se almacenó el dato.
 * @returns {string|null} - Retorna el valor almacenado o null si no existe.
 */
export function getSessionData(key) {
  return sessionStorage.getItem(key);
}
