import React, {useState, useEffect} from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import {Typography} from "@material-ui/core";
import {Route, useHistory} from "react-router-dom";
import Status from "./Status";
import Details from "./Details";
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import Button from '@material-ui/core/Button';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';
import {makeStyles} from "@material-ui/core/styles";
import {GRPCClients} from "../../grpc/gRPCClients";
import {SimpleReport, Severity} from "../../types/types";
import {FullScreenHandle} from "react-full-screen";
import {GetRequest, GetResponse} from "../../lib/scoretrakapis/scoretrak/report/v1/report_pb";
import {Role, token} from "../../grpc/token/token";
import clsx from "clsx";
import Ranks from "./Ranks";
import {usePolicy} from "../../contexts/PolicyContext";
import {useSnackbar} from "notistack";
import {SnackbarDismissButton} from "../SnackbarDismissButton";

const useStyles = makeStyles((theme) => ({
    hidden: { opacity: 0.1, transition: "opacity 0.2s linear"},
    visible: { opacity: 1, transition: "opacity 0.2s linear"},
    alignItemsAndJustifyContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fullScreenButtonStyle: {
        position: 'absolute',
        maxHeight: '3vh',
        bottom: '1vh',
        marginRight: '2vh',
        right: '20px',
    }
}));

type ScoreBoardProps = {
    gRPCClients: GRPCClients,
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    handleFullScreen: FullScreenHandle
}


export default function ScoreBoard(props : ScoreBoardProps) {
    const policy = usePolicy()
    const { enqueueSnackbar } = useSnackbar()
    const [report, setReport] = useState<SimpleReport | undefined>(undefined);
    const [visible, setFade] = React.useState<boolean>(false);
    const classes = useStyles();
    const handleFadeOver = () => {
        setFade(true);
    };
    const handleFadeOut = () => {
        setFade(false);
    };
    const handleFullScreen = props.handleFullScreen
    const history = useHistory();


    useEffect(() => {
        const streamRequest = new GetRequest();
        const stream = props.gRPCClients.reportClient.get(streamRequest, {})
        stream.on('error', (err: any) => {
            if (err.code === 7 || err.code === 16){
                token.logout()
                history.push("/login");
            } else{
                enqueueSnackbar(`Encountered an error while fetching report: ${err.message}. Error code: ${err.code}`, { variant: Severity.Error, action: SnackbarDismissButton })
            }
        });
        stream.on("data", (response) => {
            const cache = (response as GetResponse).getReport()?.getCache()
            if (cache != null) {
                const simpleReport = JSON.parse(cache) as SimpleReport
                setReport(simpleReport)
                props.setTitle(`Round: ${simpleReport.Round}`)
            } else {
                props.setTitle("")
            }
        });
        return () => stream.cancel();
    }, []);

    return (
            <Box className={classes.alignItemsAndJustifyContent} height="100%" width="100%"  >
                { report && report.Round !== 0 ?
                    <Box m="auto" style={{height: handleFullScreen.active ? '100vh' : '85vh', width: '100%'}}>
                        { policy && (policy.showPoints?.value || token.getCurrentRole() === Role.Black) &&
                        <Route exact path='/ranks' render={() => (
                            <Ranks report={report}/>
                        )}/>
                        }
                        <Route exact path='/' render={() => (
                            <Status report={report}/>
                        )} />
                        <Route exact path='/details' render={() => (
                            <Details report={report} gRPCClients={props.gRPCClients} />
                        )} />
                    </Box>

                        :
                    <div>
                    <CircularProgress  />

                    {
                        report?.Round === 0 &&
                            <div>
                                <Typography>Competition have not started yet!</Typography>
                                <Typography>This window will automatically reload once the first round is scored.</Typography>
                            </div>
                    }
                    </div>
                    }
                    {handleFullScreen.active ?
                        <Button
                            className={clsx(classes.fullScreenButtonStyle, visible ? classes.visible : classes.hidden)}
                            startIcon={<FullscreenExitIcon />}
                            onClick={handleFullScreen.exit}
                            onMouseOver={handleFadeOver}
                            onMouseOut={handleFadeOut}

                        >Exit Full Screen</Button>
                        :
                        <Button
                            className={clsx(classes.fullScreenButtonStyle, visible ? classes.visible : classes.hidden)}
                            startIcon={<FullscreenIcon />}
                            onClick={handleFullScreen.enter}
                            onMouseOver={handleFadeOver}
                            onMouseOut={handleFadeOut}
                        >Enter Full Screen</Button>
                    }
            </Box>
    );
}