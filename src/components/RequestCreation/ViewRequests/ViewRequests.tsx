
import { Avatar, AvatarGroup, Box, IconButton, Paper, Table, TableBody, TableContainer, TableHead, TablePagination, TableRow, Tooltip, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { EditOutlined } from '@mui/icons-material';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import React from 'react'
import { StyledStatusApproved, StyledStatusDraft, StyledStatusPending, StyledStatusRejected, StyledTableCell } from '../../../assets/theme/theme';
import style from './ViewRequests.module.scss'
import { RequestListDto, SortMetaDto } from '../../../utilities/models';
import { APP_ROUTES, APP_TABLE_CONFIGS, REQUEST_STATUS } from '../../../utilities/constants';
import CustomButton from '../../Shared/CustomButton/CustomButton';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { CustomHeaderCell, AppSkeleton } from '../../Shared';

const ViewRequests: React.FC<{
  page: number,
  rowsPerPage: number,
  onHandleChangePage(event: unknown, newPage: number): void,
  onHandleChangeRowsPerPage(event: React.ChangeEvent<HTMLInputElement>): void,
  requestDataIsLoading: boolean,
  filteredList: RequestListDto[],
  sortMeta: SortMetaDto,
  onSortHandle(col: string): void
  setSelectedStatus(status: string, id: string): void
  onFilterHandle(col: string, value: string): void;
  getFilterList: (col: string) => string[];
}> = (props) => {

  const navigate = useNavigate()

  return (
    <section className={style.gridContainer}>
      <div className={style.gridHeader}>
        <Typography
          noWrap
          component="div"
          className={style.gridTitle}
        >
          <h3>Transport Requests</h3>
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <div className='layout-row'>
          <CustomButton icon={<AddIcon sx={{ fontSize: '20px' }} />} text='New Request' onClick={() => { navigate(APP_ROUTES.ADD_REQUEST_CREATION) }} />
          <CustomButton icon={<AddIcon sx={{ fontSize: '20px' }} />} text='New Request v2' onClick={() => { navigate(APP_ROUTES.NEW_REQUEST_CREATION) }} />
        </div>
      </div>

      <TableContainer component={Paper} className={style.grid}>
        <Table className={style.table}>
          <TableHead>
            <TableRow>
              <CustomHeaderCell width={180} id='requestId' sortable onSort={props.onSortHandle} >Request ID</CustomHeaderCell>
              <CustomHeaderCell width={180} id='requestType' sortable onSort={props.onSortHandle} >Request Type</CustomHeaderCell>
              <CustomHeaderCell width={240} id='createdDatetime' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle}>Create date and time</CustomHeaderCell>
              <CustomHeaderCell width={150} id='status' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle}>status</CustomHeaderCell>
              <CustomHeaderCell width={150} id='VIPTrip' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle}>VIP trip</CustomHeaderCell>
              <CustomHeaderCell width={150} id='from' sortable onSort={props.onSortHandle} >From</CustomHeaderCell>
              <CustomHeaderCell width={220} id='to' sortable onSort={props.onSortHandle} >To (Main Destination)</CustomHeaderCell>
              <CustomHeaderCell width={270} id='departureDateTime' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle}>Departure date and time</CustomHeaderCell>
              <CustomHeaderCell width={250} id='returnDateTime' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle}>Return date and time</CustomHeaderCell>
              <CustomHeaderCell width={250} id='passengers' >Passengers</CustomHeaderCell>
              <CustomHeaderCell width={240} id='preferredVehicle' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle}>Preferred Vehicle</CustomHeaderCell>
              <CustomHeaderCell width={150} id='package' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle}>Package</CustomHeaderCell>
              <CustomHeaderCell width={240} id='cbm' sortable onSort={props.onSortHandle} >Total CBM of Package</CustomHeaderCell>
              <CustomHeaderCell width={180} id='purpose' >Purpose</CustomHeaderCell>
              <CustomHeaderCell width={180} id='approver' sortable onSort={props.onSortHandle} >Approver</CustomHeaderCell>
              <CustomHeaderCell width={150} id='actions' >Actions</CustomHeaderCell>
            </TableRow>
          </TableHead>
          {props.requestDataIsLoading && (
            <AppSkeleton numOfRows={APP_TABLE_CONFIGS.DEFAULT_ROWS_PER_PAGE} numOfColumns={16} columnWidth={120} height={40} tag="table" />
          )}
          {!props.requestDataIsLoading && props.filteredList.length > 0 &&
            <TableBody>
              {props.filteredList.slice(props.page * props.rowsPerPage, props.page * props.rowsPerPage + props.rowsPerPage).map((req: RequestListDto) => (
                <TableRow key={req.requestId}>
                  <StyledTableCell >{req.requestId}</StyledTableCell>
                  <StyledTableCell >{req.requestType}</StyledTableCell>
                  <StyledTableCell >{moment(req.createdDatetime).format(APP_TABLE_CONFIGS.DATE_FORMAT)}</StyledTableCell>
                  <StyledTableCell>
                    {req.status === REQUEST_STATUS.APPROVED_LM || req.status === REQUEST_STATUS.APPROVED_TM ? (
                      <StyledStatusApproved onClick={() => props.setSelectedStatus(req.status, req.requestId)}>
                        {req.status}
                      </StyledStatusApproved>
                    ) : req.status === REQUEST_STATUS.REJECTED_LM || req.status === REQUEST_STATUS.REJECTED_TM ? (
                      <StyledStatusRejected onClick={() => props.setSelectedStatus(req.status, req.requestId)}>
                        {req.status}
                      </StyledStatusRejected>
                    ) : req.status === REQUEST_STATUS.PENDING ? (
                      <StyledStatusPending onClick={() => props.setSelectedStatus(req.status, req.requestId)}>
                        {req.status}
                      </StyledStatusPending>
                    ) : (
                      <StyledStatusDraft onClick={() => props.setSelectedStatus(req.status, req.requestId)}>
                        {req.status}
                      </StyledStatusDraft>
                    )}
                  </StyledTableCell>
                  <StyledTableCell >{req.VIPTrip ? "Yes" : "No"}</StyledTableCell>
                  <StyledTableCell >{req.from}</StyledTableCell>
                  <StyledTableCell >{req.to}</StyledTableCell>
                  <StyledTableCell >{moment(req.departureDateTime).format(APP_TABLE_CONFIGS.DATE_FORMAT)}</StyledTableCell>
                  <StyledTableCell >{moment(req.returnDateTime).format(APP_TABLE_CONFIGS.DATE_FORMAT)}</StyledTableCell>
                  <StyledTableCell align="left">
                    {req.passengers.length !== 0
                      ? <div style={{ display: 'flex' }}>
                        <AvatarGroup max={5}>
                          {req.passengers.map((avatar, index) => (
                            <Avatar
                              key={index}
                              alt={`Avatar ${index + 1}`}
                              src={avatar}
                              sx={{
                                border: '0.5px solid #000 !important',
                                zIndex: req.passengers.length + index,
                                objectFit: 'cover !important',
                              }}
                            />
                          ))}
                        </AvatarGroup>
                      </div>
                      : <>-</>
                    }

                  </StyledTableCell>
                  <StyledTableCell >{req.preferredVehicle}</StyledTableCell>
                  <StyledTableCell >{req.package ? "Yes" : "No"}</StyledTableCell>
                  <StyledTableCell >
                    {req.cbm !== null
                      ? <>{req.cbm}</>
                      : <>-</>
                    }
                  </StyledTableCell>
                  <StyledTableCell >{req.purpose}</StyledTableCell>
                  <StyledTableCell >{req.approver}</StyledTableCell>
                  <StyledTableCell style={{ backgroundColor: '#282828' }}>
                    <Box className='layout-row'>
                      <Box>
                        <IconButton size='small'>
                          <Tooltip title="View">
                            <RemoveRedEyeOutlinedIcon sx={{ fontSize: '20px', mr: '-1', color: 'white' }} />
                          </Tooltip>
                        </IconButton>
                      </Box>
                      <Box>
                        <IconButton size='small'>
                          <Tooltip title="Edit">
                            <EditOutlined sx={{ fontSize: '20px', mr: '-1', color: 'white' }} />
                          </Tooltip>
                        </IconButton>
                      </Box>
                      <Box>
                        <IconButton size='small'>
                          <Tooltip title="Delete">
                            <DeleteOutlinedIcon sx={{ fontSize: '20px', mr: '-1', color: 'white' }} />
                          </Tooltip>
                        </IconButton>
                      </Box>
                    </Box>
                  </StyledTableCell>
                </TableRow>
              ))}
            </TableBody>}
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={APP_TABLE_CONFIGS.DEFAULT_ROWS_PER_PAGE_OPTIONS}
        component="div"
        labelRowsPerPage={
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              color: 'white',
            }}
          >
            Items per page
          </div>
        }
        count={props.filteredList.length}
        page={props.page}
        onPageChange={props.onHandleChangePage}
        onRowsPerPageChange={props.onHandleChangeRowsPerPage}
        rowsPerPage={props.rowsPerPage}
        showFirstButton={true}
        showLastButton={true}
        sx={{ backgroundColor: "#282828", color: "white" }}
      />
    </section>
  )
}

export default ViewRequests
