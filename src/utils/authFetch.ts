import { refreshTokenApi } from "@apis/auth";

// Lay token
const getToken = (key: string): string | null => {
  return localStorage.getItem(key) || sessionStorage.getItem(key);
};

// Luu token o noi duoc tim thay
const setToken = (key: string, value: string) => {
  if (localStorage.getItem(key)) {
    localStorage.setItem(key, value);
  } else {
    sessionStorage.setItem(key, value);
  }
};

// Xoa token
const removeToken = (key: string) => {
  localStorage.removeItem(key);
  sessionStorage.removeItem(key);
};
export async function authFetch(url: string, options: RequestInit = {}) {
  // const accessToken = localStorage.getItem("accessToken");
  const accessToken = getToken("accessToken");
  const refreshToken = getToken("refreshToken");
  const isFormData = options.body instanceof FormData;

  let res = await fetch(url, {
    ...options,
    headers: {
      ...(options.headers || {}),
      Authorization: `Bearer ${accessToken}`,
      // "x-refresh-token": refreshToken || "",
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
    },
  });

  // return res;
  if (res.status === 401 || res.status === 403) {
    // const refreshToken = getToken("refreshToken");
    console.log("accessToken đã hết hạn");

    if (!refreshToken) {
      window.location.href = "/login";
      throw new Error("Không tìm thấy refresh token. Vui lòng đăng nhập lại.");
    }

    try {
      console.log("Test 1: Bắt đầu quá trình làm mới token");
      const refreshRes = await refreshTokenApi(refreshToken);
      console.log("Test 2: Phản hồi từ API làm mới", refreshRes);
      const newTokenData = refreshRes.data;
      console.log("Test 3: Dữ liệu token mới", newTokenData);

      // Lưu token mới vào đúng nơi đã lưu trước đó
      setToken("accessToken", newTokenData.accessToken);
      setToken("refreshToken", newTokenData.refreshToken);

      console.log("Token đã được làm mới", newTokenData.accessToken);

      // Gọi lại request ban đầu với token mới
      res = await fetch(url, {
        ...options,
        headers: {
          ...(options.headers || {}),
          Authorization: `Bearer ${newTokenData.accessToken}`,
          // "x-refresh-token": newTokenData.refreshToken,
          ...(isFormData ? {} : { "Content-Type": "application/json" }),
        },
      });
    } catch (err) {
      console.log("Lỗi khi làm mới token:", err);
      // Refresh token cũng hết hạn hoặc không hợp lệ
      removeToken("accessToken");
      removeToken("refreshToken");
      removeToken("user"); // Xóa cả thông tin người dùng
      window.location.href = "/login";
      throw new Error("Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.");
    }
  }

  return res;
}
