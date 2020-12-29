import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormControlPicker from "../basic/formControlPicker";
import { addStudentConfig } from "./addStudentConfig";

const AddStudent = () => {
  const formik = useFormik({
    initialValues: addStudentConfig.initialData,
    validationSchema: Yup.object(addStudentConfig.validation),
    onSubmit: (values) => {
      console.log(formik);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {addStudentConfig.layout.map((item, index) => {
        return (
          <div key={index}>
            <FormControlPicker
              {...item}
              {...formik.getFieldProps(item.id)}
              formik={formik}
            />
          </div>
        );
      })}

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddStudent;
