
import Image from "next/image";

export default function Facilities() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <span className="text-primary font-bold tracking-widest uppercase text-sm">Cơ sở vật chất</span>
                            <h2 className="text-3xl font-display font-bold text-slate-900">Hệ Thống Phòng Mổ <br /> Vô Khuẩn Một Chiều</h2>
                            <p className="text-slate-600 text-lg">
                                Trang bị hệ thống lọc khí áp lực dương, đảm bảo không khí trong phòng mổ luôn sạch khuẩn. Các thiết bị theo dõi sinh tồn, máy gây mê hiện đại nhất từ Mỹ và Đức.
                            </p>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                <span className="material-symbols-outlined text-4xl text-blue-500">cleaning_services</span>
                                <div>
                                    <h4 className="font-bold text-slate-900">Vô trùng tuyệt đối</h4>
                                    <p className="text-sm text-slate-500">Quy trình xử lý dụng cụ tiêu chuẩn Châu Âu.</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                <span className="material-symbols-outlined text-4xl text-blue-500">monitor_heart</span>
                                <div>
                                    <h4 className="font-bold text-slate-900">Hồi sức cấp cứu</h4>
                                    <p className="text-sm text-slate-500">Đầy đủ trang thiết bị hỗ trợ 24/7.</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                <span className="material-symbols-outlined text-4xl text-blue-500">bed</span>
                                <div>
                                    <h4 className="font-bold text-slate-900">Phòng hậu phẫu 5 sao</h4>
                                    <p className="text-sm text-slate-500">Tiện nghi, riêng tư, thoải mái như ở nhà.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="relative h-[600px] w-full">
                        <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-3xl overflow-hidden shadow-2xl z-10 border-4 border-white">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyKfYe5R7nL12rlD-FR-SD0OMS8iFKl60Ihar2_RXNStVsLTquAw92nYPg9IIT4Ci5959ti3b09PXCdht9nf4AqmL1RKGABqcCL4fDg5EFTdW31WMOnnbZaLGQTbtWy7c_uhbppbBC7dpKWHs_cX-aL7-o3X0DZK5tLXCBsB7l6lo8sRE_jZtGlVvT3EFRA3iGlvMjE5XJPrYZYfILJR5GMbsJtv_SUJOmiBF1uLeNz-pS3Imlmnj1KzTMW0Cyl_62VsCb_aj3vA"
                                alt="Phòng mổ"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute bottom-0 left-0 w-3/4 h-3/4 rounded-3xl overflow-hidden shadow-2xl z-20 border-4 border-white">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT0y2Pb0pw0Zzb5RQzdUirmvXQ5YjcNmiczeoiP9zQJ5KncrCMsoxmu0W9nqQLqWErNuh2U8u9oehiS_DHSkIGsv3p3OenHDZqvn_5FVSo0-FBygfgcNAxOY7qmyPohIjZnWrB6lmnzWrxnlyagcC3F0ZcVuuTNcJt_96mhd65If8Vz-rwXUjQZfUobcrHJVNKkeBfc3mZNtbE4cufCVyQv4HvytBx7hduDV6Myqw66-2EC5rk3r0EFWbkuQ7899r-sE_ahZsZHA"
                                alt="Phòng tư vấn"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
