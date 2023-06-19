import { Box } from "@mui/joy";

export function StickyThead() {
  return (
    <thead>
      <tr>
        <Box component="th" sx={{ position: "sticky", top: 0 }}>
          id
        </Box>
        <Box component="th" sx={{ position: "sticky", top: 0 }}>
          firstName
        </Box>
        <Box component="th" sx={{ position: "sticky", top: 0 }}>
          lastName
        </Box>
        <Box component="th" sx={{ position: "sticky", top: 0 }}>
          job
        </Box>
      </tr>
    </thead>
  );
}
