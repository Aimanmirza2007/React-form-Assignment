import "./App.css";
import { useForm } from "react-hook-form";

import { ToastContainer, toast } from "react-toastify";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
            toast.success("Form submitted successfully 😎!");
            reset()
        })}
      >
        <div className="container">
          <div className="leftContainer">
            <h1>FORM</h1>
            <div>
              <input
                {...register("Name", { required: true, minLength: 4 })}
                placeholder="Name"
              />
              {errors.Name && <p className="para">Min lenght is 4</p>}
            </div>
            <div>
              <input
                {...register("age", { required: true })}
                placeholder="Age"
              />
            </div>
            <div>
              <input
                {...register("Email", {
                  required: true,
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email format",
                  },
                })}
                placeholder="Email"
              />
              {errors.Email && <p className="para">{errors.Email.message}</p>}
            </div>
            <div>
              <input
                {...register("password", {
                  required: true,
                  minLength: {
                    value: 7,
                    message: "Password must be at least 7 characters",
                  },
                })}
                placeholder="password"
                type="password"
              />
              {errors.password && (
                <p p className="para">
                  {errors.password.message}
                </p>
              )}
            </div>
            <button id="submit">Submit</button>
          </div>
        </div>
      </form>
         <ToastContainer />
    </>
  );
}

export default App;
