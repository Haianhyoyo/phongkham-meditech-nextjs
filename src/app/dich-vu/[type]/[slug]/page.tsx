
import { servicesData } from "@/data/services";
import MinorSurgeryLayout from "@/components/services/MinorSurgeryLayout";
import MajorSurgeryLayout from "@/components/services/MajorSurgeryLayout";
import { notFound } from "next/navigation";
import BookingForm from "@/components/home/BookingForm";

interface PageProps {
    params: Promise<{
        type: string;
        slug: string;
    }>
}

export async function generateStaticParams() {
    return servicesData.map((service) => ({
        type: service.type,
        slug: service.slug,
    }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
    const { type, slug } = await params;
    const service = servicesData.find(
        (s) => s.slug === slug && s.type === type
    );

    if (!service) {
        return notFound();
    }

    return (
        <main className="min-h-screen pt-20">
            {service.type === 'tieu-phau' ? (
                <MinorSurgeryLayout service={service} />
            ) : (
                <MajorSurgeryLayout service={service} />
            )}
            <BookingForm />
        </main>
    );
}
