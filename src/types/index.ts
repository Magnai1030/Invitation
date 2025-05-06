import { ReactNode } from "react";

export enum PersonType {
  MAGNAI = "MAGNAI",
  ARI = "ARI",
}
export enum PageType {
  TYPE_PAGE = "TYPE_PAGE",
  TEXT_PAGE = "TEXT_PAGE",
  INFO_PAGE = "INFO_PAGE",
}
export const PERSON_TYPE_NAME: { [key in PersonType]: string } = {
  MAGNAI: "Батмагнай",
  ARI: "Ариунжаргал",
};

export const PERSON_TYPE_DATE: { [key in PersonType]: string } = {
  MAGNAI: "5 САР 17, 2025",
  ARI: "5 САР 16, 2025",
};

export const PERSON_TYPE_TIME: { [key in PersonType]: string } = {
  MAGNAI: "19:00 PM",
  ARI: "18:00 PM",
};

export const PERSON_TYPE_COLOR: { [key in PersonType]: string } = {
  MAGNAI: "blue-500",
  ARI: "orange-500",
};

export const PERSON_TYPE_TEXT_COLOR: { [key in PersonType]: string } = {
  MAGNAI: "orange-500",
  ARI: "blue-500",
};

export type ChildrenProps = {
  children: ReactNode;
};

export interface FirestoreDocument {
  name: string;
  type: string;
  date: Date;
}
