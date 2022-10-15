import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class AccountService {
  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = res.data
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  async update(choice) {
    try {
      const account = AppState.account
      account.membership = choice
      const res = await api.put('account/', account)
      logger.log(res.data)
      AppState.account = res.data
    } catch (error) {
      logger.error("Subscribe failed")
    }
  }
}

export const accountService = new AccountService()
