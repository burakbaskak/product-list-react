import React, { useState } from "react";
import { styled } from "@mui/system";
import { Button } from "@mui/material";

const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "selected",
})(({ theme, selected }) => ({
  backgroundColor: selected ? theme.palette.primary.main : "#F2F0FD",
  color: selected ? "white" : theme.palette.primary.main,
  boxShadow: "none",
  marginRight: 5,
  ":hover": {
    color: "white",
  },
}));

export const TagList = ({ tags, onChange }) => {
  const [selected, setSelected] = useState(tags[0]);

  const onClick = (tag) => {
    setSelected(tag);
    onChange(tag);
  };

  return (
    <div>
      {tags.map((item) => (
        <StyledButton
          variant="contained"
          selected={item === selected}
          key={`tag-${item}`}
          onClick={() => onClick(item)}
        >
          {item}
        </StyledButton>
      ))}
    </div>
  );
};

TagList.defaultProps = {
  tags: [""],
  onChange: () => {},
};
