import PageHeader from "@/components/ui/PageHeader";
import CTASection from "@/components/ui/CTASection";
import Image from "next/image";
import Link from "next/link";
import { doctors } from "@/data/doctors";

export default function ExpertsPage() {
    return (
        <main>
            <PageHeader
                title="Đội Ngũ Chuyên Gia"
                description="Hội tụ những bác sĩ chuyên khoa đầu ngành với trình độ chuyên môn cao và tâm huyết, cam kết mang lại vẻ đẹp an toàn và tự nhiên."
                backgroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuC44iNLDBoVx_SSCakXnif0KzO2AihrBEI-BcuFIv4_XE9o5vnKHzcQIt6skZtKEyzFzQQjC5zE6-eX65TGbKepGqf47hpL9GNxhCo-Q_lmloKXI_szN4KOQfzawGPoYpE0ZbbHPOsHjDQwLrsSHm7qL8EJfJDJ8t2O4CwWNJAskiAS6iwvbpP7LFZoMXbJXmDFESLoYNKP8HxUWWcSOZn-LmHJkwAb4uqcp5-M8vD71-LvI6115yJo7GaaXfaOIzCbYJlZO7BPHg"
            />

            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {doctors.map((expert, idx) => (
                            <div key={idx} className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500">
                                <div className="relative h-96 overflow-hidden">
                                    <Image src={expert.image} alt={expert.name} fill className="object-cover transition-transform duration-700" />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-8 pt-20">
                                        <div className="bg-accent/90 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded w-fit mb-2">{expert.role}</div>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-display font-bold mb-1 text-slate-900">{expert.name}</h3>
                                    <p className="text-primary font-medium mb-4 text-sm">{expert.specialty}</p>
                                    <div className="flex items-center gap-4 mb-6 text-sm text-slate-500">
                                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">workspace_premium</span> {expert.experience} {typeof expert.experience === 'number' ? 'năm kinh nghiệm' : ''}</span>
                                    </div>
                                    <Link href={`/dat-lich?doctor=${encodeURIComponent(expert.name)}`} className="block w-full text-center bg-primary text-white py-3 rounded-xl font-bold text-sm hover:bg-blue-700 transition-colors">
                                        Đặt lịch hẹn
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </main>
    );
}
