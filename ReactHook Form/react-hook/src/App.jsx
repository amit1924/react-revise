import { useForm } from "react-hook-form";
import "./App.css";

const App = () => {
  const form = useForm({
    defaultValues: {
      email: "test@example.com",
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = form;

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log(data);
      throw new Error();
    } catch (error) {
      setError("root", {
        message: "Email already exists",
      });
    }
  };

  return (
    <>
      <h1 className="title">React Hook Form</h1>
      <div className="container">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("email", {
              required: "email is required",
              validate: (value) => {
                if (!value.includes("@")) {
                  return "Email must include @";
                }
                return true;
              },
            })}
            type="text"
            id="email"
            name="email"
            placeholder="Enter your email address"
            className="input"
          />
          {errors.email && <div id="email-error">{errors.email.message}</div>}
          <input
            {...register("password", {
              required: "password is required",
              minLength: {
                value: 8,
                message: "password must be at least 8 characters",
              },
            })}
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="input"
          />

          {errors.password && (
            <div id="password-error">{errors.password.message}</div>
          )}
          <button disabled={isSubmitting} type="submit" className="button">
            {isSubmitting ? "Loading..." : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
};

export default App;
