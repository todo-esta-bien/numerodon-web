import { useState, useEffect } from 'react'

export type UserData = {
  firstNames?: string | null
  fatherLastNames?: string | null
  motherLastNames?: string | null
}

export type UrlParams = UserData & {
  birthday: string
}

// Custom hook for managing URL parameters
export const useUrlParams = (
  initialParams: UrlParams
): [UrlParams, React.Dispatch<React.SetStateAction<UrlParams>>] => {
  const [urlParams, setUrlParams] = useState<UrlParams>(initialParams)

  // Setting URL after each input change
  useEffect(() => {
    const updatedParams = new URLSearchParams()

    for (const [key, value] of Object.entries(urlParams)) {
      if (value !== null && value !== undefined) {
        // Using encodeURIComponent because URLSearchParams uses www-form-urlencoded, and that may
        // lead to unexpected results, such as spaces being encoded as +
        updatedParams.set(key, encodeURIComponent(value))
      }
    }

    // Update the URL with the new parameters
    // (state, title, URL)
    window.history.replaceState({}, '', `${window.location.pathname}?${updatedParams}`)
  }, [urlParams])

  return [urlParams, setUrlParams]
}

export default useUrlParams
