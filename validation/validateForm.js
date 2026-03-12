export default function validateForm(values) {

  let errors = {};

  if (!values.firstName.trim())
    errors.firstName = "First Name required";

  if (!values.lastName.trim())
    errors.lastName = "Last Name required";

  if (!values.username.trim())
    errors.username = "Username required";

  if (!/^\S+@\S+\.\S+$/.test(values.email))
    errors.email = "Invalid email";

  if (values.password.length < 6)
    errors.password = "Minimum 6 characters";

  if (!/^[0-9]{10}$/.test(values.phone))
    errors.phone = "Enter valid phone";

  if (!values.country)
    errors.country = "Country required";

  if (!values.city)
    errors.city = "City required";

  if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(values.pan))
    errors.pan = "Invalid PAN";

  if (!/^[0-9 ]{14}$/.test(values.aadhaar))
    errors.aadhaar = "Invalid Aadhaar";

  return errors;
}