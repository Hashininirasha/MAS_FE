import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
  Select,
  MenuItem,
  TableContainer,
  TableHead,
  Table,
  Paper,
  TableRow,
  TableBody,
} from "@mui/material";
import style from "./NewRequests.module.scss";
import { useForm } from "react-hook-form";
import { StyledTableCell } from "../../../assets/theme/theme";
import CustomHeaderCell from "../../Shared/CustomHeaderCell/CustomHeaderCell";

let rowId = 1;

interface AdditionalInfoPopupProps {
  open: boolean;
  fromDateTime: any;
  toDateTime: any;
  // toDate: any;
  onClose: () => void;
  onSave: (packageArray: any[]) => void;
}

const AdditionalInfoPopup: React.FC<AdditionalInfoPopupProps> = ({
  open,
  onClose,
  onSave,
  fromDateTime,
  toDateTime,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const packageTypeId = watch("packageTypeId");
  const startLocation = watch("startLocation");
  const toLocation = watch("toLocation");

  const packageLocations = [
    {
      startLocation: startLocation,
      toLocation: toLocation,
    },
  ];

  // const recipientId = watch("recipientId");
  const reciepientId = watch("recipientId");

  const recipientContact = watch("recipientContact");
  const instructions = watch("instructions");
  const gatePassNo = watch("gatePassNo");
  const serialNo = watch("serialNo");

  const description = watch("description");
  const cbm = watch("cbm");
  const weight = watch("weight");
  const items = [
    {
      description: description,
      cbm: Number(cbm),
      weight: Number(weight),
    },
  ];

  const [mainRow, setMainRow] = React.useState<any[]>([]);
  const [rows1, setRows1] = React.useState<any[]>([]);
  const [packageArray, setPackageArray] = React.useState<any[]>([]);
  const isReturn = false;

  const handleAddButton = () => {
    if (Object.keys(errors).length === 0) {
      const newRow = {
        id: rowId,
        description,
        cbm,
        weight,
      };
      setRows1([...rows1, newRow]);
      rowId++;

      const newMainGrid = {
        // id: uuidv4(),
        serialNo,
        packageTypeId,
        gatePassNo,
        fromDate: fromDateTime,
        toDate: toDateTime,
        packageLocations,
        reciepientId: Number(reciepientId),
        recipientContact,
        instructions,
        isReturn,
        items,
      };
      setMainRow([...mainRow, newMainGrid]);
      setPackageArray((prevArray) => [...prevArray, newMainGrid]);
    }
  };

  const handleSave = () => {
    onSave(packageArray);
  };

  const columns1 = [
    { field: "id", headerName: "#", width: 100 },
    { field: "description", headerName: "Item Description", width: 500 },
    { field: "cmb", headerName: "CMB", width: 100 },
    { field: "weight", headerName: "Weight", width: 100 },
  ];

  const [options, setOptions] = useState<any[]>([]);
  // const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    // Fetch options from the API endpoint
    fetch(
      "https://mas-tms-dev-api-eastus.azurewebsites.net/api/PackageType/GetPackageTypes"
    )
      .then((response) => response.json())
      .then((data) => setOptions(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Package Details</DialogTitle>
      <DialogContent
        sx={{ minHeight: 200, minWidth: 400 }}
        className={style.popupContainer}
      >
        <form onSubmit={handleSubmit(handleAddButton)}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <label>Package Type:</label>
            </Grid>
            <Grid item xs={6}>
              <label>Gate Pass No:</label>
            </Grid>

            <Grid item xs={6}>
              <Select
                defaultValue=""
                displayEmpty
                {...register("packageTypeId", { required: true })}
                sx={{ fieldset: { borderColor: "rgb(235, 235, 235)" } }}
                style={{
                  minWidth: "100%",
                  color: "rgb(235, 235, 235)",
                }}
              >
                <MenuItem value="" disabled>
                  Select package type
                </MenuItem>
                {options.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.description}
                  </MenuItem>
                ))}
              </Select>
              {errors["packageTypeId"] && (
                <span className={style.errorMessage}>
                  Request Type is required.
                </span>
              )}
            </Grid>

            <Grid item xs={6}>
              <TextField
                type="number"
                autoComplete="off"
                placeholder="Gate Number"
                {...register("gatePassNo", { required: true })}
                fullWidth
                sx={{ fieldset: { borderColor: "rgb(235, 235, 235)" } }}
                inputProps={{
                  style: { color: "rgb(235, 235, 235)" },
                }}
              />
              {errors["gatePassNo"] && (
                <span className={style.errorMessage}>
                  Request Type is required.
                </span>
              )}
            </Grid>

            <Grid item xs={6}>
              <label>Pickup Location:</label>
            </Grid>
            <Grid item xs={6}>
              <label>Dropoff Location:</label>
            </Grid>
            <Grid item xs={6}>
              <TextField
                {...register("startLocation", { required: true })}
                placeholder="Search Location"
                autoComplete="off"
                fullWidth
                sx={{ fieldset: { borderColor: "rgb(235, 235, 235)" } }}
                inputProps={{
                  style: { color: "rgb(235, 235, 235)" },
                }}
              />
              {errors["startLocation"] && (
                <span className={style.errorMessage}>
                  Request Type is required.
                </span>
              )}
            </Grid>
            <Grid item xs={6}>
              <TextField
                {...register("toLocation", { required: true })}
                placeholder="Search Location"
                autoComplete="off"
                fullWidth
                sx={{ fieldset: { borderColor: "rgb(235, 235, 235)" } }}
                inputProps={{
                  style: { color: "rgb(235, 235, 235)" },
                }}
              />
              {errors["toLocation"] && (
                <span className={style.errorMessage}>
                  Pack drop is required.
                </span>
              )}
            </Grid>

            <Grid item xs={6}>
              <label>Recepient ID:</label>
            </Grid>
            <Grid item xs={6}>
              <label>Recepient Contact No:</label>
            </Grid>

            <Grid item xs={6}>
              <TextField
                type="number"
                {...register("recipientId", { required: true })}
                placeholder="Enter Recepient"
                fullWidth
                autoComplete="off"
                sx={{ fieldset: { borderColor: "rgb(235, 235, 235)" } }}
                inputProps={{
                  style: { color: "rgb(235, 235, 235)" },
                }}
              />
              {errors["recipientId"] && (
                <span className={style.errorMessage}>
                  Recipient name is required.
                </span>
              )}
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="number"
                {...register("recipientContact", { required: true })}
                placeholder="Enter Recepient Contact No"
                fullWidth
                autoComplete="off"
                sx={{ fieldset: { borderColor: "rgb(235, 235, 235)" } }}
                inputProps={{
                  style: { color: "rgb(235, 235, 235)" },
                }}
              />
              {errors["recipientContact"] && (
                <span className={style.errorMessage}>
                  Recipient Phone is required.
                </span>
              )}
            </Grid>

            <Grid item xs={6}>
              <label>Instructions:</label>
            </Grid>
            <Grid item xs={6}></Grid>

            <Grid item xs={6}>
              <TextField
                {...register("instructions", { required: true })}
                placeholder="Enter Instructions"
                fullWidth
                autoComplete="off"
                sx={{ fieldset: { borderColor: "rgb(235, 235, 235)" } }}
                inputProps={{
                  style: { color: "rgb(235, 235, 235)" },
                }}
              />
              {errors["instructions"] && (
                <span className={style.errorMessage}>
                  Instuctions are required.
                </span>
              )}
            </Grid>
            <Grid item xs={6}></Grid>

            <Grid item xs={6}>
              <label>Serial Number:</label>
            </Grid>
            <Grid item xs={6}>
              <label>Item Description:</label>
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="number"
                autoComplete="off"
                {...register("serialNo", { required: true })}
                placeholder="Serial Number"
                fullWidth
                sx={{ fieldset: { borderColor: "rgb(235, 235, 235)" } }}
                inputProps={{
                  style: { color: "rgb(235, 235, 235)" },
                }}
              />
              {errors["serialNo"] && (
                <span className={style.errorMessage}>
                  Serial No is required.
                </span>
              )}
            </Grid>
            <Grid item xs={6}>
              <TextField
                {...register("description")}
                placeholder="Item Description"
                fullWidth
                autoComplete="off"
                sx={{ fieldset: { borderColor: "rgb(235, 235, 235)" } }}
                inputProps={{
                  style: { color: "rgb(235, 235, 235)" },
                }}
              />
              {errors["description"] && (
                <span className={style.errorMessage}>
                  Item description is required.
                </span>
              )}
            </Grid>

            <Grid item xs={6}>
              <label>CBM:</label>
            </Grid>
            <Grid item xs={6}>
              <label>Weight:</label>
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="number"
                {...register("cbm", { required: true })}
                placeholder="Enter CBM"
                fullWidth
                sx={{ fieldset: { borderColor: "rgb(235, 235, 235)" } }}
                inputProps={{
                  style: { color: "rgb(235, 235, 235)" },
                }}
              />
              {errors["cbm"] && (
                <span className={style.errorMessage}>CBM is required.</span>
              )}
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="number"
                placeholder="Enter Weight"
                autoComplete="off"
                {...register("weight", { required: true })}
                fullWidth
                sx={{ fieldset: { borderColor: "rgb(235, 235, 235)" } }}
                inputProps={{
                  style: { color: "rgb(235, 235, 235)" },
                }}
              />
              {errors["weight"] && (
                <span className={style.errorMessage}>Weight is required.</span>
              )}
            </Grid>
            <Grid item xs={12} sm={6}></Grid>
            <Grid item xs={12} sm={6}>
              <Grid container spacing={6}>
                <Grid item xs={4}></Grid>
                <Grid item xs={2}>
                  <Button
                    variant="contained"
                    sx={{ background: "rgb(191, 191, 191)", color: "black" }}
                  >
                    Clear
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="outlined"
                    type="submit"
                    sx={{ background: "rgb(40, 40, 40);", color: "white" }}
                  >
                    Add Item
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} />
            <Grid item xs={12}>
              {/* <DataGrid
                rows={rows1}
                columns={columns1}
                style={{ color: "white" }}
              /> */}

              <TableContainer component={Paper} className={style.grid}>
                <Table className={style.table}>
                  <TableHead>
                    <TableRow>
                      <CustomHeaderCell id="itemNum" width={100}>
                        #
                      </CustomHeaderCell>
                      <CustomHeaderCell id="itemDesc" width={450}>
                        Item Description
                      </CustomHeaderCell>
                      <CustomHeaderCell id="itemCBM" width={145}>
                        CBM
                      </CustomHeaderCell>
                      <CustomHeaderCell id="itemWeight" width={145}>
                        Weight
                      </CustomHeaderCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows1.map((item, index) => (
                      <TableRow key={index}>
                        <StyledTableCell>{index + 1}</StyledTableCell>{" "}
                        <StyledTableCell>{item.description}</StyledTableCell>
                        <StyledTableCell>{item.cbm}</StyledTableCell>{" "}
                        <StyledTableCell>{item.weight} kg</StyledTableCell>{" "}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </form>
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

export default AdditionalInfoPopup;
