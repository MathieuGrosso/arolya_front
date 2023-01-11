// import { List } from "postcss/lib/list";

export interface User {
  id: number;
  email: string;
  username:string;
}

export interface Inventory {
  style: Object;
}

export interface _BadgeBaseProps {
  type: "FALSE_TYPE" | "FALSE_TYPE1" | "FALSE_TYPE2";
  text: string;
}


export interface LandingPageProps {
  style: Object;
}


export interface FreshList {
  id: number;
  name: string;
  qty_sold:number;
  unit:string;
  p_bought:number;
  p_sold:number;
  date : string;
  hour:string;
  created_at: Date; 
  valorisation : number;
  user_id : number;
  inventory: number;
  ordered : number;
  promotion : number;
}




 
  

