import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
// import "./index.css";
import { json } from "./json";
import { themeJson } from "./theme";
import { useCallback } from 'react';
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";




export const SurveyComponent1 = () => {
    const survey = new Model(json);
    // You can delete the line below if you do not use a customized theme
    survey.applyTheme(themeJson);
    survey.onComplete.add((sender, options) => {
        console.log(JSON.stringify(sender.data, null, 3));
    });

    const alertResults = useCallback((sender) => {
        const results = JSON.stringify(sender.data);
        alert(results);
    }, []);

    // survey.onComplete.add(alertResults);

    const { user } = useAuth0();
    localStorage.setItem('userEmail', user.email)

    const sendDatatoServer = (survey) => {
        alert("Results are:" + JSON.stringify(survey.data));
        axios.post("http://localhost:5000/fill-survey", {
            data : survey.data,
            email : user.email
        })
        .then(res =>{
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    survey.onComplete.add(sendDatatoServer)
    return (<Survey model={survey} />);
}

// export default SurveyComponent1;