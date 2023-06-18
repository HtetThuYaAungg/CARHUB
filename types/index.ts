import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    btnType?: "button" | "submit";
    title: string;
    containerStyles?: string;
    textStyles?: string;
    rightIcon?: string;
    isDisable?: boolean;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManufacturerPorps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
    selected: string;
    setSelected: (selected: string) => void;
}

export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;

}

export interface FilterProps{
    manufacturer?: string;
    year?: number;
    fuel?: string;
    limit?: number;
    model?: string;
}

export interface OptionProps{
    title: string;
    value: string;
}

export interface CustomFilterProps<T>{
    title: string;
    setFilter: (selected: T) => void;
    options: OptionProps[];
}

export interface ShowMoreProps{
    pageNumber: number;
    isNext: boolean;
    setLimit: (limit: number) => void;
}

export interface SearchBarProps {
    setManufacturer: (manufacturer: string) => void;
    setModel: (model: string) => void;
  }


export type CarState =  CarProps[] & { message?: string };