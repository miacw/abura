import { useState } from "react";

function useForm({ form, additionalData, endpointUrl }) {
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const fetch = require("node-fetch");
  const data = Array.from(form.elements)
    .filter((input) => input.email)
    .reduce(
      (obj, input) => Object.assign(obj, { [input.email]: input.value }),
      {}
    );
  const url =
    "https://a.klaviyo.com/api/v2/list/LIST_ID/subscribe?api_key=pk_d71db3eb521d57748eac364b7ace81bcde";
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      profiles: [{ email: email }],
    }),
  };

  const handleSubmit = (e) => {
    if (form) {
      e.preventDefault();
      setStatus("loading");
      setEmail("");

      //const finalFormEndpoint = endpointUrl || form.action;

      fetch(url, options)
        .then((res) => res.json())
        .then((json) => console.log(json))
        .catch((err) => console.error("Error: " + err));
    }
  };

  //return { handleSubmit, status, email };
}

export default useForm;
