import { TantricProfile } from '@todo-esta-bien/numerodon'

interface ITantricGrid {
  birthday: Date
}

const TantricGrid = ({ birthday }: ITantricGrid) => {
  const tantricProfile = new TantricProfile({
    day: birthday.getUTCDate(),
    month: birthday.getUTCMonth() + 1,
    year: birthday.getUTCFullYear(),
  })

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
    <section className="flex flex-col items-center text-center md:flex-row md:justify-around md:px-16">
      <div className="prose">
        <h2 className="p-6 md:px-2">{prettyDate}</h2>
      </div>
      <div className="flex justify-center divide-x-4 divide-sky-500 text-3xl md:justify-center">
        <div className="grid grid-cols-2 grid-rows-2 gap-2 p-4">
          <p>{tantricProfile.soul}</p>
          <p>{tantricProfile.divineGift}</p>
          <p>{tantricProfile.karma}</p>
          <p>{tantricProfile.lastLife}</p>
        </div>
        <div className="flex items-center p-4">
          <p>{tantricProfile.path}</p>
        </div>
      </div>
    </section>
  )
}

export default TantricGrid
