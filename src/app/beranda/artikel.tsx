import React from "react";

const Artikel: React.FC = () => {
    const articles = [
        {
            id: 1,
            title: "Peningkatan Kompetensi Guru di Era Digital",
            description:
                "Artikel ini membahas pentingnya pelatihan teknologi untuk guru agar siap menghadapi tantangan era digital.",
            date: "17 November 2024",
            image: "https://source.unsplash.com/400x200/?teacher,training",
        },
        {
            id: 2,
            title: "Pengembangan Siswa dalam Ekstrakurikuler",
            description:
                "Bagaimana ekstrakurikuler membantu siswa mengembangkan soft skills mereka.",
            date: "10 November 2024",
            image: "https://source.unsplash.com/400x200/?student,activity",
        },
        {
            id: 3,
            title: "SMK Siap Kerja: Program Link and Match",
            description:
                "Kerjasama industri untuk menciptakan lulusan siap kerja melalui program link and match.",
            date: "5 November 2024",
            image: "https://source.unsplash.com/400x200/?industry,education",
        },
        {
            id: 4,
            title: "Mengintegrasikan Teknologi dalam Pembelajaran",
            description:
                "Cara mengoptimalkan pembelajaran menggunakan teknologi modern di ruang kelas.",
            date: "1 November 2024",
            image: "https://source.unsplash.com/400x200/?classroom,technology",
        },
        {
            id: 5,
            title: "Peran Orang Tua dalam Pendidikan Anak",
            description:
                "Diskusi tentang bagaimana peran orang tua dapat mendukung pendidikan anak di rumah.",
            date: "28 Oktober 2024",
            image: "https://source.unsplash.com/400x200/?parents,education",
        },
        {
            id: 6,
            title: "Persiapan Karir di Era Industri 4.0",
            description:
                "Strategi untuk mempersiapkan siswa menghadapi tantangan karir di era industri 4.0.",
            date: "20 Oktober 2024",
            image: "https://source.unsplash.com/400x200/?career,technology",
        },
    ];

    return (
        <div className="relative dark:bg-gray-900">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold text-blue-600 mb-1 mt-3 md:text-left dark:text-blue-400">
                    Artikel Sekolah
                </h1>
                <p className="text-lg text-gray-600 mb-12 md:text-left dark:text-gray-300">
                    Lihat Artikel Sekolah Unggulan Kami
                </p>
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {articles.map((article) => (
                        <div
                            key={article.id}
                            className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
                        >
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4 flex flex-col">
                                <h2 className="text-lg font-bold text-gray-900">{article.title}</h2>
                                <p className="text-sm text-gray-600 mb-2">{article.date}</p>
                                <p className="text-gray-700 mb-4">{article.description}</p>
                                <button className="mt-auto px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded hover:bg-blue-700 transition">
                                    Baca Selengkapnya
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Artikel;
