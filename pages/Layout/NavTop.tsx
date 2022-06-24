import GoBackButton from "../../components/buttons/GoBackButton";
import GoNextButton from "../../components/buttons/GoNextButton";
import { dropdownIcon, userIcon } from "../../public/Svgs";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const NavTop = () => {
  const router = useRouter();
  const [scrollDown, setScrollDown] = useState(false);
  //trackScrolling
  let lastScroll: number = 0;
  const trackScrolling = () => {
    // scroll down
    const tes = document.getElementById("scrollcontainer");
    tes && console.log(tes?.scrollTop);
    if (tes && tes.scrollTop <= 0) {
      lastScroll = tes?.scrollTop;
      setScrollDown(false);
      console.log("arriba");
    }
    // scroll top
    else if (tes && tes.scrollTop > 0) {
      lastScroll = tes?.scrollTop;
      setScrollDown(true);
      console.log("abajo");
    }
  };
  useEffect(() => {
    document
      .getElementById("scrollcontainer")
      ?.addEventListener("scroll", trackScrolling);
    return () => {
      document
        .getElementById("scrollcontainer")
        ?.removeEventListener("scroll", trackScrolling);
    };
  }, [router]);
  return (
    <div
      className={`flex justify-between absolute z-50  py-4 pr-8 pl-8 w-full ${scrollDown ? "bg-black" : "bg-transparent"}`}
    >
      <div className="flex">
        <div className="mr-4">
          <GoBackButton />
        </div>
        <GoNextButton />
      </div>
      <div className="flex">
        <button className="rounded-full px-6 py-1 border-[#5c5b5b] hover:border-white text-white font-[Gotham-medium] text-sm hover:scale-105 cursor-default border hover:bg-brown-dark">
          Premium
        </button>
        <button className="bg-brown-dark hover:bg-brown-light text-white font-[Gotham-medium] ml-10 rounded-full flex p-[2px] pr-3 items-center text-sm">
          <span className="rounded-full bg-[#434242] p-2 mr-2">{userIcon}</span>
          Usuario1 <span className="ml-2">{dropdownIcon} </span>
        </button>
      </div>
    </div>
  );
};

export default NavTop;
