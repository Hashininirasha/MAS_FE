import {
  Box,
  Button,
  Switch,
  TextField,
  MenuItem,
  Select,
  Grid,
  Typography,
  TableBody,
  Paper,
  TableHead,
  Table,
  TableRow,
  TableContainer,
  Snackbar,
} from "@mui/material";

import React, { useState, useEffect } from "react";
import style from "./NewRequests.module.scss";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useForm } from "react-hook-form";
import AdditionalInfoPopup from "./AdditionalInfoPopup";
import MultiLocationPopup from "./MultiLocationPopup";
import Autocomplete from "@mui/material/Autocomplete";
import DeleteIcon from "@mui/icons-material/Delete";
import { StyledTableCell } from "../../../assets/theme/theme";
import { AppLayout } from "../../../templates";
import CustomHeaderCell from "../../Shared/CustomHeaderCell/CustomHeaderCell";

const REQUEST_TYPE = [
  { id: 1, name: "ADHOC" },
  { id: 2, name: "Recurrent" },
];
const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let id = 0;

const AddNewRequest: React.FC<{}> = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const [additionalInfoOpen, setAdditionalInfoOpen] = useState(false);
  const [multiLocationOpen, setMultiLocationOpen] = useState(false);

  // const [additionalInfo, setAdditionalInfo] = useState("");

  const selectedRequestType = watch("requestTypeId");
  const fromLocation = watch("fromLocation");
  const toLocation = watch("toLocation");
  const [open, setOpen] = useState(false);

  const passenger = watch("passenger");

  const sbu = watch("sbu");
  const passengerPickLocation = watch("passengerPickLocation");
  const passengerDropLocation = watch("passengerDropLocation");

  const approverDept = watch("approverDept");
  const isReturn = watch("return");
  // const departureDate = watch("departureDate");
  // const departureTime = watch("departureTime");

  // const combinedDeparture = new Date(departureDate + "T" + departureTime);
  // const fromDate = combinedDeparture.toISOString();
  // const combinedDeparture = new Date(departureDate + "T" + departureTime);
  // const fromDate = combinedDeparture.toISOString();
  let departureDate = "2023-06-06";
  let departureTime = "15:36";
  let returnDate = "2023-07-06";
  let returnTime = "20:36";
  const combinedDeparture = new Date(departureDate + "T" + departureTime);
  const fromDateTime = combinedDeparture.toISOString();

  const combinedReturn = new Date(returnDate + "T" + returnTime);
  const toDateTime = combinedReturn.toISOString();

  const [packages, setPackages] = useState<any[]>([]);

  const handleAdditionalInfoOpen = () => {
    setAdditionalInfoOpen(true);
  };

  const handleAdditionalInfoClose = () => {
    setAdditionalInfoOpen(false);
  };

  const handleAdditionalInfoSave = (additionalInfo: any) => {
    setPackages(additionalInfo);
    setAdditionalInfoOpen(false);
  };

  const handleMultiLocationOpen = () => {
    setMultiLocationOpen(true);
  };

  const handleMultiLocationClose = () => {
    setMultiLocationOpen(false);
  };

  const [multiLocationData, setMultiLocationData] = useState("");

  const handleMultiLocationSave = (data: any) => {
    console.log(data);
    setMultiLocationData(data);
    setAdditionalInfoOpen(false);
  };

  const handleDeleteRow = (id: any) => {
    const updatedRows = packages.filter((row) => row.serialNo !== id);
    setPackages([...updatedRows]);
  };

  const columns = [
    { field: "serialNo", headerName: "Serial No", width: 80 },
    { field: "packageType", headerName: "Item Description", width: 100 },
    { field: "packPickLocation", headerName: "Pick Location", width: 100 },
    { field: "packDropLocation", headerName: "Drop Location", width: 100 },
    { field: "recipientName", headerName: "Recipient", width: 100 },
    { field: "recipientPhone", headerName: "Recipient Contact", width: 100 },
    { field: "instructions", headerName: "Instruction", width: 100 },
    { field: "itemDesc", headerName: "Item Description", width: 100 },
    { field: "cmb", headerName: "CMB", width: 50 },
    { field: "weight", headerName: "Weight", width: 50 },
    {
      field: "delete",
      headerName: "Action",
      width: 100,
      renderCell: (params: any) => (
        <DeleteIcon onClick={() => handleDeleteRow(params.row.id)}></DeleteIcon>
      ),
    },
  ];

  const [passengerRow, setPassengerRow] = useState<any[]>([]);
  const [requestPassengers, setrequestPassengers] = useState<any[]>([]);
  const passengerUser = "Udayanga";
  const passengerDept = "IT";

  useEffect(() => {
    const fromDate = fromDateTime;
    const toDate = toDateTime;

    const initialRow = {
      // id: uuidv4(),
      userId: id++,
      isReturn: isReturn,
      fromDate,
      toDate,
      requestPassengerLocations: [
        {
          startLocation: fromLocation,
          toLocation: toLocation,
        },
      ],
      // passengerPickLocation: fromLocation,
      // passengerDropLocation: toLocation,
      // multiLocationData: "",
    };

    setPassengerRow([initialRow]);
    setrequestPassengers([initialRow]);
  }, [fromLocation, toLocation]);

  const handleAddPassengerButton = () => {
    const fromDate = fromDateTime;
    const toDate = toDateTime;
    const newRow = {
      // id: uuidv4(),
      userId: Number(passenger),
      // passenger,
      // sbu,
      // passengerPickLocation,
      // passengerDropLocation,
      // multiLocationData,
      isReturn: isReturn,
      fromDate,
      toDate,
      requestPassengerLocations: [
        {
          startLocation: passengerPickLocation,
          toLocation: passengerDropLocation,
        },
      ],
    };
    setPassengerRow([...passengerRow, newRow]);
    setrequestPassengers((prevArray) => [...prevArray, newRow]);
  };

  const handleDeletePassenger = (id: number) => {
    const updatedRows = passengerRow.filter((row) => row.userId !== id);
    setrequestPassengers(updatedRows);
    setPassengerRow(updatedRows);

    const passengerIndex = requestPassengers.findIndex(
      (passenger) => passenger.id === id
    );
    if (passengerIndex !== -1) {
      requestPassengers.splice(passengerIndex, 1);
      console.log("Updated requestPassengers:", requestPassengers);
    }
  };

  const passengerColumn = [
    { field: "passenger", headerName: "Passenger Name", width: 120 },
    { field: "sbu", headerName: "Department/SBU", width: 120 },
    { field: "passengerPickLocation", headerName: "Pick up From", width: 100 },
    { field: "passengerDropLocation", headerName: "Drop off at", width: 100 },
    { field: "multiLocationData", headerName: "Others", width: 200 },

    {
      field: "delete",
      headerName: "Action",
      width: 100,
      renderCell: (params: any) => (
        <DeleteIcon
          onClick={() => handleDeletePassenger(params.row.id)}
        ></DeleteIcon>
      ),
    },
  ];

  const onSubmit = (data: any, e: any) => {
    if (e.type === "submit") {
      e.preventDefault();
      // code for handling form submission
      if (Object.keys(errors).length === 0) {
        const distance = 0;
        delete data.departureDate;
        delete data.departureTime;
        delete data.returnDate;
        delete data.returnTime;
        delete data.approverDept;
        delete data.passenger;
        delete data.plant;
        delete data.dept;
        delete data.sbu;
        delete data.passengerDropLocation;
        delete data.passengerPickLocation;
        delete data.excludeDays;

        console.log("Form Data:", {
          ...data,
          fromDateTime,
          toDateTime,
          packages,
          requestPassengers,
          distance,
        });

        const requestTypeId = data.requestTypeId;
        const fromLocation = data.fromLocation;
        const toLocation = data.toLocation;
        const vip = data.vip;
        const approver = data.approver;
        const vehicleTypeId = data.vehicleTypeId;
        const purpose = data.purpose;
        const isDraft = data.isDraft;
        const templates = data.templates;
        // Form data when submit
        let res = fetch(
          "https://mas-tms-dev-api-eastus.azurewebsites.net/api/Request/CreateRequest",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              return: data.return,
              fromLocation,
              toLocation,
              vip,
              approver,
              vehicleTypeId,
              purpose,
              isDraft,
              templates,
              requestTypeId,
              fromDateTime,
              toDateTime,
              packages,
              requestPassengers,
              distance,
            }),
          }
        )
          .then((response) => {
            // Handle the API response
            if (response.status === 200) {
              setOpen(true); // Snackbar will be displayed on successful response
            } else {
              throw new Error("API request failed");
            }
          })
          .catch((error) => {
            console.error(error);
            setOpen(true); // Snackbar will be displayed on error
          });
      }
    }
  };

  const [defaultApprover, setDefaultApprover] = useState({
    defaultApproverName: "",
    defaultApproverId: 0,
  });
  const [approverPool, setApproverPool] = useState<any[]>([]);

  const [vehicles, setVehicles] = useState<any[]>([]);
  const [defaultSbu, setDefaultSbu] = useState("");
  const [defaultPlant, setDefaultPlant] = useState("");
  const [defaultDept, setDefaultDept] = useState("");
  const [passengerList, setPassengerList] = useState<any[]>([]);

  const fetchData = async () => {

    try {
      const urls = [
        "https://mas-tms-dev-api-eastus.azurewebsites.net/api/Approver/DepartmentApprovers?userId=6",
        "https://mas-tms-dev-api-eastus.azurewebsites.net/api/Vehicle/VehicleTypes",
        "https://mas-tms-dev-api-eastus.azurewebsites.net/api/Passenger/PassengerDetails?userId=6",
        "https://mas-tms-dev-api-eastus.azurewebsites.net/api/User/GetAllPassengers",
        "https://mas-tms-dev-api-eastus.azurewebsites.net/api/Approver",
      ];

      const responses = await Promise.all(urls.map((url) => fetch(url)));
      const data = await Promise.all(
        responses.map((response) => response.json())
      );

      const [
        approvers,
        vehicleTypes,
        passenger,
        GetAllPassengers,
        approverSet,
      ] = data;

      setDefaultApprover(approvers);
      setVehicles(vehicleTypes);
      setDefaultSbu(passenger.data[1].name);
      setDefaultPlant(passenger.data[2].name);
      setDefaultDept(passenger.data[3].name);
      setPassengerList(GetAllPassengers);
      setApproverPool(approverSet);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <AppLayout componentTitle="Request Creation">
        <section className={style.gridContainer}>
          <div className={style.gridHeader}>
            <Typography noWrap component="div" className={style.gridTitle}>
              <h3>Transport Requests</h3>
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <div>
              <Button className={style.gridActionButton} variant="contained">
                <Box>
                  <div className="layout-row">
                    <Typography className={style.text}>
                      Select saved template
                    </Typography>
                    <KeyboardArrowDownOutlinedIcon className={style.icon} />
                  </div>
                </Box>
              </Button>
            </div>
          </div>

          <hr className="verticalLine" />

          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ overflow: "auto", height: "55vh" }}
          >
            <div className={style.info_heading}>
              <h1>1. General Information</h1>
            </div>
            <section className={style.info_form}>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <label>Request Type:</label>
                    </Grid>
                    <Grid item xs={12}>
                      <Select
                        {...register("requestTypeId", { required: true })}
                        defaultValue=""
                        displayEmpty
                        size="small"
                        sx={{ fieldset: { borderColor: "rgb(235, 235, 235)" } }}
                        style={{
                          minWidth: "100%",
                          color: "rgb(235, 235, 235)",
                        }}
                      >
                        <MenuItem value="" disabled>
                          Select request type
                        </MenuItem>
                        {REQUEST_TYPE.map((requestType) => (
                          <MenuItem key={requestType.id} value={requestType.id}>
                            {requestType.name}
                          </MenuItem>
                        ))}
                      </Select>
                      {errors["requestTypeId"] && (
                        <span className={style.errorMessage}>
                          Request Type is required.
                        </span>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <label>Departure date:</label>
                    </Grid>
                    <Grid item xs={6}>
                      <label>Departure at:</label>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        type="date"
                        size="small"
                        fullWidth
                        {...register("departureDate", { required: true })}
                        className={style.customTextField}
                        inputProps={{
                          min: new Date().toISOString().split("T")[0],
                        }}
                      />
                      {errors["departureDate"] && (
                        <span className={style.errorMessage}>
                          Departure Date is required.
                        </span>
                      )}
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        type="time"
                        fullWidth
                        size="small"
                        {...register("departureTime", { required: true })}
                        className={style.customTextField}
                      />
                      {errors["departureTime"] && (
                        <span className={style.errorMessage}>
                          Departure Time is required.
                        </span>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <label>Exclude Days:</label>
                    </Grid>
                    <Grid item xs={12}>
                      <Select
                        id="exclude-days-label"
                        size="small"
                        {...register("excludeDays")}
                        defaultValue={[]}
                        multiple
                        displayEmpty
                        sx={{ fieldset: { borderColor: "rgb(235, 235, 235)" } }}
                        style={{
                          minWidth: "100%",
                          color: "rgb(235, 235, 235)",
                        }}
                        disabled={selectedRequestType === 1}
                      >
                        <MenuItem value="" disabled>
                          Select days to exclude - Only for recurrent
                        </MenuItem>
                        {DAYS.map((day) => (
                          <MenuItem key={day} value={day}>
                            {day}
                          </MenuItem>
                        ))}
                        {errors["excludeDays"] && (
                          <span className={style.errorMessage}>
                            Select excluding days or change request type to
                            ADHOC
                          </span>
                        )}
                      </Select>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <label>I want to travel from:</label>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        placeholder="Search Location"
                        fullWidth
                        size="small"
                        autoComplete="off"
                        {...register("fromLocation", { required: true })}
                        className={style.customTextField}
                      />
                      {errors["fromLocation"] && (
                        <span className={style.errorMessage}>
                          Enter Location.
                        </span>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <label>I want to travel to:</label>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        autoComplete="off"
                        placeholder="Search Location"
                        fullWidth
                        size="small"
                        {...register("toLocation", { required: true })}
                        className={style.customTextField}
                      />
                      {errors["toLocation"] && (
                        <span className={style.errorMessage}>
                          Enter Location.
                        </span>
                      )}
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={6} sm={4}>
                      <label>Return same day:</label>
                    </Grid>
                    <Grid item xs={6} sm={2}>
                      <Switch {...register("return")} />
                    </Grid>
                    <Grid item xs={6} sm={4}>
                      <label>VIP Trip:</label>
                    </Grid>
                    <Grid item xs={6} sm={2}>
                      <Switch {...register("vip")} />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <label>Return date:</label>
                    </Grid>
                    <Grid item xs={6}>
                      <label>Return at:</label>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        type="date"
                        size="small"
                        fullWidth
                        {...register("returnDate", { required: true })}
                        className={style.customTextField}
                        inputProps={{
                          min: new Date().toISOString().split("T")[0],
                        }}
                      />
                      {errors["returnDate"] && (
                        <span className={style.errorMessage}>
                          Return Date is required.
                        </span>
                      )}
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        type="time"
                        fullWidth
                        size="small"
                        {...register("returnTime", { required: true })}
                        className={style.customTextField}
                      />
                      {errors["returnTime"] && (
                        <span className={style.errorMessage}>
                          Departure Time is required.
                        </span>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Grid container spacing={2}></Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <label>Approver's Department:</label>
                    </Grid>
                    <Grid item xs={12}>
                      <Select
                        {...register("approverDept", { required: true })}
                        defaultValue="same-dept"
                        displayEmpty
                        size="small"
                        sx={{ fieldset: { borderColor: "rgb(235, 235, 235)" } }}
                        style={{
                          minWidth: "100%",
                          color: "rgb(235, 235, 235)",
                        }}
                      >
                        <MenuItem value="same-dept">Same Department</MenuItem>
                        <MenuItem value="all-dept">All Department</MenuItem>
                      </Select>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <label>Approver:</label>
                    </Grid>
                    <Grid item xs={12}>
                      <Select
                        {...register("approver", { required: true })}
                        defaultValue=""
                        displayEmpty
                        size="small"
                        sx={{ fieldset: { borderColor: "rgb(235, 235, 235)" } }}
                        style={{
                          minWidth: "100%",
                          color: "rgb(235, 235, 235)",
                        }}
                      >
                        <MenuItem value="" disabled>
                          Select an approver
                        </MenuItem>

                        {approverDept === "same-dept" ? (
                          <MenuItem value={defaultApprover.defaultApproverId}>
                            {defaultApprover.defaultApproverName}
                          </MenuItem>
                        ) : (
                          approverPool.map((app) => (
                            <MenuItem key={app.approver} value={app.name}>
                              {app.name}
                            </MenuItem>
                          ))
                        )}
                      </Select>
                      {errors["approver"] && (
                        <span className={style.errorMessage}>
                          Approver is required.
                        </span>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <label>Prefered Vehicle Type:</label>
                    </Grid>
                    <Grid item xs={12}>
                      <Select
                        defaultValue=""
                        displayEmpty
                        size="small"
                        fullWidth
                        {...register("vehicleTypeId", { required: true })}
                        sx={{ fieldset: { borderColor: "rgb(235, 235, 235)" } }}
                        style={{
                          minWidth: "100%",
                          color: "rgb(235, 235, 235)",
                        }}
                      >
                        <MenuItem value="" disabled>
                          Enter prefered vehicle type{" "}
                        </MenuItem>
                        {vehicles.map((vehicle) => (
                          <MenuItem key={vehicle.id} value={vehicle.id}>
                            {vehicle.description}
                          </MenuItem>
                        ))}
                      </Select>
                      {errors["vehicleTypeId"] && (
                        <span className={style.errorMessage}>
                          Enter Vehicle Type.
                        </span>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <label>Purpose:</label>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        {...register("purpose", { required: true })}
                        placeholder="Enter purpose"
                        autoComplete="off"
                        fullWidth
                        size="small"
                        className={style.customTextField}
                      />
                      {errors["purpose"] && (
                        <span className={style.errorMessage}>
                          Purpose is required.
                        </span>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </section>
            <div className={style.info_heading}>
              <h1>2. Passenger Details</h1>
            </div>
            <section className={style.info_form}>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <label>Passenger:</label>
                    </Grid>
                    <Grid item xs={12}>
                      <Autocomplete
                        disablePortal
                        options={passengerList}
                        getOptionLabel={(option) => option.name}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            className={style.customTextField}
                            size="small"
                            // {...register("passenger")}
                            placeholder="Enter Passanger Name"
                          />
                        )}
                        onChange={(event, value) => {
                          setValue("passenger", value ? value.id : null, {
                            shouldValidate: true,
                          });
                        }}
                      />
                      {errors["passenger"] && (
                        <span className={style.errorMessage}>
                          Select a passenger.
                        </span>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <label htmlFor="date">Billable Department/SBU:</label>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                      <Select
                        defaultValue=""
                        displayEmpty
                        size="small"
                        sx={{ fieldset: { borderColor: "rgb(235, 235, 235)" } }}
                        style={{
                          minWidth: "100%",
                          color: "rgb(235, 235, 235)",
                        }}
                        {...register("sbu")}
                      >
                        <MenuItem value="" disabled>
                          Select SBU
                        </MenuItem>
                        <MenuItem value={defaultSbu}>{defaultSbu}</MenuItem>
                      </Select>
                      {errors["sbu"] && (
                        <span className={style.errorMessage}>
                          Select a SBU.
                        </span>
                      )}
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                      <Select
                        defaultValue=""
                        displayEmpty
                        size="small"
                        sx={{ fieldset: { borderColor: "rgb(235, 235, 235)" } }}
                        style={{
                          minWidth: "100%",
                          color: "rgb(235, 235, 235)",
                        }}
                        {...register("plant")}
                      >
                        <MenuItem value="" disabled>
                          Select Plant
                        </MenuItem>
                        <MenuItem value={defaultPlant}>{defaultPlant}</MenuItem>
                      </Select>
                      {errors["plant"] && (
                        <span className={style.errorMessage}>
                          Select a Plant.
                        </span>
                      )}
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                      <Select
                        defaultValue=""
                        displayEmpty
                        size="small"
                        sx={{ fieldset: { borderColor: "rgb(235, 235, 235)" } }}
                        style={{
                          minWidth: "100%",
                          color: "rgb(235, 235, 235)",
                        }}
                        {...register("dept")}
                      >
                        <MenuItem value="" disabled>
                          Select Dept
                        </MenuItem>
                        <MenuItem value={defaultDept}>{defaultDept}</MenuItem>
                      </Select>
                      {errors["dept"] && (
                        <span className={style.errorMessage}>
                          Select a Dept.
                        </span>
                      )}
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <label>Pickup Location:</label>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        placeholder="Search Location"
                        fullWidth
                        size="small"
                        autoComplete="off"
                        sx={{ fieldset: { borderColor: "rgb(235, 235, 235)" } }}
                        inputProps={{
                          style: { color: "rgb(235, 235, 235)" },
                        }}
                        {...register("passengerPickLocation")}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <label>Drop off Location:</label>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        placeholder="Search Location"
                        fullWidth
                        size="small"
                        autoComplete="off"
                        sx={{ fieldset: { borderColor: "rgb(235, 235, 235)" } }}
                        inputProps={{
                          style: { color: "rgb(235, 235, 235)" },
                        }}
                        {...register("passengerDropLocation")}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6}></Grid>
                <Grid item xs={12} sm={6}>
                  <Grid container spacing={2} justifyContent="flex-end">
                    <Grid item>
                      <Button
                        variant="text"
                        className={style.gridActionButton}
                        sx={{
                          textDecoration: "underline",
                          color: "rgb(191, 191, 191)",
                        }}
                        size="small"
                        onClick={handleMultiLocationOpen}
                      >
                        Add Multiple Location
                      </Button>
                      <MultiLocationPopup
                        open={multiLocationOpen}
                        onClose={handleMultiLocationClose}
                        onSave={handleMultiLocationSave}
                      />
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        size="small"
                        className={style.gridActionButton}
                        sx={{
                          background: "rgb(191, 191, 191)",
                          color: "black",
                        }}
                      >
                        Clear
                      </Button>
                    </Grid>
                    <Grid item xs={4}>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={handleAddPassengerButton}
                        className={style.gridActionButton}
                      >
                        Add passenger
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item />
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Grid container spacing={2}>
                      <TableContainer component={Paper} className={style.grid}>
                        <Table className={style.table}>
                          <TableHead>
                            <TableRow>
                              <CustomHeaderCell id="passengerId" width={200}>
                                Passenger ID
                              </CustomHeaderCell>
                              <CustomHeaderCell id="passengerPick" width={250}>
                                Pickup
                              </CustomHeaderCell>
                              <CustomHeaderCell id="passengerDrop" width={250}>
                                Drop At
                              </CustomHeaderCell>
                              <CustomHeaderCell
                                id="passengerAction"
                                width={200}
                              >
                                Action
                              </CustomHeaderCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {requestPassengers.map((item, index) => (
                              <TableRow key={index}>
                                <StyledTableCell>{item.userId}</StyledTableCell>
                                {item.requestPassengerLocations.map(
                                  (location: any, locationIndex: any) => (
                                    <React.Fragment key={locationIndex}>
                                      <StyledTableCell>
                                        {location.startLocation}
                                      </StyledTableCell>
                                      <StyledTableCell>
                                        {location.toLocation}
                                      </StyledTableCell>
                                    </React.Fragment>
                                  )
                                )}
                                <StyledTableCell>
                                  <DeleteIcon
                                    // onClick={() => handleDeleteRow(params.row.id)}
                                    onClick={() =>
                                      handleDeletePassenger(item.userId)
                                    }
                                  ></DeleteIcon>
                                </StyledTableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </section>
            <div className={style.info_heading}>
              <h1>3. Package Information</h1>
            </div>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}></Grid>
              <Grid item xs={12} sm={6}>
                <Grid container spacing={2}>
                  <Grid item xs={4}></Grid>
                  <Grid item xs={4}></Grid>

                  <Grid item xs={3}>
                    <Button
                      variant="outlined"
                      onClick={handleAdditionalInfoOpen}
                    >
                      Add Package
                    </Button>
                    <AdditionalInfoPopup
                      fromDateTime={fromDateTime}
                      toDateTime={toDateTime}
                      open={additionalInfoOpen}
                      onClose={handleAdditionalInfoClose}
                      onSave={handleAdditionalInfoSave}
                    />
                  </Grid>
                  <Grid item xs={3}></Grid>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <TableContainer component={Paper} className={style.grid}>
                      <Table className={style.table}>
                        <TableHead>
                          <TableRow>
                            <CustomHeaderCell id="packSerialNo" width={100}>
                              Serial Number
                            </CustomHeaderCell>
                            <CustomHeaderCell id="packType" width={100}>
                              Package Type
                            </CustomHeaderCell>
                            <CustomHeaderCell id="packPick" width={150}>
                              Pickup Location
                            </CustomHeaderCell>
                            <CustomHeaderCell id="packDrop" width={150}>
                              Drop Off Location
                            </CustomHeaderCell>
                            <CustomHeaderCell id="packRContact" width={150}>
                              Recipient Contact
                            </CustomHeaderCell>
                            <CustomHeaderCell id="packDesc" width={100}>
                              Description
                            </CustomHeaderCell>
                            <CustomHeaderCell id="packCBM" width={100}>
                              CBM
                            </CustomHeaderCell>
                            <CustomHeaderCell id="packWeight" width={100}>
                              Weight
                            </CustomHeaderCell>
                            <CustomHeaderCell id="packAction" width={100}>
                              Action
                            </CustomHeaderCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {packages.map((item, index) => (
                            <TableRow key={index}>
                              <StyledTableCell>{item.serialNo}</StyledTableCell>
                              <StyledTableCell>
                                {item.packageTypeId}
                              </StyledTableCell>
                              <StyledTableCell>
                                {item.packPickLocation}
                              </StyledTableCell>
                              <StyledTableCell>
                                {item.packDropLocation}
                              </StyledTableCell>
                              <StyledTableCell>
                                {item.recipientContact}
                              </StyledTableCell>
                              {item.items.map(
                                (packages: any, packageIndex: any) => (
                                  <React.Fragment key={packageIndex}>
                                    <StyledTableCell>
                                      {packages.description}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                      {packages.cbm}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                      {packages.weight}
                                    </StyledTableCell>
                                  </React.Fragment>
                                )
                              )}
                              <StyledTableCell>
                                <DeleteIcon
                                  // onClick={() => handleDeleteRow(params.row.id)}
                                  onClick={() => handleDeleteRow(item.serialNo)}
                                ></DeleteIcon>
                              </StyledTableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} sx={{ marginBottom: 10 }}></Grid>
              <Grid item xs={12} sm={6}></Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}></Grid>
              <Grid item xs={12} sm={6}>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <Grid item xs={4}>
                      <label>Save as draft:</label>
                    </Grid>
                    <Grid item xs={2}>
                      <Switch {...register("isDraft")} />
                    </Grid>
                  </Grid>
                  <Grid item xs={4}>
                    <Grid item xs={4}>
                      <label>Save as template:</label>
                    </Grid>
                    <Grid item xs={2}>
                      <Switch {...register("templates")} />
                    </Grid>
                  </Grid>
                  <Grid item xs={3}>
                    <Button variant="contained" type="submit">
                      Send Request
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </form>
          <Snackbar
            open={open}
            autoHideDuration={3000} // Adjust the duration as needed
            onClose={() => setOpen(false)}
            color="red"
            message="request successful!" // Snackbar message on success
          />
        </section>
      </AppLayout>
    </React.Fragment>
  );
};

export default AddNewRequest;
