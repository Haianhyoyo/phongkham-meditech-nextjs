export interface Doctor {
    id: string;
    name: string;
    role: string;
    image: string;
    qualifications: string[]; // Bằng cấp
    certificates?: string[];   // Chứng chỉ - Made optional as not all (from temp data) might have it, but good to keep
    experience?: string | number;       // Change to allow string "15 năm kinh nghiệm" or number
    specialty: string; // Changed to string to accommodate flexible text
    // specialty: 'tieu-phau' | 'dai-phau' | 'da-lieu' | 'all'; // Keep this as comment for future strict typing if needed
    description?: string;
}

export const doctors: Doctor[] = [
    {
        id: "dr-dung",
        name: "BS. Tuệ Linh",
        role: "Giám đốc chuyên môn",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTq53YoRuhq7-Sobqq89y_cKY4YHrFSffggipJ94fRkGVQ9NorcBzdKYLL6l6KDJSESgQfp4CyZNYLZs3n2iUU5X6c_S6VZt2rpO3g-rEGP6NvyXSxw6jFcD1hi6fESiYO6Weam1a3YjKSHA9Hiz2VEsMkMNF05_pLJU0GmjeRW1nZQtwPAZtD89s1GzQxRb0yFECEFr5BNrFUW_1BreDQAvZatHeuEdc4gl32xbGgTPOJV126vTmsinEgiuVE0rtk-YnvUwkn3Q", // using one of valid images
        qualifications: [
            "Tiến sĩ Y khoa - Đại học Y Hà Nội",
            "Tu nghiệp Phẫu thuật Tạo hình tại Bệnh viện Foch (Pháp)"
        ],
        certificates: [
            "Chứng chỉ hành nghề khám chữa bệnh chuyên khoa PTTM",
            "Thành viên Hội Phẫu thuật Tạo hình Thẩm mỹ Quốc tế (ISAPS)"
        ],
        experience: 20,
        specialty: 'all',
        description: "Chuyên gia hàng đầu về Phẫu thuật Tạo hình với tư duy thẩm mỹ tinh tế và đôi bàn tay vàng."
    },
    {
        id: "dr-hoang",
        name: "BS. Trần Hoàng",
        role: "Trưởng khoa Tiểu phẫu",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC44iNLDBoVx_SSCakXnif0KzO2AihrBEI-BcuFIv4_XE9o5vnKHzcQIt6skZtKEyzFzQQjC5zE6-eX65TGbKepGqf47hpL9GNxhCo-Q_lmloKXI_szN4KOQfzawGPoYpE0ZbbHPOsHjDQwLrsSHm7qL8EJfJDJ8t2O4CwWNJAskiAS6iwvbpP7LFZoMXbJXmDFESLoYNKP8HxUWWcSOZn-LmHJkwAb4uqcp5-M8vD71-LvI6115yJo7GaaXfaOIzCbYJlZO7BPHg",
        qualifications: [
            "Thạc sĩ Bác sĩ Nội trú - Đại học Y Dược TP.HCM"
        ],
        certificates: [
            "Chứng chỉ Laser thẩm mỹ",
            "Chứng chỉ Tiêm chất làm đầy (Filler/Botox)"
        ],
        experience: 12,
        specialty: 'tieu-phau',
        description: "Chuyên sâu về các thủ thuật tiểu phẫu vùng mặt, mang lại vẻ đẹp tự nhiên hài hòa."
    },
    {
        id: "dr-lan-anh",
        name: "BS. Vũ Lan Anh",
        role: "Bác sĩ Da liễu & Nội khoa",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBT0y2Pb0pw0Zzb5RQzdUirmvXQ5YjcNmiczeoiP9zQJ5KncrCMsoxmu0W9nqQLqWErNuh2U8u9oehiS_DHSkIGsv3p3OenHDZqvn_5FVSo0-FBygfgcNAxOY7qmyPohIjZnWrB6lmnzWrxnlyagcC3F0ZcVuuTNcJt_96mhd65If8Vz-rwXUjQZfUobcrHJVNKkeBfc3mZNtbE4cufCVyQv4HvytBx7hduDV6Myqw66-2EC5rk3r0EFWbkuQ7899r-sE_ahZsZHA",
        qualifications: [
            "Bác sĩ Chuyên khoa I Da liễu"
        ],
        certificates: [
            "Chứng chỉ Ứng dụng Laser và Ánh sáng trong Da liễu",
            "Chứng chỉ Căng chỉ thẩm mỹ"
        ],
        experience: 10,
        specialty: 'da-lieu',
        description: "Tận tâm và tỉ mỉ trong từng liệu trình chăm sóc, điều trị da công nghệ cao."
    },
    // Merged from Experts Page
    {
        id: "dr-a",
        name: "ThS. BS. Nguyễn Văn A",
        role: "Trưởng khoa Da liễu",
        specialty: "Chuyên gia Da liễu & Laser Thẩm mỹ",
        experience: "15 năm kinh nghiệm",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDifydABd6Sm3BuycinN2xhUwD7oorMuxQyiIArw7NXIIXhZlvb91DYPZ_fEEFVjvA_OmcEfhgqW82NJ3G3wrlkL5RccdCdvv-DZkL2uEqwRQ14JlPoexNZSRLTu23-MJ7LVB5g1eumQiJamX-jxedpnsmT1YoyX-YCQDMh8by-kMHNM8E3Xkr707W9yTo_SaGPvBAjf5imlz4dOlHcWOYdTmXaMRWczIhDt_bAfVOTwCZvRm9flvty2nryBTiaDpaSzMpm4qi8YA",
        qualifications: []
    },
    {
        id: "dr-b",
        name: "BS. CKII. Trần Thị B",
        role: "Chuyên gia Trẻ hóa",
        specialty: "Nâng cơ & Trẻ hóa công nghệ cao",
        experience: "20 năm kinh nghiệm",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDe8NW9ZtesZOFQxS2g1DJq4y0zwZuqnNKa9T_-qVmLp9_QgdW5tirwmzoFr6_J5MVc--Kiu-KNyTFENW0xePriDHQOIcD-FRHNw3keb7COcGI5VTKV_OqG03F3vVK1JhR2OuZfLGYDges7olCsNWQ04rjmbbxVioJxmMdU4mMy28FyoehytwuVjaWDR0dd5mG4xWTfe0cdmDM-WrieOT-_dHv3ncWje1sGcLmnM83Q9fTeewGSQph4SCtxJhOj4VsbVvixDH9vBg",
        qualifications: []
    },
    {
        id: "dr-c",
        name: "BS. Lê Hoàng C",
        role: "Thẩm mỹ ngoại khoa",
        specialty: "Phẫu thuật tạo hình thẩm mỹ",
        experience: "12 năm kinh nghiệm",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMH1jaSop956a-z2I46g20q08I76Of5gacuArNR-sXQM87oBzH2m0ya6VnA7-9J7bgGPh5PZ13Ps2i8uB3pasmvy3xUihi7zU2VXDJc4hsJUYxMbs5E1JGYmHGCaAehOqBYpD-CfjxWDvxohtXdGdeJLyBg6DH3b68AZJ0Hm0vF_wqsZRHhkimWb6-T4MzUV7J85KTSPOCA9ZKJ50z89wA5wp7eProdbe5CoWIpyhG-ncDVie7TuXXecqXfZQoNqxqU8vgXxDxWg",
        qualifications: []
    }
];
