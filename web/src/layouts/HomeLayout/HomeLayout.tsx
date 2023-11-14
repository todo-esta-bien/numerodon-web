import { createContext, useContext } from 'react'
import useUrlParams, { type UrlParams, type UserData } from 'src/hooks/useUrlParams'
import MainNavbar from 'src/components/MainNavbar'
import DateModal from 'src/components/DateModal'
import NameModal from 'src/components/NameModal'

type HomeLayoutProps = {
  children?: React.ReactNode
}

type InputElement = {
  label: string
  groupLabel: string
  placeholder: string
  inputName: keyof UserData
}

export const LayoutContext = createContext({ urlParams: null, setUrlParams: null })

export const useLayoutContext = () => useContext(LayoutContext)

const HomeLayout = ({ children }: HomeLayoutProps) => {
  const initialParams: URLSearchParams = new URLSearchParams(window.location.search)

  const [urlParams, setUrlParams] = useUrlParams({
    birthday: new Date(initialParams.get('birthday') || Date.now()).toISOString().split('T')[0],
    firstNames: decodeURIComponent(initialParams.get('firstNames') || ''),
    fatherLastNames: decodeURIComponent(initialParams.get('fatherLastNames') || ''),
    motherLastNames: decodeURIComponent(initialParams.get('motherLastNames') || ''),
  })

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

  const fullName: string = `${urlParams.firstNames} ${urlParams.fatherLastNames} ${urlParams.motherLastNames}`
  const birthday: Date = new Date(urlParams.birthday)
  const userData = {
    firstNames: urlParams.firstNames,
    fatherLastNames: urlParams.fatherLastNames,
    motherLastNames: urlParams.motherLastNames,
  }

  const onDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrlParams((prevState: UrlParams) => ({
      ...prevState,
      birthday: new Date(e.target.value).toISOString().split('T')[0],
    }))
  }

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>, inputName: string) => {
    setUrlParams((prevState: UrlParams) => ({
      ...prevState,
      [inputName]: e.target.value,
    }))
  }
  return (
    <LayoutContext.Provider value={{ urlParams, setUrlParams }}>
      <main className="animated-bg flex w-screen justify-center bg-base-300">
        <section className="animated-bg-filter w-full max-w-7xl p-6">
          <header className="prose mb-4">
            <h1>Hola 👋!</h1>
          </header>
          <MainNavbar birthday={birthday} fullName={fullName} />

          {children}

          <DateModal>
            <div className="form-control my-1 md:mx-1">
              <label className="block md:input-group">
                <span className="hidden md:label-text">Fecha</span>
                <input
                  className="input-bordered input"
                  type="date"
                  defaultValue={urlParams.birthday}
                  onChange={onDateChange}
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
                    onChange={(e) => onNameChange(e, element.inputName)}
                    name={element.inputName}
                    placeholder={element.placeholder}
                  />
                </label>
              </div>
            ))}
          </NameModal>
        </section>
      </main>
    </LayoutContext.Provider>
  )
}

export default HomeLayout
