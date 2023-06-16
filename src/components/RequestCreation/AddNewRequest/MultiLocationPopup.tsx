import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";

interface MultiLocationPopupProps {
  open: boolean;
  onClose: () => void;
  onSave: (data: any[]) => void; // Specify the type for the 'onSave' prop
}

const MultiLocationPopup: React.FC<MultiLocationPopupProps> = ({
  open,
  onClose,
  onSave,
}) => {
  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [additionalField1, setAdditionalField1] = useState("");
  const [additionalField2, setAdditionalField2] = useState("");

  const handleSave = () => {
    // Pass the data back to the main component

    onSave([field1, field2, additionalField1, additionalField2]);
    onClose();
  };

  const handleAddLocations = () => {
    setShowAdditionalFields(true);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Multiple Location</DialogTitle>
      <DialogContent>
        {/* Fields to enter data */}
        <TextField
          label="Travel From"
          value={field1}
          onChange={(e) => setField1(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Travel To"
          value={field2}
          onChange={(e) => setField2(e.target.value)}
          fullWidth
          margin="normal"
        />
        {showAdditionalFields && (
          <>
            <TextField
              label="Drop Location"
              value={additionalField1}
              onChange={(e) => setAdditionalField1(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Drop Location"
              value={additionalField2}
              onChange={(e) => setAdditionalField2(e.target.value)}
              fullWidth
              margin="normal"
            />
          </>
        )}
        <Button onClick={handleAddLocations}>Add Locations</Button>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MultiLocationPopup;
