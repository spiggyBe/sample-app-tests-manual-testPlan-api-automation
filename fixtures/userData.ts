  import { UserData } from '../types/types'

export const userData: UserData = {
  testUser: "testUserName",
  testUserPassword: "testPassword",
  serviceCenterUser: process.env.SERVICE_CENTER_USER as string,
  serviceCenterPassword: process.env.SERVICE_CENTER_PASSWORD as string
}
  

