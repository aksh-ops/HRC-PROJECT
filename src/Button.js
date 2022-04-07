import * as React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



export default function VariantButtonGroup() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  return (

    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        m: 1,
      },
    }}
  >
    
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button style={{color:'white',width:'250px'}}>PREDICT</Button>
        <Button style={{color:'white',width:'250px'}}>ANALYTICS VIEW</Button>
        <Button style={{color:'white',width:'250px'}}>ADVANCED SEARCH</Button>
        <TextField  id="outlined-search"  label="Search field" style={{color:'white',}} type="search" />
        <Button style={{color:'white',width:'250px'}} onClick={handleClickOpen}>ADD</Button>
        <Dialog
       style={{backgroundColor: 'rgb(48,60,76)'}}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle  id="alert-dialog-title">
         ADD INVOICE
        </DialogTitle>
        <DialogContent >
          <DialogContentText id="alert-dialog-description">
          <TextField  placeholder='Business code' id="filled-basic" label="Business code" variant="filled" />
          <TextField  style={{display:'flex',float:'left'}} placeholder='Business code' id="filled-basic" label="Business code" variant="filled" />
          <TextField  placeholder type="date" id="start" label="Clear Date"  value="2018-07-22" />
          <TextField placeholder='Business code' id="filled-basic" label="Business code" variant="filled" />
          <TextField placeholder='Business code' id="filled-basic" label="Business code" variant="filled" />
          <TextField placeholder type="date" id="start" label="Clear Date"  value="2018-07-22" />
          <TextField placeholder type="date" id="start" label="Clear Date"  value="2018-07-22" />
          <TextField placeholder type="date" id="start" label="Clear Date"  value="2018-07-22" />
          <TextField placeholder='Business code' id="filled-basic" label="Business code" variant="filled" />
          <TextField placeholder='Business code' id="filled-basic" label="Business code" variant="filled" />
          <TextField placeholder='Business code' id="filled-basic" label="Business code" variant="filled" />
          <TextField placeholder='Business code' id="filled-basic" label="Business code" variant="filled" />
          <TextField placeholder type="date" id="start" label="Clear Date"  value="2018-07-22" />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        
          <Button onClick={handleClose} autoFocus>
           ADD
          </Button>
          <Button onClick={handleClose} autoFocus>
          CANCEL
          </Button>
        </DialogActions>
      </Dialog>
        <Button style={{color:'white',width:'250px'}}>EDIT</Button>
        <Button style={{color:'white',width:'250px'}}>DELETE</Button>
      </ButtonGroup>
    </Box>
  
  );
}