import { createContext } from 'react'
import { EMPTY_STRING } from 'common/constants'

const SiteVersionContext = createContext(EMPTY_STRING)
const { Provider: VersionProvider } = SiteVersionContext

export { VersionProvider }
export default SiteVersionContext
