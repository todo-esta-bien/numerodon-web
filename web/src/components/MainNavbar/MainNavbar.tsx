interface IMainNavbarProps {
  fullName: string
  birthday: Date
}

const MainNavbar = ({ fullName, birthday }: IMainNavbarProps) => {
  const formatOptions: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timeZone: 'UTC',
  }

  const prettyDate: string = birthday.toLocaleDateString(
    ['es-mx', 'en-us'],
    formatOptions
  )

  return (
    <div className="navbar bg-base-100 shadow rounded-2xl flex-wrap justify-center">
      <div className="flex-1 max-w-full">
        <label htmlFor="name-modal" className="btn btn-ghost capitalize text-xl w-full md:w-min">
          <p className="truncate text-left">
            {fullName}
          </p>
        </label>
      </div>
      <div className="flex-none">
        <label htmlFor="date-modal" className="btn btn-ghost normal-case text-xl">
          {prettyDate}
        </label>
      </div>
    </div>
  )
}

export default MainNavbar
