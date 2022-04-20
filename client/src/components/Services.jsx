import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from 'react-icons/bi';
import { RiHeart2Fill } from 'react-icons/ri';

const ServiceCard = ({ color, title, icon, subtitle }) => (
    <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl" >
        <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
        {icon}
        </div>
        <div className="ml-5 flex flex-col flex-1">
            <h3 className="mt-2 text-white text-lg">{title}</h3>
            <p className="mt-2 text-white text-sm md:w-9/12">{subtitle}</p>
        </div>
    </div>
)

const Services = () => {
    return(
    
    <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
                <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient">Services that we
                    <br />
                    continue to improve
                </h1>

          
        </div>
        
        <div className="flex-1 flex flex-col justify-start items-center">
            <ServiceCard 
                color="bg-[#2952E3]"
                title="Security Guaranteed"
                icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
                subtitle="Your security is important to us. Your private data is never stored."
            />

             <ServiceCard 
                color="bg-[#8945F8]"
                title="Competitive Exchange Rates"
                icon={<BiSearchAlt fontSize={21} className="text-white" />}
                subtitle="Competitive exchange rates for ETH and ERC-20 tokens via Metamask."
            />
            <ServiceCard 
                color="bg-[#F84550]"
                title="Decentralize your finances"
                icon={<RiHeart2Fill fontSize={21} className="text-white" />}
                subtitle="Take control of your finances with a variety of Defi investment products."
            />
        </div>
    </div>
</div>

    
    );
}
export default Services;