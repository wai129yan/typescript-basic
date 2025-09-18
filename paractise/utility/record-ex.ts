//Key တွေကို T type အဖြစ် assign လုပ်တယ်

type UserRoles = 'admin' | 'user' | 'guest';
type UserA = Record<UserRoles, string | number>;

const test:UserA = {
    admin:"admin",
    user:"user",
    guest:"guest"
    // guest:false
}

console.log("UserA",test);

console.log("*****************");

type UserStatus = 'active' | 'inactive';
type UserB = Record<UserRoles , UserStatus>;

const UserC:UserB = {
    admin:"active",
    user:"inactive",
    guest:"active",
}

console.log(UserC);




console.log("*****************");

type Language = 'en' | 'jp' | 'mm';

type Translations = Record<Language,string>;

const greeting: Translations = {
    en:"Hello",
    jp:"こんにちは！",
    mm: "Phon shuu Lite",
    // mm:69,
}
console.log(greeting);