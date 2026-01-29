export default function SettingsPage() {
    return (
        <div className="flex flex-col items-center justify-center h-96 text-center">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-3xl text-slate-400">settings</span>
            </div>
            <h2 className="text-xl font-bold text-slate-800 mb-2">Cài đặt chung</h2>
            <p className="text-slate-500 max-w-sm">
                Tính năng đang được phát triển. Bạn sẽ sớm có thể quản lý thông tin liên hệ, SEO và các cấu hình khác tại đây.
            </p>
        </div>
    )
}
