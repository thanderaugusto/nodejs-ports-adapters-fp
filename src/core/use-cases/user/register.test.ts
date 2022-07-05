import * as E from 'fp-ts/Either'
import * as TE from 'fp-ts/TaskEither'
import { pipe } from 'fp-ts/function'
import { register, OutsideRegister } from './register'
import { CreateUser } from '@/core/types/user'
const registerOK: OutsideRegister = async (data) => {
  return `Usuário  ${data.username} cadastrado com sucesso!`
}

const data: CreateUser = {
  username: 'test',
  email: 'test@test.com',
  password: '123456',
}

it('Deveria cadastrar um usuário com sucesso', async () => {
  return pipe(
    data,
    register(registerOK),
    TE.map(result => expect(result).toBe(`Usuário  ${data.username} cadastrado com sucesso!`)),
  )()
})
