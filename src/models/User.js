class User {
    constructor(nickname, email, password) {
        this.id
        this.nickname = nickname;
        this.email = email;
        this.password = password;
    }
}

export default User;


let user1 = new User('test', 'test@test.test', 'test');
let user2 = new User('user', 'user@user.user', 'user');
let users = [user1, user2];
export {users};