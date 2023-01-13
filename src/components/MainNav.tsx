import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import { Brightness4, Brightness7 } from "@material-ui/icons";
import { Box, Button, Container, useTheme } from "@material-ui/core";
import { usePaletteType } from "../contexts/PaletteTypeContext";
import { Role, token } from "../grpc/token/token";
import SettingsIcon from "@material-ui/icons/Settings";
import DescriptionIcon from "@material-ui/icons/Description";
import BarChartIcon from "@material-ui/icons/BarChart";
import DetailsIcon from "@material-ui/icons/Details";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { usePolicySubscription } from "~/lib/queries/policies";

const useStyles = makeStyles((_) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    justifyContent: "space-between",
  },
  title: {
    flexGrow: 1,
    textDecoration: "none",
  },
}));

export function MainNav() {
  usePolicySubscription();
  const theme = useTheme();
  const { togglePaletteType } = usePaletteType();
  const classes = useStyles();
  const navigate = useNavigate();

  const handleLogout = () => {
    token.logout();
    navigate("/");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container maxWidth={"xl"}>
          <Toolbar className={classes.toolbar}>
            <Box>
              <Typography
                component={RouterLink}
                to={"/"}
                variant="h6"
                color="inherit"
                className={classes.title}
              >
                {/*{report?.Round === 0*/}
                {/*  ? "Competition has not yet started!"*/}
                {/*  : `Round: ${report?.Round}`}*/}
              </Typography>
            </Box>

            <Box>
              {
                <>
                  {/*{((policy && policy.showPoints?.value) ||*/}
                  {/*  token.getCurrentRole() === Role.Black) && (*/}
                  {/*  <IconButton component={RouterLink} to={"/scoreboard"}>*/}
                  {/*    <CheckCircleIcon />*/}
                  {/*  </IconButton>*/}
                  {/*)}*/}
                  <IconButton component={RouterLink} to={"/scoreboard/ranks"}>
                    <BarChartIcon />
                  </IconButton>
                  {(token.getCurrentRole() === Role.Red ||
                    token.getCurrentRole() === Role.Blue ||
                    token.getCurrentRole() === Role.Black) && (
                    <IconButton
                      component={RouterLink}
                      to={"/scoreboard/details"}
                    >
                      <DetailsIcon />
                    </IconButton>
                  )}
                </>
              }
              {!token.isAValidToken() ? (
                <Button
                  component={RouterLink}
                  to={"/auth/sign_in"}
                  color={"inherit"}
                >
                  <Typography>Sign In</Typography>
                </Button>
              ) : (
                <>
                  <Button color={"inherit"} onClick={handleLogout}>
                    <Typography>Sign Out</Typography>
                  </Button>
                  {token.getCurrentRole() === Role.Black && (
                    <>
                      <IconButton component={RouterLink} to={"/logs"}>
                        <DescriptionIcon />
                      </IconButton>
                      <IconButton component={RouterLink} to={"/settings"}>
                        <SettingsIcon />
                      </IconButton>
                    </>
                  )}
                </>
              )}
              <IconButton onClick={togglePaletteType}>
                {theme.palette.type !== "light" ? (
                  <Brightness7 />
                ) : (
                  <Brightness4 />
                )}
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
