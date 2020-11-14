import React, { useEffect, useState } from "react";
import MainLayout from "./MainLayout";
import axios from "axios";
import { Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const CustomersPage = () => {
  const history = useHistory();
  const token = localStorage.getItem("token");

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log("Token is: ", token);
  useEffect(() => {
    if (!token) {
      history.push("/");
    }
    setLoading(true);
    const fetchCustomers = async () => {
      try {
        const res = await axios.get(
          "https://aqueous-basin-88250.herokuapp.com/customers",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setData(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  let result;
  if (data.length) {
    result = data.map((customer) => {
      return (
        <tr key={customer._id}>
          <td>{customer.city}</td>
          <td>{customer.contact}</td>
          <td>{customer.email}</td>
          <td>{customer.first_name}</td>
          <td>{customer.last_name}</td>
          <td>{customer.house_number}</td>
          <td>{customer.state}</td>
          <td>{customer.street_address}</td>
          <td>{customer.zipcode}</td>
          <td>
            <img
              width="50"
              height="50"
              alt={customer.image}
              src={customer.image}
            />
          </td>
        </tr>
      );
    });
  } else {
    result = "No data found";
  }

  return (
    <MainLayout>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>City</th>
              <th>Contact</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>House Number</th>
              <th>State</th>
              <th>Street Address</th>
              <th>Zip Code</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>{result}</tbody>
        </Table>
      )}
    </MainLayout>
  );
};

export default CustomersPage;
