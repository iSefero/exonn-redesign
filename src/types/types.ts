import { MouseEventHandler, ReactNode, RefObject} from "react";

type Specification = {
  label: string
  data: string
}

export interface ISpecification {
  data: Specification[]
  specificRef: RefObject<HTMLParagraphElement>
}

export interface IMenuItem {
  label?: string;
  menuItem?: {
    label: string
  }[]
}

export interface IMenuExtraItem {
  label: string;
  menuItem?: IMenuItem[];
}

export interface IMenuItemArray {
  buttonItem: IMenuExtraItem[];
}

export interface IExtraCard {
  src: string,
  title: string,
  priceOld?: string,
  price: string,
  rating: number,
  available: boolean
}

export interface IWindowSize {
  showUpButton: boolean;
  handleUpClick: MouseEventHandler<HTMLDivElement> | undefined;
}

export interface ILayout {
  children: ReactNode
}