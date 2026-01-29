
import HistoryMission from "@/components/about/HistoryMission";
import MedicalTeam from "@/components/about/MedicalTeam";
import Facilities from "@/components/about/Facilities";
import LegalCert from "@/components/about/LegalCert";
import BookingForm from "@/components/home/BookingForm";

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-20">
            <div className="bg-slate-900 py-24 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuC44iNLDBoVx_SSCakXnif0KzO2AihrBEI-BcuFIv4_XE9o5vnKHzcQIt6skZtKEyzFzQQjC5zE6-eX65TGbKepGqf47hpL9GNxhCo-Q_lmloKXI_szN4KOQfzawGPoYpE0ZbbHPOsHjDQwLrsSHm7qL8EJfJDJ8t2O4CwWNJAskiAS6iwvbpP7LFZoMXbJXmDFESLoYNKP8HxUWWcSOZn-LmHJkwAb4uqcp5-M8vD71-LvI6115yJo7GaaXfaOIzCbYJlZO7BPHg')] bg-cover bg-center opacity-20"></div>
                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block animate-fade-in-up">Về Chúng Tôi</span>
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 animate-fade-in-up delay-100">Kiến Tạo Vẻ Đẹp Từ <br /> <span className="text-primary">Tâm Huyết & Y Đức</span></h1>
                    <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto animate-fade-in-up delay-200">Chúng tôi không chỉ chỉnh sửa nhan sắc, chúng tôi đánh thức sự tự tin và hạnh phúc bên trong bạn.</p>
                </div>
            </div>
            <HistoryMission />
            <MedicalTeam />
            <Facilities />
            <LegalCert />
            <BookingForm />
        </main>
    );
}
