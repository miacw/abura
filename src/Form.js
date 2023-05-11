import { useRef, useState } from "react";
import useForm from "./UseForm";
import axios from "axios";

const Form = () => {
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const fetch = require("node-fetch");
  //   const url =
  //     "https://a.klaviyo.com/api/v2/list/SbKQqi/subscribe?api_key=pk_d71db3eb521d57748eac364b7ace81bcde";
  const url = "https://manage.kmail-lists.com/ajax/subscriptions/subscribe";
  const options = {
    async: true,
    crossDomain: true,
    method: "POST",
    headers: {
      //accept: "application/json",
      "content-type": "application/x-www-form-urlencoded",
      "cache-control": "no-cache",
      //mode: "no-cors",
    },
    data: {
      a: "VpujQP",
      g: "VLBBrg",
      email: email,
    },

    // body: JSON.stringify({
    //   emails: email,
    // }),
  };

  //   var settings = {
  //     async: true,
  //     crossDomain: true,
  //     url: "https://manage.kmail-lists.com/ajax/subscriptions/subscribe",
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/x-www-form-urlencoded",
  //       "cache-control": "no-cache",
  //     },
  //     data: {
  //       g: "SbKQqi",
  //       email: email,
  //     },
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    // //const finalFormEndpoint = endpointUrl || form.action;
    // fetch(url, options)
    //   .then((res) => res.json())
    //   .then((json) => console.log(json))
    //   .catch((err) => console.error("error:" + err));
    axios
      .post(url, options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
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
