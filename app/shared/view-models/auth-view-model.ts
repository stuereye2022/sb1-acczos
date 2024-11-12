import { Observable } from '@nativescript/core';
import { Frame } from '@nativescript/core';

export class AuthViewModel extends Observable {
    private _email: string = "";
    private _password: string = "";

    constructor() {
        super();
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        if (this._email !== value) {
            this._email = value;
            this.notifyPropertyChange('email', value);
        }
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        if (this._password !== value) {
            this._password = value;
            this.notifyPropertyChange('password', value);
        }
    }

    onLogin() {
        // Implement login logic here
        Frame.topmost().navigate("pages/home/home-page");
    }

    onRegister() {
        Frame.topmost().navigate("pages/auth/register-page");
    }
}