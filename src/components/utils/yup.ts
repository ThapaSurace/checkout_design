import * as yup from "yup";


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


export const paymentFormValidationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  cardnum: yup.string()
    .required("Card number is required")
    .matches(/^[0-9]{16}$/, "Card number must be exactly 16 digits"),
  expirationdate: yup.string()
    .required("Expiration date is required")
    .matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "Expiration date must be in MM/YY format"),
  cvv: yup.string()
    .required("CVV is required")
    .matches(/^\d{3,4}$/, "CVV must be 3 or 4 digits"),
});