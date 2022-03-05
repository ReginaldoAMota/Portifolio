import { getUsers } from './data'

const login = (user) => {
  const data = getUsers().then((data) => {
    const userData = data.find((item) => {
      return item.email === user.email && item.login.password === user.password
    })
    if (userData) {
      return {
        result: true,
        user: userData,
      }
    } else {
      return {
        result: false,
        user: null,
      }
    }
  })
  return data
}

export const auth = {
  login,
}
