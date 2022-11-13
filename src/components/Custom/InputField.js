
import { styled, TextField } from "@mui/material";


const InputField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        '& .MuiInputBase-input': {
            // height: 27,
            fontSize: 14
        },
        '&:hover': {
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.lightGray.main
            },
        },

        borderRadius: 2,
        paddingBlock: 3,
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.lightGray.main
        },
        '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.primary.main
            }
        }
    },
    '& .MuiInputLabel-root': {
        color: theme.palette.gray.main,
        fontSize: 14,
        marginTop: 2
    },
    '& .MuiInputBase-inputMultiline': {
        paddingBlock: 5,
        '& .MuiInputBase-inputMultiline': {
            resize: 'auto'
        }
    }
}))
export default InputField;