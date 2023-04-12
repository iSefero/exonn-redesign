import {CSSProperties} from "react";

export function mergeStyles(...income: any): CSSProperties {
  return income.reduce((styles: CSSProperties, cur: any) => ({ ...styles, ...cur }), {});
}
