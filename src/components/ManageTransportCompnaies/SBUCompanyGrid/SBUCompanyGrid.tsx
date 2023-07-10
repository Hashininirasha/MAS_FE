import React from 'react'
import style from './SBUCompanyGrid.module.scss'
import { Box, IconButton, Paper, Table, TableBody, TableContainer, TableHead, TablePagination, TableRow, Tooltip, Typography } from '@mui/material'
import { useNavigate } from 'react-router'
import { APP_ROUTES, APP_TABLE_CONFIGS, COMPANY_REQUEST_STATUS } from '../../../utilities/constants'
import { StyledActive, StyledStatusDraft, StyledStatusPending, StyledINActive, StyledTableCell } from '../../../assets/theme/theme'
import moment from 'moment'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { ApprovalCompanyListDto, SortMetaDto } from '../../../utilities/models'
import { AppSkeleton, CustomButton, CustomHeaderCell } from '../../Shared'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';


const SBUCompnayGrid: React.FC<{
  page: number,
  rowsPerPage: number,
  onHandleChangePage(event: unknown, newPage: number): void,
  onHandleChangeRowsPerPage(event: React.ChangeEvent<HTMLInputElement>): void,
  approvalRequestDataIsLoading: boolean,
  filteredList: ApprovalCompanyListDto[],
  sortMeta: SortMetaDto,
  onSortHandle(col: string): void
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
          <h3>Transport Companies</h3>
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <div className='layout-row'>
          <CustomButton icon={<AddIcon sx={{ fontSize: '20px' }} />} text='New Company' onClick={() => { navigate(APP_ROUTES.TRANSPORT_COMPANY) }} />        </div>
      </div>

      <TableContainer component={Paper} className={style.grid}>
        <Table className={style.table}>
          <TableHead>
            <TableRow>
              <CustomHeaderCell width={180} id='companyId' sortable onSort={props.onSortHandle} >Company ID</CustomHeaderCell>
              <CustomHeaderCell width={180} id='companyName' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle}>Company Name</CustomHeaderCell>
              <CustomHeaderCell width={180} id='registeredNumber' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle}>Registerd Number</CustomHeaderCell>
              <CustomHeaderCell width={180} id='sbu' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle} >Attached SBUs</CustomHeaderCell>
              <CustomHeaderCell width={150} id='status' sortable onSort={props.onSortHandle} filtered getFilterList={props.getFilterList} onFilter={props.onFilterHandle}>Status</CustomHeaderCell>
              <CustomHeaderCell width={200} id='paymentMethod' sortable onSort={props.onSortHandle} >Payment Method</CustomHeaderCell>
              <CustomHeaderCell width={240} id='address'>Address</CustomHeaderCell>
              <CustomHeaderCell width={240} id='phoneNumber' >Phone Number</CustomHeaderCell>
         
              <CustomHeaderCell width={140} id='actions' >Actions</CustomHeaderCell>
            </TableRow>
          </TableHead>
          {props.approvalRequestDataIsLoading && (
            <AppSkeleton numOfRows={APP_TABLE_CONFIGS.DEFAULT_ROWS_PER_PAGE} numOfColumns={21} columnWidth={80} tag="table" />
          )}
          {!props.approvalRequestDataIsLoading && props.filteredList.length > 0 &&
            <TableBody>
              {props.filteredList.slice(props.page * props.rowsPerPage, props.page * props.rowsPerPage + props.rowsPerPage).map((req: ApprovalCompanyListDto) => (
                <TableRow key={req.companyId}>
                  
                  <StyledTableCell >{req.companyId}</StyledTableCell>
                  <StyledTableCell >{req.companyName}</StyledTableCell>
                  <StyledTableCell >{req.registeredNumber}</StyledTableCell>
                  <StyledTableCell >{req.sbu.name}</StyledTableCell>
                  <StyledTableCell>
                    {req.status === COMPANY_REQUEST_STATUS.ACTIVE || req.status === COMPANY_REQUEST_STATUS.ACTIVE ? (
                      <StyledActive>
                        {req.status}
                      </StyledActive>
                    ) : req.status === COMPANY_REQUEST_STATUS.INACTIVE || req.status === COMPANY_REQUEST_STATUS.INACTIVE ? (
                      <StyledINActive>
                        {req.status}
                      </StyledINActive>
                    ) : (
                      <StyledStatusDraft>
                        {req.status}
                      </StyledStatusDraft>
                    )}
                  </StyledTableCell>
                  <StyledTableCell >{req.paymentMethod}</StyledTableCell>
                  <StyledTableCell >{req.address}</StyledTableCell>
                  <StyledTableCell >{req.phoneNumber}</StyledTableCell>
                
                  
                
                  <StyledTableCell style={{ backgroundColor: '#282828' }}>
                    <Box className='layout-row'>
                      <Box>
                        <IconButton size='small'>
                          <Tooltip title="View">
                            <RemoveRedEyeOutlinedIcon sx={{ fontSize: '20px', mr: '-1', color: 'white' }} />
                          </Tooltip>

                        </IconButton>
                        <Tooltip title="Delete">
  <IconButton>
    <DeleteIcon sx={{ fontSize: '20px', mr: '-1', color: 'white' }}/>
  </IconButton>
</Tooltip>

<Tooltip title="Edit">
        <IconButton>
          <EditIcon sx={{ fontSize: '20px', mr: '-1', color: 'white' }}/>
        </IconButton>
      </Tooltip>
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

export default SBUCompnayGrid;