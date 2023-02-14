export interface IPosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface ITodos {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
 
export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface IUsers { 
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

export interface IAlbums {
  userId: number;
  id: number;
  title: string;
}

export interface IUserTodos {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface IUserPosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

