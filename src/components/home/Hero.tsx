import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-50">
            {/* Background & Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/image/clinic_lobby_luxury.png"
                    alt="Phòng khám Meditec"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-white/80 lg:bg-white/60 backdrop-blur-[2px]"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 pt-12 lg:pt-0">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-primary font-bold text-xs lg:text-sm border border-blue-100 shadow-sm animate-fade-in-up">
                        <span className="material-symbols-outlined text-sm shrink-0 filled">verified</span>
                        <span>Chuẩn Y Khoa • An Toàn • Bác Sĩ Trực Tiếp</span>
                    </div>

                    <h1 className="text-4xl lg:text-6xl font-display font-black text-slate-900 leading-tight drop-shadow-sm animate-fade-in-up delay-100">
                        Vẻ Đẹp Hoàn Mỹ <br />
                        <span className="text-primary relative inline-block">
                            Chuẩn Y Khoa
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-yellow-300 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.6" />
                            </svg>
                        </span>
                    </h1>

                    <p className="text-lg lg:text-xl text-slate-700 font-medium max-w-xl leading-relaxed animate-fade-in-up delay-200">
                        Hệ thống thẩm mỹ uy tín với đội ngũ bác sĩ 15+ năm kinh nghiệm. Cam kết minh bạch, không đại trà, thiết kế phác đồ cá nhân hóa cho từng khách hàng.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up delay-300">
                        <Link href="#booking" className="bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-all flex items-center gap-2 shadow-xl shadow-blue-500/30 ring-4 ring-blue-500/10">
                            Đặt lịch tư vấn <span className="material-symbols-outlined">calendar_month</span>
                        </Link>
                        <Link href="#results" className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-50 transition-all flex items-center gap-2 shadow-lg shadow-slate-200/50">
                            Xem kết quả <span className="material-symbols-outlined">visibility</span>
                        </Link>
                    </div>

                    <div className="flex items-center gap-6 pt-4 animate-fade-in-up delay-400 border-t border-slate-200/60 mt-4">
                        <div className="flex items-center gap-2">
                            <div className="flex -space-x-4">
                                <img alt="Bác sĩ 1" className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiGC1D_KZ3KWaC4cX8FzwsBfIaAwkKvIO2UmQxXKsPIggkoMtCqEDD4JrgHhPnfy2WzrKvw9DxboBpNHceKoqMKJ1YVMoXVbaokMsL-uNmn4bHbgE8Y87Xx9qLwoH1Rg9GAuBMeZLoTzMIAgrB3HRnCC_YGh5cUSO0X0rP82anBoF_fmn3W30YFakw6YttLcYngSxoNO6cLsV_b780aOcBjbOJG65Nl5zqWpedq7hEOXZ9v4k-WLtZx_Oi-jlO0gEhDnW5pWPJJQ" />
                                <img alt="Bác sĩ 2" className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5kLTt72xDKPfKm6DfSN2p2Ad1vD_Z4UQniZ3bHcDGS9FTA2jhMYvboRe8PxvhA-KL2CQBggKzplg5Kkc-6d9nYM4wUlEH7xeC3B6HcpImLPgt0gA-DVxwQHGwK-wwSI-HEhKj57bqRF-UZGrBPnfugEWqUoh-Yr9y-BhOVeEBgiDvFaF5TP_zU7DLI0FQltuLpEjDWOF9Ndp4tCXx0U2SDzNmWSfetCLY9rumrB5HwIwnN-EqmgV1pLOLVFqNW_l4n96jaY_48A" />
                            </div>
                            <div>
                                <div className="font-bold text-slate-900 text-sm">Đội ngũ Bác sĩ</div>
                                <div className="text-xs text-slate-500">Chuyên môn cao</div>
                            </div>
                        </div>
                        <div className="w-px h-10 bg-slate-200"></div>
                        <div>
                            <div className="font-bold text-slate-900 text-2xl">10k+</div>
                            <div className="text-xs text-slate-500">Ca thành công</div>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:block relative h-[700px] w-full animate-fade-in-left">
                    {/* Floating Badge */}
                    <div className="absolute top-20 -left-10 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float">
                        <div className="bg-green-100 p-2 rounded-full text-green-600">
                            <span className="material-symbols-outlined">check_circle</span>
                        </div>
                        <div>
                            <div className="font-bold text-slate-900">Được cấp phép</div>
                            <div className="text-xs text-slate-500">Hoạt động hợp pháp</div>
                        </div>
                    </div>

                    <img
                        alt="Người mẫu thẩm mỹ"
                        className="rounded-[3rem] shadow-2xl border-[10px] border-white object-cover w-full h-full"
                        src="/image/unnamed (8).jpg"
                    />
                    {/* Floating Badge 2 */}
                    <div className="absolute bottom-20 -right-4 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float-delayed">
                        <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                            <span className="material-symbols-outlined">stars</span>
                        </div>
                        <div>
                            <div className="font-bold text-slate-900">Công nghệ cao</div>
                            <div className="text-xs text-slate-500">Không đau - Ít sưng</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
