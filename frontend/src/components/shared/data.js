import {
  IconDashboard,
  IconListCheck,
  IconAlertCircle,
  IconSettings,
  IconPlus,
  IconListDetails,
  IconUsersGroup,
  IconUserCircle,
  IconHotelService,
  IconCalendarEvent,
} from "@tabler/icons-react";
export const data = [
  { link: "/", label: "Home", icon: IconDashboard },
  { link: "/trips/add", label: "Add Trip", icon: IconPlus },
  { link: "/hotels/add", label: "Add Hotel Romm", icon: IconHotelService },
  { link: "/trips/completed", label: "Completed Trips", icon: IconListCheck },
  { link: "/tasks/upcoming", label: "Upcomming Tasks", icon: IconListDetails },
  { link: "/events/add", label: "Add Event", icon: IconCalendarEvent },
  { link: "/invitations", label: "Invitations", icon: IconAlertCircle },
  { link: "/settings", label: "Settings", icon: IconSettings },
  { link: "/profile", label: "Profile", icon: IconUserCircle },
];
