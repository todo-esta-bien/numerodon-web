import { MetaTags } from '@redwoodjs/web'
import TantricProfile from 'src/components/TantricProfile/TantricProfile'
import PythagoreanProfile from 'src/components/PythagoreanProfile/PythagoreanProfile'
import EvolutiveProfile from 'src/components/EvolutiveProfile/EvolutiveProfile'
import PythagoreanPinnacle from 'src/components/PythagoreanPinnacle/PythagoreanPinnacle'
import Base22Diagram from 'src/components/Base22Diagram/Base22Diagram'
import LifeStagesTable from 'src/components/LifeStagesTable/LifeStagesTable'
import DestinyTable from 'src/components/DestinyTable/DestinyTable'
import DiamondDiagram from 'src/components/DiamondDiagram/DiamondDiagram'

import { useLayoutContext } from 'src/layouts/HomeLayout'

import './HomePage.css'

const HomePage = () => {
  const { urlParams } = useLayoutContext()

  const birthday: Date = new Date(urlParams.birthday)
  const userData = {
    firstNames: urlParams.firstNames,
    fatherLastNames: urlParams.fatherLastNames,
    motherLastNames: urlParams.motherLastNames,
  }

  const fullName: string = `${userData.firstNames} ${userData.fatherLastNames} ${userData.motherLastNames}`
  const pageTitle: string = `${fullName} - ${birthday.toISOString().split('T')[0]}`

  return (
    <>
      <MetaTags title={pageTitle} description="Home page" />

      <section className="dashboard mt-4 flex w-full flex-col gap-4 lg:grid">
        <div className="dashA flex w-full justify-center self-start">
          <TantricProfile birthday={birthday} />
        </div>
        <div className="dashB flex w-full justify-center self-start">
          <Base22Diagram birthday={birthday} />
        </div>
        <div className="dashC flex w-full justify-center self-start">
          <PythagoreanProfile birthday={birthday} {...userData} />
        </div>
        <div className="dashD flex w-full justify-center self-start">
          <LifeStagesTable birthday={birthday} />
        </div>
        <div className="dashE flex w-full justify-center self-start">
          <PythagoreanPinnacle birthday={birthday} />
        </div>
        <div className="dashF flex w-full justify-center self-start">
          <EvolutiveProfile birthday={birthday} {...userData} />
        </div>
        <div className="dashH flex w-full justify-center self-start">
          <DiamondDiagram birthday={birthday} />
        </div>
        <div className="dashG flex w-full justify-center self-start">
          <DestinyTable birthday={birthday} {...userData} />
        </div>
      </section>
    </>
  )
}

export default HomePage
