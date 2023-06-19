import { Sheet } from "@mui/joy";
import { PropsWithChildren } from "react";

export function TableContainer(props: PropsWithChildren) {
  const { children } = props;

  return (
    <Sheet
      variant="outlined"
      sx={{
        height: "calc(100dvh - 2rem)",
        overflow: "auto",
      }}
    >
      {children}
    </Sheet>
  );
}
