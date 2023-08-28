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

  enum NavMenuItem {
    home = "Home",
    location = "Location",
    schedule = "Schedule",
  }

  const handleClose = (selected: NavMenuItem) => {
    setAnchorEl(null);

    switch (selected) {
      case NavMenuItem.home:
        router.push("/");
        break;
      case NavMenuItem.schedule:
        router.push("/schedule");
        break;
      case NavMenuItem.location:
        router.push("/location");
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
              {Object.values(NavMenuItem).map((option) => (
                <MenuItem key={option} onClick={() => handleClose(option)}>
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
