import Link from 'next/link'
import {withRouter} from 'next/router'
const isActive = (path, router) => {
  const {pathname} = router
  return pathname.includes(path) ? 'border-b-2 border-black' : ''
}

const Navi = ({router}) => {
  return (
    <div className="flex mb-4">
      <div className="w-1/4 h-12"></div>
        <div className="w-1/2 h-12">
          <ul className="text-sm text-grey-dark list-reset flex items-center">
            <li><Link href="/dashboard/admin/calendar" passHref><a href="/dashboard/admin/calendar" className={`inline-block py-2 px-3 text-grey-darkest no-underline ${isActive("/dashboard/admin/calendar", router)}`}>Calendar</a></Link></li>
            <li><Link href="/dashboard/admin/attendance" passHref><a href="/dashboard/admin/attendance" className={`inline-block py-2 px-3 text-grey-darkest no-underline ${isActive("/dashboard/admin/attendance", router)}`}>Attendance</a></Link></li>
          </ul>
        </div>
        <div className="w-1/4 h-12 float-right">
          <ul className="text-sm text-grey-dark list-reset flex items-center">
            <li><Link href="/dashboard/admin" passHref><a href="/messages" className={`inline-block py-2 px-3 text-grey-darkest no-underline ${isActive('/dashboard/admin', router)}`}>Admin</a></Link></li>
            <li><Link href="/dashboard/staff" passHref><a href="/messages" className={`inline-block py-2 px-3 text-grey-darkest no-underline ${isActive('/dashboard/staff', router)}`}>Staff</a></Link></li>
          </ul>
        </div>
      </div>
  )
}

export default withRouter(Navi)