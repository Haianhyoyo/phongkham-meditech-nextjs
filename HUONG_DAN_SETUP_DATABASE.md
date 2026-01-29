# HƯỚNG DẪN SETUP DATABASE CHO HOSTING MẮT BÃO

## 📋 YÊU CẦU

Website này sử dụng **Prisma ORM** với database. Trên hosting cần có:
- Node.js (đã có)
- Database: MySQL hoặc PostgreSQL (cần khởi tạo trên hosting)

---

## 🔧 BƯỚC 1: KHỞI TẠO DATABASE TRÊN HOSTING

### Trên cPanel/Hosting Panel của Mắt Bão:

1. **Tạo database mới**:
   - Tên database: `thammy_db` (hoặc tên khác)
   - Ghi nhớ: tên database, username, password, host

2. **Lấy thông tin kết nối**:
   ```
   Host: localhost (hoặc IP server)
   Database: thammy_db
   Username: [username_của_bạn]
   Password: [password_của_bạn]
   Port: 3306 (MySQL) hoặc 5432 (PostgreSQL)
   ```

---

## 🔧 BƯỚC 2: CẬP NHẬT FILE .ENV TRÊN HOSTING

Tạo/chỉnh sửa file `.env` trong thư mục gốc của website với nội dung:

### Nếu dùng MySQL:
```env
DATABASE_URL="mysql://username:password@localhost:3306/thammy_db"
NEXTAUTH_SECRET="your-secret-key-here-change-this"
NEXTAUTH_URL="https://your-domain.com"
```

### Nếu dùng PostgreSQL:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/thammy_db"
NEXTAUTH_SECRET="your-secret-key-here-change-this"
NEXTAUTH_URL="https://your-domain.com"
```

**Lưu ý**: 
- Thay `username`, `password`, `thammy_db` bằng thông tin thực tế
- Thay `https://your-domain.com` bằng domain thật của website

---

## 🔧 BƯỚC 3: CHẠY CÁC LỆNH TRÊN HOSTING

Truy cập SSH vào hosting và chạy các lệnh sau **theo thứ tự**:

### 1. Di chuyển vào thư mục website:
```bash
cd /path/to/website
```

### 2. Cài đặt dependencies (nếu chưa):
```bash
npm install
```

### 3. Generate Prisma Client:
```bash
npx prisma generate
```

### 4. Chạy migration để tạo tables:
```bash
npx prisma migrate deploy
```

**Hoặc** nếu lệnh trên lỗi, dùng lệnh này để đồng bộ schema:
```bash
npx prisma db push
```

### 5. Build lại website:
```bash
npm run build
```

### 6. Khởi động server:
```bash
npm start
```

---

## ✅ KIỂM TRA

Sau khi hoàn thành, kiểm tra:

1. **Database có tables chưa**:
   ```bash
   npx prisma studio
   ```
   (Mở Prisma Studio để xem tables: User, Booking, Contact)

2. **Website chạy được chưa**:
   - Truy cập domain
   - Thử đăng ký tư vấn (form booking)
   - Kiểm tra data có lưu vào database không

---

## 🚨 XỬ LÝ LỖI THƯỜNG GẶP

### Lỗi: "Prisma Client did not initialize"
**Giải pháp**: Chạy lại `npx prisma generate`

### Lỗi: "Can't reach database server"
**Giải pháp**: 
- Kiểm tra lại DATABASE_URL trong file .env
- Đảm bảo database service đang chạy
- Kiểm tra firewall/port

### Lỗi: "Migration failed"
**Giải pháp**: Dùng `npx prisma db push` thay vì `migrate deploy`

---

## 📞 LIÊN HỆ

Nếu gặp vấn đề, vui lòng liên hệ:
- Số điện thoại: 0911025959
- Email: [email của bạn]

---

## 📝 GHI CHÚ KỸ THUẬT

- Website đang dùng Prisma ORM version 5.19.1
- Hỗ trợ cả MySQL và PostgreSQL
- Cần Node.js 18+ để chạy
- File schema: `prisma/schema.prisma`
