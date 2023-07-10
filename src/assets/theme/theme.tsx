import { TreeItem, treeItemClasses, TreeItemProps } from '@mui/lab'
import {
  alpha,
  Autocomplete,
  Checkbox,
  createTheme, Dialog, DialogActions, DialogContent, DialogTitle, styled, Switch, TableCell, tableCellClasses, TableRow, TextField
} from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import '../theme/constants.scss'
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { CustomButton } from '../../components/Shared';
const primaryFontSize = 14
export const PrimaryTheme = createTheme({
  palette: {
    text: {
      disabled: '#6b6b6b'
    },
    primary: {
      main: '#dd2126',
    },
    secondary: {
      main: '#282828'
    },
    success: {
      main: '#00C853'
    },
    error: {
      main: '#FF0001'
    },
    warning: {
      main: '#FFB800'
    }
  },
  typography: {
    fontFamily: ['Ubuntu', 'sans-serif'].join(','),

    fontSize: primaryFontSize,
    fontWeightLight: 100,
    fontWeightRegular: 400,
    fontWeightBold: 500,
    body1: {
      fontSize: primaryFontSize
    }
  },
  components: {
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '16px',
          '&:last-child': {
            paddingBottom: '16px'
          }
        }
      }
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: 'rgba(0, 0, 0, 0.05)',
          backgroundColor: 'rgba(0, 0, 0, 0.05)'
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginTop: '-2px'
        }
      }
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: '16px',
          paddingTop: '0'
        }
      }
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginRight: '0px'
        }
      }
    }
  }
})
export const StickyTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontSize: 14,
    backgroundColor: '#323232',
    color: theme.palette.common.white,
    padding: '15px',
    borderLeft: '1px solid',
    borderColor: '#282828',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: '15px',
    color: theme.palette.common.white,
    backgroundColor: '#282828',
    borderBottom: '0.01px solid #bfbfbf !important',
  },
  position: 'sticky',
  zIndex: 10,
  left: 0,
}));

export const StyledTableCell = styled(TableCell, { shouldForwardProp: (prop) => prop !== 'width'})(({ theme, width }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontSize: 14,
    backgroundColor: '#323232',
    color: theme.palette.common.white,
    padding: '15px',
    borderLeft: '1px solid',
    borderColor: '#282828',
    width: width || 'auto',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: '15px',
    color: theme.palette.common.white,
    backgroundColor: '#282828',
    borderBottom: '0.01px solid #bfbfbf !important',
    width: width || 'auto',
  },
  '&:last-child': {
    position: 'sticky',
    right: 0,
    zIndex: 10
  },
}))

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}))


export const StyledCheckBox = styled(Checkbox)(({ theme }) => ({
  '&.MuiCheckbox-colorPrimary': {
    color: theme.palette.common.white,
  }
}))

export const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    backgroundColor: '#2f2f2f',
    color: 'white',
    borderColor: '#3a3a3a',
  },
  '& .MuiInputLabel-root': {
    color: 'white',
    pointerEvents: 'none',
  },
  '& .MuiInputLabel-root.Mui-required::after': {
    color: 'red',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: 'white',
    opacity: 1,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#3a3a3a',
      borderWidth: '1px'
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
      borderWidth: '2px',
    },
    '& input::placeholder': {
      color: 'white', 
    },
  },
  '& .MuiAutocomplete-popupIndicator': {
    color: 'white',
  },
  '& .MuiSvgIcon-root': {
    color: 'white',
  },
}));
export const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
  '& .MuiInputBase-root': {
    color: 'white',
    backgroundColor: '#2f2f2f', 
    '&:hover': {
      backgroundColor: '#2f2f2f', 
    },
    '&.Mui-focused': {
      backgroundColor: '#2f2f2f', 
    },
  },
  '& .MuiInputLabel-root': {
    color: 'white',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#3a3a3a', 
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
    '& input::placeholder': {
      color: 'white', 
    },
  },
  '& .MuiAutocomplete-paper': {
    backgroundColor: '#2f2f2f', 
  },
  '& .MuiAutocomplete-popper': {
    '& .MuiPaper-root': {
      backgroundColor: '#2f2f2f',
    },
  },
  '& .MuiAutocomplete-popupIndicator': {
    color: 'white',
  },
}));

