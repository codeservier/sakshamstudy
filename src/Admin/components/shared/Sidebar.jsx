import React, { useState } from 'react'
import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import { FcBullish } from 'react-icons/fc'
import { HiOutlineLogout } from 'react-icons/hi'
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../../lib/constants'
import { HiMenuAlt1 } from 'react-icons/hi' // Menu icon for mobile

const linkClass =
  'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true)
  const toggleSidebar = () => setIsOpen(!isOpen)

  return (
    <div className={classNames(
      'bg-neutral-900 p-3 flex flex-col transition-transform duration-300',
      {
        'w-60': isOpen,
        'w-16': !isOpen, // Collapsed width
      }
    )}>
      {/* Sidebar Toggle Button for Mobile */}
      <div className="md:hidden flex items-center mb-4">
        <button onClick={toggleSidebar} className="text-white">
          <HiMenuAlt1 fontSize={24} />
        </button>
      </div>

      {/* Sidebar Logo and Title */}
      <div className="flex items-center gap-2 px-1 py-3">
        <FcBullish fontSize={24} />
        {isOpen && <span className="text-neutral-200 text-lg">Pragati Admin</span>}
      </div>

      {/* Sidebar Links */}
      <div className="py-8 flex flex-1 flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((link) => (
          <SidebarLink key={link.key} link={link} isOpen={isOpen} />
        ))}
      </div>

      {/* Sidebar Bottom Links */}
      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
          <SidebarLink key={link.key} link={link} isOpen={isOpen} />
        ))}
        <div className={classNames(linkClass, 'cursor-pointer text-red-500')}>
          <span className="text-xl">
            <HiOutlineLogout />
          </span>
          {isOpen && 'Logout'}
        </div>
      </div>
    </div>
  )
}

function SidebarLink({ link, isOpen }) {
  const { pathname } = useLocation()

  return (
    <Link
      to={link.path}
      className={classNames(
        pathname === link.path ? 'bg-neutral-700 text-white' : 'text-neutral-400',
        linkClass,
        {
          'justify-center': !isOpen, // Center align icon when collapsed
          'pl-3': isOpen, // Padding when expanded
        }
      )}
    >
      <span className="text-xl">{link.icon}</span>
      {isOpen && link.label}
    </Link>
  )
}
