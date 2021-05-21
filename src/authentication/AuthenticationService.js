/// klasa sluzaca do logowania i pobierania informacji o logowaniu
class AuthenticationService {
    // stworzenie sesji logowania
    loginSuccessful(username, userId, role) {
        sessionStorage.setItem('user', username);
        sessionStorage.setItem('userId', userId)
        sessionStorage.setItem('role', role)
    }

    // usuniecie sesji logowania
    logout() {
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('userId')
        sessionStorage.removeItem('token')
        window.accessToken = ''
    }

    // pobranie informacji czy uzytkownik jest zalogowany
    isUserLoggedIn() {
        let user = sessionStorage.getItem('user');
        let userId = sessionStorage.getItem('userId');
        let role = sessionStorage.getItem('role');
        return user !== null && userId !== null && role !== null
    }

    isAdminLoggedIn() {
        let user = sessionStorage.getItem('user');
        let userId = sessionStorage.getItem('userId');
        let role = sessionStorage.getItem('role');
        return user !== null && userId !== null && role === 'admin';
    }
}

export default new AuthenticationService();
