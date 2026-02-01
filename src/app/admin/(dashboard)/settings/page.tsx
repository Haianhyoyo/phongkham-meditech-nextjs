"use client";

import { useState, useEffect } from "react";

export default function SettingsPage() {
    const [settings, setSettings] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        fetchSettings();
    }, []);

    const fetchSettings = async () => {
        try {
            const res = await fetch("/api/settings");
            const data = await res.json();
            setSettings(data);
        } catch (error) {
            alert("Không thể tải cài đặt");
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (key: string, value: string) => {
        setSettings(prev => prev.map(s => s.key === key ? { ...s, value } : s));
    };

    const handleSave = async (key: string) => {
        const item = settings.find(s => s.key === key);
        if (!item) return;

        setSaving(true);
        try {
            const res = await fetch("/api/settings", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(item),
            });
            if (res.ok) {
                alert(`Đã lưu: ${key}`);
            } else {
                alert("Lỗi khi lưu");
            }
        } catch (error) {
            alert("Lỗi kết nối");
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <div>Đang tải...</div>;

    const groups = ["general", "contact", "social"];

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-slate-900 mb-8">Cài đặt hệ thống</h1>

            {groups.map(group => (
                <div key={group} className="mb-10 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                    <div className="bg-slate-50 px-6 py-4 border-b border-slate-100">
                        <h2 className="text-sm font-bold text-slate-600 uppercase tracking-wider">
                            {group === "general" ? "Thông tin chung" : group === "contact" ? "Liên hệ" : "Mạng xã hội"}
                        </h2>
                    </div>
                    <div className="p-6 space-y-6">
                        {settings.filter(s => s.group === group).map(item => (
                            <div key={item.key} className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-slate-700">{item.key}</label>
                                <div className="flex gap-2">
                                    {item.key.includes("embed") || item.key.includes("description") ? (
                                        <textarea
                                            value={item.value}
                                            onChange={(e) => handleChange(item.key, e.target.value)}
                                            className="flex-1 px-4 py-2 rounded-lg border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm transition-all"
                                            rows={3}
                                        />
                                    ) : (
                                        <input
                                            type="text"
                                            value={item.value}
                                            onChange={(e) => handleChange(item.key, e.target.value)}
                                            className="flex-1 px-4 py-2 rounded-lg border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm transition-all"
                                        />
                                    )}
                                    <button
                                        onClick={() => handleSave(item.key)}
                                        disabled={saving}
                                        className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 disabled:opacity-50 transition-all"
                                    >
                                        Lưu
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
