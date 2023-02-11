import { MetaTags } from '@redwoodjs/web'
import { useState } from 'react'
import TantricGrid from 'src/components/TantricGrid/TantricGrid'

const HomePage = () => {
  const [birthday, setBirthday] = useState<Date>(new Date(Date.now()))

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
        <TantricGrid birthday={birthday} />
      </main>
    </>
  )
}

export default HomePage
