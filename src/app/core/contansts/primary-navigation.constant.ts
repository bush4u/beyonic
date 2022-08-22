import { NavigationModel } from "../model/navigation.model";


export const PRIMARY_NAVIGATION: NavigationModel[] = [
  {
    title: 'Home',
    icon: 'home',
    route: 'dashboard',
    mobileEnabled: true,
  },
  {
    title: 'Transfer',
    icon: 'transfer',
    route: 'transfer',
    mobileEnabled: true,
  },
  {
    title: 'History',
    icon: 'history',
    route: 'history',
    mobileEnabled: true,
  },
  {
    title: 'Profile',
    icon: 'profile',
    route: 'profile',
    mobileEnabled: true,
  },
  {
    title: 'Settings',
    icon: 'settings',
    route: 'settings',
    mobileEnabled: false,
  },
  {
    title: 'Billing',
    icon: 'billing',
    route: 'billing',
    mobileEnabled: false,
  }
];


export const SUPPORT_NAVIGATION: NavigationModel[] = [
  {
    title: 'FAQ',
    icon: 'help',
    route: 'faq',
    mobileEnabled: false,
  },
  {
    title: 'Help',
    icon: 'help',
    route: 'help',
    mobileEnabled: false,
  },
];
