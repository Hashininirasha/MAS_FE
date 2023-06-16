import React, { useEffect, useState } from 'react'
import { AppLayout } from '../../templates'
import { ApplicationStateDto, ApprovalRequestListDto, SortMetaDto } from '../../utilities/models'
import { useDispatch, useSelector } from 'react-redux'
import { requestActions } from '../../redux/actions'
import { APP_ACTION_STATUS, APP_TABLE_CONFIGS, REQUEST_STATUS } from '../../utilities/constants'
import { LmRequestApprovalGrid } from '../../components/LmRequestApproval'
import LmRequestApprovalSummary from '../../components/LmRequestApproval/LmRequestApprovalSummary/LmRequestApprovalSummary'

const LmRequestApproval = () => {
  const INITIAL_SORT_META: SortMetaDto = {
    field: "",
    asc: false,
  }

  const dispatch = useDispatch()
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(APP_TABLE_CONFIGS.DEFAULT_ROWS_PER_PAGE)
  const [sortMeta, setSortMeta] = useState<SortMetaDto>(INITIAL_SORT_META);
  const [filteredList, setFilteredList] = useState<ApprovalRequestListDto[]>([])

  const getApprovalRequestDataResponse = useSelector((state: ApplicationStateDto) => state.request.approvalRequestList)

  useEffect(() => {
    getRequestList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (getApprovalRequestDataResponse.status === APP_ACTION_STATUS.SUCCESS) {
      if (getApprovalRequestDataResponse.data.length > 0)
        setFilteredList(getApprovalRequestDataResponse.data.filter((r) => r.status === REQUEST_STATUS.PENDING))
      else setFilteredList([])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getApprovalRequestDataResponse.status])

  const getRequestList = async () => {
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
    const _list = getApprovalRequestDataResponse.data.filter((r) => r.status === REQUEST_STATUS.PENDING)
    const filtered = _list.filter((item) => {
      const _value = (item as any)[col];
      if (typeof _value === "boolean") {
        return _value ? value === "Yes" : value === "No";
      }
      return _value === value;
    });

    setFilteredList(filtered);
  };
  const getFilterList = (col: string): string[] => {
    if (col === "createdDatetime" || col === "departureDateTime" || col === "returnDateTime") return APP_TABLE_CONFIGS.DATE_TIME_FILTERATION_KEYS;
    if (!getApprovalRequestDataResponse.isLoading) {
      const _list = getApprovalRequestDataResponse.data.filter((r) => r.status === REQUEST_STATUS.PENDING)
      return _list
        .map((item) => {
          const value = (item as any)[col];
          if (typeof value === "boolean") {
            return value ? "Yes" : "No";
          }
          return value;
        })
        .filter((value, index, array) => array.indexOf(value) === index);
    }
    else return []
  };
  return (
    <React.Fragment>
      <AppLayout componentTitle="Request Approval">
        <section className='page-root'>
          <LmRequestApprovalSummary />
          <LmRequestApprovalGrid
            page={page}
            rowsPerPage={rowsPerPage}
            onHandleChangePage={handleChangePage}
            onHandleChangeRowsPerPage={handleChangeRowsPerPage}
            approvalRequestDataIsLoading={getApprovalRequestDataResponse.isLoading}
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

export default LmRequestApproval
