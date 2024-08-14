import React from "react";
import { Formik, Field, Form, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";

const phoneNumberRegex = /^[0-9]{10}$/;

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  phone: Yup.string()
    .matches(phoneNumberRegex, "Invalid Phone Number")
    .required("Phone Number is required"),
  contacts: Yup.array().of(
    Yup.object().shape({
      email: Yup.string().email("Invalid Email"),
      phone: Yup.string().matches(phoneNumberRegex, "Invalid Phone Number"),
    })
  ),
});

const App = () => {
  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Contact Form
      </h2>
      <Formik
        initialValues={{ name: "", email: "", phone: "", contacts: [] }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log("Submitted values:", values);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <Field
                type="text"
                name="name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Field
                type="email"
                name="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <Field
                type="text"
                name="phone"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <FieldArray name="contacts">
              {({ push, remove, form }) => (
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    Contact information
                  </h3>
                  {form.values.contacts.map((_, index) => (
                    <div
                      key={index}
                      className="mb-4 p-4 border border-gray-200 rounded-lg bg-gray-50"
                    >
                      <div className="mb-4">
                        <label
                          htmlFor={`contacts.${index}.email`}
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email
                        </label>
                        <Field
                          type="email"
                          name={`contacts.${index}.email`}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <ErrorMessage
                          name={`contacts.${index}.email`}
                          component="div"
                          className="text-red-600 text-sm mt-1"
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor={`contacts.${index}.phone`}
                          className="block text-sm font-medium text-gray-700"
                        >
                          Phone Number
                        </label>
                        <Field
                          type="text"
                          name={`contacts.${index}.phone`}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <ErrorMessage
                          name={`contacts.${index}.phone`}
                          component="div"
                          className="text-red-600 text-sm mt-1"
                        />
                      </div>

                      <button
                        type="button"
                        onClick={() => remove(index)}
                        className="text-red-600 font-medium"
                      >
                        Remove contact
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => push({ email: "", phone: "" })}
                    className="w-full p-2 mt-2 border border-dashed border-gray-300 text-blue-600 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  >
                    Add contact
                  </button>
                </div>
              )}
            </FieldArray>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default App;
