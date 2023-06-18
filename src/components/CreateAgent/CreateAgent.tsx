import type { FC } from "react";
import { useState, useEffect } from "react";
import { IAgent } from "../../types/Agent";
import axios from "axios";
import "./CreateAgent.css";
import { Formik, FormikHelpers } from "formik";

const CreateAgent: FC = () => {
  const [agent, setAgent] = useState<IAgent>();
  const initialValues: Partial<IAgent> = {
    firstName: "",
    lastName: "",
    photoUrl: "",
    agentLicence: "",
    address: "",
    practiceAreas: "",
    aboutMe: "",
  };

  useEffect(() => {}, []);

  const validate = (values: Partial<IAgent>) => {
    const errors = {} as IAgent;
    if (!values.firstName) errors.firstName = "First Name Required";
    if (!values.lastName) errors.lastName = "Last Name Required";
    // if (!values.agentLicence) errors.agentLicence = "Agent Licence Required";
    // if (!values.address) errors.address = "Address Required";

    return errors;
  };

  const onSubmit = (
    values: Partial<IAgent>,
    actions: FormikHelpers<Partial<IAgent>>
  ) => {
    actions.setSubmitting(true);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    }, 1000);
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={(values) => validate(values)}
      onSubmit={(values, actions) => onSubmit(values, actions)}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstName}
          />
          {errors.firstName && touched.firstName && errors.firstName}
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastName}
          />
          {errors.lastName && touched.lastName && errors.lastName}
          {isSubmitting && <div>Is Submitting</div>}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
};

export default CreateAgent;
