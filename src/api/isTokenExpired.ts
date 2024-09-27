import { jwtDecode } from "jwt-decode";

const isTokenExpired = (token: string | null) => {
  if (!token) return true;
  try {
    const decodedToken = jwtDecode<{ exp: number }>(token);
    return decodedToken.exp * 1000 < Date.now();
  } catch (error) {
    console.error("Token decoding error:", error);
    return true;
  }
};

export { isTokenExpired };
