import { OptionDeployBe } from "@type/optionDeployBe";
import { authFetch } from "@utils/authFetch";
import http from "@utils/http";

// Đồng bộ môi trường với http.ts
// const BASE_URL = OptionDeployBe.DEPLOY_LOCAL;
const BASE_URL = OptionDeployBe.DEPLOY_DEPLOY;

export const login = (email: string, password: string) => {
  return http.post(`/api/auth/login`, { email, password });
};

export const logout = async () => {
  const res = await authFetch(`${BASE_URL}api/auth/logout`, { method: "POST" });
  return res.json();
};

export const register = (email: string, full_name: string, password: string) =>
  http.post(`api/auth/register`, { email, full_name, password });

export const refreshTokenApi = (refreshToken: string) =>
  http.post("api/auth/refreshToken", { refreshToken });

// Lấy tất cả user (admin?)
export const getAllAllUser = async () => {
  const res = await authFetch(`${BASE_URL}api/auth/getAll`);
  return res.json();
};

// Lấy tất cả user bình thường
export const getAllUser = async () => {
  const res = await authFetch(`${BASE_URL}api/user/listUser`, {
    method: "GET",
  });
  return res.json();
};

// Lấy thông tin user đang đăng nhập
export const getUserLogin = async () => {
  const res = await authFetch(`${BASE_URL}api/auth/profile`, {
    method: "GET",
  });
  return res.json();
};

// Lấy danh sách bạn bè
export const getAllFriend = async () => {
  const res = await authFetch(`${BASE_URL}api/user/listFriends`, {
    method: "GET",
  });
  return res.json();
};

// lấy đoạn chat
export const getListMessage = async () => {
  const res = await authFetch(`${BASE_URL}api/user/listMessageByUser`, {
    method: "GET",
  });
  return res.json();
};

// Gửi yêu cầu kết bạn
export const friendRequestApi = async (id: string) => {
  const res = await authFetch(`${BASE_URL}api/user/sendFriend/${id}`, {
    method: "POST",
  });
  return res.json();
};

// Chấp nhận lời mời kết bạn
export const acceptFriendRequestApi = async (id: string) => {
  const res = await authFetch(
    `${BASE_URL}api/user/accept-friend-request/${id}/accept`,
    {
      method: "PUT",
    }
  );
  return res.json();
};

// Từ chối lời mời kết bạn
export const rejectFriendRequestApi = async (id: string) => {
  const res = await authFetch(
    `${BASE_URL}api/user/reject-friend-request/${id}`,
    {
      method: "PUT",
    }
  );
  return res.json();
};

// Danh sách lời mời kết bạn
export const allFriendRequest = async () => {
  const res = await authFetch(`${BASE_URL}api/user/friend-requests`);
  return res.json();
};

// Hủy kết bạn
export const cancelFriendApi = async (id: string) => {
  const res = await authFetch(`${BASE_URL}api/user/cancelFriend/${id}`, {
    method: "POST",
  });
  return res.json();
};

// Xác minh token người dùng
// export const verifyTK = async () => {
//   const res = await authFetch(`${BASE_URL}api/auth/me`);
//   return res.json();
// };
