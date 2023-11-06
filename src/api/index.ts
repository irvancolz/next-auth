import axios, { AxiosRequestConfig, AxiosInstance } from "axios";
import { getSession, useSession } from "next-auth/react";

let baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;
let refactorURL = process.env.NEXT_PUBLIC_BACKEND_URL_REFACTOR;

export const APIAxiosInstance = axios.create({
  baseURL: baseURL,
  // withCredentials: true,
  timeout: 1000 * 60,
});

export const APIAxiosInstanceRefactor = axios.create({
  baseURL: refactorURL,
  // withCredentials: true,
  timeout: 1000 * 60,
});

//Get Access Token
export const getAccessToken = async () => {
  try {
    const data = await getSession();
    return data?.accessToken;
  } catch (error) {
    console.log("error cannot get access token");
  }
  return "";
};

//Create Authorization Headers
export const createAuthorizationHeaders = async (token: string) => {
  return { Authorization: `${token}` };
};

const createApi = (axiosInstance: AxiosInstance) => {
  return {
    // get: async (url, params, string) => {
    //   const token = await getAccessToken();
    //   const headers = await createAuthorizationHeaders(token);
    //   const response = await axiosInstance.get(url, {
    //     headers,
    //     params,
    //     paramsSerializer: {
    //       serialize: (params) => {
    //         return queryString.stringify(params, {
    //           arrayFormat: string ? string : "comma",
    //           encode: false,
    //         });
    //       },
    //     },
    //   });
    //   return {
    //     result: response.data,
    //     status: response.status,
    //     statusText: response.statusText,
    //     headers: response.headers,
    //   };
    // },
    post: async (url: string, data: any, config: any = {}) => {
      //   const token = await getAccessToken();
      //   const authorizationHeaders = await createAuthorizationHeaders(token);
      const headers = {
        // ...authorizationHeaders,
        ...config?.headers,
      };
      const newConfig = {
        ...config,
        headers,
      };
      const response = await axiosInstance.post(url, data, newConfig);
      return {
        result: response.data,
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
      };
    },
    //     put: async (url, data) => {
    //       const token = await getAccessToken();
    //       const headers = await createAuthorizationHeaders(token);

    //       const response = await axiosInstance.put(url, data, {
    //         headers,
    //       });
    //       return {
    //         result: response.data,
    //         status: response.status,
    //         statusText: response.statusText,
    //         headers: response.headers,
    //       };
    //     },
    //     delete: async (url, params) => {
    //       const token = await getAccessToken();
    //       const headers = await createAuthorizationHeaders(token);

    //       const response = await axiosInstance.delete(url, {
    //         headers,
    //         params,
    //       });
    //       return {
    //         result: response.data,
    //         status: response.status,
    //         statusText: response.statusText,
    //         headers: response.headers,
    //       };
    //     },
    //     deleteById: async (url, id) => {
    //       const token = await getAccessToken();
    //       const headers = await createAuthorizationHeaders(token);

    //       const response = await axiosInstance.delete(url, {
    //         headers,
    //         data: id,
    //       });
    //       return {
    //         result: response.data,
    //         status: response.status,
    //         statusText: response.statusText,
    //         headers: response.headers,
    //       };
    //     },
  };
};

export const api = createApi(APIAxiosInstance);
export const apiRefactor = createApi(APIAxiosInstanceRefactor);
