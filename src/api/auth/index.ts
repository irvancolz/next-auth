import { api } from "..";

async function login(data: any) {
  const res = await api.post("/auth/login", data);
  return res;
}

const authApi = {
  login,
};

export default authApi;
