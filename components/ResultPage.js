import React from "react";
import { useLocation } from "react-router-dom";

function ResultPage() {

  const location = useLocation();
  const data = location.state;

  return (

    <div className="result">

      <h2>Submitted Details</h2>

      <table>

        <tbody>

          <tr>
            <td>First Name</td>
            <td>{data.firstName}</td>
          </tr>

          <tr>
            <td>Last Name</td>
            <td>{data.lastName}</td>
          </tr>

          <tr>
            <td>Username</td>
            <td>{data.username}</td>
          </tr>

          <tr>
            <td>Email</td>
            <td>{data.email}</td>
          </tr>

          <tr>
            <td>Phone</td>
            <td>{data.countryCode} {data.phone}</td>
          </tr>

          <tr>
            <td>Country</td>
            <td>{data.country}</td>
          </tr>

          <tr>
            <td>City</td>
            <td>{data.city}</td>
          </tr>

          <tr>
            <td>PAN</td>
            <td>{data.pan}</td>
          </tr>

          <tr>
            <td>Aadhaar</td>
            <td>{data.aadhaar}</td>
          </tr>

        </tbody>

      </table>

    </div>

  );
}

export default ResultPage;