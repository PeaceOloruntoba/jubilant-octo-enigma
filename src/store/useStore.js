import { create } from "zustand";
import axiosInstance from "../utils/axiosConfig";
import { handleError } from "../utils/handleError";

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return { headers: { Authorization: `Bearer ${token}` } };
};

const getOne = async (params, set) => {
  set({ isLoading: true });
  try {
    const response = await axiosInstance.get(`/one`, getAuthHeaders());
    set({ one: response?.data?.data?.one });
    console.log(response);
  } catch (error) {
    handleError(error);
  } finally {
    set({ isLoading: false });
  }
};

const getTwo = async (params, set) => {
  set({ isLoading: true });
  try {
    const response = await axiosInstance.get(`/cake`, {
      ...getAuthHeaders(),
      params,
    });
    set({ two: response?.data?.data?.two });
  } catch (error) {
    handleError(error);
  } finally {
    set({ isLoading: false });
  }
};

const usePublicStore = create((set) => ({
  two: [],
  one: [],
  getOne: (params) => getOne(params, set),
  getTwo: (params) => getTwo(params, set),
}));

export default usePublicStore;
