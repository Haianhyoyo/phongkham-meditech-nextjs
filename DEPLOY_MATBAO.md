# Hướng Dẫn Đẩy Code Lên Hosting Mắt Bão (Có Admin + Database)

Để trang Admin và Đăng nhập hoạt động, bạn cần deploy chạy **Node.js**.
Cấu trúc Database hiện tại là **SQLite** (lưu trong 1 file `dev.db`), rất tiện lợi vì bạn chỉ cần upload file này lên là chạy, không cần cài đặt MySQL rườm rà.

---

## Bước 1: Chuẩn Bị File (Build Code)

1.  Mở Terminal và chạy lệnh build:
    ```bash
    npm run build
    ```
2.  Sau khi chạy xong, trong thư mục dự án sẽ có folder `.next`.

## Bước 2: Đóng Gói File Để Gửi/Upload

Bạn cần gom các thư mục sau vào **1 file ZIP** để gửi cho kỹ thuật Mắt Bão hoặc tự upload:

1.  Truy cập vào folder dự án `.next/standalone`.
    *   *Lưu ý: Nếu không thấy folder `standalone`, hãy báo tôi để kiểm tra lại cấu hình.*
2.  **Copy** folder `public` (ở ngoài cùng dự án) -> **Paste** vào trong `.next/standalone`.
3.  **Copy** folder `.next/static` -> **Paste** vào trong `.next/standalone/.next/static`.
    *   *(Bạn cần tạo folder `.next` trong `standalone` nếu chưa có, rồi paste `static` vào đó)*
4.  **Copy** file `prisma/dev.db` -> **Paste** vào trong `.next/standalone/prisma/dev.db`.
    *   *Đây là file chứa tài khoản Admin `admin@meditech.com`. Bắt buộc phải có.*

**Kết quả cuối cùng:** Folder `standalone` của bạn phải có cấu trúc như sau:
```
standalone/
├── .next/
│   ├── static/    <-- (Copy từ .next/static gốc)
│   └── ...
├── public/        <-- (Copy từ public gốc)
├── prisma/
│   └── dev.db     <-- (FILE DATABASE QUAN TRỌNG)
├── server.js
└── package.json
```

**Nén folder `standalone` này thành file `.zip`.**

---

## Bước 3: Cấu Hình Trên Mắt Bão (Node.js)

Gửi file Zip đó cho kỹ thuật Mắt Bão hoặc tự làm:

1.  Vào cPanel -> **Setup Node.js App**.
2.  Tạo App mới:
    *   **Node.js Version**: Chọn bản 18 hoặc 20.
    *   **App Mode**: Production.
    *   **App Root**: `/home/domain/public_html` (hoặc đường dẫn bạn muốn).
    *   **Application URL**: Tên miền web.
    *   **Application Startup File**: `server.js`
3.  Upload và giải nén file Zip vào thư mục App Root.
4.  Bấm **Start App**.

---

## Giải đáp câu hỏi về Database
> "có cần gửi database cho họ không bạn"

**CÓ.**
Vì mình đang dùng SQLite, **Database chính là file `dev.db`**.
Bạn **phải gửi kèm file này** (như hướng dẫn ở Bước 2) thì lên đó mới đăng nhập được bằng tài khoản Admin hiện tại.
