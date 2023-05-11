import { TantricProfile as TantricNumProfile } from '@todo-esta-bien/numerodon'

interface ITantricProfile {
  birthday: Date
}

const TantricProfile = ({ birthday }: ITantricProfile) => {
  const tantricProfile = new TantricNumProfile({
    day: birthday.getUTCDate(),
    month: birthday.getUTCMonth() + 1,
    year: birthday.getUTCFullYear(),
  })

  return (
    <section className="bg-base-100 shadow rounded-2xl flex flex-col prose p-4 max-w-fit">
      <h2>Esquema Tántrico</h2>
      <div className="flex justify-center divide-x-4 divide-sky-500 text-3xl md:justify-center">
        <div className="grid grid-cols-2 grid-rows-2 gap-2 p-4">
          <span>{tantricProfile.soul}</span>
          <span>{tantricProfile.divineGift}</span>
          <span>{tantricProfile.karma}</span>
          <span>{tantricProfile.lastLife}</span>
        </div>
        <div className="flex items-center p-4">
          <span>{tantricProfile.path}</span>
        </div>
      </div>
    </section>
  )
}

export default TantricProfile
