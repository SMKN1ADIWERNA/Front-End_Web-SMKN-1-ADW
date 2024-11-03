import HeroSection from "./beranda/HeroSection";
import SchoolStatistik from "./beranda/StatistikSekolah/SchoolStatistik";
import Image from "next/image";


export default function Home() {
  return (
    <div className="bg-gray-100">
      <HeroSection />
      <SchoolStatistik />
      {/*<Agenda />
      <IndustryPartnershipsPage />       
      <TrendingArticles />
      <SchoolStaffTeacher />
      <WidgetKejuruan />
      <WidgetEkstra />
      <Widget />
      <ImpactSection />
      <Footer /> */}
    </div>
  );
}
