import {
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import { styled } from "@mui/system";
import React, { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import { Title } from "../title";

const Wrapper = styled("div")({
  backgroundColor: "#FFF",
  padding: 15,
  color: "#525252",
  marginBottom: 15,
});

const StyledListItemText = styled(ListItemText)({
  display: "flex",
  flexDirection: "row",
  columnGap: 10,
  alignItems: "center",
});

export const FilterList = ({ title, dataSource, onChange }) => {
  const [checked, setChecked] = useState([-1]);

  const [searchTerm, setSearchTerm] = useState("");
  const [source, setSource] = useState(dataSource);

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    setSource(dataSource);
  }, [dataSource]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setSource(
        dataSource.filter((item) => item.label.includes(debouncedSearchTerm))
      );
    } else {
      setSource(dataSource);
    }
  }, [debouncedSearchTerm]);
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    onChange(newChecked);
  };

  return (
    <div>
      <Title label={title} />
      <Wrapper>
        <TextField
          fullWidth
          placeholder={`Search ${title}`}
          variant="outlined"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            maxHeight: 200,
            overflow: "auto",
            bgcolor: "background.paper",
          }}
        >
          {source.map(({ label, key, itemCount }) => {
            const labelId = `checkbox-list-label-${label}`;

            return (
              <ListItem key={label} disablePadding>
                <ListItemButton role="button" onClick={handleToggle(key)} dense>
                  <ListItemIcon sx={{ minWidth: "30px" }}>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(key) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-label": labelId }}
                    />
                  </ListItemIcon>
                  <StyledListItemText
                    id={labelId}
                    primary={label}
                    secondary={`(${itemCount})`}
                    secondaryTypographyProps={{
                      variant: "span",
                      fontSize: "12px",
                      fontWeight: "300",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Wrapper>
    </div>
  );
};

FilterList.defaultProps = {
  title: "",
  dataSource: [],
  onChange: () => {},
};
