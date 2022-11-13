import React, { useEffect } from 'react';
import {
    usePopupState,
    bindHover,
    bindPopover,
} from 'material-ui-popup-state/hooks'
import HoverPopover from 'material-ui-popup-state/HoverPopover';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
const MegaMenu = ({ label, sx, children }) => {
    const { pathname } = useRouter();
    const popupState = usePopupState({
        variant: 'popover',
        popupId: 'demoPopover',
    })
    useEffect(() => {
        if (typeof window !== undefined) {
            bindHover(popupState)?.onMouseLeave(document.documentElement)
        }
    }, [pathname])
    return (
        <>
            <Button endIcon={<svg width="13" height="8" viewBox="0 0 13 8" fill="#FC9823" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5183 0.305919C12.3378 0.110039 12.0931 0 11.838 0C11.5828 0 11.3381 0.110039 11.1576 0.305919L6.39424 5.47795L1.63087 0.305919C1.44937 0.115591 1.2063 0.0102748 0.953984 0.0126554C0.701673 0.015036 0.460316 0.124922 0.281898 0.318647C0.10348 0.512371 0.00227737 0.774433 8.4877e-05 1.04839C-0.00210762 1.32235 0.0948868 1.58628 0.270177 1.78334L5.71389 7.69408C5.89435 7.88996 6.13907 8 6.39424 8C6.64941 8 6.89413 7.88996 7.07458 7.69408L12.5183 1.78334C12.6987 1.5874 12.8 1.32169 12.8 1.04463C12.8 0.767573 12.6987 0.501858 12.5183 0.305919Z" />
            </svg>} sx={sx} {...bindHover(popupState)}>
                {label}
            </Button>
            <HoverPopover
                PaperProps={{ elevation: 0, sx: { boxShadow: '0px 8px 15px rgba(49, 49, 49, 0.05)' } }}
                sx={{ display: { md: "block", xs: "none" }, }}
                {...bindPopover(popupState)}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                {children}
            </HoverPopover>
        </>
    )
};

export default MegaMenu;