import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import { styled } from "@mui/material/styles";

const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel',
];

const ConfirmationDialogRaw = (props) => {
  const { onClose, value: valueProp, open, ...other } = props;
  const [value, setValue] = useState(valueProp);
  const radioGroupRef = useRef(null);

  useEffect(() => {
    if (!open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    onClose(value);
  };
  const handleClose = () => {
    onClose();
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  ////////////////////////////////////
  const [state, setState] = useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChangeState = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad, jason, antoine } = state;
/////////////////////////////////////////////
  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 500 ,borderRadius:"15px"} }}
      maxWidth="xs"
      TransitionProps={{ onEntering: handleEntering }}
      open={open}
      onClose={handleClose}
      {...other}
    >
          <DialogTitle>Phone Ringtone</DialogTitle>

          <DialogContent dividers>
            {/* <RadioGroup
              ref={radioGroupRef}
              aria-label="ringtone"
              name="ringtone"
              value={value}
              onChange={handleChange}
            >
              {options.map((option) => (
                <FormControlLabel
                  value={option}
                  key={option}
                  control={<Radio />}
                  label={option}
                />
              ))}
            </RadioGroup> */}
            <div className="select-field-input-req">
                <div className="box-field-req">
                  <FormControlLabel
                    control={
                      <Checkbox checked={gilad} onChange={handleChangeState} name="gilad" />
                    }
                    label="Gilad Gray"
                    />
                  <span className="field-des">
                    handleChangeState
                  </span>
                </div>
                
                <div className="box-field-req">
                  <FormControlLabel
                    control={
                      <Checkbox checked={jason} onChange={handleChangeState} name="jason" />
                    }
                    label="Jason Killian"
                  />
                  <span className="field-des">
                    handleChangeState
                  </span>
                </div>

                <div className="box-field-req">
                  <FormControlLabel
                    control={
                      <Checkbox checked={antoine} onChange={handleChangeState} name="antoine" />
                    }
                    label="Antoine Llorca"
                    />
                  <span className="field-des">
                    handleChangeState
                  </span>
                </div>
           </div>
                    
          </DialogContent>

          <DialogActions>
            <Button autoFocus onClick={handleCancel}>Cancel</Button>
            <Button onClick={handleOk}>Ok</Button>
          </DialogActions>

    </Dialog>
  );
}

ConfirmationDialogRaw.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

// let ripples = document.createElement('span');
// ripples.classList.add('span-hover');

// ripples.style.left = x + 'px';
// ripples.style.top = y + 'px';

// this.appendChild(ripples);
// setTimeout(() => {
//     ripples.remove();
// }, 1000);

const Test_dialog_reqItem = () => {

    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('Dione');
  
    const handleClickListItem = () => {
      setOpen(true);
    };
  
    const handleClose = (newValue) => {
      setOpen(false);
  
      if (newValue) {
        setValue(newValue);
      }
    };

    
    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <List component="div" role="group">
     
            <ListItem
              button
              divider
              aria-haspopup="true"
              aria-controls="ringtone-menu"
              aria-label="phone ringtone"
              onClick={handleClickListItem}
            >
              <ListItemText primary="Phone ringtone" secondary={value} />
            </ListItem>
           
            <ConfirmationDialogRaw
              id="ringtone-menu"
              keepMounted
              open={open}
              onClose={handleClose}
              value={value}
            />
          </List>
        </Box>
      );
}

export default Test_dialog_reqItem