import Banner from "./components/home/banner";
import CzteryPoryRoku from "./components/home/czterypory";
import DlaKogo from "./components/home/dlakogo";
import FAQ from "./components/home/faq";
import RegulaminPobytu from "./components/home/regulamin";
import SekcjaDomow from "./components/home/sekcjadomow";
import Warsztaty from "./components/home/wartszaty";
import WCenie from "./components/home/wcenie";
import WynajemWylacznosc from "./components/home/wynajem";

export default function Page() {
  return (



    <div className="min-h-full flex flex-col text-[#362312]">

<Banner />
<SekcjaDomow />
<WCenie />
    <WynajemWylacznosc />
    <DlaKogo /> 
    <Warsztaty />
    <CzteryPoryRoku />
    <FAQ />
    <RegulaminPobytu />
    </div>
  );
}