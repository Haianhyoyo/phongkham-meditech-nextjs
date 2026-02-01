import Image from "next/image";
import Link from "next/link";

export default function Safety() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary font-bold text-sm border border-primary/20">
                            <span className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-base">verified_user</span>
                                Cam kết an toàn tuyệt đối
                            </span>
                        </div>
                        <h2 className="text-4xl font-display font-bold text-slate-900">
                            Quy Trình Chuẩn Y Khoa <br />
                            <span className="text-primary">An Tâm Làm Đẹp</span>
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Chúng tôi đặt sự an toàn của khách hàng lên hàng đầu với quy trình vô trùng khép kín, đội ngũ gây mê hồi sức chuyên nghiệp và chế độ chăm sóc hậu phẫu tận tâm.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4">
                                <span className="material-symbols-outlined text-green-600 mt-1">check_circle</span>
                                <div>
                                    <strong className="text-slate-900 block">Quy trình vô khuẩn</strong>
                                    <span className="text-slate-600 text-sm">Hệ thống phòng mổ áp lực dương một chiều.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="material-symbols-outlined text-green-600 mt-1">check_circle</span>
                                <div>
                                    <strong className="text-slate-900 block">Gây mê an toàn</strong>
                                    <span className="text-slate-600 text-sm">Bác sĩ gây mê chuyên khoa theo dõi suốt quá trình.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="material-symbols-outlined text-green-600 mt-1">check_circle</span>
                                <div>
                                    <strong className="text-slate-900 block">Minh bạch pháp lý</strong>
                                    <span className="text-slate-600 text-sm">Hoạt động dưới sự cấp phép của Sở Y Tế.</span>
                                </div>
                            </li>
                        </ul>
                        <div className="pt-4">
                            <Link href="/ve-chung-toi" className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-dark transition-colors">
                                Xem giấy phép hoạt động <span className="material-symbols-outlined">description</span>
                            </Link>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-slate-100 rounded-3xl p-8 border border-slate-200">
                            {/* Placeholder for License Image / Certificate */}
                            <div className="aspect-[4/3] bg-white rounded-xl shadow-inner flex items-center justify-center border-2 border-dashed border-slate-300">
                                <div className="text-center p-6">
                                    <span className="material-symbols-outlined text-6xl text-slate-300 mb-4">badge</span>
                                    <p className="text-slate-500 font-medium">Hình ảnh Giấy phép Hoạt động / Chứng chỉ</p>
                                    {/* <p className="text-xs text-slate-400 mt-2">(Vui lòng cập nhật hình ảnh thực tế)</p> */}
                                    <img src="/image/bangcap.jpg" alt="Giấy phép hoạt động" />
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">security</span>
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900">Bảo hành trọn đời</div>
                                        <div className="text-xs text-slate-500">Cam kết chất lượng dịch vụ</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
