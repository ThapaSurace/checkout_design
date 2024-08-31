import * as yup from "yup";

// Assuming you're using the "name" field instead of "fname"
export const shippingFormValidationSchema = yup.object().shape({
  fname: yup
    .string()
    .required("Full Name is required")
    .min(3, "Full Name must be at least 3 characters"),
  address: yup
    .string()
    .required("Address is required")
    .min(5, "Address must be at least 5 characters"),
  city: yup
    .string()
    .required("City is required")
    .min(2, "City must be at least 2 characters"),
  state: yup
    .string()
    .required("State is required")
    .min(2, "State must be at least 2 characters"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
  zip: yup
    .string()
    .required("Zip Code is required")
    .matches(/^[0-9]{5}$/, "Zip Code must be exactly 5 digits"),
  country: yup.string().required("Country is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Must be a valid email address"),
});
