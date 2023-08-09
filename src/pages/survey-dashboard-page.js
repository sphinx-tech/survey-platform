import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { CodeSnippet } from "../components/code-snippet";
import { PageLayout } from "../components/page-layout";
import { getProtectedResource } from "../services/message.service";

export const SurveyCollection = () => {
  
  const [survey, setSurvey] = useState([])

  useEffect(() => {
    const fetchItems = () => {
      let localStorageEmail = localStorage.getItem('userEmail');
      axios.get(`http://localhost:5000/${localStorageEmail}/surveys`)
      .then(res =>{
        console.log(res)
        setSurvey(res.data)
      })
      .catch(err=>{
        console.log(err)
      })
    }
    fetchItems();
  }, [])

  return (
    <div>
      {survey.map((individualSurvey, index) =>{
        return(
          <ul key={index}>
            <li>
              {JSON.stringify(individualSurvey)}
            </li>
          </ul>
        )
      })}
    </div>
  )
};
