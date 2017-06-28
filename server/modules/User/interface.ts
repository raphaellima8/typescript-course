export interface IUser {
  id: number,
  name: string,
  email: string,
  password: string
}

export interface IUserDetail extends IUser {
  id: number,
  name: string,
  email: string,
  password: string
}

export function createUser({id, name, email, password}: any): IUser{
  return {
    id, name, email, password
  }
}

export function createUsers(data: any[]): IUser[] {
  return data.map(createUser)
}

export function createUserById({id, name, email, password}: any): IUserDetail{
  return {
    id, name, email, password
  }
}

export function createUserByEmail({id, name, email, password}: any): IUserDetail{
  return {
    id, name, email, password
  }
}
