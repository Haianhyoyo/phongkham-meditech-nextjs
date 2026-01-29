# Hướng Dẫn Đẩy Code Lên Hosting Mắt Bão (Deploy)

Vì hosting Mắt Bão thông thường (cPanel/Plesk) chuyên chạy PHP/HTML tĩnh và không hỗ trợ chạy trực tiếp Node.js server (trừ khi dùng VPS), giải pháp tối ưu nhất là **Xuất bản Tĩnh (Static Export)**.

Tôi đã cấu hình sẵn `next.config.ts` để bạn có thể xuất ra file HTML/CSS tĩnh.

## Bước 1: Tạo Bộ Code Chạy Trên Hosting (Build)

Bạn mở Terminal trong VS Code và chạy lệnh sau (hoặc nhờ tôi chạy giúp nếu chưa chạy):

```bash
npm run build
```

**Kết quả:**
- Sau khi chạy xong, trong thư mục dự án sẽ xuất hiện một thư mục tên là **`out`**.
- Đây chính là thư mục chứa toàn bộ website của bạn (HTML, CSS, Ảnh, JS).

## Bước 2: Tải Code Lên Hosting Mắt Bão

Bạn có thể dùng **File Manager** trên trang quản trị Hosting (cPanel/Plesk) hoặc phần mềm FTP (như FileZilla).

1.  **Đăng nhập** vào quản trị Hosting Mắt Bão.
2.  Tìm đến mục **File Manager (Quản lý tập tin)**.
3.  Truy cập vào thư mục gốc của website (thường là `public_html`, `wwwroot` hoặc `httpdocs`).
4.  **Xóa hết** các file cũ/mặc định trong đó (nếu có).
5.  **Tải lên (Upload)** toàn bộ **các file và thư mục nằm BÊN TRONG thư mục `out`** mà bước 1 vừa tạo ra.
    *   *Lưu ý: Copy ruột của `out`, không copy cả folder `out`. Bạn sẽ thấy file `index.html` nằm ngay ngoài cùng thư mục `public_html`.*

## Bước 3: Kiểm Tra

Truy cập tên miền của bạn. Website sẽ hoạt động bình thường!

---

## Lưu ý Quan trọng

1.  **Form Liên hệ / Đặt lịch**: Vì là web tĩnh, code xử lý gửi mail (nếu có backend) sẽ không chạy trên hosting này. Bạn sẽ cần dùng dịch vụ bên thứ 3 (như EmailJS, Google Form) hoặc code PHP riêng để xử lý form.
2.  **Database**: File `database.sql` tôi tạo là để bạn import vào **phpMyAdmin** trên hosting để lưu trữ dữ liệu nếu sau này bạn phát triển thêm phần quản trị (Admin) bằng PHP hoặc ngôn ngữ khác kết nối vào.
