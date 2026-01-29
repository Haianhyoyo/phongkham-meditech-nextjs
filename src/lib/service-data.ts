
export interface ServiceData {
    id: string;
    title: string;
    heroImage: string;
    description: string;
    introTitle: string;
    introDesc: string;
    subServices: {
        title: string;
        desc: string;
        price: string;
        image: string;
    }[];
    technologies: {
        title: string;
        desc: string;
        icon: string;
    }[];
    results: {
        title: string;
        desc: string;
        beforeLabel: string;
        afterLabel: string;
        image: string;
    }[];
}

export const servicesData: Record<string, ServiceData> = {
    "tham-my-mat": {
        id: "tham-my-mat",
        title: "Thẩm Mỹ Mắt",
        heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDifydABd6Sm3BuycinN2xhUwD7oorMuxQyiIArw7NXIIXhZlvb91DYPZ_fEEFVjvA_OmcEfhgqW82NJ3G3wrlkL5RccdCdvv-DZkL2uEqwRQ14JlPoexNZSRLTu23-MJ7LVB5g1eumQiJamX-jxedpnsmT1YoyX-YCQDMh8by-kMHNM8E3Xkr707W9yTo_SaGPvBAjf5imlz4dOlHcWOYdTmXaMRWczIhDt_bAfVOTwCZvRm9flvty2nryBTiaDpaSzMpm4qi8YA",
        description: "Ứng dụng công nghệ phẫu thuật tiên tiến, khắc phục hoàn hảo các khuyết điểm vùng mắt, mang lại đôi mắt to tròn, nếp mí rõ nét và vẻ đẹp tự nhiên hài hòa.",
        introTitle: "Đỉnh Cao Phẫu Thuật Thẩm Mỹ Mắt",
        introDesc: "Tại Meditech, chúng tôi không chỉ thực hiện tiểu phẫu, mà còn kiến tạo một tác phẩm nghệ thuật trên gương mặt bạn. Với quy trình chuẩn y khoa và kỹ thuật ít xâm lấn, các dịch vụ thẩm mỹ mắt giúp bạn lấy lại sự tự tin, xóa tan dấu vết thời gian và mệt mỏi trên \"cửa sổ tâm hồn\".",
        subServices: [
            {
                title: "Cắt mí trên",
                desc: "Khắc phục da chùng, mỡ thừa, tạo nếp mí sâu rõ nét.",
                price: "10tr - 15tr",
                image: "/image/unnamed (6).jpg"
            },
            {
                title: "Cắt mí dưới",
                desc: "Xóa bọng mỡ và quầng thâm, giúp đôi mắt trẻ hóa tức thì.",
                price: "8tr - 12tr",
                image: "/image/unnamed (7).jpg"
            },
            {
                title: "Nhấn mí (Bấm mí)",
                desc: "Kỹ thuật không phẫu thuật dành cho đôi mắt trẻ trung.",
                price: "6tr - 9tr",
                image: "/image/unnamed (8).jpg"
            },
            {
                title: "Mở góc mắt",
                desc: "Mở rộng góc mắt trong/ngoài cho đôi mắt to tròn, cân đối.",
                price: "7tr - 10tr",
                image: "/image/unnamed (9).jpg"
            },
            {
                title: "Chỉnh sụp mí",
                desc: "Can thiệp cơ nâng mi giúp mắt mở to, cải thiện tầm nhìn.",
                price: "12tr - 20tr",
                image: "/image/unnamed (10).jpg"
            },
            {
                title: "Sửa mí lỗi/hỏng",
                desc: "Phục hồi nếp mí bị lỗi, không đều hoặc hỏng từ cơ sở khác.",
                price: "Liên hệ báo giá",
                image: "/image/unnamed (11).jpg"
            }
        ],
        technologies: [
            {
                title: "Công nghệ Plasma lạnh",
                desc: "Hạn chế tối đa sưng bầm, đau nhức sau phẫu thuật. Giúp vết thương khô nhanh và lành thương nhanh gấp 2 lần.",
                icon: "bolt"
            },
            {
                title: "Chỉ Nano siêu mảnh 0.001mm",
                desc: "Loại chỉ nhập khẩu cao cấp nhất, tương thích tuyệt đối với cơ thể, tạo đường khâu tàng hình không để lại sẹo.",
                icon: "architecture"
            }
        ],
        results: [
            {
                title: "Cắt mí Mini Deep 6D",
                desc: "Kết quả sau 14 ngày",
                beforeLabel: "TRƯỚC",
                afterLabel: "SAU",
                image: "/image/pttm-16.jpg"
            },
            {
                title: "Chỉnh sụp mí bẩm sinh",
                desc: "Kết quả sau 1 tháng",
                beforeLabel: "TRƯỚC",
                afterLabel: "SAU",
                image: "/image/unnamed (1).jpg"
            },
            {
                title: "Mở góc mắt trong",
                desc: "Kết quả sau 7 ngày",
                beforeLabel: "TRƯỚC",
                afterLabel: "SAU",
                image: "/image/1.jpg"
            }
        ]
    },
    "tham-my-mui": {
        id: "tham-my-mui",
        title: "Thẩm Mỹ Mũi",
        heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDe8NW9ZtesZOFQxS2g1DJq4y0zwZuqnNKa9T_-qVmLp9_QgdW5tirwmzoFr6_J5MVc--Kiu-KNyTFENW0xePriDHQOIcD-FRHNw3keb7COcGI5VTKV_OqG03F3vVK1JhR2OuZfLGYDges7olCsNWQ04rjmbbxVioJxmMdU4mMy28FyoehytwuVjaWDR0dd5mG4xWTfe0cdmDM-WrieOT-_dHv3ncWje1sGcLmnM83Q9fTeewGSQph4SCtxJhOj4VsbVvixDH9vBg",
        description: "Sở hữu dáng mũi chuẩn tỉ lệ vàng, hài hòa gương mặt với công nghệ nâng mũi tiên tiến nhất.",
        introTitle: "Giải Pháp Toàn Diện Cho Dáng Mũi",
        introDesc: "Sở hữu dáng mũi chuẩn tỉ lệ vàng, hài hòa gương mặt với công nghệ nâng mũi tiên tiến nhất.",
        subServices: [
            {
                title: "Nâng mũi chỉ",
                desc: "Nâng cao sống mũi nhẹ nhàng không phẫu thuật bằng chỉ collagen.",
                price: "10.000.000đ",
                image: "/image/unnamed (12).jpg"
            },
            {
                title: "Thu gọn cánh mũi",
                desc: "Khắc phục tình trạng cánh mũi rộng, bè ngang tạo sự thanh thoát.",
                price: "8.000.000đ",
                image: "/image/unnamed (13).jpg"
            },
            {
                title: "Thu gọn đầu mũi",
                desc: "Xử lý đầu mũi to, thô để đạt được tỉ lệ hài hòa với sống mũi.",
                price: "12.000.000đ",
                image: "/image/unnamed (14).jpg"
            },
            {
                title: "Cắt cánh mũi",
                desc: "Tiểu phẫu thu gọn mô mềm vùng cánh mũi, không để lại sẹo.",
                price: "7.000.000đ",
                image: "/image/unnamed (15).jpg"
            },
            {
                title: "Cắt nền mũi",
                desc: "Điều chỉnh phần chân mũi quá rộng giúp lỗ mũi có hình hạt chanh.",
                price: "15.000.000đ",
                image: "/image/unnamed (16).jpg"
            },
            {
                title: "Chỉnh hình mũi nhẹ",
                desc: "Xử lý các khuyết điểm nhỏ như gồ nhẹ, mũi hơi lệch.",
                price: "20.000.000đ",
                image: "/image/unnamed (17).jpg"
            },
            {
                title: "Sửa mũi hỏng mức độ nhẹ",
                desc: "Khắc phục các biến chứng sau nâng mũi ở mức độ nhẹ, hồi phục dáng tự nhiên.",
                price: "25.000.000đ",
                image: "/image/unnamed (18).jpg"
            }
        ],
        technologies: [
            {
                title: "Nâng mũi S-Line/L-Line 3D",
                desc: "Mô phỏng dáng mũi 3D trước khi phẫu thuật, giúp khách hàng xem trước kết quả và lựa chọn dáng mũi ưng ý.",
                icon: "view_in_ar"
            },
            {
                title: "Sụn sinh học an toàn",
                desc: "Sử dụng chất liệu sụn cao cấp nhập khẩu, có độ tương thích sinh học cao, hạn chế tối đa đào thải và biến chứng.",
                icon: "verified"
            },
            {
                title: "Công nghệ giảm sưng đau",
                desc: "Kết hợp công nghệ Plasma lạnh giúp vết thương khô nhanh, giảm sưng nề và rút ngắn 50% thời gian nghỉ dưỡng.",
                icon: "health_metrics"
            }
        ],
        results: [
            {
                title: "Nâng mũi cấu trúc S-Line",
                desc: "Sau 30 ngày phẫu thuật",
                beforeLabel: "TRƯỚC",
                afterLabel: "SAU",
                image: "/image/unnamed (19).jpg"
            },
            {
                title: "Nâng mũi L-Line sang chảnh",
                desc: "Sau 15 ngày phẫu thuật",
                beforeLabel: "TRƯỚC",
                afterLabel: "SAU",
                image: "/image/unnamed (20).jpg"
            },
            {
                title: "Thu gọn cánh mũi & đầu mũi",
                desc: "Sau 10 ngày phẫu thuật",
                beforeLabel: "TRƯỚC",
                afterLabel: "SAU",
                image: "/image/unnamed (21).jpg"
            }
        ]
    },
    "tri-nam-chuyen-sau": {
        id: "tri-nam-chuyen-sau",
        title: "Trị Nám Chuyên Sâu",
        heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBT0y2Pb0pw0Zzb5RQzdUirmvXQ5YjcNmiczeoiP9zQJ5KncrCMsoxmu0W9nqQLqWErNuh2U8u9oehiS_DHSkIGsv3p3OenHDZqvn_5FVSo0-FBygfgcNAxOY7qmyPohIjZnWrB6lmnzWrxnlyagcC3F0ZcVuuTNcJt_96mhd65If8Vz-rwXUjQZfUobcrHJVNKkeBfc3mZNtbE4cufCVyQv4HvytBx7hduDV6Myqw66-2EC5rk3r0EFWbkuQ7899r-sE_ahZsZHA",
        description: "Phác đồ điều trị nám đa mô thức chuẩn y khoa, đánh bay nám tận gốc, trả lại làn da sáng mịn đều màu.",
        introTitle: "Sạch Nám Tận Gốc - Da Sáng Mịn Màng",
        introDesc: "Nám da là nỗi ám ảnh của nhiều chị em phụ nữ. Tại Meditech, chúng tôi ứng dụng phác đồ trị nám đa mô thức, kết hợp công nghệ Laser thế hệ mới và các dưỡng chất đặc trị, giúp phá hủy chân nám từ sâu bên trong, đồng thời tái tạo làn da khỏe mạnh, ngăn ngừa nám tái phát.",
        subServices: [
            {
                title: "Laser Picosure",
                desc: "Công nghệ Laser tiên tiến nhất, phá hủy sắc tố Melanin mạnh mẽ mà không gây tổn thương da.",
                price: "3.000.000đ/buổi",
                image: "/image/unnamed (22).jpg"
            },
            {
                title: "Mesotherapy trị nám",
                desc: "Cấy tinh chất ức chế nám vào sâu dưới da, nuôi dưỡng da trắng sáng.",
                price: "4.000.000đ/buổi",
                image: "/image/unnamed (23).jpg"
            },
            {
                title: "Peel da sinh học",
                desc: "Loại bỏ lớp sừng già cỗi, thúc đẩy tái tạo tế bào da mới sáng mịn.",
                price: "1.500.000đ/buổi",
                image: "/image/unnamed (24).jpg"
            }
        ],
        technologies: [
            {
                title: "Laser Picosure Pro",
                desc: "Xung cực ngắn tính bằng pico giây, tác động chính xác vào chân nám, hiệu quả gấp 3 lần laser thường.",
                icon: "flash_on"
            },
            {
                title: "Soi da Visia",
                desc: "Phân tích chính xác tình trạng nám, độ sâu và mật độ sắc tố để lên phác đồ cá nhân hóa.",
                icon: "search"
            }
        ],
        results: [
            {
                title: "Trị nám mảng",
                desc: "Kết quả sau 1 liệu trình",
                beforeLabel: "TRƯỚC",
                afterLabel: "SAU",
                image: "/image/unnamed (25).jpg"
            },
            {
                title: "Trị nám chân sâu",
                desc: "Kết quả sau 5 buổi",
                beforeLabel: "TRƯỚC",
                afterLabel: "SAU",
                image: "/image/unnamed (26).jpg"
            }
        ]
    },
    "tre-hoa-da-multi-layer": {
        id: "tre-hoa-da-multi-layer",
        title: "Trẻ Hóa Da Multi-layer",
        heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMLSveAcKu95wXQGIhg3RMLhRR4r1P4pPSKGjBU1PYTM5E-DhkMRmcurl3syAla5Bn7fUSuqPmgnroZ3AZomKa4TyONg0pJe_1QDbDLkG0TdmsOfxKbCR6MvLhf_7XRmYm6rZS00IqPygMYtRdc6qHcOlct7c__W5l90rH17GbBd-5rHPrBFHVSZ-FRPnXVM6O0q-AR47NqDWyfxtTRDOsPYLusoAFU457N7Q4qjc6QIxycKtqB3VMKuRttj982g2zW-Vd6_IyXw",
        description: "Phương pháp trẻ hóa da đa tầng, kích thích tăng sinh Collagen tự thân, xóa nhăn, nâng cơ và phục hồi độ đàn hồi cho da.",
        introTitle: "Đánh Thức Làn Da Thanh Xuân",
        introDesc: "Lão hóa da không chỉ diễn ra ở bề mặt mà còn ở các tầng sâu hơn. Công nghệ trẻ hóa Multi-layer tác động đa tầng, từ lớp biểu bì đến lớp cơ SMAS, giúp tái cấu trúc làn da toàn diện, mang lại vẻ trẻ trung rạng ngời chỉ sau một liệu trình.",
        subServices: [
            {
                title: "Thermage FLX",
                desc: "Xóa nhăn, căng da, trẻ hóa bề mặt da tức thì.",
                price: "35.000.000đ",
                image: "/image/unnamed (27).jpg"
            },
            {
                title: "Cấy Collagen tươi",
                desc: "Bổ sung Collagen trực tiếp giúp da căng bóng, mướt mát.",
                price: "5.000.000đ/buổi",
                image: "/image/unnamed (28).jpg"
            }
        ],
        technologies: [
            {
                title: "Sóng RF đa cực",
                desc: "Kích thích tăng sinh Collagen và Elastin mạnh mẽ ở tầng trung bì.",
                icon: "waves"
            },
            {
                title: "AI Analysis",
                desc: "Phân tích mức độ lão hóa từng vùng da để điều chỉnh năng lượng phù hợp.",
                icon: "analytics"
            }
        ],
        results: [
            {
                title: "Trẻ hóa toàn mặt",
                desc: "Ngay sau khi làm",
                beforeLabel: "TRƯỚC",
                afterLabel: "SAU",
                image: "/image/unnamed (29).jpg"
            },
            {
                title: "Xóa nhăn vùng mắt",
                desc: "Sau 1 tháng",
                beforeLabel: "TRƯỚC",
                afterLabel: "SAU",
                image: "/image/unnamed (30).jpg"
            }
        ]
    },
    "nang-co-hifu-pro": {
        id: "nang-co-hifu-pro",
        title: "Nâng Cơ Hifu Pro",
        heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBv009JdO-ATSadqYbboaEt8Mh_5nN1x8y8kGMs0mBcVpj6okpzQvMb49diZozphQZ9JcNsOQmJXv_n9Ej2N0C7V9wdyo1ENM3AfGCGzbg6ZidDiVGNdUnMJY8b2vNTM8B-6GoL5r877HImL_pO9XK9JHBGH1YxdAecAqujqJM9289kELLswb0QnFDShH7bF_9_7D54q8LzRnt7GRNLkCMJfAjzB3eA0y7THZQnabNDk-sSz0WLId3kSQyeZinz_5-I1H5ISoEZTw",
        description: "Sử dụng sóng siêu âm hội tụ cường độ cao giúp thon gọn gương mặt, nâng cơ chảy xệ không phẫu thuật.",
        introTitle: "Nâng Cơ Thon Gọn - Không Cần Dao Kéo",
        introDesc: "Hifu Pro là giải pháp hoàn hảo cho những ai muốn sở hữu gương mặt V-line thon gọn và làn da săn chắc mà không muốn can thiệp phẫu thuật. Công nghệ sử dụng sóng siêu âm hội tụ tác động chính xác vào lớp cơ SMAS, tạo hiệu quả nâng cơ tương đương phẫu thuật căng da mặt.",
        subServices: [
            {
                title: "Nâng cơ toàn mặt",
                desc: "Thon gọn gương mặt, xóa nọng cằm.",
                price: "15.000.000đ",
                image: "/image/unnamed (31).jpg"
            },
            {
                title: "Xóa rãnh cười",
                desc: "Làm đầy rãnh mũi má, giúp gương mặt trẻ trung hơn.",
                price: "8.000.000đ",
                image: "/image/unnamed (32).jpg"
            }
        ],
        technologies: [
            {
                title: "High Intensity Focused Ultrasound",
                desc: "Sóng siêu âm hội tụ cường độ cao, tác động sâu 4.5mm dưới da.",
                icon: "wifi_tethering"
            }
        ],
        results: [
            {
                title: "Thon gọn hàm",
                desc: "Sau 1 buổi duy nhất",
                beforeLabel: "TRƯỚC",
                afterLabel: "SAU",
                image: "/image/unnamed (33).jpg"
            }
        ]
    },
    "dieu-tri-mun-y-khoa": {
        id: "dieu-tri-mun-y-khoa",
        title: "Điều Trị Mụn Y Khoa",
        heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyKfYe5R7nL12rlD-FR-SD0OMS8iFKl60Ihar2_RXNStVsLTquAw92nYPg9IIT4Ci5959ti3b09PXCdht9nf4AqmL1RKGABqcCL4fDg5EFTdW31WMOnnbZaLGQTbtWy7c_uhbppbBC7dpKWHs_cX-aL7-o3X0DZK5tLXCBsB7l6lo8sRE_jZtGlVvT3EFRA3iGlvMjE5XJPrYZYfILJR5GMbsJtv_SUJOmiBF1uLeNz-pS3Imlmnj1KzTMW0Cyl_62VsCb_aj3vA",
        description: "Phác đồ chuẩn y khoa kết hợp ánh sáng sinh học giúp sạch mụn, kiểm soát dầu nhờn và ngăn ngừa thâm sẹo.",
        introTitle: "Sạch Mụn Sáng Da - Tự Tin Tỏa Sáng",
        introDesc: "Mụn không chỉ gây mất thẩm mỹ mà còn ảnh hưởng lớn đến tâm lý. Meditech cung cấp phác đồ điều trị mụn chuẩn y khoa, cá nhân hóa cho từng loại mụn và tình trạng da, giúp bạn lấy lại làn da láng mịn và khỏe mạnh.",
        subServices: [
            {
                title: "Lấy nhân mụn chuẩn y khoa",
                desc: "Kỹ thuật lấy nhân mụn nhẹ nhàng, không sưng, không để lại sẹo rỗ.",
                price: "300.000đ/buổi",
                image: "/image/unnamed (34).jpg"
            },
            {
                title: "Trị mụn E-Light",
                desc: "Sử dụng ánh sáng E-Light tiêu diệt vi khuẩn P.acnes gây mụn.",
                price: "800.000đ/buổi",
                image: "/image/unnamed (35).jpg"
            }
        ],
        technologies: [
            {
                title: "Ánh sáng xanh Blue Light",
                desc: "Kháng khuẩn, kháng viêm, làm dịu da nhanh chóng.",
                icon: "light_mode"
            }
        ],
        results: [
            {
                title: "Trị mụn viêm nặng",
                desc: "Sau 1 liệu trình 10 buổi",
                beforeLabel: "TRƯỚC",
                afterLabel: "SAU",
                image: "/image/unnamed (36).jpg"
            }
        ]
    }
};
