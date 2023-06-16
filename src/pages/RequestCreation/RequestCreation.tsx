import React, { useEffect, useState } from 'react'
import { AppLayout } from '../../templates'
import ViewSummary from '../../components/RequestCreation/ViewSummary/ViewSummary'
import ViewRequests from '../../components/RequestCreation/ViewRequests/ViewRequests'
import { useDispatch, useSelector } from 'react-redux'
import { ApplicationStateDto, RequestListDto, RequestSummaryCount, SelectedStatusDto, SortMetaDto } from '../../utilities/models'
import { requestActions } from '../../redux/actions'
import { APP_ACTION_STATUS, APP_TABLE_CONFIGS, REQUEST_STATUS } from '../../utilities/constants'
import ShowStatusPopup from '../../components/RequestCreation/ShowStatusPopup/ShowStatusPopup'

const RequestCreation = () => {

  const INITIAL_SUMMARY_COUNT: RequestSummaryCount = {
    pending: -1,
    approved: -1,
    reject: -1
  }

  const INITIAL_SELECTED_STATUS: SelectedStatusDto = {
    id: "",
    status: ""
  }

  const INITIAL_SORT_META: SortMetaDto = {
    field: "",
    asc: false,
  }

  const dispatch = useDispatch()
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(APP_TABLE_CONFIGS.DEFAULT_ROWS_PER_PAGE)
  const [summary, setSummary] = useState<RequestSummaryCount>(INITIAL_SUMMARY_COUNT)
  const [filteredList, setFilteredList] = useState<RequestListDto[]>([])
  const [isStatusDialogOpen, setIsStatusDialogOpen] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState(INITIAL_SELECTED_STATUS)
  const [sortMeta, setSortMeta] = useState<SortMetaDto>(INITIAL_SORT_META);

  const getRequestDataResponse = useSelector((state: ApplicationStateDto) => state.request.requestList)

  useEffect(() => {
    getRequestList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if(getRequestDataResponse.status === APP_ACTION_STATUS.SUCCESS){
      if(getRequestDataResponse.data.length > 0) {
        setFilteredList(getRequestDataResponse.data)
        setSummaryCount()
      }
      else setFilteredList([])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getRequestDataResponse.status])

  useEffect(() => {
    setSummaryCount()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredList])

  const setSummaryCount = () => {
    let summary: RequestSummaryCount = {
      pending: 0,
      approved: 0,
      reject: 0
    }
    if(!getRequestDataResponse.isLoading && getRequestDataResponse.data.length > 0)
    getRequestDataResponse.data.forEach((r: RequestListDto) => {
      if (r.status === REQUEST_STATUS.APPROVED_LM || r.status === REQUEST_STATUS.APPROVED_TM) summary.approved++
      else if (r.status === REQUEST_STATUS.REJECTED_LM || r.status === REQUEST_STATUS.REJECTED_TM) summary.reject++
      else if (r.status === REQUEST_STATUS.PENDING) summary.pending++
    })

    setSummary(summary)
  }

  const getRequestList = async () => {
    dispatch(requestActions.getRequestsList())
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const showStatusPopup = (con: boolean) => {
    setIsStatusDialogOpen(con)
    if (!con) {
      setSelectedStatus(INITIAL_SELECTED_STATUS)
    }
  }

  const onShowStatus = (status: string, id: string) => {
    const selectedStatus: SelectedStatusDto = {
      id: id,
      status: status
    }
    setSelectedStatus(selectedStatus)
    showStatusPopup(true)
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
    const filtered = getRequestDataResponse.data.filter((item) => {
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
    if(!getRequestDataResponse.isLoading)
    return getRequestDataResponse.data
      .map((item) => {
        const value = (item as any)[col];
        if (typeof value === "boolean") {
          return value ? "Yes" : "No";
        }
        return value;
      })
      .filter((value, index, array) => array.indexOf(value) === index);
    else return []
  };

  return (
    <React.Fragment>
      <AppLayout componentTitle="Request Creation">
        <section className='page-root'>
          <ViewSummary summary={summary} />
          <ViewRequests
            page={page}
            rowsPerPage={rowsPerPage}
            onHandleChangePage={handleChangePage}
            onHandleChangeRowsPerPage={handleChangeRowsPerPage}
            requestDataIsLoading={getRequestDataResponse.isLoading}
            filteredList={filteredList || []}
            sortMeta={sortMeta}
            onSortHandle={onSortHandle}
            setSelectedStatus={onShowStatus}
            onFilterHandle={onFilterHandle}
            getFilterList={getFilterList}
          />
          <ShowStatusPopup
            showStatusPopup={showStatusPopup}
            isStatusDialogOpen={isStatusDialogOpen}
            selectedStatus={selectedStatus}
          />
        </section>
      </AppLayout>
    </React.Fragment>
  )
}

export default RequestCreation
