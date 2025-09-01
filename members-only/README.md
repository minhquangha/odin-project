# Members Messages App

Ứng dụng web nhỏ xây dựng bằng **Express.js** với xác thực bằng **Passport.js**.
Mỗi thành viên có thể đăng ký, đăng nhập và tạo message. Người chưa đăng nhập chỉ xem được nội dung message nhưng không thấy tên tác giả.

---

## 🚀 Công nghệ sử dụng

- **Node.js + Express.js**: Xây dựng server và định nghĩa routes.
- **EJS (Embedded JavaScript Templates)**: Render giao diện phía server.
- **PostgreSQL**: Lưu trữ dữ liệu (members, messages).
- **Passport.js** (Local Strategy):
  - `passport.use(new LocalStrategy(...))`: Xác thực username/password.
  - `passport.serializeUser` / `passport.deserializeUser`: Quản lý session user.
- **express-session**: Lưu trữ session cho client.
- **connect-flash**: Hiển thị thông báo lỗi đăng nhập.
- **express-validator**: Validate dữ liệu (email, password).
- **bcrypt**: Hash và verify mật khẩu.

---

## 🗂 Cấu trúc bảng Database

### Bảng `members`
| id (PK) | username (email) | password (hash) | fullname |
|---------|------------------|-----------------|----------|

### Bảng `messages`
| id (PK) | member_id (FK → members.id) | content | created_at |

---

## 🔑 Luồng xác thực (Authentication Flow)

1. **Signup**
   - Người dùng gửi `POST /signup`.
   - Server validate input.
   - Hash mật khẩu bằng `bcrypt` và lưu vào `members`.

2. **Login**
   - Người dùng gửi `POST /login`.
   - `passport.authenticate('local')` kiểm tra:
     - Username có tồn tại không?
     - Mật khẩu nhập có khớp với hash trong DB không?
   - Nếu đúng → tạo session, lưu `req.user`.

3. **Session**
   - Sau khi login, thông tin user được lưu vào session.
   - Ở mỗi request tiếp theo:
     - `deserializeUser` lấy dữ liệu từ session → gắn vào `req.user`.

4. **Middleware bảo vệ route**
   - `ensureAuthenticated` kiểm tra `req.isAuthenticated()`.
   - Nếu chưa login → redirect `/login`.

---

## 💬 Luồng Messages

1. **Xem toàn bộ message**
   - Route: `GET /home`
   - Controller gọi `getMessages()` từ DB.
   - Render `home.ejs`:
     - Nếu có `req.user` → hiển thị fullname tác giả.
     - Nếu chưa login → hiển thị `Anonymous`.

2. **Tạo message**
   - Route: `GET /home/create` → render form.
   - Route: `POST /home/create`
     - Middleware `ensureAuthenticated` kiểm tra login.
     - Lấy `req.user.id` làm `member_id`.
     - Lưu message vào DB.

---

## 📑 Ví dụ code quan trọng

### Middleware `ensureAuthenticated`
```js
function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}
