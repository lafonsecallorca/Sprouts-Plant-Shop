export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  AboutUs = "about",
  ContactUs = "contactus",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface AboutType {
  name: string;
  description?: string;
  image: string;
}
