import { MetaTags } from '@redwoodjs/web'
import { useState, useEffect } from 'react'
import TantricProfile from 'src/components/TantricProfile/TantricProfile'
import PythagoreanProfile from 'src/components/PythagoreanProfile/PythagoreanProfile'
import EvolutiveProfile from 'src/components/EvolutiveProfile/EvolutiveProfile'
import PythagoreanPinnacle from 'src/components/PythagoreanPinnacle/PythagoreanPinnacle'
import Base22Diagram from 'src/components/Base22Diagram/Base22Diagram'
import MainNavbar from 'src/components/MainNavbar/MainNavbar'
import LifeStagesTable from 'src/components/LifeStagesTable/LifeStagesTable'
import DateModal from 'src/components/DateModal/DateModal'
import NameModal from 'src/components/NameModal/NameModal'
import './HomePage.css'

type UserData = {
  firstNames: string | null
  fatherLastNames: string | null
  motherLastNames: string | null
}

type InputElement = {
  label: string
  groupLabel: string
  placeholder: string
  inputName: keyof UserData
}

const HomePage = () => {
  const params: URLSearchParams = new URLSearchParams(window.location.search)

  const urlBirthday: string | null = params.get('birthday')
  const [birthday, setBirthday] = useState<Date>(new Date(urlBirthday || Date.now()))

  const urlFirstNames: string = params.get('firstNames') || ''
  const urlFatherLastNames: string = params.get('fatherLastNames') || ''
  const urlMotherLastNames: string = params.get('motherLastNames') || ''
  const [userData, setUserData] = useState<UserData>({
    firstNames: decodeURIComponent(urlFirstNames),
    fatherLastNames: decodeURIComponent(urlFatherLastNames),
    motherLastNames: decodeURIComponent(urlMotherLastNames),
  })

  // Setting URL after each input change
  useEffect(() => {
    // TODO: Improve this
    const params: URLSearchParams = new URLSearchParams(window.location.search)

    // Using encodeURIComponent because URLSearchParams uses www-form-urlencoded, and that may
    // lead to unexpected results, such as spaces being encoded as +
    birthday && params.set('birthday', birthday.toISOString().split('T')[0])
    userData.firstNames && params.set('firstNames', encodeURIComponent(userData.firstNames))
    userData.fatherLastNames && params.set('fatherLastNames', encodeURIComponent(userData.fatherLastNames))
    userData.motherLastNames && params.set('motherLastNames', encodeURIComponent(userData.motherLastNames))

    // (state, title, URL)
    window.history.replaceState({}, '', `${window.location.pathname}?${params}`)
  }, [birthday, userData])

  const inputElements: InputElement[] = [
    {
      label: 'Nombre(s)',
      groupLabel: 'Nombre(s)',
      placeholder: 'Leticia Verónica',
      inputName: 'firstNames',
    },
    {
      label: 'Apellidos Paternos',
      groupLabel: 'Paternos',
      placeholder: 'Neri',
      inputName: 'fatherLastNames',
    },
    {
      label: 'Apellidos Maternos',
      groupLabel: 'Maternos',
      placeholder: 'Guzmán',
      inputName: 'motherLastNames',
    },
  ]

  const fullName: string = `${userData.firstNames} ${userData.fatherLastNames} ${userData.motherLastNames}`

  return (
    <main className='bg-base-300 flex justify-center'>
      <MetaTags title={fullName} description="Home page" />

      <section className='p-6 max-w-8xl'>
        <header className="prose mb-4">
          <h1>Hola 👋!</h1>
        </header>
        <MainNavbar birthday={birthday} fullName={fullName} />

        <section className="gap-4 mt-4 flex flex-col dashboard lg:grid">
          <div className='dashA'><TantricProfile birthday={birthday} /></div>
          <div className='dashB'><Base22Diagram birthday={birthday} /></div>
          <div className='dashC'><PythagoreanProfile birthday={birthday} {...userData} /></div>
          <div className='dashD'><LifeStagesTable birthday={birthday} /></div>
          <div className='dashE'><PythagoreanPinnacle birthday={birthday} /></div>
          <div className='dashF'><EvolutiveProfile birthday={birthday} {...userData} /></div>
        </section>

        <DateModal>
          <div className="form-control my-1 md:mx-1">
            <label className="block md:input-group">
              <span className="hidden md:label-text">Fecha</span>
              <input
                className="input-bordered input"
                type="date"
                defaultValue={birthday.toISOString().split('T')[0]}
                onChange={(e) => setBirthday(new Date(e.target.value))}
                name="birthday"
              />
            </label>
          </div>
        </DateModal>
        <NameModal {...userData}>
          {inputElements.map((element: InputElement) => (
            <div className="form-control my-1 md:mx-1" key={element.inputName}>
              <label className="label md:hidden">
                <span className="label-text">{element.label}</span>
              </label>
              <label className="block md:input-group">
                <span className="hidden md:label-text">{element.label}</span>
                <input
                  className="input-bordered input"
                  type="text"
                  value={userData[element.inputName]}
                  onChange={(e) =>
                    setUserData((prevData: UserData) => ({
                      ...prevData,
                      [element.inputName]: e.target.value,
                    }))
                  }
                  name={element.inputName}
                  placeholder={element.placeholder}
                />
              </label>
            </div>
          ))}
        </NameModal>
      </section>
    </main>
  )
}

export default HomePage
