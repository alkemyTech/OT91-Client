import React, { useState } from "react";
import { Link } from "react-router-dom";
import { showSuccessAlert } from "../../../Utils/alerts";
import { deleteActivity } from "../../../Utils/handlers";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "../../../Styles/TableStyle.css";

const ActivitiesTable = () => {
  const [dataActivity, setDataActivity] = useState([
    {
      id: 1,
      name: "Activity 1",
      image: "https://picsum.photos/id/1/200/200",
      CreatedAt: "01/01/2020",
    },
    {
      id: 2,
      name: "Activity 2",
      image: "https://picsum.photos/id/237/200/200",
      CreatedAt: "01/01/2020",
    },
    {
      id: 3,
      name: "Activity 3",
      image: "https://picsum.photos/id/227/200/200",
      CreatedAt: "01/01/2020",
    },
  ]);

  const editData = (id) => {
    console.log("id", id);
  };

  const deleteData = (id) => {
    setDataActivity(deleteActivity(id, dataActivity));
    showSuccessAlert("Delete Activity");
  };

  return (
    <div>
      <Link
        to="/backoffice/activities/create"
        style={{ textDecoration: "none" }}
      >
        <span className="linkActivity">
          <h1>Create activities</h1>
        </span>
      </Link>
      <Table>
        <Thead>
          <Tr>
            <Th className="activityTh">Name</Th>
            <Th className="activityTh">Image</Th>
            <Th className="activityTh">CreatedAt</Th>
            <Th className="activityTh">updated</Th>
          </Tr>
        </Thead>
        <Tbody>
          {dataActivity?.map((item, index) => {
            return (
              <Tr key={index}>
                <Td>{item.name}</Td>
                <Td>
                  <div className="activityImageContainer">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="activityImage"
                    ></img>
                  </div>
                </Td>
                <Td>{item.CreatedAt}</Td>
                <Td>
                  <button
                    className="activityButton"
                    onClick={() => editData(item.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="activityButton"
                    onClick={() => deleteData(item.id)}
                  >
                    Delete
                  </button>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </div>
  );
};

export default ActivitiesTable;
