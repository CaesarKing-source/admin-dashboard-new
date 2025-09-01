import React from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Settings,
  ArrowDropDownOutlined,
  Menu as MenuIcon,
  Search,
} from "@mui/icons-material";
import FlexBetween from "./FlexBetween";
import profileImg from '../assets/react.svg';
import { AppBar, Icon, IconButton, InputBase, Stack, Toolbar, Typography, useTheme } from "@mui/material";
import { useDispatch } from 'react-redux';
import { setMode } from '../store/slice/globalSlice';

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <AppBar sx={{ background: 'none', boxShadow: 'none', position: 'sticky'}}>
        <Toolbar sx={{ justifyContent: 'space-between'}}>
            <FlexBetween>
                <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <MenuIcon sx={{ fontSize: '20px'}} />
                </IconButton>
                <FlexBetween backgroundColor={theme.palette.background.alt}
                    borderRadius={'6px'}
                    gap="3rem"
                    p="0.1rem 1rem"
                >
                    <InputBase placeholder="Search here...." />
                    <IconButton>
                        <Search />
                    </IconButton>
                </FlexBetween>
            </FlexBetween>

            <FlexBetween gap={'0.6rem'}>
                <FlexBetween>
                    <IconButton onClick={() => dispatch(setMode())}>
                        { theme.palette.mode == 'dark' ? <DarkModeOutlined sx={{ fontSize: '20px'}} /> : <LightModeOutlined sx={{ fontSize: '20px'}} /> }
                    </IconButton>
                    <IconButton>
                        <Settings sx={{ fontSize: '20px'}} />
                    </IconButton>
                </FlexBetween>
                <FlexBetween gap={'1.2rem'}>
                    <Stack sx={{ alignItems: 'start'}}>
                        <Typography variant="body1">Akshay Giri</Typography>
                        <Typography variant="body2">Admin</Typography>
                    </Stack>
                    <IconButton>
                        <ArrowDropDownOutlined sx={{ fontSize: '20px'}} />
                    </IconButton>
                </FlexBetween>
            </FlexBetween>
        </Toolbar>
    </AppBar>
  ) ;
};

export default Navbar;
