import { useRef, useState } from "react";
import useForm from "./UseForm";

const Form = () => {
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const fetch = require("node-fetch");
  const url =
    "https://a.klaviyo.com/api/v2/list/SbKQqi/subscribe?api_key=pk_d71db3eb521d57748eac364b7ace81bcde";
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      "Acess-Control-Allow-Origin": "*",
      mode: "no-cors",
    },

    body: JSON.stringify({
      profiles: [{ email: email }],
    }),
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //const finalFormEndpoint = endpointUrl || form.action;

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.error("Error: " + err));
  };

  //return { handleSubmit, status, email };

  return (
    <form method="post" onSubmit={handleSubmit}>
      <label>
        Email:{" "}
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </label>
      <hr />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
