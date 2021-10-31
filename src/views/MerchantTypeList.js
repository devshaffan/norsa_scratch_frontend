import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Form,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import { useEffect } from "react";

function MerchantTypeList() {
  const [tableData, setTableData] = React.useState([{
    Checked: false,
    Title: "", Status : false
  }])
  const history = useHistory();
  const [status, setStatus] = React.useState(false)
  const [toSearch, setToSearch] = React.useState("")
  const [filterTableData, setFilterTableData] = React.useState([])
  useEffect(() => {
    setFilterTableData([])
    setTableData([{
      Checked: false,
      Title: "shaffan",
      Status : false
    },
    {
      Checked: false,
      Title: "shaffan",
      Status : false
    },
    {
      Checked: false,
      Title: "shaffan",
      Status : false
    },
    {
      Checked: false,
      Title: "shaffan",
      Status : false
    },
    {
      Checked: false,
      Title: "shaffan",
      Status : false
    },
    {
      Checked: false,
      Title: "shaffan",
      Status : false
    },])

  }, [])



  useEffect(() => {
    let tempTable = []
    tableData.map((item, index) => {
      if (item.Title.includes(toSearch)) {

      }
      else {
        tempTable.push(item)
      }
    })
    setFilterTableData(tempTable)


  }, [toSearch])

  const toggleStatus = (index) => {
    let tempTable = [...tableData]
    tempTable[index].Status = !tempTable[index].Status
    setTableData(tempTable)
  }

  const deleteRow = (itemToDelete) => {
    setTableData(tableData.filter((item, index) => index !== itemToDelete))
  }

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">Merchant Type</Card.Title>
                <p className="card-category">
                  Show's list of Merchant Type
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Button
                  className="btn-fill pull-right"
                  type="submit"
                  variant="info"
                  onClick={() => history.push('/admin/MerchantTypeForm')}
                >
                  ADD
                </Button>
                &nbsp; &nbsp;
                <Button
                  className="btn-fill pull-right"
                  type="submit"
                  variant="success"
                  onClick={() => {
                    setTableData(tableData.map((item) => {
                      if (item.Checked === true) {
                        item.Status = true
                        item.Checked = false
                      }
                      return item
                    }))
                  }}
                >
                  Active
                </Button>
                &nbsp; &nbsp;
                <Button
                  className="btn-fill pull-right"
                  type="submit"
                  variant="danger"
                  onClick={() => {
                    setTableData(tableData.map((item) => {
                      if (item.Checked === true) {
                        item.Status = false
                        item.Checked = false

                      }
                      return item
                    }))
                  }}
                >
                  Block
                </Button>
                <br />
                <Col md="4">
                  <Form.Group>
                    <label>  Filter
                    </label>
                    <Form.Control
                      type="text"
                      onChange={(e) => setToSearch(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0"> st </th>
                      <th className="border-0">Title</th>
                      <th className="border-0">Status</th>
                      <th className="border-0" align="center">Actions</th>

                    </tr>
                  </thead>
                  <tbody>

                    {tableData.map((item, index) => {

                      if (filterTableData.includes(item)) {
                        return
                      }
                      return (
                        <tr key={index} >
                          <td> <Form.Control
                            placeholder="Fax"
                            type="checkbox"
                            checked={item.Checked}
                            onChange={() => {
                              let temp = [...tableData]
                              temp[index].Checked = !temp[index].Checked
                              setTableData(temp)
                            }}

                          ></Form.Control>
                          </td>
                          <td> {item.Title} </td>

                          <td> {item.Status ?
                            <Button onClick={() => toggleStatus(index)}>
                              <i className="fa fa-toggle-on" style={{ color: "green", textAlign: "center" }} />
                            </Button>
                            :
                            <Button onClick={() => toggleStatus(index)}>
                              <i className="fa fa-ban" style={{ color: "red", textAlign: "center" }} />
                            </Button>
                          }
                          </td>
                          
                          <td>
                            <i className="fa fa-edit" style={{ color: "green" }} onClick={() => history.push('/admin/ClientForm/?id=' + index)} />
                            &nbsp; &nbsp;
                            <i className="fa fa-trash red" style={{ color: "red" }} onClick={() => { deleteRow(index) }} />
                          </td>
                        </tr>
                      )
                    })}
                    {/* <td align="center" >
                        <i className="nc-icon nc-notes" onClick={() => alert("clicked issuance History")} />
                      </td>
                      <td align="center">
                        <i className="fa fa-edit" onClick={() => alert("clicked edit")} />
                      </td>
                    </tr> */}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MerchantTypeList;
