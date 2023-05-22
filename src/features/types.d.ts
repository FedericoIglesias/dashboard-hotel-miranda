import { StatusBook, StatusRoom, StatusUser, TypeRoom } from "./enum";

export interface IRoom {
    _id: number;
    photo: string[];
    numberRoom: number;
    roomType: TypeRoom;
    amenities: string[];
    price: number;
    offerPercent: number;
    status: StatusRoom;
  }

  export type AddNewRoom = Omit<IRoom, "_id">;

export interface IBooking {
  _id: number;
  name: string;
  orderDate: number;
  checkIn: number;
  checkOut: number;
  idRoom: number;
  status: StatusBook;
}
export type AddNewBooking = Omit<IBooking, "_id">;

export interface IUser {
  _id: number;
  name: string;
  photo: string
  email: string;
  startDate: number;
  description: string;
  phone: string;
  status: StatusUser;
  password: string;
}

export type AddNewUser = Omit<IUser, "_id">;

export interface IContact {
  _id: number;
  name: string;
  email: string;
  phone: string;
  date: number;
  subject: string;
}

export type AddNewContact = Omit<IContact, "_id">;