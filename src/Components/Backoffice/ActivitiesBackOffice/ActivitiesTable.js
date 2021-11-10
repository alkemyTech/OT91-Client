import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { showSuccessAlert } from "../../../Utils/alerts";
import { deleteActivity } from "../../../Utils/handlers";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "../../../Styles/TableStyle.css";
import { getAllActivities, deleteActivityById } from "../../../Services/activityService";
import { useHistory } from "react-router-dom";

const ActivitiesTable = () => {
  const [dataActivity, setDataActivity] = useState([]);
  const history = useHistory();

  const editData = (id) => history.push(`/activity-detail/${id}`);

  const deleteData = (id) => {
    deleteActivityById(id)
      .then(response => {
        setDataActivity(deleteActivity(id, dataActivity));
        showSuccessAlert("Delete Activity");
      })
  };

  useEffect(() => {
    getAllActivities().then(allActivities => setDataActivity(allActivities));
  }, [])

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
