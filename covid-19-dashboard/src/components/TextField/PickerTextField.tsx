
import * as React from "react"
import Clear from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment"
import Stack from "@mui/material/Stack"
import TextField, { TextFieldProps } from "@mui/material/TextField"

const mergeAdornments = (...adornments: React.ReactNode[]) => {
    const nonNullAdornments = adornments.filter((el) => el != null);
    if (nonNullAdornments.length === 0) {
        return null;
    }

    if (nonNullAdornments.length === 1) {
        return nonNullAdornments[0];
    }

    return (
        <Stack direction="row">
            {nonNullAdornments.map((adornment, index) => (
                <React.Fragment key={index}>{adornment}</React.Fragment>
            ))}
        </Stack>
    );
};

const PickerTextField = ({
    onClearClick,
    ...rest
}: TextFieldProps & { onClearClick: () => void }) => (
        <TextField
            data-testid="range-date-picker"
            {...rest}
            InputProps={{
                ...rest.InputProps,
                endAdornment: mergeAdornments(
                    <InputAdornment position="end">
                        <IconButton onClick={onClearClick}>
                            <Clear />
                        </IconButton>
                    </InputAdornment>,
                    rest.InputProps ?.endAdornment ?? null
      )
            }}
        />
    )

export default PickerTextField