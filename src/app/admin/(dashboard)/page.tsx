export default function AdminDashboard() {
    return (
        <div>
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-slate-800">Tổng quan</h1>
                <p className="text-slate-600">Chào mừng trở lại trang quản trị Meditech (V2).</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* KPI Cards Placeholder */}
                {[
                    { title: "Đặt lịch mới", value: "12", icon: "calendar_today", color: "bg-blue-500" },
                    { title: "Liên hệ mới", value: "5", icon: "mail", color: "bg-green-500" },
                    { title: "Dịch vụ", value: "24", icon: "medical_services", color: "bg-purple-500" },
                    { title: "Tin tức", value: "48", icon: "article", color: "bg-orange-500" },
                ].map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center text-white shadow-lg shadow-${item.color.replace('bg-', '')}/30`}>
                            <span className="material-symbols-outlined">{item.icon}</span>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-500">{item.title}</p>
                            <p className="text-2xl font-bold text-slate-800">{item.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-96 flex items-center justify-center text-slate-400">
                <p className="flex items-center gap-2">
                    <span className="material-symbols-outlined">bar_chart</span>
                    Biểu đồ thống kê sẽ được cập nhật ở giai đoạn tiếp theo
                </p>
            </div>
        </div>
    );
}