export const StyledDatePickerInput = styled(DatePicker)(({ theme }) => ({
  '& .MuiInputBase-root': {
    color: 'white',
    backgroundColor: '#2f2f2f',
    '&:hover': {
      backgroundColor: '#2f2f2f',
    },
    '&.Mui-focused': {
      backgroundColor: '#2f2f2f',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'white',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#3a3a3a',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
    '& input::placeholder': {
      color: 'white',
    },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#3a3a3a',
  },
  '& .MuiSvgIcon-root': {
    color: 'white',
  },
}));

export const StyledSwitch = styled(Switch)(({ theme }) => ({
  padding: 8,
  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    backgroundColor: '#2f2f2f',
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 16,
      height: 16,
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    width: 16,
    height: 16,
    margin: 2,
  },
  '& .Mui-checked + .MuiSwitch-track': {
    backgroundColor: '#2f2f2f',
    color: '00c853'
  },
  '& .Mui-checked': {
    color: '00c853'
  },
}));

export const StyledTreeItem = styled((props: TreeItemProps) => (
  // eslint-disable-next-line react/react-in-jsx-scope
  <TreeItem {...props} />
))(({ theme }) => ({
  [`& .${treeItemClasses.iconContainer}`]: {
    '& .close': {
      opacity: 0.3
    }
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 15,
    paddingLeft: 18,
    borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`
  },
  [`& .${treeItemClasses.content}`]: {
    '$expanded > &': {
      fontWeight: theme.typography.fontWeightRegular
    }
  }
}))


export const BootstrapDialog = styled(Dialog)(({ theme }) => ({

  '& .MuiDialogContent-root': {
  },
  '& .MuiDialogActions-root': {
    paddingBottom: 16,
    paddingTop: 16
  },
  '& .MuiBackdrop-root': {
    backgroundColor: 'rgba(75, 75, 75, 0.5);'

  },
  '& .MuiDialog-paper': {
    maxWidth: 'fit-content'
  }

}))

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose(): void;
}
export const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props

  return (
    <DialogTitle style={{ fontWeight: 500, fontSize: 16, textAlign: 'left', color: 'white', backgroundColor: '#1e1e1e', border: '2.5px solid #323232', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} {...other}>
      {children}
      <CustomButton isShadow='none' icon={<CloseIcon sx={{ backgroundColor: 'transparent' }} />} onClick={onClose} bgColor='transparent'/>
    </DialogTitle>
  )
}

export const BootstrapDialogContent: React.FC<{
  children?: React.ReactNode;
}> = (props) => {
  return (
    <DialogContent dividers style={{ backgroundColor: "#262626", borderLeft: '2.5px solid #323232', borderRight: '2.5px solid #323232', padding: '35px 50px' }}>
      {props.children}
    </DialogContent>
  )
}
export const BootstrapDialogActions: React.FC<{
  children?: React.ReactNode;
}> = (props) => {
  return (
    <DialogActions style={{ backgroundColor: "#1e1e1e", border: '2.5px solid #323232', padding: '20px 45px' }}>
      {props.children}
    </DialogActions>
  )
}

export const StyledStatusApproved = styled('div')(({ theme }) => ({
  color: theme.palette.success.main,
  cursor: 'pointer',
}));
export const StyledStatusRejected = styled('div')(({ theme }) => ({
  color: theme.palette.error.main,
  cursor: 'pointer',
}));
export const StyledStatusPending = styled('div')(({ theme }) => ({
  color: theme.palette.warning.main,
  cursor: 'pointer',
}));
export const StyledStatusDraft = styled('div')(({ theme }) => ({
  color: theme.palette.common.white,
  cursor: 'pointer',
}));

export const StyledActive = styled('div')(({ theme }) => ({
  color: theme.palette.success.main,
  cursor: 'pointer',
}));
export const StyledINActive = styled('div')(({ theme }) => ({
  color: theme.palette.error.main,
  cursor: 'pointer',
}));