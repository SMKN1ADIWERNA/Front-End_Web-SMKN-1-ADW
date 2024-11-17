import React from "react";
import { Building, Link2 } from "lucide-react";

const Kerjasama: React.FC = () => {
    const partnerships = [
        {
            id: 1,
            name: "PT Astra International",
            description:
                "Kerja sama dalam bidang pelatihan otomotif dan magang untuk siswa.",
            icon: "https://source.unsplash.com/100x100/?industry",
        },
        {
            id: 2,
            name: "Google Indonesia",
            description:
                "Kolaborasi dalam pengembangan aplikasi dan pelatihan digital marketing.",
            icon: "https://source.unsplash.com/100x100/?technology",
        },
        {
            id: 3,
            name: "Tokopedia",
            description:
                "Program pelatihan kewirausahaan bagi siswa SMKN 1 Adiwerna.",
            icon: "https://source.unsplash.com/100x100/?ecommerce",
        },
        {
            id: 4,
            name: "Unilever Indonesia",
            description:
                "Kerja sama dalam pengelolaan limbah ramah lingkungan dan CSR.",
            icon: "https://source.unsplash.com/100x100/?environment",
        },
        {
            id: 5,
            name: "PLN (Persero)",
            description:
                "Pelatihan instalasi listrik dan peluang kerja di bidang kelistrikan.",
            icon: "https://source.unsplash.com/100x100/?electricity",
        },
        {
            id: 6,
            name: "Bank Indonesia",
            description:
                "Edukasi keuangan dan literasi ekonomi bagi siswa.",
            icon: "https://source.unsplash.com/100x100/?finance",
        },
    ];

    return (
        <div className="relative dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8 dark:bg-gray-900">
            <h1 className="text-2xl font-bold text-blue-600 mb-1 mt-3 md:text-left dark:text-blue-400">
                Kerjasama
            </h1>
            <p className="text-lg text-gray-600 mb-12 md:text-left dark:text-gray-300">
                Lihat Kerjasama Unggulan Kami
            </p>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {partnerships.map((partner) => (
                    <div
                        key={partner.id}
                        className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 flex items-center space-x-4"
                    >
                        <img
                            src={partner.icon}
                            alt={partner.name}
                            className="w-16 h-16 rounded-full"
                        />
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">
                                {partner.name}
                            </h2>
                            <p className="text-gray-600 text-sm">{partner.description}</p>
                            <div className="mt-2 flex items-center space-x-2 text-sm text-gray-500">
                                <Building className="w-4 h-4" />
                                <Link2 className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default Kerjasama;
