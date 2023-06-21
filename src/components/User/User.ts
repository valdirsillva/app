interface UserProps {
  id: number;
  name: string;
  email: string;
}
export default class User {
  newUser(user: UserProps) {
    return `Usuário é: ${user.name} e email: ${user.email}`
  }
}