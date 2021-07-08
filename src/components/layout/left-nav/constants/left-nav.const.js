import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faBookmark, faChartLine, faClipboard, faCog, faComment, faHeart, faUser, faUserCog } from "@fortawesome/free-solid-svg-icons";

export const LEFT_NAV_MENUS = [
    {
        title: 'My Account',
        links: [
            {
                icon: faUser,
                name: 'Profile'
            },
            {
                icon: faUserCog,
                name: 'My Account'
            },
            {
                icon: faClipboard,
                name: 'History'
            },
            {
                icon: faComment,
                name: 'Comments'
            },
        ]
    },
    {
        title: 'Services',
        links: [
            {
                icon: faYoutube,
                name: 'Videos'
            },
            {
                icon: faHeart,
                name: 'Favorites'
            },
            {
                icon: faBookmark,
                name: 'Articles'
            },
            {
                icon: faChartLine,
                name: 'Statics'
            },
            {
                icon: faCog,
                name: 'Settings'
            },
        ]
    },
]