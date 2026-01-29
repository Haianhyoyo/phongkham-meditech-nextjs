export interface Promotion {
    id: number;
    title: string;
    image: string;
    discount: string;
    expiry: string;
    tags: string[];
}

export const promotionsData: Promotion[] = [
    {
        id: 1,
        title: "Giảm mỡ đón hè với ưu đãi 50% dành riêng cho phác đồ Slim Fit Promax AI",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTq53YoRuhq7-Sobqq89y_cKY4YHrFSffggipJ94fRkGVQ9NorcBzdKYLL6l6KDJSESgQfp4CyZNYLZs3n2iUU5X6c_S6VZt2rpO3g-rEGP6NvyXSxw6jFcD1hi6fESiYO6Weam1a3YjKSHA9Hiz2VEsMkMNF05_pLJU0GmjeRW1nZQtwPAZtD89s1GzQxRb0yFECEFr5BNrFUW_1BreDQAvZatHeuEdc4gl32xbGgTPOJV126vTmsinEgiuVE0rtk-YnvUwkn3Q", // Reuse existing image for now
        discount: "50%",
        expiry: "31/03/2025",
        tags: ["Giảm mỡ", "Slim Fit", "Ưu đãi 50%"]
    },
    {
        id: 2,
        title: "Ưu đãi 50% Phác đồ kiến tạo gương mặt hoàn hảo từ Meditech Premium",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC44iNLDBoVx_SSCakXnif0KzO2AihrBEI-BcuFIv4_XE9o5vnKHzcQIt6skZtKEyzFzQQjC5zE6-eX65TGbKepGqf47hpL9GNxhCo-Q_lmloKXI_szN4KOQfzawGPoYpE0ZbbHPOsHjDQwLrsSHm7qL8EJfJDJ8t2O4CwWNJAskiAS6iwvbpP7LFZoMXbJXmDFESLoYNKP8HxUWWcSOZn-LmHJkwAb4uqcp5-M8vD71-LvI6115yJo7GaaXfaOIzCbYJlZO7BPHg",
        discount: "50%",
        expiry: "31/03/2025",
        tags: ["Ưu đãi 50%", "Gương mặt hoàn hảo"]
    },
    {
        id: 3,
        title: "Rước vía Thần Tài - Đón lộc Meditech: Ưu đãi đặc biệt duy nhất ngày mùng 10 Tết",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBT0y2Pb0pw0Zzb5RQzdUirmvXQ5YjcNmiczeoiP9zQJ5KncrCMsoxmu0W9nqQLqWErNuh2U8u9oehiS_DHSkIGsv3p3OenHDZqvn_5FVSo0-FBygfgcNAxOY7qmyPohIjZnWrB6lmnzWrxnlyagcC3F0ZcVuuTNcJt_96mhd65If8Vz-rwXUjQZfUobcrHJVNKkeBfc3mZNtbE4cufCVyQv4HvytBx7hduDV6Myqw66-2EC5rk3r0EFWbkuQ7899r-sE_ahZsZHA",
        discount: "Hot Deal",
        expiry: "Mùng 10 Tết",
        tags: ["Săn deal mới", "Lộc thần tài"]
    },
    {
        id: 4,
        title: "Ưu đãi lớn nhất năm: Sở hữu vẻ đẹp hoàn mỹ cùng top dịch vụ đẳng cấp",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBv009JdO-ATSadqYbboaEt8Mh_5nN1x8y8kGMs0mBcVpj6okpzQvMb49diZozphQZ9JcNsOQmJXv_n9Ej2N0C7V9wdyo1ENM3AfGCGzbg6ZidDiVGNdUnMJY8b2vNTM8B-6GoL5r877HImL_pO9XK9JHBGH1YxdAecAqujqJM9289kELLswb0QnFDShH7bF_9_7D54q8LzRnt7GRNLkCMJfAjzB3eA0y7THZQnabNDk-sSz0WLId3kSQyeZinz_5-I1H5ISoEZTw",
        discount: "9 Suất",
        expiry: "Đăng ký ngay",
        tags: ["Ưu đãi kết năm", "Giới hạn"]
    },
    {
        id: 5,
        title: "Ưu đãi 68% săn chắc, trẻ hóa body toàn diện với liệu pháp Morpheus8",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMLSveAcKu95wXQGIhg3RMLhRR4r1P4pPSKGjBU1PYTM5E-DhkMRmcurl3syAla5Bn7fUSuqPmgnroZ3AZomKa4TyONg0pJe_1QDbDLkG0TdmsOfxKbCR6MvLhf_7XRmYm6rZS00IqPygMYtRdc6qHcOlct7c__W5l90rH17GbBd-5rHPrBFHVSZ-FRPnXVM6O0q-AR47NqDWyfxtTRDOsPYLusoAFU457N7Q4qjc6QIxycKtqB3VMKuRttj982g2zW-Vd6_IyXw",
        discount: "68%",
        expiry: "28/02/2025",
        tags: ["Ưu đãi 68%", "Morpheus8"]
    },
    {
        id: 6,
        title: "Ưu đãi 73% căng bóng, trẻ hóa da toàn diện với Meso không kim",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5kLTt72xDKPfKm6DfSN2p2Ad1vD_Z4UQniZ3bHcDGS9FTA2jhMYvboRe8PxvhA-KL2CQBggKzplg5Kkc-6d9nYM4wUlEH7xeC3B6HcpImLPgt0gA-DVxwQHGwK-wwSI-HEhKj57bqRF-UZGrBPnfugEWqUoh-Yr9y-BhOVeEBgiDvFaF5TP_zU7DLI0FQltuLpEjDWOF9Ndp4tCXx0U2SDzNmWSfetCLY9rumrB5HwIwnN-EqmgV1pLOLVFqNW_l4n96jaY_48A",
        discount: "73%",
        expiry: "28/02/2025",
        tags: ["Ưu đãi 73%", "Meso không kim"]
    }
];
