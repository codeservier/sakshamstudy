import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/admin',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'alllibrary',
		label: 'AllLibrary',
		path: '/alllibrary',
		icon: <HiOutlineCube />
	},
	{
		key: 'students',
		label: 'Students',
		path: '/students',
		icon: <HiOutlineShoppingCart		 />
	},
	{
		key: 'courses',
		label: 'Courses',
		path: '/courses',
		icon: <HiOutlineUsers />
	},
	{
		key: 'fees',
		label: 'Fees',
		path: '/fees',
		icon: <HiOutlineDocumentText />
	},
	{
		key: 'website',
		label: 'Websites',
		path: '/website',
		icon: <HiOutlineAnnotation />
	},
	{
		key: 'enquiry',
		label: 'Enquiry',
		path: '/enquiry',
		icon: <HiOutlineAnnotation />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]
