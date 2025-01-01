import { ChevronDown } from "lucide-react";

const Cover = () => {
  return (
    <section className="relative h-64 md:h-80 lg:h-[500px] bg-cover bg-center bg-no-repeat" 
             style={{ backgroundImage: `url('https://smkn1adw.sch.id/fp/sites/default/files/field/image/WhatsApp%20Image%202019-12-19%20at%2009.56.44.jpeg')` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full text-white">
        <h1 className="text-3xl md:text-5xl font-bold tracking-wide">
          Prestasi Siswa
        </h1>
        <p className="mt-4 text-md md:text-lg max-w-lg">
          Rayakan keberhasilan luar biasa siswa kami di berbagai bidang akademik dan non-akademik.
        </p>
        <button className="mt-6 flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-md transform hover:scale-105 transition duration-300">
          Lihat Selengkapnya
          <ChevronDown />
        </button>
      </div>
    </section>
  );
};

export default Cover;
