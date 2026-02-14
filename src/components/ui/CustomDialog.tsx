import React, { ChangeEvent, useEffect, useState } from "react";
import { Button } from "./button"
import axios from "axios";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog"
import { EmailInput } from "./input"
import { Label } from "./label"
import { PlayerTypeSelect } from "./SelectPlayerType"
import {GOOGLE_SHEET_API_LINK} from "../../googleapi";
import { error } from "console";

interface GoogleSheetForm {
  email:string,
  playerSelect:string,
}


export function Popup({buttonVariant}: {buttonVariant?:"default" | "outline"}) {

  const [form,setForm] = useState<GoogleSheetForm>({
    email:"",
    playerSelect:""
  })

  const updateEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      email: event.target.value,
    }));
  };

  const handlePlayerSelect = (value: string) => {
    setForm((prev) => ({
      ...prev,
      playerSelect: value,
    }));
  };


  const onSubmitForm: Function = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (form.email !== "" && form.playerSelect !== ""){
      axios
        .post(GOOGLE_SHEET_API_LINK, form)
        .then(({ data }) => {
        })
        .catch((err) => alert(err.message ));
    } else {
      console.log("Log poslije else",form);

    }
  };



  return (
    <Dialog>
        <DialogTrigger>
        <Button variant={buttonVariant}>
          Request Early Access
        </Button>
      </DialogTrigger>
      <DialogContent className="lg:min-h-119.5 min-h-151.75  flex flex-col lg:gap-0! lg:pt-8 pt-13 ">
        <DialogDescription className="hidden"></DialogDescription>
          <DialogHeader>
          <DialogTitle className="text-foreground text-[30px] font-normal lg:h-18.5 lg:mb-6 mb-1 font-space text-center leading-10 tracking-[-3%] ">
            Request Early<br></br><span className="text-primary font-gilroy text-[40px] leading-10 font-semibold tracking-[-3%]">Access</span>
          </DialogTitle>
          <div className="flex flex-col lg:gap-1 gap-4 items-center lg:mb-7.5 mb-11">
            <p className="text-foreground text-center font-inter sm:leading-5 font-light lg:text-[16px]  text-[14px] weight-300 lg:max-w-[384px] max-w-58.5">
            PokerEdge is built for understanding, not shortcuts.
            </p>
            <p className="text-gray-400 text-center font-inter font-light text-[13px] lg:leading-5 weight-300 lg:max-w-109.5 max-w-66.5">
            We’re opening PokerEdge to a small group of serious players while we refine learning quality, pattern accuracy, and feedback depth.
            </p>
          </div> 
          <form className="flex flex-col gap-4 items-center lg:mb-7.5 mb-11" onSubmit={(e) => onSubmitForm(e)}>
          <EmailInput name="email" onChange={updateEmail}></EmailInput> 
          <PlayerTypeSelect placeholder="Player Type" onValueChange={handlePlayerSelect} ></PlayerTypeSelect>         
          <Button variant="default" type="submit" className="mt-2">Request Early Access</Button>
          </form>         
        </DialogHeader>
        <DialogFooter>
          <p className="text-foreground/30 text-[13px] lg:leading-2 mx-auto font-inter font-light lg:max-w-109.5 max-w-66.5 text-center">
            No automation. No real-time play assistance.
        </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
