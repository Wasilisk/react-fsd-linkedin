import { InputAdornment } from "features/global-search/input-adornment";
import { SearchInputWrapper } from "features/global-search/input-wrapper";

import { InputBase } from "shared/ui/inputs/input-base";
import { Box } from "shared/ui/box";

export const GlobalSearch = () => {
    return (
        <Box
            display="flex"
            flexGrow={1}>
                <SearchInputWrapper>
                <InputBase
                    fullWidth
                    placeholder="Search"
                    startAdornment={<InputAdornment/>}
                />
                </SearchInputWrapper>
        </Box>
    );
}