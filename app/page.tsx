"use client"
import Hero from "@/components/organisms/Hero"
import SvgAnimation from "@/components/organisms/SvgAnimation"
import RestrictionComponent from "@/components/organisms/RestrictionComponent"
import InvestComponent from "@/components/organisms/InvestComponent"
import BasicsComponent from "@/components/organisms/Basicscomponent.tsx";
import SafeComponent from "@/components/organisms/SafeComponent";
import Products from "@/components/organisms/Products";
import UsersCountComponent from "@/components/organisms/UsersCountComponent";
import ConversationComponent from "@/components/organisms/ConversationComponent";
import DownloadComponent from "@/components/organisms/DownloadComponent";
import MobileNav from "@/components/organisms/MobileNav";
import { useContext } from "react";
import { NavigationContext } from "@/contextProvider/Provider";

export default function Home() {
  const context = useContext(NavigationContext)
   if(context === undefined){
    return
   } const {isMenuOpen, setIsMenuOpen } = context;
  
   console.log(isMenuOpen)
  return (
    <div className="">
      {isMenuOpen && <MobileNav />}
      <Hero />
      <SvgAnimation />
      <RestrictionComponent />
      <InvestComponent />
      <BasicsComponent />
      <SafeComponent />
      <Products />
      <UsersCountComponent />
      <ConversationComponent />
      <DownloadComponent />
    </div>
  );
}