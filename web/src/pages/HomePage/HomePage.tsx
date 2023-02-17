import { MetaTags } from '@redwoodjs/web'
import { useState } from 'react'
import TantricProfile from 'src/components/TantricProfile/TantricProfile'
import PythagoreanProfile from 'src/components/PythagoreanProfile/PythagoreanProfile'

const HomePage = () => {
  const [birthday, setBirthday] = useState<Date>(new Date(Date.now()))
  const [names, setNames] = useState<string>('')
  const [fatherLastNames, setFatherLastNames] = useState<string>('')
  const [motherLastNames, setMotherLastNames] = useState<string>('')

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <main>
        <header className="prose">
          <h1>Hola 👋!</h1>
        </header>
        <p>
          <label className="text-xl">
            Escoge tu fecha:
            <input
              className="md:ml-4"
              type="date"
              defaultValue={birthday.toISOString().split('T')[0]}
              onChange={(e) => setBirthday(new Date(e.target.value))}
              name="birthday"
            />
          </label>
        </p>
        <p>
          <label className="text-xl">
            Nombre:
            <input
              className="md:ml-4"
              type="text"
              onChange={(e) => setNames(e.target.value)}
              name="name"
            />
          </label>
        </p>
        <p>
          <label className="text-xl">
            Apellidos Paternos:
            <input
              className="md:ml-4"
              type="text"
              onChange={(e) => setFatherLastNames(e.target.value)}
              name="name"
            />
          </label>
        </p>
        <p>
          <label className="text-xl">
            Apellidos Maternos:
            <input
              className="md:ml-4"
              type="text"
              onChange={(e) => setMotherLastNames(e.target.value)}
              name="name"
            />
          </label>
        </p>
        <TantricProfile birthday={birthday} />
        <PythagoreanProfile
          birthday={birthday}
          firstNames={names}
          fatherLastNames={fatherLastNames}
          motherLastNames={motherLastNames}
        />
      </main>
    </>
  )
}

export default HomePage
