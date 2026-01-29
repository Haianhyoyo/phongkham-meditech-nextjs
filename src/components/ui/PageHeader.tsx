import Image from "next/image";

interface PageHeaderProps {
    title: string;
    description?: string;
    backgroundImage: string;
    overlayClass?: string;
}

export default function PageHeader({ title, description, backgroundImage, overlayClass = "hero-gradient-dark" }: PageHeaderProps) {
    return (
        <section className="relative py-24 md:py-32 flex items-center overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src={backgroundImage}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className={`absolute inset-0 ${overlayClass} opacity-90`}></div>
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-shadow-lg">{title}</h1>
                {description && (
                    <p className="text-xl text-white max-w-3xl mx-auto font-medium leading-relaxed text-shadow">
                        {description}
                    </p>
                )}
            </div>
        </section>
    );
}
