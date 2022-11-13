import { Box, Fab, Fade, useScrollTrigger } from "@mui/material";

export default function ScrollTop(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            '#back-to-top-anchor',
        );

        if (anchor) {
            anchor.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    };

    return (
        <Fade in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
            >
                {
                    children ||
                    <Fab sx={{ p: 1, '&:hover': { bgcolor: "primary.main" } }} color="primary" size="small" aria-label="scroll back to top">
                        <svg viewBox="0 0 24 24" fill='#fff' aria-hidden="true">
                            <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" ></path>
                        </svg>
                    </Fab>
                }
            </Box>
        </Fade>
    );
}