import { Box, Divider, IconButton, List, ListItem, ListItemText, Popover, TableSortLabel, tableCellClasses } from '@mui/material'
import React from 'react'
import { StyledTableCell } from '../../../assets/theme/theme'
import { HeaderCellProps } from '../../../utilities/models'
import SortByAlphaOutlinedIcon from '@mui/icons-material/SortByAlphaOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

const CustomHeaderCell: React.FC<HeaderCellProps> = ({
  id,
  children,
  sortable,
  filtered,
  onSort,
  onFilter,
  getFilterList,
  width,
}) => {

  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handleClickFilter = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseFilter = () => {
    setAnchorEl(null);
  };

  const openFilter = Boolean(anchorEl);
  const filterKeys = filtered && getFilterList && getFilterList(id);
  return (
    <StyledTableCell className={tableCellClasses.head} width={width}>
      <Box sx={{ display: 'flex', alignItems: 'center' }} >
        {children}
        <Box sx={{ flexGrow: 1 }} />
        {sortable && (
          <IconButton aria-label="Sort ascending" onClick={() => onSort && onSort(id)} sx={{ padding: '2px' }}>
            <SortByAlphaOutlinedIcon sx={{ color: '#ffffff', fontSize: 15 }} />
          </IconButton>
        )}
        {filtered && (
          <>
            <IconButton
              aria-label="Filter"
              onClick={handleClickFilter}
              sx={{ padding: "2px", marginLeft: "5px" }}
            >
              <FilterAltOutlinedIcon sx={{ color: "#ffffff", fontSize: 15 }} />
            </IconButton>
            <Popover
              open={openFilter}
              anchorEl={anchorEl}
              onClose={handleCloseFilter}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              sx={{ maxHeight: '420px'}}
            >
              <List style={{ backgroundColor: '#323232', padding: '8px 10px' }}>
                {(filterKeys as [])?.map((key, index) => (
                  <React.Fragment key={index}>
                    <ListItem button onClick={() => {
                      if (onFilter) onFilter(id, key);
                      setAnchorEl(null);
                    }}>
                      <ListItemText primary={key} style={{ color: '#ffffff' }} />
                    </ListItem>
                    {index !== (filterKeys as [])?.length - 1 && <Divider style={{ backgroundColor: '#ffffff' }} />}
                  </React.Fragment>
                ))}
              </List>
            </Popover>
          </>
        )}

      </Box>
    </StyledTableCell>
  )
};

export default CustomHeaderCell