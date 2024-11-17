import React from "react";
import { Quote } from "lucide-react";

const KiprahAlumni: React.FC = () => {
    const testimonies = [
        {
            id: 1,
            quote:
                "SMKN 1 Adiwerna memberikan fondasi yang kuat untuk karier saya di bidang teknologi. Pengalaman belajar di sini sangat berharga.",
            author: "Andi Santoso",
            role: "Software Engineer di Google",
            image: "https://source.unsplash.com/100x100/?person,man",
        },
        {
            id: 2,
            quote:
                "Belajar di SMKN 1 Adiwerna membuka peluang besar bagi saya untuk menjadi seorang entrepreneur sukses. Ilmunya sangat aplikatif.",
            author: "Siti Aulia",
            role: "CEO di Aulia Fashion",
            image: "https://source.unsplash.com/100x100/?person,woman",
        },
        {
            id: 3,
            quote:
                "SMKN 1 Adiwerna memberikan kesempatan untuk berkembang tidak hanya secara akademik tetapi juga keterampilan sosial.",
            author: "Rahmat Hidayat",
            role: "Head of Marketing di Tokopedia",
            image: "https://source.unsplash.com/100x100/?person,business",
        },
    ];

    return (
        <div className="relative dark:bg-gray-900">
            <div className="container mx-auto px-4 py-8 dark:bg-gray-900">
                <h1 className="text-2xl font-bold text-blue-600 mb-1 mt-3 md:text-left dark:text-blue-400">
                    Kiprah Alumni
                </h1>
                <p className="text-lg text-gray-600 mb-12 md:text-left dark:text-gray-300">
                    Lihat Kiprah Alumni Unggulan Kami
                </p>      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonies.map((testimony) => (
                        <div
                            key={testimony.id}
                            className="bg-white p-6 shadow-lg rounded-lg border border-gray-200"
                        >
                            <Quote className="text-gray-300 w-8 h-8 mb-4" />
                            <blockquote className="italic text-gray-700 mb-4">
                                "{testimony.quote}"
                            </blockquote>
                            <div className="flex items-center">
                                <img
                                    src={testimony.image}
                                    alt={`Avatar of ${testimony.author}`}
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                <div>
                                    <p className="font-bold text-gray-900">{testimony.author}</p>
                                    <p className="text-sm text-gray-600">{testimony.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default KiprahAlumni;
