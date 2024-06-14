export default {};

type TAdmin = {
  type: "admin";
  id: number;
  login: string;
  access_level: number;
};

type TManager = {
  type: "manager";
  id: number;
  login: string;
  access_level: number;
};

type TClient = {
  type: "client";
  id: number;
  login: string;
};

function loadUser(): TAdmin | TManager | TClient {
  return {
    type: "admin",
    id: 1,
    login: "admin",
    access_level: 1,
  };
}

const user = loadUser();

if (user.type === 'admin') {

}
