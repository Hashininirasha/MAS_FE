import React from 'react'
import style from './TmDashboardGrid.module.scss'
import { ApprovalRequestListDto, SortMetaDto } from '../../../utilities/models';
import { useNavigate } from 'react-router-dom';
import { Box, IconButton, Paper, Table, TableBody, TableContainer, TableHead, TablePagination, TableRow, Tooltip, Typography } from '@mui/material';
import { StyledStatusApproved, StyledStatusDraft, StyledStatusPending, StyledStatusRejected, StyledTableCell } from '../../../assets/theme/theme';
import { APP_ROUTES, APP_TABLE_CONFIGS, REQUEST_STATUS } from '../../../utilities/constants';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import moment from 'moment';
import { AppSkeleton, CustomButton, CustomHeaderCell } from '../../Shared';

const TmDashboardGrid: React.FC<{
  page: number,
  rowsPerPage: number,
  onHandleChangePage(event: unknown, newPage: number): void,
  onHandleChangeRowsPerPage(event: React.ChangeEvent<HTMLInputElement>): void,
  approvalRequestDataIsLoading: boolean,
  filteredList: ApprovalRequestListDto[],
  sortMeta: SortMetaDto,
  onSortHandle(col: string): void
  onFilterHandle(col: string, value: string): void;
  getFilterList: (col: string) => string[];
}> = (props) => {
  // const navigate = useNavigate()
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
          <CustomButton text='Pending Request' border='1px solid #6e6e6e' bgColor='#282828' onClick={() => { }} />
        </div>
      </div>

      <TableContainer component={Paper} className={style.grid}>
        <Table className={style.table}>
          <TableHead>
            <TableRow>
              <CustomHeaderCell width={180} id='requestId' sortable onSort={props.onSortHandle} >Request ID</CustomHeaderCell>
              <CustomHeaderCell width={180} id='requestType' sortable onSort={props.onSortHandle} >Request Type</CustomHeaderCell>
              <CustomHeaderCell width={180} id='createdUser' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle} >Created User</CustomHeaderCell>
              <CustomHeaderCell width={150} id='from' sortable onSort={props.onSortHandle} >From</CustomHeaderCell>
              <CustomHeaderCell width={220} id='to' sortable onSort={props.onSortHandle} >To (Main Destination)</CustomHeaderCell>
              <CustomHeaderCell width={150} id='status' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle}>status</CustomHeaderCell>
              <CustomHeaderCell width={150} id='redirected' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle}>Redirected</CustomHeaderCell>
              <CustomHeaderCell width={180} id='createdBy' sortable onSort={props.onSortHandle} >Created by</CustomHeaderCell>
              <CustomHeaderCell width={150} id='sbu' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle}>SBU</CustomHeaderCell>
              <CustomHeaderCell width={150} id='plant' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle} >Plant</CustomHeaderCell>
              <CustomHeaderCell width={150} id='department' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle} >Department</CustomHeaderCell>
              <CustomHeaderCell width={240} id='createdDatetime' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle}>Create date and time</CustomHeaderCell>
              <CustomHeaderCell width={270} id='departureDateTime' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle}>Departure date & time</CustomHeaderCell>
              <CustomHeaderCell width={250} id='returnDateTime' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle}>Return date & time</CustomHeaderCell>
              <CustomHeaderCell width={240} id='passengerCount' >Passenger count</CustomHeaderCell>
              <CustomHeaderCell width={240} id='preferredVehicle' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle}>Preferred Vehicle</CustomHeaderCell>
              <CustomHeaderCell width={150} id='package' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle}>Package</CustomHeaderCell>
              <CustomHeaderCell width={200} id='cbm' sortable onSort={props.onSortHandle} >Total CBM of package</CustomHeaderCell>
              <CustomHeaderCell width={180} id='purpose' >Purpose</CustomHeaderCell>
              <CustomHeaderCell width={100} id='actions' >Actions</CustomHeaderCell>
            </TableRow>
          </TableHead>
          {props.approvalRequestDataIsLoading && (
            <AppSkeleton numOfRows={APP_TABLE_CONFIGS.DEFAULT_ROWS_PER_PAGE} numOfColumns={20} columnWidth={80} tag="table" />
          )}
          {!props.approvalRequestDataIsLoading && props.filteredList.length > 0 &&
            <TableBody>
              {props.filteredList.slice(props.page * props.rowsPerPage, props.page * props.rowsPerPage + props.rowsPerPage).map((req: ApprovalRequestListDto) => (
                <TableRow key={req.requestId}>
                  <StyledTableCell >{req.requestId}</StyledTableCell>
                  <StyledTableCell >{req.requestType}</StyledTableCell>
                  <StyledTableCell >{req.createdUser}</StyledTableCell>
                  <StyledTableCell >{req.from}</StyledTableCell>
                  <StyledTableCell >{req.to}</StyledTableCell>
                  <StyledTableCell>
                    {req.status === REQUEST_STATUS.APPROVED_LM || req.status === REQUEST_STATUS.APPROVED_TM ? (
                      <StyledStatusApproved>
                        {req.status}
                      </StyledStatusApproved>
                    ) : req.status === REQUEST_STATUS.REJECTED_LM || req.status === REQUEST_STATUS.REJECTED_TM ? (
                      <StyledStatusRejected>
                        {req.status}
                      </StyledStatusRejected>
                    ) : req.status === REQUEST_STATUS.PENDING ? (
                      <StyledStatusPending>
                        {req.status}
                      </StyledStatusPending>
                    ) : (
                      <StyledStatusDraft>
                        {req.status}
                      </StyledStatusDraft>
                    )}
                  </StyledTableCell>
                  <StyledTableCell >{req.redirected ?? "-"}</StyledTableCell>
                  <StyledTableCell >{req.createdBy}</StyledTableCell>
                  <StyledTableCell >{req.sbu}</StyledTableCell>
                  <StyledTableCell >{req.plant}</StyledTableCell>
                  <StyledTableCell >{req.department}</StyledTableCell>
                  <StyledTableCell >{moment(req.createdDatetime).format(APP_TABLE_CONFIGS.DATE_FORMAT)}</StyledTableCell>
                  <StyledTableCell >{moment(req.departureDateTime).format(APP_TABLE_CONFIGS.DATE_FORMAT)}</StyledTableCell>
                  <StyledTableCell >{moment(req.returnDateTime).format(APP_TABLE_CONFIGS.DATE_FORMAT)}</StyledTableCell>
                  <StyledTableCell >{req.passengerCount}</StyledTableCell>
                  <StyledTableCell >{req.preferredVehicle}</StyledTableCell>
                  <StyledTableCell >{req.package ? "Yes" : "No"}</StyledTableCell>
                  <StyledTableCell >{req.cbm ?? "-"}</StyledTableCell>
                  <StyledTableCell >{req.purpose}</StyledTableCell>
                  <StyledTableCell style={{ backgroundColor: '#282828' }}>
                    <Box className='layout-row'>
                      <Box>
                        <IconButton size='small'>
                          <Tooltip title="View">
                            <RemoveRedEyeOutlinedIcon sx={{ fontSize: '20px', mr: '-1', color: 'white' }} />
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

export default TmDashboardGrid
