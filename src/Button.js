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
    const [open1, setOpen1] = React.useState(false);
   

    const handleClickOpen1 = () => {
      setOpen1(true);
    };
    const [open2, setOpen2] = React.useState(false);
   

    const handleClickOpen2 = () => {
      setOpen2(true);
    };
    const [open3, setOpen3] = React.useState(false);
   

    const handleClickOpen3 = () => {
      setOpen3(true);
    };
    const [open4, setOpen4] = React.useState(false);
   

    const handleClickOpen4 = () => {
      setOpen4(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const handleClose1 = () => {
        setOpen1(false);
      };
      const handleClose2 = () => {
        setOpen2(false);
      };
      const handleClose3 = () => {
        setOpen3(false);
      };
      const handleClose4 = () => {
        setOpen4(false);
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
    
       <Button style={{color:'white',width:'250px'}}onClick={handleClickOpen3}>ANALYTICS VIEW</Button>
        <Dialog maxwidth="md"
        PaperProps={{
        style:{
            backgroundColor:'rgb(62,78,102)',
            boxShadow: 'none',
            color : "white"
        }
        

        }}
        open={open3}
        onClose={handleClose3}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title"></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          </DialogContentText>
          <TextField style={{margin:'25px'}} placeholder type="date" id="start" label="Clear Date"  value="2018-07-22" />
          <TextField  placeholder type="date" id="start" label="Clear Date"  value="2018-07-22" />
          <TextField placeholder type="date" id="start" label="Clear Date"  value="2018-07-22" />
          <TextField  placeholder type="date" id="start" label="Clear Date"  value="2018-07-22" />
       
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose3} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose3} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
        <Button style={{color:'white',width:'250px'}}onClick={handleClickOpen4}>ADVANCED SEARCH</Button>
        <Dialog  maxwidth="md"
        PaperProps={{
        style:{
            backgroundColor:'rgb(62,78,102)',
            boxShadow: 'none',
            color : "white"
        }
        

        }}
        open={open4}
        onClose4={handleClose4}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title"></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <TextField  placeholder type="date" id="start" label="Clear Date"  value="2018-07-22" />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose4} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose4} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
        <TextField  id="outlined-search"  label="Search field" style={{color:'white',}} type="search" />
        <Button style={{color:'white',width:'250px'}} onClick={handleClickOpen}>ADD</Button>
        <Dialog maxwidth="md"
        PaperProps={{
        style:{
            backgroundColor:'rgb(62,78,102)',
            boxShadow: 'none',
            color : "white"
        }
        

        }}
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
          <TextField style={{margin:'30px',}}  placeholder='Business code' id="filled-basic" label="Business code" variant="filled" />
          <TextField  style={{margin :'30px',display:'flex',float:'left'}} placeholder='Business code' id="filled-basic" label="Business code" variant="filled" />
          <TextField  style={{margin:'30px'}} placeholder type="date" id="start" label="Clear Date"  value="2018-07-22" />
          <TextField style={{margin:'30px'}}  placeholder='Business code' id="filled-basic" label="Business code" variant="filled" />
          <TextField style={{margin:'30px'}}  placeholder='Business code' id="filled-basic" label="Business code" variant="filled" />
          <TextField style={{margin:'30px'}} placeholder type="date" id="start" label="Clear Date"  value="2018-07-22" />
          <TextField style={{margin:'30px'}} placeholder type="date" id="start" label="Clear Date"  value="2018-07-22" />
          <TextField style={{margin:'30px'}} placeholder type="date" id="start" label="Clear Date"  value="2018-07-22" />
          <TextField style={{margin:'30px'}} placeholder='Business code' id="filled-basic" label="Business code" variant="filled" />
          <TextField style={{margin:'30px'}} placeholder='Business code' id="filled-basic" label="Business code" variant="filled" />
          <TextField style={{margin:'30px'}} placeholder='Business code' id="filled-basic" label="Business code" variant="filled" />
          <TextField style={{margin:'30px'}} placeholder='Business code' id="filled-basic" label="Business code" variant="filled" />
          <TextField style={{margin:'30px'}} placeholder type="date" id="start" label="Clear Date"  value="2018-07-22" />
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
        <Button style={{color:'white',width:'250px'}}onClick={handleClickOpen1}>EDIT</Button>
        <Dialog
        open={open1}
        onClose={handleClose1}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">EDIT INVOICE</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <TextField style={{margin:'25px'}} placeholder='INVOICE CURRENCY' id="filled-basic" label="invoice currency" variant="filled" />
          <TextField style={{margin:'25px'}}  placeholder='Customer Payment Terms' id="filled-basic" label="Customer Payments Terms" variant="filled" />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose1} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose1} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
        <Button style={{color:'white',width:'250px'}}onClick={handleClickOpen2}>DELETE</Button>
        <Dialog maxwidth="md"
        PaperProps={{
        style:{
            backgroundColor:'rgb(62,78,102)',
            boxShadow: 'none',
            color : "white"
        }
    }}
        open={open2}
        onClose={handleClose2}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title"></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <text style={{color:'white'}}>Are You Sure </text>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose2} color="white">
            Disagree
          </Button>
          <Button onClick={handleClose2} color="white" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      </ButtonGroup>
    </Box>
  
  );
}