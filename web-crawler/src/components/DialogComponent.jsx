import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import CrawledItemComponent from './CrawledItemComponent';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    color: '#c51162',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant='h6'>{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label='close'
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

// const DialogActions = withStyles((theme) => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(1),
//   },
// }))(MuiDialogActions);

export default function CustomizedDialogs({
  crawledItem,
  setIsDialogOPen,
  IsDialogOPen,
}) {
  //   const [open, setOpen] = useState(IsDialogOPen);

  //   //   const handleClickOpen = () => {
  //   //     setOpen(true);
  //   //   };
  //   const handleClose = () => {
  //     setOpen(false);
  //   };
  return (
    <div>
      <Dialog
        fullWidth={true}
        maxWidth={'lg'}
        onClose={() => setIsDialogOPen(!IsDialogOPen)}
        aria-labelledby='customized-dialog-title'
        open={IsDialogOPen}
      >
        <DialogTitle
          id='customized-dialog-title'
          onClose={() => setIsDialogOPen(!IsDialogOPen)}
        >
          crawl results for: {crawledItem.url}
        </DialogTitle>
        <DialogContent dividers>
          <CrawledItemComponent crawledItem={crawledItem} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
