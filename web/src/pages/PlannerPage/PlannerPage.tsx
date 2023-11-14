import { useState } from 'react'

import { MetaTags } from '@redwoodjs/web'

import ConsultingYearSelector from 'src/components/ConsultingYearSelector/ConsultingYearSelector'
import PlannerCalendar from 'src/components/PlannerCalendar'
import { useLayoutContext } from 'src/layouts/HomeLayout'

const PlannerPage = () => {
  const currentYear = new Date().getFullYear()
  const [consultingYear, setConsultingYear] = useState(currentYear)

  const {
    urlParams: { birthday: urlBirthday, firstNames, fatherLastNames, motherLastNames },
  } = useLayoutContext()

  const birthday: Date = new Date(urlBirthday)

  const fullName = `${firstNames} ${fatherLastNames} ${motherLastNames}`
  const pageTitle: string = `${fullName} - ${birthday.toISOString().split('T')[0]}`

  const consultingMonths = Array.from({ length: 12 }, (_, i) => i)

  return (
    <>
      <MetaTags title={pageTitle} description="Planner page" />

      <section className="mt-4 flex w-full flex-col bg-red-50">
        <ConsultingYearSelector consultingYear={consultingYear} setConsultingYear={setConsultingYear} />

        {consultingMonths.map((consultingMonth: number) => (
          <div className="break-before-page break-after-page" key={consultingMonth}>
            <PlannerCalendar
              birthday={birthday}
              name={fullName}
              consultingMonth={consultingMonth}
              consultingYear={consultingYear}
            />
            <div className="divider">Planeador Numerológico de Todo Está Bien</div>
          </div>
        ))}
      </section>
    </>
  )
}

export default PlannerPage
