import { MetaTags } from '@redwoodjs/web'
import { useState } from 'react'
import TantricProfile from 'src/components/TantricProfile/TantricProfile'
import PythagoreanProfile from 'src/components/PythagoreanProfile/PythagoreanProfile'
import PythagoreanPinnacle from 'src/components/PythagoreanPinnacle/PythagoreanPinnacle'

type UserData = {
  firstNames: string | null
  fatherLastNames: string | null
  motherLastNames: string | null
  birthday: Date
}

const HomePage = () => {
  const [userData, setUserData] = useState<UserData>({
    birthday: new Date(Date.now()),
    firstNames: '',
    fatherLastNames: '',
    motherLastNames: '',
  })

  const inputElements = [
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

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <main>
        <header className="prose">
          <h1>Hola 👋!</h1>
        </header>
        <section className="flex flex-col md:flex-row md:flex-wrap">
          <div className="form-control my-1 md:mx-1">
            <label className="label md:hidden">
              <span className="label-text">La fecha de nacimiento</span>
            </label>
            <label className="block md:input-group">
              <span className="hidden md:label-text">Fecha</span>
              <input
                className="input-bordered input"
                type="date"
                defaultValue={userData.birthday.toISOString().split('T')[0]}
                onChange={(e) =>
                  setUserData((prevData: UserData) => ({
                    ...prevData,
                    birthday: new Date(e.target.value),
                  }))
                }
                name="birthday"
              />
            </label>
          </div>
          {inputElements.map((element) => (
            <div className="form-control my-1 md:mx-1" key={element.inputName}>
              <label className="label md:hidden">
                <span className="label-text">{element.label}</span>
              </label>
              <label className="block md:input-group">
                <span className="hidden md:label-text">{element.label}</span>
                <input
                  className="input-bordered input"
                  type="text"
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
        </section>

        <TantricProfile birthday={userData.birthday} />
        <PythagoreanProfile {...userData} />
        <PythagoreanPinnacle birthday={userData.birthday} />
      </main>
    </>
  )
}

export default HomePage
