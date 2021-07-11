import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faBookmark, faChartLine, faClipboard, faCog, faComment, faHeart, faUser, faUserCog } from "@fortawesome/free-solid-svg-icons";

export const LEFT_NAV_MENUS = [
    {
        title: 'Temporal',
        links: [
            {
                icon: faUser,
                name: 'home',
                link: '/'
            },
            {
                icon: faUser,
                name: 'public',
                link: '/public'
            },
            {
                icon: faUser,
                name: 'private1',
                link: '/private1'
            },
            {
                icon: faUser,
                name: 'private2',
                link: '/private2'
            },
        ]
    },
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