-- Database Schema for MEDITECH Website
-- Generated on 2026-01-25

SET NAMES utf8mb4;

-- --------------------------------------------------------
-- Table structure for table `doctors`
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `doctors` (
  `id` varchar(50) NOT NULL,
  `name` varchar(255) NOT NULL,
  `role` varchar(255) DEFAULT NULL,
  `image` text,
  `experience` varchar(100) DEFAULT NULL,
  `specialty` varchar(100) DEFAULT NULL,
  `description` text,
  `qualifications` text, -- Stored as JSON or comma-separated
  `certificates` text, -- Stored as JSON or comma-separated
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table `doctors`
INSERT INTO `doctors` (`id`, `name`, `role`, `image`, `experience`, `specialty`, `description`, `qualifications`, `certificates`) VALUES
('dr-dung', 'BS. Tuệ Linh', 'Giám đốc chuyên môn', 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTq53YoRuhq7-Sobqq89y_cKY4YHrFSffggipJ94fRkGVQ9NorcBzdKYLL6l6KDJSESgQfp4CyZNYLZs3n2iUU5X6c_S6VZt2rpO3g-rEGP6NvyXSxw6jFcD1hi6fESiYO6Weam1a3YjKSHA9Hiz2VEsMkMNF05_pLJU0GmjeRW1nZQtwPAZtD89s1GzQxRb0yFECEFr5BNrFUW_1BreDQAvZatHeuEdc4gl32xbGgTPOJV126vTmsinEgiuVE0rtk-YnvUwkn3Q', '20', 'all', 'Chuyên gia hàng đầu về Phẫu thuật Tạo hình với tư duy thẩm mỹ tinh tế và đôi bàn tay vàng.', '["Tiến sĩ Y khoa - Đại học Y Hà Nội", "Tu nghiệp Phẫu thuật Tạo hình tại Bệnh viện Foch (Pháp)"]', '["Chứng chỉ hành nghề khám chữa bệnh chuyên khoa PTTM", "Thành viên Hội Phẫu thuật Tạo hình Thẩm mỹ Quốc tế (ISAPS)"]'),
('dr-hoang', 'BS. Trần Hoàng', 'Trưởng khoa Tiểu phẫu', 'https://lh3.googleusercontent.com/aida-public/AB6AXuC44iNLDBoVx_SSCakXnif0KzO2AihrBEI-BcuFIv4_XE9o5vnKHzcQIt6skZtKEyzFzQQjC5zE6-eX65TGbKepGqf47hpL9GNxhCo-Q_lmloKXI_szN4KOQfzawGPoYpE0ZbbHPOsHjDQwLrsSHm7qL8EJfJDJ8t2O4CwWNJAskiAS6iwvbpP7LFZoMXbJXmDFESLoYNKP8HxUWWcSOZn-LmHJkwAb4uqcp5-M8vD71-LvI6115yJo7GaaXfaOIzCbYJlZO7BPHg', '12', 'tieu-phau', 'Chuyên sâu về các thủ thuật tiểu phẫu vùng mặt, mang lại vẻ đẹp tự nhiên hài hòa.', '["Thạc sĩ Bác sĩ Nội trú - Đại học Y Dược TP.HCM"]', '["Chứng chỉ Laser thẩm mỹ", "Chứng chỉ Tiêm chất làm đầy (Filler/Botox)"]'),
('dr-lan-anh', 'BS. Vũ Lan Anh', 'Bác sĩ Da liễu & Nội khoa', 'https://lh3.googleusercontent.com/aida-public/AB6AXuBT0y2Pb0pw0Zzb5RQzdUirmvXQ5YjcNmiczeoiP9zQJ5KncrCMsoxmu0W9nqQLqWErNuh2U8u9oehiS_DHSkIGsv3p3OenHDZqvn_5FVSo0-FBygfgcNAxOY7qmyPohIjZnWrB6lmnzWrxnlyagcC3F0ZcVuuTNcJt_96mhd65If8Vz-rwXUjQZfUobcrHJVNKkeBfc3mZNtbE4cufCVyQv4HvytBx7hduDV6Myqw66-2EC5rk3r0EFWbkuQ7899r-sE_ahZsZHA', '10', 'da-lieu', 'Tận tâm và tỉ mỉ trong từng liệu trình chăm sóc, điều trị da công nghệ cao.', '["Bác sĩ Chuyên khoa I Da liễu"]', '["Chứng chỉ Ứng dụng Laser và Ánh sáng trong Da liễu", "Chứng chỉ Căng chỉ thẩm mỹ"]'),
('dr-a', 'ThS. BS. Nguyễn Văn A', 'Trưởng khoa Da liễu', 'https://lh3.googleusercontent.com/aida-public/AB6AXuDifydABd6Sm3BuycinN2xhUwD7oorMuxQyiIArw7NXIIXhZlvb91DYPZ_fEEFVjvA_OmcEfhgqW82NJ3G3wrlkL5RccdCdvv-DZkL2uEqwRQ14JlPoexNZSRLTu23-MJ7LVB5g1eumQiJamX-jxedpnsmT1YoyX-YCQDMh8by-kMHNM8E3Xkr707W9yTo_SaGPvBAjf5imlz4dOlHcWOYdTmXaMRWczIhDt_bAfVOTwCZvRm9flvty2nryBTiaDpaSzMpm4qi8YA', '15 năm kinh nghiệm', 'Chuyên gia Da liễu & Laser Thẩm mỹ', NULL, '[]', '[]'),
('dr-b', 'BS. CKII. Trần Thị B', 'Chuyên gia Trẻ hóa', 'https://lh3.googleusercontent.com/aida-public/AB6AXuDe8NW9ZtesZOFQxS2g1DJq4y0zwZuqnNKa9T_-qVmLp9_QgdW5tirwmzoFr6_J5MVc--Kiu-KNyTFENW0xePriDHQOIcD-FRHNw3keb7COcGI5VTKV_OqG03F3vVK1JhR2OuZfLGYDges7olCsNWQ04rjmbbxVioJxmMdU4mMy28FyoehytwuVjaWDR0dd5mG4xWTfe0cdmDM-WrieOT-_dHv3ncWje1sGcLmnM83Q9fTeewGSQph4SCtxJhOj4VsbVvixDH9vBg', '20 năm kinh nghiệm', 'Nâng cơ & Trẻ hóa công nghệ cao', NULL, '[]', '[]'),
('dr-c', 'BS. Lê Hoàng C', 'Thẩm mỹ ngoại khoa', 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMH1jaSop956a-z2I46g20q08I76Of5gacuArNR-sXQM87oBzH2m0ya6VnA7-9J7bgGPh5PZ13Ps2i8uB3pasmvy3xUihi7zU2VXDJc4hsJUYxMbs5E1JGYmHGCaAehOqBYpD-CfjxWDvxohtXdGdeJLyBg6DH3b68AZJ0Hm0vF_wqsZRHhkimWb6-T4MzUV7J85KTSPOCA9ZKJ50z89wA5wp7eProdbe5CoWIpyhG-ncDVie7TuXXecqXfZQoNqxqU8vgXxDxWg', '12 năm kinh nghiệm', 'Phẫu thuật tạo hình thẩm mỹ', NULL, '[]', '[]');


-- --------------------------------------------------------
-- Table structure for table `services`
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `services` (
  `id` varchar(50) NOT NULL,
  `slug` varchar(100) NOT NULL,
  `type` varchar(50) NOT NULL,
  `category` varchar(50) NOT NULL,
  `name` varchar(255) NOT NULL,
  `short_desc` text,
  `cost` varchar(255) DEFAULT NULL,
  `recovery_time` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table `services`
INSERT INTO `services` (`id`, `slug`, `type`, `category`, `name`, `short_desc`, `cost`, `recovery_time`) VALUES
('cat-mi', 'cat-mi', 'tieu-phau', 'Mắt', 'Cắt Mí Eye-Lift', 'Kiến tạo nếp mí rõ nét, tự nhiên, loại bỏ da dư mỡ thừa giúp đôi mắt to tròn, linh hoạt.', '8.000.000đ - 15.000.000đ', '5 - 7 ngày cắt chỉ.'),
('nhan-mi', 'nhan-mi', 'tieu-phau', 'Mắt', 'Nhấn Mí', 'Tạo nếp mí không phẫu thuật, thời gian hồi phục nhanh.', '5.000.000đ - 8.000.000đ', '3 - 5 ngày.'),
('lay-mo-mi', 'lay-mo-mi', 'tieu-phau', 'Mắt', 'Lấy Mỡ Mí', 'Loại bỏ bọng mỡ mắt dưới hoặc trên, trẻ hóa đôi mắt.', 'Cam kết chi phí hợp lý.', '5 - 7 ngày.'),
('nang-mui-khong-phau-thuat', 'nang-mui-khong-phau-thuat', 'tieu-phau', 'Mũi', 'Nâng Mũi Không Phẫu Thuật', 'Nâng cao sống mũi bằng chỉ hoặc filler, hiệu quả tức thì.', 'Liên hệ.', '1 - 2 ngày.'),
('tiem-filler-botox', 'tiem-filler-botox', 'tieu-phau', 'Thẩm mỹ nội khoa', 'Tiêm Filler - Botox', 'Làm đầy, xóa nhăn, thon gọn hàm không phẫu thuật.', 'Theo cc.', 'Ngay lập tức.'),
('cay-mo-tu-than', 'cay-mo-tu-than', 'tieu-phau', 'Trẻ hóa', 'Cấy Mỡ Tự Thân', 'Làm đầy thái dương, má hóp, rãnh cười bằng mỡ tự thân.', 'Liên hệ.', '5 - 7 ngày.'),
('thu-gon-moi', 'thu-gon-moi', 'tieu-phau', 'Môi', 'Thu Gọn Môi', 'Tạo hình môi trái tim, thu mỏng môi dày.', 'Liên hệ.', '7 ngày.'),
('tri-seo', 'tri-seo', 'tieu-phau', 'Da', 'Điều Trị Sẹo', 'Xóa sẹo rỗ, sẹo lồi, sẹo xấu bằng công nghệ cao.', 'Liên hệ.', 'Tùy tình trạng.'),
('nang-mui-cau-truc', 'nang-mui-cau-truc', 'dai-phau', 'Mũi', 'Nâng Mũi Cấu Trúc', 'Tái cấu trúc toàn diện dáng mũi, khắc phục mọi khuyết điểm.', NULL, '10 ngày cắt chỉ.'),
('got-ham-ha-go-ma', 'got-ham-ha-go-ma', 'dai-phau', 'Hàm mặt', 'Gọt Hàm - Hạ Gò Má', 'Tạo mặt V-line thon gọn, hài hòa, hạ gò má cao.', NULL, '2 - 4 tuần.'),
('don-cam', 'don-cam', 'dai-phau', 'Hàm mặt', 'Độn Cằm V-Line', 'Khắc phục cằm lẹm, cằm ngắn, tạo dáng cằm V-line.', NULL, '7 ngày.'),
('phau-thuat-ham', 'phau-thuat-ham', 'dai-phau', 'Hàm mặt', 'Phẫu Thuật Hàm Hô/Móm', 'Chỉnh hàm hô, móm, sai khớp cắn.', NULL, '4 - 6 tuần.'),
('nang-nguc', 'nang-nguc', 'dai-phau', 'Ngực', 'Nâng Ngực Nội Soi', 'Vòng 1 căng tròn, quyến rũ với kỹ thuật nội soi an toàn.', NULL, '1 tháng.'),
('hut-mo-tao-hinh', 'hut-mo-tao-hinh', 'dai-phau', 'Body', 'Hút Mỡ Tạo Hình', 'Hút mỡ bụng, đùi, bắp tay, tạo đường cong cơ thể.', NULL, '3 - 5 ngày.'),
('cang-da-mat-co', 'cang-da-mat-co', 'dai-phau', 'Trẻ hóa', 'Căng Da Mặt / Cổ', 'Xóa nhăn, nâng cơ, trẻ hóa 10 tuổi.', NULL, '2 tuần.'),
('tao-hinh-thanh-bung', 'tao-hinh-thanh-bung', 'dai-phau', 'Body', 'Tạo Hình Thành Bụng', 'Cắt bỏ da chùng, xử lý sổ cơ bụng sau sinh.', NULL, '1 tháng.');


-- --------------------------------------------------------
-- Table structure for table `promotions`
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `promotions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `discount` varchar(50) DEFAULT NULL,
  `expiry` varchar(50) DEFAULT NULL,
  `image` text,
  `tags` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table `promotions`
INSERT INTO `promotions` (`id`, `title`, `discount`, `expiry`, `tags`) VALUES
(1, 'Giảm mỡ đón hè với ưu đãi 50% dành riêng cho phác đồ Slim Fit Promax AI', '50%', '31/03/2025', '["Giảm mỡ", "Slim Fit", "Ưu đãi 50%"]'),
(2, 'Ưu đãi 50% Phác đồ kiến tạo gương mặt hoàn hảo từ Meditech Premium', '50%', '31/03/2025', '["Ưu đãi 50%", "Gương mặt hoàn hảo"]'),
(3, 'Rước vía Thần Tài - Đón lộc Meditech: Ưu đãi đặc biệt duy nhất ngày mùng 10 Tết', 'Hot Deal', 'Mùng 10 Tết', '["Săn deal mới", "Lộc thần tài"]'),
(4, 'Ưu đãi lớn nhất năm: Sở hữu vẻ đẹp hoàn mỹ cùng top dịch vụ đẳng cấp', '9 Suất', 'Đăng ký ngay', '["Ưu đãi kết năm", "Giới hạn"]'),
(5, 'Ưu đãi 68% săn chắc, trẻ hóa body toàn diện với liệu pháp Morpheus8', '68%', '28/02/2025', '["Ưu đãi 68%", "Morpheus8"]'),
(6, 'Ưu đãi 73% căng bóng, trẻ hóa da toàn diện với Meso không kim', '73%', '28/02/2025', '["Ưu đãi 73%", "Meso không kim"]');


-- --------------------------------------------------------
-- Table structure for table `news`
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `news` (
  `id` varchar(50) NOT NULL,
  `title` varchar(255) NOT NULL,
  `category` varchar(100) DEFAULT NULL,
  `date` varchar(50) DEFAULT NULL,
  `slug` varchar(255) NOT NULL,
  `image` text,
  `description` text,
  `content` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table `news`
INSERT INTO `news` (`id`, `title`, `category`, `date`, `slug`) VALUES
('1', 'Cách chăm sóc da sau liệu trình Laser hiệu quả', 'Chăm sóc da', '28 Tháng 11, 2023', 'cach-cham-soc-da-sau-laser'),
('2', 'Xu hướng nâng cơ không phẫu thuật năm 2024', 'Công nghệ mới', '25 Tháng 11, 2023', 'xu-huong-nang-co-2024'),
('3', 'Tại sao trẻ hóa da Multi-layer lại được ưa chuộng?', 'Kiến thức thẩm mỹ', '20 Tháng 11, 2023', 'tre-hoa-da-multi-layer'),
('4', 'Phân biệt các loại filler trên thị trường hiện nay', 'Kiến thức thẩm mỹ', '15 Tháng 11, 2023', 'phan-biet-cac-loai-filler'),
('5', 'Bí quyết giữ dáng thon gọn cho dân văn phòng', 'Làm đẹp', '10 Tháng 11, 2023', 'bi-quyet-giu-dang'),
('6', 'Quy trình chăm sóc da chuẩn y khoa tại nhà', 'Chăm sóc da', '05 Tháng 11, 2023', 'cham-soc-da-chuan-y-khoa');


-- --------------------------------------------------------
-- Table structure for table `testimonials`
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `testimonials` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `service` varchar(255) DEFAULT NULL,
  `content` text,
  `avatar` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table `testimonials`
INSERT INTO `testimonials` (`name`, `service`, `content`, `avatar`) VALUES
('Chị Minh Anh', 'Nâng mũi cấu trúc', 'Mình rất sợ đau nhưng bác sĩ làm rất nhẹ nhàng. Sau 1 tháng mũi đã gom form rất đẹp, tự nhiên, ai cũng khen.', '/image/hinhanhtt1.jpg'),
('Bạn Ngọc Diệp', 'Cắt mí Eye-lift', 'Mắt mình trước đây một mí, nhìn lờ đờ. Giờ cắt xong mắt to tròn, long lanh hơn hẳn. Cảm ơn bác sĩ nhiều lắm!', '/image/hinhanhtt2.jpg'),
('Cô Thanh Mai', 'Căng chỉ Collagen', 'Ở tuổi 50 cô không nghĩ mình có thể trẻ lại như thế này. Da căng bóng, nếp nhăn giảm hẳn. Dịch vụ rất chuyên nghiệp.', '/image/hinhanhtt3.jpg');


-- --------------------------------------------------------
-- Table structure for table `faqs`
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `faqs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(255) NOT NULL,
  `question` text NOT NULL,
  `answer` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table `faqs`
INSERT INTO `faqs` (`category`, `question`, `answer`) VALUES
('An Toàn Y Khoa', 'Quy trình phẫu thuật có đảm bảo vô trùng không?', 'Toàn bộ quy trình được thực hiện trong phòng mổ áp lực dương vô khuẩn một chiều, đảm bảo tiêu chuẩn khắt khe của Bộ Y tế.'),
('An Toàn Y Khoa', 'Gây tê/Gây mê có an toàn không?', 'Chúng tôi có ekip bác sĩ gây mê hồi sức chuyên nghiệp, khách hàng được khám sức khỏe tổng quát kỹ lưỡng trước khi thực hiện để loại trừ mọi rủi ro.'),
('An Toàn Y Khoa', 'Vật liệu sử dụng có nguồn gốc rõ ràng không?', '100% sụn nâng, túi ngực, filler, botox... đều là hàng chính hãng, có tem mác và check code trực tiếp trước khi sử dụng.'),
('Hồi Phục & Chăm Sóc', 'Thời gian hồi phục sau phẫu thuật là bao lâu?', 'Tùy dịch vụ: Tiểu phẫu (mắt, mũi) thường 5-7 ngày cắt chỉ. Đại phẫu (ngực, bụng) cần nghỉ dưỡng 1-2 ngày tại viện và hồi phục trong 2-4 tuần.'),
('Hồi Phục & Chăm Sóc', 'Cần kiêng khen gì sau phẫu thuật?', 'Cần kiêng đồ nếp, rau muống, thịt bò, hải sản trong 1 tháng đầu. Hạn chế vận động mạnh và tuân thủ lịch uống thuốc của bác sĩ.'),
('Độ Bền Kết Quả', 'Nâng mũi/Nâng ngực có được vĩnh viễn không?', 'Với kỹ thuật can thiệp cấu trúc và vật liệu cao cấp, kết quả có thể duy trì ổn định lâu dài (trên 10-20 năm hoặc vĩnh viễn tùy cơ địa).'),
('Độ Bền Kết Quả', 'Cắt mí sau này có bị sụp lại không?', 'Cắt mí loại bỏ da dư mỡ thừa triệt để, nếp mí giữ được rất lâu. Tuy nhiên theo lão hóa tự nhiên, da có thể chùng lại sau nhiều năm.'),
('Bảo Hành & Chỉnh Sửa', 'Chính sách bảo hành của Meditech như thế nào?', 'Chúng tôi bảo hành sụn/vật liệu trọn đời và bảo hành kết quả thẩm mỹ theo từng dịch vụ cụ thể (có thẻ bảo hành rõ ràng).'),
('Bảo Hành & Chỉnh Sửa', 'Nếu kết quả không ưng ý có được sửa lại không?', 'Nếu lỗi do kỹ thuật hoặc không đúng cam kết ban đầu, Meditech chịu trách nhiệm chỉnh sửa miễn phí cho khách hàng.');
