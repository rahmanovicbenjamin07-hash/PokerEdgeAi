import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./select"
import MojaIkonica from "../../assets/SelectIconArrow.svg"; 

interface PlayerTypeSelectProps {
  placeholder: string;
  onValueChange?: (value: string) => void; 
}

const PlayerTypeSelect: React.FC<PlayerTypeSelectProps> = ({ placeholder, onValueChange}) =>  {
  return (

    <div className="lg:w-109.5 w-66.5">
        <Select onValueChange={onValueChange}>
      <SelectTrigger className="relative h-12! py-3 pl-4 pr-0 w-full rounded-full border bg-primary/10 shadow-md focus:outline-none text-center         
            border-primary 
            [&>svg:last-child]:hidden
            text-foreground/70 placeholder:font-light placeholder:text-[13px] placeholder:leading-5 text-[13px] font-light leading-5 font-space
            
            focus:ring-0 focus:border-primary">
        <SelectValue placeholder={placeholder} />
        <img 
            src={MojaIkonica} 
            alt="icon" 
            className="h-4 w-4 opacity-75 mr-3 object-contain" 
          />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Player Type</SelectLabel>
          <SelectItem value="Player 1">Player 1</SelectItem>
          <SelectItem value="Player 2">Player 2</SelectItem>
          <SelectItem value="Player 3">Player 3</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>

    
  )
}

export {PlayerTypeSelect};
