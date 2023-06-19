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
          <input
            type="text"
            name="photoUrl"
            placeholder="Photo URL"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.photoUrl}
          />
          <input
            type="text"
            name="agentLicence"
            placeholder="Agent Licence"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.agentLicence}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.address}
          />
          <input
            type="text"
            name="practiceAreas"
            placeholder="Practice Areas"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.practiceAreas}
          />
          <input
            type="text"
            name="aboutMe"
            placeholder="About Me"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.aboutMe}
          />
          {isSubmitting && <div>Is Submitting</div>}
          <div id="footer">
            <button type="button" id="cancel">
              Cancel
            </button>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default CreateAgent;
