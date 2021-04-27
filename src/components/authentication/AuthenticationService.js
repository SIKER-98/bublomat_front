/// klasa sluzaca do logowania i pobierania informacji o logowaniu
class AuthenticationService {
    // stworzenie sesji logowania
    loginSuccessful(username, userId) {
        sessionStorage.setItem('user', username);
        sessionStorage.setItem('userId', userId)
    }

    // usuniecie sesji logowania
    logout() {
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('userId')
    }

    // pobranie informacji czy uzytkownik jest zalogowany
    isUserLoggedIn() {
        let user = sessionStorage.getItem('user');
        let userId = sessionStorage.getItem('userId');
        return user !== null && userId !== null;
    }
}

export default new AuthenticationService();