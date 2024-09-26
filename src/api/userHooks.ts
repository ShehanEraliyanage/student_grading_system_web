import { useMutation, useQuery, useQueryClient } from "react-query";
import { UserMeResponseI } from "../types/user.types";
import { http } from "./_apiService";
import { ApiError } from "./_types";

export const useGetMe = () =>
  useQuery<UserMeResponseI, ApiError>(
    "me",
    async () => {
      const response = await http.get("/user/me");
      return response.data;
    },
    {
      enabled: false,
    }
  );
