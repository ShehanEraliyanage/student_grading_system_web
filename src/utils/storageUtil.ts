import { AuthPayload } from "../types/auth.types";

const AuthToken = "token";
const AuthPayloads = "authPayloads";

export const getStoredAuthToken = () => localStorage.getItem(AuthToken);

export const storeAuthToken = (token = "") => {
  localStorage.setItem(AuthToken, token);
};
export const getAuthPayloads = (): AuthPayload | null => {
  try {
    const payloads = localStorage.getItem(AuthPayloads);
    return payloads ? JSON.parse(payloads) : null;
  } catch (error) {
    return null;
  }
};

export const setAuthPayloads = (payLoads: string): void => {
  localStorage.setItem(AuthPayloads, payLoads);
};
