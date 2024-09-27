import { http } from "./_apiService";
import { ApiError } from "./_types";
import { useMutation, useQuery } from "react-query";
import { AuthPayload, UserLoginI } from "../types/auth.types";

export const useLoginUser = () =>
  useMutation<AuthPayload, ApiError, UserLoginI>(async (data: UserLoginI) => {
    const response = await http.post("/auth/login", data);
    return response.data;
  });
