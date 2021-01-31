
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { selectForms, selectForm, selectFormIndex } from './menuSlice';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    position: 'absolute',
    top: '10rem',
    left: '2rem'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Menu () {
  const classes = useStyles();
  const dispatch = useDispatch();
  const forms = useSelector(selectForms);
  const index = useSelector(selectFormIndex);

  const handleChange = (event: any) => 
      dispatch(selectForm(event.target.value as number));

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">File</InputLabel>
        <Select
          native
          value={index}
          onChange={handleChange}
          inputProps={{
            name: 'file',
            id: 'file-native-simple',
          }}
        >
          {
            forms.map(
                ({ name = "" }, index = 0) => <option key={name} value={index}>{name}</option>
            )
          }
        </Select>
      </FormControl>
    </div>
  );
}
