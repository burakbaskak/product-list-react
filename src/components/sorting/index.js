import { CheckCircleOutlineTwoTone } from "@mui/icons-material";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { SORT_LIST } from "../../const/sortTypes";
import { Title } from "../title";

const Wrapper = styled("div")({
  backgroundColor: "#FFF",
  padding: 15,
  marginBottom: 15,
  color: "#525252",
  fontSize: "14px",
});

export const Sorting = ({ onChange }) => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event) => {
    setValue(event.target.value);
    onChange(SORT_LIST.find((item) => item.value === event.target.value));
  };

  return (
    <div>
      <Title label="Sorting" />
      <Wrapper>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="gender"
            defaultValue="female"
            name="radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            {SORT_LIST.map((sort) => (
              <FormControlLabel
                key={`sorting-${sort.value}`}
                value={sort.value}
                control={
                  <Radio
                    aria-label={`sorting-${sort.value}`}
                    checkedIcon={<CheckCircleOutlineTwoTone />}
                  />
                }
                label={sort.label}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Wrapper>
    </div>
  );
};
