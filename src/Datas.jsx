import {
  HomeIcon,
  MagnifyingGlassIcon,
  PlayCircleIcon,
  PlusIcon,
  StarIcon,
  TvIcon,
} from "@heroicons/react/24/solid";

export const MENUS = [
  {
    name: "home",
    icon: <HomeIcon className="h-5 w-5 text-white" />,
  },
  {
    name: "search",
    icon: <MagnifyingGlassIcon className="h-5 w-5 text-white" />,
  },
  {
    name: "watch list",
    icon: <PlusIcon className="h-5 w-5 text-white" />,
  },
  {
    name: "originals",
    icon: <StarIcon className="h-5 w-5 text-white" />,
  },
  {
    name: "movies",
    icon: <PlayCircleIcon className="h-5 w-5 text-white" />,
  },
  {
    name: "series",
    icon: <TvIcon className="h-5 w-5 text-white" />,
  },
];
