import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <>
      <form onSubmit={handleSubmit((data)=>console.log(data))}>
        <div className="container">
          <div className="leftContainer">
            <h1>FORM</h1>
            <div>
              <input { ...register("Name")} placeholder="Name" />
            </div>
            <div>
              <input {...register("email")} placeholder="Email"/>
            </div>
            <div>
              <input {...register("password")} placeholder="password" />
            </div>
              <div>
              <input {...register("PhnoneNumber")} placeholder="PhnoneNumber"/>
            </div>
            <button id="submit">Submit</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default App;
