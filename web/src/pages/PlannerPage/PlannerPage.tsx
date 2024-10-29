import { useState } from 'react'

import { MetaTags } from '@redwoodjs/web'

import ConsultingYearSelector from 'src/components/ConsultingYearSelector/ConsultingYearSelector'
import ColorSelector from 'src/components/ColorSelector/ColorSelector'
import PlannerCalendar from 'src/components/PlannerCalendar'
import { useLayoutContext } from 'src/layouts/HomeLayout'
import { BACKGROUND_COLORS } from 'src/colors'

const PlannerPage = () => {
  const currentYear = new Date().getFullYear()
  const [consultingYear, setConsultingYear] = useState(currentYear)
  const [selectedColor, setSelectedColor] = useState('red')

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

      <section className={`mt-4 flex w-full flex-col ${BACKGROUND_COLORS[selectedColor][50]}`}>
        <div className="navbar flex-wrap justify-center rounded-2xl bg-base-100 shadow-lg">
          <ConsultingYearSelector consultingYear={consultingYear} setConsultingYear={setConsultingYear} />
          <ColorSelector selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
        </div>

        {consultingMonths.map((consultingMonth: number) => (
          <div className="break-before-page break-after-page p-16" key={consultingMonth}>
            <PlannerCalendar
              birthday={birthday}
              name={fullName}
              consultingMonth={consultingMonth}
              consultingYear={consultingYear}
              selectedColor={selectedColor}
            />
            <div className="divider">Planeador Numerológico de Todo Está Bien</div>
          </div>
        ))}
      </section>
    </>
  )
}

export default PlannerPage
