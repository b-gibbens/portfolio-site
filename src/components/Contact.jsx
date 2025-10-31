import {
  Box,
  Button,
  TextField,
  Typography,
  Alert,
  Stack,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.success) {
      setStatus("success");
      e.target.reset();
    } else {
      console.error(data);
      setStatus("error");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{ width: "100%", mx: "auto", maxWidth: 500 }}
    >
      <Stack spacing={2} textAlign="center" display="flex" justifyContent="center" alignItems="center">
        <input type="hidden" name="botcheck" />
        <Typography variant="h6" textAlign="center">
          Get in touch.  If you want.
        </Typography>
        <TextField fullWidth required name="name" label="Name" />
        <TextField fullWidth required name="email" label="Email" type="email" />
        <TextField
          fullWidth
          required
          multiline
          name="message"
          label="Message"
          rows={5}
        />
        <Button
          type="submit"
          variant="contained"
          disabled={status === "loading"}
          sx={{ backgroundColor: "#a18d0dff", width: "200px" }}
        >
          {status === "loading" ? (
            <CircularProgress size={24} />
          ) : (
            "Send Message"
          )}
        </Button>
        {status === "success" && (
          <Alert severity="success">Message sent successfully!</Alert>
        )}
        {status === "error" && (
          <Alert severity="error">Failed to send — try again later.</Alert>
        )}
      </Stack>
    </Box>
  );
}
