
import MinorSurgeryLanding from "@/components/services/MinorSurgeryLanding";
import MajorSurgeryLanding from "@/components/services/MajorSurgeryLanding";
import { notFound } from "next/navigation";
import BookingForm from "@/components/home/BookingForm";

interface PageProps {
    params: Promise<{
        type: string;
    }>
}

export function generateStaticParams() {
    return [
        { type: "tieu-phau" },
        { type: "dai-phau" }
    ];
}

export default async function ServiceTypePage({ params }: PageProps) {
    const { type } = await params;

    if (type === 'tieu-phau') {
        return (
            <main className="min-h-screen pt-20">
                <MinorSurgeryLanding />
                <BookingForm />
            </main>
        );
    } else if (type === 'dai-phau') {
        return (
            <main className="min-h-screen pt-20">
                <MajorSurgeryLanding />
                <BookingForm />
            </main>
        );
    } else {
        return notFound();
    }
}
