import Deso from "deso-protocol";

const deso = new Deso();

const isAuthenticated = () => {
  const token = localStorage.getItem("login_key");

  return token || false;
};

const login = async (accessLevel) => {
  const login = await deso.identity.login(accessLevel);
  localStorage.setItem("key", login.key);

  return login.key;
};

const logout = async () => {
  const token = localStorage.removeItem("login_key");

  if (!token) {
    return true;
  }

  return await deso.identity.logout(token);
};

export { isAuthenticated, login, logout };
