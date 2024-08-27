import { TimerIcon, HomeIcon, StatisticsIcon, CalendarIcon } from './../components/Icons/Icons';

interface NavbarItem {
  icon:  React.FC;
  link: string;
  label: string;
}

export const NAVBAR_CONSTANTS: NavbarItem[] = [
  {
    icon: TimerIcon,
    link: "/pomodoro",
    label: "Pomodoro",
  },
  {
    icon: HomeIcon,
    link: "/",
    label: "Home",
  },
  {
    icon: StatisticsIcon,
    link: "/statistics",
    label: "Statistics",
  },
  {
    icon: CalendarIcon,
    link: "/calendar",
    label: "Calendar",
  },
];

export default NAVBAR_CONSTANTS;
