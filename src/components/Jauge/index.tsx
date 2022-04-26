import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";

type JaugeProps = {
  value: number;
};

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 10,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#d2222d",
    borderRadius: 10,
  },
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: "#238823",
  },
}));

export default function Jauge({ value }: JaugeProps) {
  return (
    <Box sx={{ flexGrow: 1, my: 1 }}>
      <BorderLinearProgress variant="determinate" value={value} />
    </Box>
  );
}
