import { useContext } from 'react'
import AlertContext from '../../context/alert/AlertContext'
function Alert() {
  const { alert } = useContext(AlertContext)
  const errorIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#de2f57"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  )

  const displayAlert =
    alert === null ? null : (
      <div className="flex items-start mb-4 space-x-2">
        {alert.type === 'error' && errorIcon}
        <p className="flex-1 text-base font-semibold leading-7 text-white">
          {alert.msg}
        </p>
      </div>
    )
  return <div className="transition-opacity ">{displayAlert}</div>
}

export default Alert
