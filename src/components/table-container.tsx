import { Sheet } from "@mui/joy";
import { PropsWithChildren } from "react";

export function TableContainer(props: PropsWithChildren) {
  const { children } = props;

  return (
    <Sheet
      variant="outlined"
      sx={{
        height: "80vh",
        overflow: "auto",
      }}
    >
      {children}
    </Sheet>
  );
}
