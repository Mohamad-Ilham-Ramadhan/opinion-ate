import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import {connect} from 'react-redux';
import {createRestaurant} from '../store/restaurants/actions';

export function NewRestaurantForm({createRestaurant}) {
  const [name, setName] = useState('');
  const [validationError, setValidationError] = useState(false);
  const [serverError, setServerError] = useState(false);
  async function handleSumbit(e) {
    e.preventDefault();
    if (name.length === 0) {
      setValidationError(true);
    } else {
      setValidationError(false);
      setServerError(false);
      try {
        await createRestaurant(name);
        setName('');
      } catch {
        setServerError(true);
      }
    }
  }
  function handleChange(e) {
    setName(e.target.value);
  }
  return (
    <form onSubmit={handleSumbit}>
      {serverError && (
        <Alert severity="error">
          The restaurant could not be saved. Please try again.
        </Alert>
      )}
      {validationError && <Alert severity="error">Name is required</Alert>}
      <TextField
        placeholder="Add Restaurant"
        fullWidth
        variant="filled"
        value={name}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained" color="primary">
        Add
      </Button>
    </form>
  );
}
const mapStateToProps = null;
const mapDispatchToProps = {createRestaurant};
export default connect(mapStateToProps, mapDispatchToProps)(NewRestaurantForm);
