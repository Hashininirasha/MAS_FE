import React, { useEffect, useState } from 'react'
import { AppLayout } from '../../templates'
import { useDispatch, useSelector } from 'react-redux'
import { ApplicationStateDto, ApprovalCompanyListDto, SortMetaDto } from '../../utilities/models'
import { requestActions } from '../../redux/actions'
import { APP_ACTION_STATUS, APP_TABLE_CONFIGS } from '../../utilities/constants'
import SBUCompnayGrid from '../../components/ManageTransportCompnaies/SBUCompanyGrid/SBUCompanyGrid'


const ManageTransportCompnaies = () => {
  const INITIAL_SORT_META: SortMetaDto = {
    field: "",
    asc: false,
  }
  
  const dispatch = useDispatch()
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(APP_TABLE_CONFIGS.DEFAULT_ROWS_PER_PAGE)
  const [sortMeta, setSortMeta] = useState<SortMetaDto>(INITIAL_SORT_META);
  const [filteredList, setFilteredList] = useState<ApprovalCompanyListDto[]>([])

  const getApprovalCompanyDataResponse = useSelector((state: ApplicationStateDto) => state.company.approvalCompanyList)
  
  useEffect(() => {
    getCompanyList()
    
  }, [])
  
  useEffect(() => {
    if (getApprovalCompanyDataResponse.status === APP_ACTION_STATUS.SUCCESS){
      if (getApprovalCompanyDataResponse.data.length > 0) setFilteredList(getApprovalCompanyDataResponse.data)
      else setFilteredList([])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getApprovalCompanyDataResponse.status])
  
  const getCompanyList = async () => {
    dispatch(requestActions.getApprovalRequestsList())
  }
  
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  
  const onSortHandle = (col: string) => {
    const sorted = filteredList.sort((_prev: any, _next: any) => {
      const _prevItem = _prev[col];
      const _nextItem = _next[col];

      const prev =
        typeof _prevItem === "string" ? _prevItem.toUpperCase() : _prevItem;
      const next =
        typeof _nextItem === "string" ? _nextItem.toUpperCase() : _nextItem;

      if (prev < next) {
        return -1;
      }

      if (prev > next) {
        return 1;
      }

      return 0;
    });

    if (sortMeta.asc) {
      sorted.reverse();
    }

    setSortMeta((_sort) => ({ field: col, asc: !_sort.asc }));
    setFilteredList(sorted);
  };

  const onFilterHandle = (col: string, value: string) => {
    const filtered = getApprovalCompanyDataResponse.data.filter((item:any) => {
      const _value = (item as any)[col];
      if (typeof _value === "boolean") {
        return _value ? value === "Yes" : value === "No";
      }
      return _value === value;
    });

    setFilteredList(filtered);
  };
  const getFilterList = (col: string): string[] => {
    if (col === "companyName" || col === "registeredNumber" || col === "sbu" || col === "status") return APP_TABLE_CONFIGS.DATE_TIME_FILTERATION_KEYS;
    if (!getApprovalCompanyDataResponse.isLoading)
    return getApprovalCompanyDataResponse.data
      .map((item:any) => {
        const value = (item as any)[col];
        if (typeof value === "boolean") {
          return value ? "Yes" : "No";
        }
        return value;
      })
      .filter((value:any, index:any, array:any) => array.indexOf(value) === index);
      else return []
  };

  return (
    <React.Fragment>
      <AppLayout componentTitle="Request Creation">
        <section className='page-root'>
        
          <SBUCompnayGrid
            page={page}
            rowsPerPage={rowsPerPage}
            onHandleChangePage={handleChangePage}
            onHandleChangeRowsPerPage={handleChangeRowsPerPage}
            approvalRequestDataIsLoading={getApprovalCompanyDataResponse.isLoading}
            filteredList={filteredList || []}
            sortMeta={sortMeta}
            onSortHandle={onSortHandle}
            onFilterHandle={onFilterHandle}
            getFilterList={getFilterList}
          />
        </section>
      </AppLayout>
    </React.Fragment>
  )
}

export default ManageTransportCompnaies