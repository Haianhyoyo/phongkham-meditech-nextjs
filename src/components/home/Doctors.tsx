import Image from "next/image";

// Function to fetch doctors from the API
async function getDoctors() {
    try {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/doctors`, {
            cache: "no-store", // Ensure fresh data
        });

        if (!res.ok) {
            return [];
        }

        return res.json();
    } catch (error) {
        console.error("Failed to fetch doctors:", error);
        return [];
    }
}

export default async function Doctors() {
    const doctors = await getDoctors();

    return (
        <section id="doctors" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-16">
                    <div className="space-y-4">
                        <h2 className="text-primary font-bold uppercase tracking-widest text-sm">Chuyên gia của chúng tôi</h2>
                        <h3 className="text-4xl font-display font-bold text-slate-900">Đội ngũ Bác sĩ Đầu ngành</h3>
                    </div>
                    <div className="flex gap-2">
                        <button className="p-3 rounded-full bg-white shadow-md hover:bg-primary hover:text-white transition-all">
                            <span className="material-symbols-outlined">west</span>
                        </button>
                        <button className="p-3 rounded-full bg-white shadow-md hover:bg-primary hover:text-white transition-all">
                            <span className="material-symbols-outlined">east</span>
                        </button>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {doctors.length > 0 ? (
                        doctors.filter((d: any) => d.isActive).map((doctor: any) => (
                            <div key={doctor.id} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                                <div className="relative w-full h-80 rounded-2xl mb-6 overflow-hidden bg-slate-100">
                                    {doctor.image ? (
                                        <Image src={doctor.image} alt={doctor.name} fill className="object-cover" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-slate-300">
                                            <span className="material-symbols-outlined text-6xl">person</span>
                                        </div>
                                    )}
                                </div>
                                <div className="space-y-2">
                                    <div className="text-primary font-bold text-sm uppercase">{doctor.role}</div>
                                    <h4 className="text-2xl font-display font-bold text-slate-900">{doctor.name}</h4>
                                    <p className="text-slate-600 text-sm line-clamp-3">{doctor.description || doctor.specialty}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-3 text-center py-10 text-slate-500">
                            Chưa có dữ liệu bác sĩ.
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

