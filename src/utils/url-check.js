import linkCheck from 'link-check'
import { SUCCESS_STATUS, SUCCESS_STATUS_CODE } from 'common/constants'

export default URL => {
  let result = false

  linkCheck(String(URL), (error, response = {}) => {
    if (!error) {
      result =
        response.status === SUCCESS_STATUS ||
        response.statusCode === SUCCESS_STATUS_CODE
    }
  })

  return result
}
