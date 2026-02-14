import React from "react";
import { Button } from "../ui/button";
import heroBg from "@/assets/heroSectionBackground.png"
import heroBgMobile from "@/assets/heroSectionBackgroundMobile.png"
import { Popup } from "./CustomDialog";

export function HeroSection () {
    return(
        <section className="relative flex min-h-screen w-full lg:items-end items-strech justify-center bg-[linear-gradient(180deg,#050A0F_06%,#051C0D_100%)]">
            <div className="absolute inset-x-0 bottom-0 lg:h-97.25  sm:h-50
            bg-[linear-gradient(180deg,rgba(33,43,42,0)_0%,rgba(10,21,16,0.8)_40%)] z-1">
            </div>
            <img src={heroBg} alt="Hero Background" className="absolute top-0 h-full w-full object-cover object-[50%_30%] lg:block hidden  bg-center" />
            <img src={heroBgMobile} alt="Hero Background" className="absolute top-0 h-full w-full object-cover object-[50%_30%] lg:hidden block  bg-center" />
            <div className="max-w-171 flex flex-col lg:gap-8 items-center justify-between z-10 lg:pb-8 pb-6 lg:h-full sm:h-screen pt-29.25">        

                {/* Text i heading */}

                <div className="flex flex-col gap-8 items-center">
                    <div className="flex flex-col gap-6 lg:max-w-171 max-w-69">
                        <h1 className="flex flex-col items-center text-foreground font-space lg:text-[30px] text-[26px]">Understand the edge.
                            <span className="text-foreground font-gilroy text-5xl font-bold weight-[400]">Earn it.</span></h1>
                        <p className="text-foreground/90 font-inter font-light weight-[300] text-center">PokerEdge is an AI-powered intelligence layer that helps players understand decisions, patterns, and risk in real time, without telling them what to do.</p>
                    </div>
                </div> 

                {/* Button i donji tekst */}

                <div className="flex flex-col lg:gap-8 gap-25">
                    <Popup />                  
                    <p className="font-inter weight-[300] font-light text-[11px] text-foreground/80">PokerEdge.ai is developed and operated by Biggbird Ltd, Gibraltar</p>
                </div>

            </div>
        </section>       
    )
}

export default HeroSection; 