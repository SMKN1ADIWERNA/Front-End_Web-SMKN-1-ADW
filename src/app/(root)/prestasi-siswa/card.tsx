import { Award } from "lucide-react";

const Card = () => {
  const achievements = [
    { title: "Juara 1 Lomba Cerdas Cermat", image: "/path-to-image1.jpg" },
    { title: "Juara Umum Olimpiade Sains", image: "/path-to-image2.jpg" },
    { title: "Juara 2 Kompetisi Debat", image: "/path-to-image3.jpg" },
  ];

  return (
    <section className="py-8 px-4 md:px-8">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">
        Prestasi Unggulan
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition duration-300 p-4"
          >
            <img
              src={achievement.image}
              alt={achievement.title}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-2">
              <h3 className="text-md font-bold flex items-center">
                <Award className="mr-2 text-blue-500" />
                {achievement.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card;
