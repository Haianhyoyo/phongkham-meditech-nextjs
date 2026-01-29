
import Image from "next/image";
import Link from "next/link";
import { doctors } from "@/data/doctors";

export default function MedicalTeam() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-display font-bold text-slate-900">Đội Ngũ Chuyên Gia</h2>
                    <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                        Hội tụ những bác sĩ đầu ngành với chuyên môn cao, giàu kinh nghiệm và y đức, cam kết mang lại kết quả thẩm mỹ an toàn và hoàn hảo.
                    </p>
                </div>

                <div className="grid gap-12">
                    {doctors.map((doctor, index) => (
                        <div key={index} className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-10 items-center">
                            <div className="relative w-full md:w-1/3 aspect-[3/4] md:aspect-square rounded-2xl overflow-hidden shrink-0 shadow-lg">
                                <Image src={doctor.image} alt={doctor.name} fill className="object-cover" />
                            </div>
                            <div className="flex-1 space-y-6">
                                <div>
                                    <div className="inline-block px-3 py-1 bg-blue-50 text-primary font-bold text-xs rounded-full uppercase tracking-wider mb-2">
                                        {doctor.role}
                                    </div>
                                    <h3 className="text-3xl font-display font-bold text-slate-900">{doctor.name}</h3>
                                </div>

                                <p className="text-lg text-slate-600 italic">
                                    "{doctor.description}"
                                </p>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="font-bold text-slate-900 border-b border-slate-100 pb-2 mb-3">Bằng cấp & Đào tạo</h4>
                                        <ul className="space-y-2">
                                            {doctor.qualifications.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                                    <span className="material-symbols-outlined text-primary text-base mt-0.5">school</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 border-b border-slate-100 pb-2 mb-3">Chứng chỉ & Hiệp hội</h4>
                                        <ul className="space-y-2">
                                            {doctor.certificates?.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                                    <span className="material-symbols-outlined text-accent text-base mt-0.5">verified</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <Link href="/dat-lich" className="inline-block bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/20">
                                        Đặt lịch tư vấn với BS. {doctor.name.split(" ").pop()}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
