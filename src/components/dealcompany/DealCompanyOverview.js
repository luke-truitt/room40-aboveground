import { ThemeProvider, Box, Typography, Button } from "@material-ui/styles";

function DealCompanyOverview(props) {
  return (
    <ThemeProvider theme={primaryTheme}>
      <Box className="dealco-overview cols">
        <Box className="dealco-ov-left rows"></Box>
        <Notes />
      </Box>
    </ThemeProvider>
  );
}

export default DealCompanyOverview;
