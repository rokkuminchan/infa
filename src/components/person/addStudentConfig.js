import * as Yup from "yup";
import { Person } from "../../models/person";

class LayoutItem {
  id;
  type;
  label;
  options;
}

export const addStudentConfig = {
  layout: [
    Object.assign(new LayoutItem(), {
      id: "firstName",
      type: "EfaText",
      label: "First Name",
    }),
    Object.assign(new LayoutItem(), {
      id: "lastName",
      type: "EfaText",
      label: "Last Name",
    }),
    Object.assign(new LayoutItem(), {
      id: "email",
      type: "EfaText",
      label: "Email",
    }),
    Object.assign(new LayoutItem(), {
      id: "birthdate",
      type: "EfaDate",
      label: "Birthdate",
    }),
    Object.assign(new LayoutItem(), {
      id: "sex",
      type: "EfaRadioGroup",
      label: "Sex",
      options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
        { value: "other", label: "Other" },
      ],
    }),
    Object.assign(new LayoutItem(), {
      id: "university",
      type: "EfaSelect",
      label: "University",
      options: [
        { value: "1", label: "BKDN" },
        { value: "2", label: "SP" },
        { value: "3", label: "NN" },
      ],
    }),
  ],
  validation: Object.assign(new Person(), {
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    birthdate: Yup.string().required("Required"),
    university: Yup.string().required("Required"),
  }),
  initialData: Object.assign(new Person(), {
    firstName: "",
    lastName: "",
    email: "",
    birthdate: "2017-05-24",
    sex: "male",
    university: "1",
  }),
};
