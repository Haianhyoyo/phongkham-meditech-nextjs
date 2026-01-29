export interface NewsItem {
    id: string;
    title: string;
    category: string;
    date: string;
    image: string;
    slug: string;
    description?: string;
    content?: string; // HTML content or markdown
}

export const newsData: NewsItem[] = [
    {
        id: "1",
        title: "Cách chăm sóc da sau liệu trình Laser hiệu quả",
        category: "Chăm sóc da",
        date: "28 Tháng 11, 2023",
        image: "/image/tt1.jpg",
        slug: "cach-cham-soc-da-sau-laser",
        description: "Chăm sóc da sau Laser là bước quan trọng để đảm bảo hiệu quả điều trị và tránh các tác dụng phụ không mong muốn.",
        content: `
            <p>Điều trị da bằng Laser là phương pháp thẩm mỹ hiện đại giúp giải quyết nhiều vấn đề về da như nám, tàn nhang, sẹo rỗ, lão hóa... Tuy nhiên, để đạt được kết quả tối ưu và làn da phục hồi nhanh chóng, chế độ chăm sóc da tại nhà đóng vai trò vô cùng quan trọng.</p>
            <h3>1. Làm sạch da nhẹ nhàng</h3>
            <p>Trong 3 ngày đầu sau khi bắn Laser, bạn chỉ nên rửa mặt bằng nước muối sinh lý hoặc nước đun sôi để nguội. Tránh sử dụng sữa rửa mặt có tính tẩy rửa mạnh hoặc chứa hạt scrub gây tổn thương da.</p>
            <h3>2. Dưỡng ẩm phục hồi</h3>
            <p>Làn da sau Laser thường khô và yếu, vì vậy việc cấp ẩm là rất cần thiết. Hãy sử dụng các loại kem dưỡng ẩm, serum có thành phần phục hồi như B5, Hyaluronic Acid, Ceramide... theo chỉ định của bác sĩ.</p>
            <h3>3. Chống nắng tuyệt đối</h3>
            <p>Đây là nguyên tắc "bất di bất dịch". Làn da non nớt sau Laser rất nhạy cảm với ánh nắng mặt trời. Hãy sử dụng kem chống nắng có chỉ số SPF 50+ và PA++++, đồng thời che chắn cẩn thận khi ra ngoài.</p>
            <h3>4. Chế độ ăn uống sinh hoạt</h3>
            <p>Uống nhiều nước, ăn nhiều rau xanh, trái cây. Hạn chế thực phẩm cay nóng, chất kích thích. Ngủ đủ giấc để da có thời gian tái tạo.</p>
        `
    },
    {
        id: "2",
        title: "Xu hướng nâng cơ không phẫu thuật năm 2024",
        category: "Công nghệ mới",
        date: "25 Tháng 11, 2023",
        image: "/image/tt2.jpg",
        slug: "xu-huong-nang-co-2024",
        description: "Khám phá những công nghệ nâng cơ trẻ hóa da hàng đầu hiện nay, không xâm lấn, hiệu quả tức thì.",
        content: `
            <p>Nhu cầu làm đẹp ngày càng tăng cao, đặc biệt là các phương pháp trẻ hóa không xâm lấn. Năm 2024 đánh dấu sự lên ngôi của các công nghệ nâng cơ đỉnh cao, mang lại vẻ đẹp tự nhiên mà không cần dao kéo.</p>
            <h3>1. Thermage FLX</h3>
            <p>Công nghệ sử dụng sóng vô tuyến đơn cực giúp làm săn chắc da, xóa nhăn và tăng sinh Collagen mạnh mẽ. Hiệu quả thấy rõ ngay sau khi làm và duy trì lâu dài.</p>
            <h3>2. Ultherapy</h3>
            <p>Sử dụng sóng siêu âm hội tụ vi điểm tác động sâu vào lớp cơ SMAS, giúp nâng cơ, thon gọn gương mặt và xóa nọng cằm hiệu quả.</p>
            <h3>3. Hifu LinearZ</h3>
            <p>Công nghệ Hifu thế hệ mới với tốc độ bắn nhanh hơn, ít đau hơn và hiệu quả nâng cơ vượt trội, giúp kiến tạo đường nét khuôn mặt V-line thanh thoát.</p>
        `
    },
    {
        id: "3",
        title: "Tại sao trẻ hóa da Multi-layer lại được ưa chuộng?",
        category: "Kiến thức thẩm mỹ",
        date: "20 Tháng 11, 2023",
        image: "/image/tt3.jpg",
        slug: "tre-hoa-da-multi-layer",
        description: "Phương pháp trẻ hóa đa tầng giúp giải quyết toàn diện các vấn đề lão hóa từ sâu bên trong.",
        content: `
            <p>Lão hóa da không chỉ diễn ra ở bề mặt mà còn ở các lớp sâu hơn như trung bì, hạ bì và lớp cơ. Chính vì vậy, các phương pháp tác động đơn lẻ thường khó mang lại hiệu quả toàn diện. Trẻ hóa da Multi-layer ra đời như một giải pháp đột phá.</p>
            <p>Multi-layer là sự kết hợp của nhiều công nghệ chiết tách khác nhau, tác động vào từng tầng da riêng biệt:</p>
            <ul>
                <li><strong>Lớp nông:</strong> Sử dụng Laser hoặc Peel da để loại bỏ tế bào chết, làm sáng da và thu nhỏ lỗ chân lông.</li>
                <li><strong>Lớp trung bì:</strong> Sử dụng Mesotherapy để đưa dưỡng chất vào sâu bên trong, nuôi dưỡng và tái tạo da.</li>
                <li><strong>Lớp sâu:</strong> Sử dụng các công nghệ nâng cơ như Hifu, Thermage để tác động vào lớp cơ, giúp da săn chắc, đàn hồi.</li>
            </ul>
        `
    },
    {
        id: "4",
        title: "Phân biệt các loại filler trên thị trường hiện nay",
        category: "Kiến thức thẩm mỹ",
        date: "15 Tháng 11, 2023",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5kLTt72xDKPfKm6DfSN2p2Ad1vD_Z4UQniZ3bHcDGS9FTA2jhMYvboRe8PxvhA-KL2CQBggKzplg5Kkc-6d9nYM4wUlEH7xeC3B6HcpImLPgt0gA-DVxwQHGwK-wwSI-HEhKj57bqRF-UZGrBPnfugEWqUoh-Yr9y-BhOVeEBgiDvFaF5TP_zU7DLI0FQltuLpEjDWOF9Ndp4tCXx0U2SDzNmWSfetCLY9rumrB5HwIwnN-EqmgV1pLOLVFqNW_l4n96jaY_48A",
        slug: "phan-biet-cac-loai-filler",
        description: "Hiểu rõ về các loại Filler giúp bạn lựa chọn đúng sản phẩm an toàn và phù hợp với nhu cầu làm đẹp.",
        content: `
            <p>Tiêm Filler (chất làm đầy) là phương pháp thẩm mỹ phổ biến giúp tạo hình gương mặt, xóa nhăn và làm đầy các vùng lõm. Tuy nhiên, trên thị trường hiện nay có rất nhiều loại Filler khác nhau.</p>
            <h3>1. Filler Hyaluronic Acid (HA)</h3>
            <p>Đây là loại Filler phổ biến và an toàn nhất hiện nay. HA là một chất tự nhiên có trong cơ thể, có khả năng ngậm nước giúp da căng mọng. Filler HA thường có thời gian duy trì từ 6-12 tháng.</p>
            <h3>2. Filler Calcium Hydroxylapatite (CaHA)</h3>
            <p>Thành phần chính là các hạt vi cầu CaHA lơ lửng trong gel. Loại này thường được dùng để điều chỉnh các nếp nhăn sâu và tạo khối cho gương mặt. Thời gian duy trì khoảng 12-18 tháng.</p>
            <h3>3. Filler Poly-L-lactic Acid (PLLA)</h3>
            <p>Đây là chất kích thích tăng sinh Collagen tự nhiên của cơ thể. Hiệu quả của PLLA xuất hiện từ từ và kéo dài đến 2 năm.</p>
        `
    },
    {
        id: "5",
        title: "Bí quyết giữ dáng thon gọn cho dân văn phòng",
        category: "Làm đẹp",
        date: "10 Tháng 11, 2023",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMH1jaSop956a-z2I46g20q08I76Of5gacuArNR-sXQM87oBzH2m0ya6VnA7-9J7bgGPh5PZ13Ps2i8uB3pasmvy3xUihi7zU2VXDJc4hsJUYxMbs5E1JGYmHGCaAehOqBYpD-CfjxWDvxohtXdGdeJLyBg6DH3b68AZJ0Hm0vF_wqsZRHhkimWb6-T4MzUV7J85KTSPOCA9ZKJ50z89wA5wp7eProdbe5CoWIpyhG-ncDVie7TuXXecqXfZQoNqxqU8vgXxDxWg",
        slug: "bi-quyet-giu-dang",
        description: "Những thói quen nhỏ giúp dân văn phòng tránh được tình trạng béo bụng, tích mỡ thừa do ngồi lâu.",
        content: `
            <p>Ngồi nhiều, ít vận động, ăn vặt thường xuyên là những nguyên nhân khiến dân văn phòng dễ bị tích mỡ thừa, đặc biệt là vùng bụng. Để giữ gìn vóc dáng thon gọn, hãy áp dụng những bí quyết sau:</p>
            <ul>
                <li><strong>Ngồi đúng tư thế:</strong> Luôn giữ lưng thẳng khi ngồi làm việc để tránh áp lực lên cột sống và hạn chế mỡ bụng.</li>
                <li><strong>Vận động nhẹ nhàng:</strong> Sau mỗi 1-2 giờ làm việc, hãy đứng dậy đi lại hoặc thực hiện các động tác vươn vai thư giãn.</li>
                <li><strong>Uống đủ nước:</strong> Nước giúp tăng cường trao đổi chất và giảm cảm giác thèm ăn.</li>
                <li><strong>Chuẩn bị bữa trưa lành mạnh:</strong> Tự chuẩn bị cơm trưa với nhiều rau xanh, hạn chế tinh bột và dầu mỡ.</li>
            </ul>
        `
    },
    {
        id: "6",
        title: "Quy trình chăm sóc da chuẩn y khoa tại nhà",
        category: "Chăm sóc da",
        date: "05 Tháng 11, 2023",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyKfYe5R7nL12rlD-FR-SD0OMS8iFKl60Ihar2_RXNStVsLTquAw92nYPg9IIT4Ci5959ti3b09PXCdht9nf4AqmL1RKGABqcCL4fDg5EFTdW31WMOnnbZaLGQTbtWy7c_uhbppbBC7dpKWHs_cX-aL7-o3X0DZK5tLXCBsB7l6lo8sRE_jZtGlVvT3EFRA3iGlvMjE5XJPrYZYfILJR5GMbsJtv_SUJOmiBF1uLeNz-pS3Imlmnj1KzTMW0Cyl_62VsCb_aj3vA",
        slug: "cham-soc-da-chuan-y-khoa",
        description: "Các bước chăm sóc da cơ bản và nâng cao giúp bạn sở hữu làn da khỏe đẹp như đi spa.",
        content: `
            <p>Để có một làn da đẹp, không nhất thiết phải đến spa mỗi ngày. Bạn hoàn toàn có thể duy trì quy trình chăm sóc da chuẩn y khoa ngay tại nhà với các bước sau:</p>
            <h3>Buổi sáng:</h3>
            <ol>
                <li>Sữa rửa mặt dịu nhẹ</li>
                <li>Toner cân bằng độ pH</li>
                <li>Serum Vitamin C (chống oxy hóa)</li>
                <li>Kem dưỡng ẩm</li>
                <li>Kem chống nắng (bắt buộc)</li>
            </ol>
            <h3>Buổi tối:</h3>
            <ol>
                <li>Tẩy trang (kể cả khi không trang điểm)</li>
                <li>Sữa rửa mặt</li>
                <li>Tẩy tế bào chết (2-3 lần/tuần)</li>
                <li>Toner</li>
                <li>Serum đặc trị (Retinol, BHA, AHA...)</li>
                <li>Kem dưỡng ẩm</li>
            </ol>
        `
    }
];
