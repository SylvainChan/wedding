"use client";
import React from "react";
import { IconButton } from "@mui/joy";
import { RiMenuFill } from "react-icons/ri";
import { Menu, MenuItem } from "@mui/material";
import { useRouter } from "next/navigation";

export function TopNavBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (selected: string) => {
    setAnchorEl(null);
    switch (selected.toLowerCase()) {
      case "home":
        router.push("/");
        break;
      case "how to get there":
        router.push("/travel/from");
        break;
      case "how to leave":
        router.push("/travel/leave");
        break;
    }
  };

  return (
    <div className="sticky top-0 h-14 z-[2] backdrop-blur-2xl">
      <div className="relative mx-4 top-1/4 -translate-y-1/2">
        <div className="relative float-left font-qwitcher_grypen text-3xl">
          Janice & Sylvain
        </div>
        <div className="relative float-right">
          <>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <RiMenuFill />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              {["Home", "How to get there", "How to leave"].map((option) => (
                <MenuItem
                  key={option}
                  selected={option === "Pyxis"}
                  onClick={() => handleClose(option)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </>
        </div>
      </div>
    </div>
  );
}
