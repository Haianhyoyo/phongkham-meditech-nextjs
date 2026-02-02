"use client";

import MinorSurgeryLayout from "@/components/services/MinorSurgeryLayout";
import MajorSurgeryLayout from "@/components/services/MajorSurgeryLayout";
import { notFound } from "next/navigation";
import BookingForm from "@/components/home/BookingForm";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function ServiceDetailPage() {
    const params = useParams();
    const type = params.type as string;
    const slug = params.slug as string;

    const [service, setService] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchService = async () => {
            try {
                const res = await fetch(`/api/services`);
                const data = await res.json();
                const found = data.find((s: any) => s.slug === slug && s.type === type);

                const safeJsonParse = (str: string | null) => {
                    if (!str) return [];
                    try {
                        return JSON.parse(str);
                    } catch (e) {
                        return [];
                    }
                };

                if (found) {
                    const parsed = {
                        ...found,
                        name: found.title,
                        candidates: safeJsonParse(found.candidates),
                        process: safeJsonParse(found.process),
                        faq: safeJsonParse(found.faq),
                        risks: safeJsonParse(found.risks),
                        realImages: safeJsonParse(found.realImages),
                        shortDesc: found.description || ""
                    };
                    setService(parsed);
                }
            } catch (error) {
                console.error("Failed to fetch service detail", error);
            } finally {
                setLoading(false);
            }
        };
        fetchService();
    }, [type, slug]);

    if (loading) return null;
    if (!service) return notFound();

    return (
        <main className="min-h-screen">
            {service.type === 'tieu-phau' ? (
                <MinorSurgeryLayout service={service} />
            ) : (
                <MajorSurgeryLayout service={service} />
            )}
            <BookingForm />
        </main>
    );
}
