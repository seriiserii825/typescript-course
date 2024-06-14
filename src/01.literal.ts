export default {};

type TUser = {
  id: number;
  login: string;
};

type TAdmin = TUser & {
  type: "admin";
  access_level: number;
};

type TManager = TUser & {
  type: "manager";
  access_level: number;
};

type TClient = TUser & {
  type: "client";
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

if (user.type === "admin") {
    // console.log(some"some");
}
