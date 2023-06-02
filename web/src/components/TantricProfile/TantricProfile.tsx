import { TantricProfile as TantricNumProfile } from '@todo-esta-bien/numerodon'
import DashboardCard from 'src/components/DashboardCard'

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
    <DashboardCard>
      <span className="prose">
        <h2>Esquema Tántrico</h2>
      </span>
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
    </DashboardCard>
  )
}

export default TantricProfile
