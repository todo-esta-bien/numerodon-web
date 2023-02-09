import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useState } from 'react'
import { TantricProfile } from '@todo-esta-bien/numerodon'

const HomePage = () => {
  const [birthday, setBirthday] = useState<Date>(new Date(Date.now()))
  const [tantricProfile, setTantricProfile] = useState<TantricProfile | null>(
    null
  )

  const onBirthChange = (newBirthday: string) => {
    const newDate = new Date(newBirthday)
    setBirthday(newDate)
    setTantricProfile(
      new TantricProfile({
        day: newDate.getUTCDate(),
        month: newDate.getUTCMonth() + 1,
        year: newDate.getUTCFullYear(),
      })
    )
  }

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
      <p>
        <label>
          Birthday:
          <input
            type="date"
            defaultValue={birthday.toISOString().split('T')[0]}
            onChange={(e) => onBirthChange(e.target.value)}
            name="birthday"
          />
        </label>
      </p>
      {tantricProfile && (
        <div>
          <h2>Fecha: {birthday.toUTCString()}</h2>
          <h3>Alma: {tantricProfile.soul}</h3>
          <h3>Karma: {tantricProfile.karma}</h3>
          <h3>Regalo Divino: {tantricProfile.divineGift}</h3>
          <h3>Vida pasada: {tantricProfile.lastLife}</h3>
          <h3>Camino: {tantricProfile.path}</h3>
        </div>
      )}
    </>
  )
}

export default HomePage
