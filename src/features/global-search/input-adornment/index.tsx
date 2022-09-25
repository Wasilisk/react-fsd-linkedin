import { Box } from "shared/ui/box";
import { SearchIcon } from "shared/ui/icons/search";

export const InputAdornment = () => (
    <Box
        display="flex"
        alignItems="center"
        py={1} pl={2} pr={1}
        color="rgba(0,0,0,0.6)"
    >
        <SearchIcon />
    </Box>
)