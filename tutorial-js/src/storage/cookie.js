document.cookie;

const expiresTime = new Date(0).toUTCString();
document.cookie = `testUid=test;path=/;expires=${expiresTime}`;
