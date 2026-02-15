import React from "react";
import { Button } from "./button";
import Logo from "../../assets/logo.png";
import { Popup } from "./CustomDialog";


export function Navigation() {
    return(
        <div className="z-50 flex flex-row items-center lg:justify-between justify-center w-full  px-8.25 right-0 fixed top-0 left-0 max-w-341.5 mx-auto lg:py-[19.5px] py-12">
                <div className="flex items-center relative">
                    <img src={Logo} alt="Logo" className="object-contain z-2 lg:block hidden" />  
                    <img src={Logo} alt="Logo" className="object-contain z-2 lg:hidden block" />  
                    <div className="bg-[#42CC52] h-4.5 w-8.5 absolute right-[25%] bottom-[-5%] blur-[44px] rounded-full"></div>  
                </div>  
                <div className="lg:block hidden">
                    <Popup buttonVariant="outline" btnplaceholder="Early"/> 
                </div>
                            
        </div>
    );

}
