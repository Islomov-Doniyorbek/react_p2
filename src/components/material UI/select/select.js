import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectAutoWidth({filteringCard}) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl
      sx={{
        m: 1,
        minWidth: 80,
        '& .MuiInputLabel-root': { color: 'white' }, // Label rangi
        '& .MuiOutlinedInput-root': {
          color: 'white', // Select matni rangi
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white', // Border rangi
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'azure',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white',
          },
        },
        '& .MuiSvgIcon-root': {
          color: 'white', // Pastga tushuvchi ikon rangi
        },
      }}
      >
  <InputLabel id="demo-simple-select-autowidth-label">Filtr</InputLabel>
  <Select
    labelId="demo-simple-select-autowidth-label"
    id="demo-simple-select-autowidth"
    value={age}
    onChange={handleChange}
    autoWidth
    label="Filtr"
  >
    <MenuItem value={""}><em>Filtr</em></MenuItem>
    <MenuItem onClick={()=> filteringCard('all')} value={"all"}>Hammasi</MenuItem>
    <MenuItem onClick={()=> filteringCard('fruits')} value={"fruits"}>Mevalar</MenuItem>
    <MenuItem onClick={()=> filteringCard('veg')} value={"veg"}>Sabzavotlar</MenuItem>
    <MenuItem onClick={()=> filteringCard('peas')} value={"peas"}>Don mahsulotlari</MenuItem>
    <MenuItem onClick={()=> filteringCard('meats')} value={"meal"}>Go'sht mahsulotlari</MenuItem>
  </Select>
</FormControl>

    </div>
  );
}