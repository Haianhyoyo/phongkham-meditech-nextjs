# HƯỚNG DẪN NHANH - SETUP DATABASE CHO MẮT BÃO

## ⚡ CÁC BƯỚC THỰC HIỆN (QUAN TRỌNG - LÀM THEO THỨ TỰ)

### BƯỚC 1: Tạo file .env trên hosting

Tạo file `.env` trong thư mục gốc website với nội dung:

```env
DATABASE_URL="mysql://username:password@localhost:3306/database_name"
NEXTAUTH_SECRET="random-secret-key-here"
NEXTAUTH_URL="https://domain-cua-ban.com"
```

**Thay thế**:
- `username` = username database của hosting
- `password` = password database của hosting  
- `database_name` = tên database đã tạo trên hosting
- `random-secret-key-here` = chuỗi bất kỳ (ví dụ: `mat-bao-secret-2026`)
- `domain-cua-ban.com` = domain thật của website

---

### BƯỚC 2: Chạy lệnh trên SSH (theo thứ tự)

```bash
# 1. Vào thư mục website
cd /path/to/website

# 2. Cài đặt packages
npm install

# 3. Generate Prisma Client (QUAN TRỌNG!)
npx prisma generate

# 4. Tạo tables trong database
npx prisma db push

# 5. Build website
npm run build

# 6. Khởi động
npm start
```

---

## ✅ KIỂM TRA

Website sẽ chạy trên port 3000 (hoặc port khác tùy cấu hình hosting).

Nếu vẫn lỗi, kiểm tra:
1. File `.env` có đúng thông tin database không?
2. Database service có đang chạy không?
3. Có lỗi gì trong log không? (xem bằng `npm start`)

---

## 🆘 LƯU Ý

- **KHÔNG** chạy `npm run build` trước khi chạy `npx prisma generate`
- **PHẢI** có file `.env` với DATABASE_URL đúng
- Nếu lỗi "Prisma Client did not initialize" → chạy lại `npx prisma generate`

---

## 📞 Liên hệ khách hàng

Số điện thoại: **0911025959**
