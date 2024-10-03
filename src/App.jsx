import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Rating from '@mui/material/Rating';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Grid2 } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

//Le da estilo a los items del grid:
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.primary,
  boxShadow: 'none',
  borderRadius: 0,
}));

/*Crea un array con los valores que se encontrarán dentro del componente 
de selección de lenguaje de programación favorito:*/
const programmingLanguages = [
  {
    value: 'Java',
    label: 'Java',
  },
  {
    value: 'Kotlin',
    label: 'Kotlin',
  },
  {
    value: 'Python',
    label: 'Python',
  },
  {
    value: 'C++',
    label: 'C++',
  },
];

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function App() {


/*Función con dos parámetros, siendo el primero la variable boolean y el segundo el nombre de la
función en sí. Después se usa un hook de estado, utilizado para cambiar el estado de componentes funcionales*/
  const [open, setOpen] = React.useState(false);

//Cambia el valor de la variable boolean "open" a "true" para abrir el componente del diálogo:
  const handleClickOpen = () => { 
    setOpen(true);
  };

//Establece el valor del boolean "open" como "false" para así poder cerrar el diálogo:
  const handleClose = () => {
    setOpen(false);
  };

/*Utiliza el hook useState de React para gestionar
el estado de un objeto llamado formData que representa los datos del formulario.*/
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    age: '',
    gender: '',
    favoriteLanguage: '',
    rating: 0,
    termsAccepted: false,
  });

//Maneja la entrada de datos de cada uno de los campos, recogiendo los valores:
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRadioChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      gender: e.target.value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      termsAccepted: e.target.checked,
    }));
  };

  const handleRatingChange = (e, newValue) => {
    setFormData((prevState) => ({
      ...prevState,
      rating: newValue,
    }));
  };

/*Crea un log en la consola a partir de los datos recogidos en formData,
cierra el diálogo y limpia los campos para así poder introducir nuevos datos:*/
  const handleSubmit = () => {
    console.log(formData);
    setOpen(false)
    handleReset();
  };

//Borra los valores de cada campo atribuyéndoles un valor vacío:
  const handleReset = () => {
    setFormData({
      name: '',
      surname: '',
      age: '',
      gender: '',
      favoriteLanguage: '',
      rating: 0,
      termsAccepted: false,
    });
  };

/*Verifica si el formulario es válido comprobando si todos los campos devuelven un valor true 
o lo que es lo mismo, que no están vacíos:*/
  const isFormValid = () => {
    const { name, surname, age, gender, favoriteLanguage, termsAccepted } = formData;
    return name && surname && age && gender && favoriteLanguage && termsAccepted;
  };

  return (

    <>

      <Grid2 container spacing={0} sx={{ flexGrow: 1, mt: 2, mx: 20 }}>

        <Grid2 size={{ xs: 12, md: 5, lg: 5 }}>
          <Item>
            <TextField
              onChange={handleInputChange}
              value={formData.name}
              required
              id="name"
              name="name"
              label="Nombre"
              variant="outlined"
              fullWidth
              sx={{ borderRadius: 1 }}
            />
          </Item>
        </Grid2>

        <Grid2 size={{ xs: 12, md: 5, lg: 5 }}>
          <Item>
            <TextField
              onChange={handleInputChange}
              value={formData.surname}
              required
              id="surname"
              name="surname"
              label="Apellidos"
              variant="outlined"
              fullWidth
              sx={{ borderRadius: 1 }}
            />
          </Item>
        </Grid2>

        <Grid2 size={{ xs: 12, md: 2, lg: 2 }}>
          <Item>
            <TextField
              onChange={handleInputChange}
              value={formData.age}
              required
              id="age"
              name="age"
              label="Edad"
              type='number'
              variant="outlined"
              fullWidth
              sx={{ borderRadius: 1 }}
            />
          </Item>
        </Grid2>



        <Grid2 textAlign= "center" size={{ xs: 12, md: 5, lg: 5 }}>
          <Item>
            <FormControl>
              <FormLabel id="gender-radio-buttons-group-label">Género</FormLabel>
              <RadioGroup
                onChange={handleRadioChange}
                value={formData.gender}
                aria-labelledby="gender-radio-buttons-group-label"
                name="gender-radio-buttons-group"
                row
                fullWidth

              >
                <FormControlLabel required value="female" control={<Radio />} label="Femenino" />
                <FormControlLabel required value="male" control={<Radio />} label="Masculino" />
                <FormControlLabel required value="other" control={<Radio />} label="Otro" />
              </RadioGroup>
            </FormControl>
          </Item>
        </Grid2>

        <Grid2 size={{ xs: 12, md: 7, lg: 7 }}>
          <Item>
            <TextField
              required
              onChange={handleInputChange}
              value={formData.favoriteLanguage}
              id="outlined-select-lenguage"
              name="favoriteLanguage"
              select
              label="Lenguaje de programación favorito"
              fullWidth
              sx={{ borderRadius: 1 }}
            >
              {programmingLanguages.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Item>
        </Grid2>

        <Grid2 size={{ xs: 12 }}>
          <Divider sx={{ mt: 3, mb: 1}} />
        </Grid2>

        <Grid2 size={{ xs: 5, md: 6, lg: 2 }}>
          <Item>
            <Typography variant="body1">Puntúa esta encuesta</Typography>
          </Item>
        </Grid2>

        <Grid2 size={{ xs: 5, md: 6, lg: 10 }}>
          <Item>
            <Rating
              onChange={handleRatingChange}
              value={formData.rating}
              name="half-rating"
              defaultValue={2.5}
              precision={0.5}
            />
          </Item>
        </Grid2>

        <Grid2 size={{ xs: 12, md: 12, lg: 12 }}>
          <Item>
            <FormControlLabel control={<Checkbox checked={formData.termsAccepted} onChange={handleCheckboxChange} />} label="He leído los términos y condiciones" />
          </Item>
        </Grid2>

          <Grid2 size={{ xs: 12, md: 6, lg: 6 }}>
            <Item>
              <ButtonGroup variant="contained" aria-label="Button" fullWidth>
                <Button sx={{ flexGrow: 1 }} onClick={handleClickOpen} disabled={!isFormValid()}>Enviar</Button>
              </ButtonGroup>
            </Item>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 6, lg: 6 }}>
            <Item>
              <ButtonGroup variant="contained" aria-label="Button" fullWidth>
                <Button sx={{ flexGrow: 1 }} onClick={handleReset}>Limpiar</Button>
              </ButtonGroup>
            </Item>
          </Grid2>
        </Grid2>


      <React.Fragment>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"¿Desea enviar los datos?"}
          </DialogTitle>
          <DialogActions>
            <Button onClick={handleClose}>No</Button>
            <Button onClick={handleSubmit}>Sí</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </>

  );
}
