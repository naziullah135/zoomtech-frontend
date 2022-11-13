import { Accordion, AccordionDetails, AccordionSummary, ListItem, ListItemButton, ListItemText } from '@mui/material';
import React from 'react';

const NestedMenu = ({ label, children }) => {

    return (
        <Accordion sx={{ '& .Mui-expanded': { maxHeight: "unset", minHeight: "unset !important" }, all: "unset" }}>
            <AccordionSummary sx={{ m: "0 !important", '& .MuiAccordionSummary-content': { m: "0 !important" }, '& .Mui-expanded': { m: 0 } }}
                expandIcon={
                    <svg width="13" height="8" viewBox="0 0 13 8" fill="#FC9823" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.281794 7.69408C0.462251 7.88996 0.706971 8 0.962138 8C1.2173 8 1.46202 7.88996 1.64248 7.69408L6.40586 2.52205L11.1692 7.69408C11.3507 7.88441 11.5938 7.98973 11.8461 7.98734C12.0984 7.98496 12.3398 7.87508 12.5182 7.68135C12.6966 7.48763 12.7978 7.22557 12.8 6.95161C12.8022 6.67765 12.7052 6.41372 12.5299 6.21666L7.0862 0.305919C6.90574 0.11004 6.66102 2.47386e-07 6.40586 2.47386e-07C6.15069 2.47386e-07 5.90597 0.11004 5.72551 0.305919L0.281794 6.21666C0.101391 6.4126 4.57764e-05 6.67831 4.57764e-05 6.95537C4.57764e-05 7.23243 0.101391 7.49814 0.281794 7.69408V7.69408Z" />
                    </svg>

                }>
                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText sx={{
                            color: 'text.darkGray',
                            textTransform: "capitalize",
                            ml: 2
                        }}>{label}</ListItemText>
                    </ListItemButton>
                </ListItem>
            </AccordionSummary>
            <AccordionDetails>
                {children}
            </AccordionDetails>
        </Accordion>
    );
};

export default NestedMenu;