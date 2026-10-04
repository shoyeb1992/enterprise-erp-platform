import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";

import api from "../../services/api";

const loginSchema = z.object({
  usernameOrEmail: z.string().min(1, "Username or email is required"),

  password: z.string().min(1, "Password is required"),
});

type LoginFormData = z.infer<typeof loginSchema>;

interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    accessToken: string;
    user: {
      id: string;
      name: string;
      username: string;
      email: string;
      role: string;
    };
  };
}

function Login() {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setServerError("");

    try {
      const response = await api.post<LoginResponse>("/auth/login", data);

      const result = response.data;

      if (result.success) {
        localStorage.setItem("accessToken", result.data.accessToken);

        localStorage.setItem("user", JSON.stringify(result.data.user));

        navigate("/dashboard", { replace: true });
      }
    } catch (error: any) {
      setServerError(
        error.response?.data?.message || "Invalid username/email or password",
      );
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "background.default",
        px: 2,
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 420,
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h4" fontWeight={700} textAlign="center">
            Enterprise ERP
          </Typography>

          <Typography
            color="text.secondary"
            textAlign="center"
            sx={{ mt: 1, mb: 4 }}
          >
            Sign in to your account
          </Typography>

          {serverError && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {serverError}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <TextField
              fullWidth
              label="Username or Email"
              margin="normal"
              {...register("usernameOrEmail")}
              error={!!errors.usernameOrEmail}
              helperText={errors.usernameOrEmail?.message}
            />
            <TextField
              fullWidth
              type="password"
              label="Password"
              margin="normal"
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              disabled={isSubmitting}
              sx={{ mt: 3 }}
            >
              {isSubmitting ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Sign In"
              )}
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Login;
