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
        image: "/image/CK/mat.png",
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
    },
    {
        id: "7",
        title: "Virus Nipah là gì? Triệu chứng và cách phòng ngừa lây nhiễm",
        category: "Tin tức",
        date: "31 Tháng 01, 2026",
        image: "/image/tt1.jpg",
        slug: "virus-nipah-la-gi",
        description: "Virus Nipah gây bệnh truyền nhiễm có tỷ lệ tử vong từ 40%-75%, đồng thời gây viêm não cấp và hôn mê chỉ sau 24-48 giờ.",
        content: `
            <p>Virus Nipah (NiV) là một loại virus lây truyền từ động vật sang người, gây ra các đợt bùng phát nghiêm trọng với tỷ lệ tử vong cao. Đây là một trong những loại virus nằm trong danh sách ưu tiên theo dõi của Tổ chức Y tế Thế giới (WHO).</p>
            <h3>1. Nguồn lây nhiễm</h3>
            <p>Vật chủ tự nhiên của virus Nipah là loài dơi ăn quả. Virus có thể lây sang người qua tiếp xúc trực tiếp với động vật bị nhiễm bệnh (như lợn, dơi) hoặc tiêu thụ thực phẩm bị ô nhiễm chất bài tiết của động vật.</p>
            <h3>2. Triệu chứng lâm sàng</h3>
            <p>Các triệu chứng thường xuất hiện sau 4-14 ngày tiếp xúc, bao gồm sốt, đau đầu, ho, đau họng và khó thở. Trong các trường hợp nặng, bệnh nhân có thể tiến triển thành viêm nhận cấp tính, gây buồn ngủ, lú lẫn và hôn mê.</p>
            <h3>3. Cách phòng ngừa</h3>
            <p>Hiện chưa có vaccine phòng ngừa virus Nipah cho người. Các biện pháp phòng ngừa chủ yếu dựa vào vệ sinh cá nhân, tránh tiếp xúc với dơi và các động vật nhiễm bệnh, đồng thời không ăn các loại quả bị dơi cắn/ăn dở.</p>
        `
    },
    {
        id: "8",
        title: "Tia X là gì? Ứng dụng lâm sàng, lợi ích trong đời sống",
        category: "Kiến thức",
        date: "30 Tháng 01, 2026",
        image: "/image/tt2.jpg",
        slug: "tia-x-la-gi",
        description: "Tia X là một loại bức xạ điện từ có năng lượng cao, đóng vai trò quan trọng trong việc chẩn đoán hình ảnh hiện đại.",
        content: `
            <p>Tia X, còn được gọi là tia Röntgen, là một dạng bức xạ điện từ có khả năng đâm xuyên qua các vật thể rắn, bao gồm cả mô cơ thể người. Kể từ khi được phát hiện vào năm 1895, tia X đã làm thay đổi hoàn toàn nền y học thế giới.</p>
            <h3>1. Ứng dụng trong y tế</h3>
            <p>Ứng dụng phổ biến nhất của tia X là chụp X-quang để kiểm tra gãy xương, các vấn đề về răng miệng hoặc bệnh lý ở phổi. Ngoài ra, tia X còn được sử dụng trong chụp cắt lớp vi tính (CT Scan) để cung cấp hình ảnh chi tiết về các cơ quan nội tạng.</p>
            <h3>2. Lợi ích vượt trội</h3>
            <p>Tia X giúp bác sĩ "nhìn thấu" bên trong cơ thể mà không cần phẫu thuật xâm lấn, giúp phát hiện sớm các bệnh lý nguy hiểm như ung thư, viêm nhiễm hoặc các vật thể lạ.</p>
            <h3>3. Lưu ý về an toàn</h3>
            <p>Mặc dù tia X mang lại lợi ích to lớn, việc tiếp xúc quá mức có thể gây hại cho tế bào. Do đó, các quy trình chụp X-quang luôn được thực hiện với liều lượng bức xạ thấp nhất có thể và được kiểm soát chặt chẽ.</p>
        `
    },
    {
        id: "9",
        title: "Vôi hóa tinh hoàn có nguy hiểm không? Chữa trị thế nào?",
        category: "Sức khỏe nam giới",
        date: "29 Tháng 01, 2026",
        image: "/image/tt3.jpg",
        slug: "voi-hoa-tinh-hoan",
        description: "Vôi hóa tinh hoàn là tình trạng xuất hiện các nốt canxi nhỏ trong nhu mô tinh hoàn, thường được phát hiện qua siêu âm.",
        content: `
            <p>Vôi hóa tinh hoàn là một hiện tượng khá phổ biến khi các tinh thể canxi lắng đọng bên trong các ống sinh tinh. Tình trạng này thường không gây đau đớn và chỉ được phát hiện tình cờ khi người bệnh đi siêu âm kiểm tra sức khỏe.</p>
            <h3>1. Nguyên nhân gây vôi hóa</h3>
            <p>Có nhiều nguyên nhân dẫn đến vôi hóa tinh hoàn, bao gồm tiền sử viêm nhiễm, chấn thương, hoặc các rối loạn bẩm sinh. Một số trường hợp có thể liên quan đến tình trạng lưu thông máu kém tại tinh hoàn.</p>
            <h3>2. Mức độ nguy hiểm</h3>
            <p>Đa số các trường hợp vôi hóa nhẹ là lành tính và không ảnh hưởng đến chức năng sinh sản. Tuy nhiên, nếu vôi hóa lan rộng (Microlithiasis), nó có thể là dấu hiệu cảnh báo nguy cơ tăng cao đối với các khối u tinh hoàn.</p>
            <h3>3. Phương pháp điều trị</h3>
            <p>Hiện nay không có phương pháp xử lý trực tiếp các nốt vôi hóa. Bác sĩ thường khuyến cáo bệnh nhân tự kiểm tra và thực hiện siêu âm định kỳ hàng năm để theo dõi sự biến đổi của các nốt vôi hóa và nhu mô tinh hoàn.</p>
        `
    },
    {
        id: "10",
        title: "Chụp X-quang viêm phổi: Quy trình, lợi ích và lưu ý khi thực hiện",
        category: "Chẩn đoán hình ảnh",
        date: "28 Tháng 01, 2026",
        image: "/image/1.jpg",
        slug: "chup-xquang-viem-phoi",
        description: "Chụp X-quang phổi là kỹ thuật đầu tay giúp chẩn đoán nhanh chóng và chính xác tình trạng viêm phổi.",
        content: `
            <p>Viêm phổi là tình trạng nhiễm trùng các túi khí trong phổi, có thể gây nguy hiểm nếu không được điều trị kịp thời. Chụp X-quang lồng ngực là phương pháp cận lâm sàng cơ bản và nhanh chóng nhất để xác định tổn thương.</p>
            <h3>1. Hình ảnh viêm phổi trên X-quang</h3>
            <p>Khi bị viêm phổi, các vùng bị nhiễm trùng sẽ tích tụ dịch và mủ, ngăn cản tia X đi qua và tạo nên những vùng màu trắng (đám mờ) trên phim chụp, giúp bác sĩ xác định vị trí và mức độ nghiêm trọng của ổ viêm.</p>
            <h3>2. Quy trình thực hiện</h3>
            <p>Bệnh nhân sẽ được hướng dẫn đứng trước tấm cảm biến, hít sâu và nín thở trong vài giây để hình ảnh phổi được rõ nét nhất. Quy trình diễn ra rất nhanh, chỉ mất khoảng 5-10 phút.</p>
            <h3>3. Những lưu ý quan trọng</h3>
            <p>Bệnh nhân cần tháo bỏ các vật dụng kim loại ở vùng ngực như dây chuyền, khuy áo kim loại. Phụ nữ mang thai cần thông báo cho bác sĩ để được cân nhắc các biện pháp bảo vệ thai nhi khỏi bức xạ.</p>
        `
    },
    {
        id: "11",
        title: "Nhiễm trùng mi mắt sau tiêm tan filler",
        category: "Thẩm mỹ an toàn",
        date: "27 Tháng 01, 2026",
        image: "/image/2.jpg",
        slug: "nhiem-trung-mi-mat",
        description: "Tiêm tan filler là thủ thuật nhằm loại bỏ chất làm đầy không mong muốn, nhưng nếu không đảm bảo vô trùng có thể dẫn đến nhiễm trùng.",
        content: `
            <p>Tiêm tan filler (Hyaluronidase) được xem là "liều thuốc giải" cho các trường hợp tiêm filler bị hỏng hoặc lỗi. Tuy nhiên, bất kỳ thủ thuật xâm lấn nào cũng tiềm ẩn rủi ro nếu không được thực hiện bởi chuyên gia và trong môi trường vô trùng.</p>
            <h3>1. Dấu hiệu nhiễm trùng</h3>
            <p>Sau khi tiêm tan, nếu vùng mi mắt xuất hiện tình trạng sưng tấy đỏ kéo dài, đau nhức tăng dần, cảm giác nóng rát hoặc có dịch mủ, đó là dấu hiệu cảnh báo nhiễm trùng da và mô mềm.</p>
            <h3>2. Nguyên nhân phổ biến</h3>
            <p>Nguyên nhân thường gặp nhất là do kỹ thuật tiêm không đảm bảo vệ sinh, sử dụng thuốc tan filler kém chất lượng hoặc chăm sóc sau tiêm sai cách gây nhiễm khuẩn từ môi trường bên ngoài.</p>
            <h3>3. Cách xử lý kịp thời</h3>
            <p>Khi có dấu hiệu bất thường, bệnh nhân tuyệt đối không tự ý mua thuốc bôi hoặc chườm nóng/lạnh. Cần đến ngay cơ sở y tế chuyên khoa để được bác sĩ thăm khám, sử dụng kháng sinh và các biện pháp can thiệp chuyên sâu để tránh biến chứng hoại tử hoặc ảnh hưởng đến thị lực.</p>
        `
    }
];
