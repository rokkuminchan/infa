import Base from "./common/base";

export class Person extends Base {
  name;
  firstName;
  middleName;
  lastName;
  age;
  birthdate;
  email;
  imgSrc;
  certifications;
  sex;
  idCardNo;
  company;
  phoneNumber;
  address;
  facebook;
  instagram;
  twitter;
}

export class Student extends Person {}

export class Teacher extends Person {}
