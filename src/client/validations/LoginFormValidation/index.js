export default function validate(values) {
    let errors = {};
    if (values.email) {
      if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
      }
    }

    if (values.password) {
      if (values.password.length < 8) {
        errors.password = 'Password must be 8 or more characters';
      }
    }
    return errors;
}