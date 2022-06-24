import NavTop from "./NavTop";
import PanelLeft from "./PanelLeft";
import Reproductor from "./Reproductor";

const index = ({ children }: any) => {
  return (
    <div className="flex w-full bg-[#121212]">
      <PanelLeft />
      <main className="w-full relative">
        <NavTop />
        <div>{children}</div>
      </main>
      <Reproductor />
    </div>
  );
};

export default index;
