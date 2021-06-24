import { v4 as uuid } from 'uuid'

type SignInRequestData = {
  login: string;
  password: string;
}

const delay = (amount = 750) => new Promise(resolve => setTimeout(resolve, amount))

export async function signInRequest(data: SignInRequestData) {
  await delay()

  return {
    token: uuid(),
    user: {
      name: 'Diego Fernandes',
      login: 'IgorMota',
      avatar_url: 'https://github.com/diego3g.png'
    }
  }
}

export async function recoverUserInformation() {
  await delay()

  return {
    user: {
      name: 'Diego Fernandes',
      login: 'DiegoFernandes',
      avatar_url: 'https://github.com/diego3g.png'
    }
  }
}