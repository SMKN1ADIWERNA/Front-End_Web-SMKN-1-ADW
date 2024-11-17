import HeroSection from "./beranda/HeroSection";
import SchoolStatistik from "./beranda/StatistikSekolah/SchoolStatistik";
import Image from "next/image";
import Agenda from "./agenda/agenda";
import ThumbnailProfile from "./beranda/thumbnailprofile";
import PrestasiSekolah from "./beranda/prestasisekolah";
import KiprahAlumni from "./beranda/KiprahAlumni";


export default function Home() {
  return (
    <div className="bg-gray-100">
      <HeroSection />
      <SchoolStatistik />
      <ThumbnailProfile />
      <PrestasiSekolah />
      <KiprahAlumni />
      <Agenda />
      
      {/*<IndustryPartnershipsPage />       
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
