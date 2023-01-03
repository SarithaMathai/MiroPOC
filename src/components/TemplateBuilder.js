import { useState } from "react";
import EnterpriseIcon, { MinusCircleIcon } from "@enterprise-ui/icons";
import {
  Anchor,
  Button,
  Form,
  Grid,
  Heading,
  Layout,
  Table,
} from "@enterprise-ui/canvas-ui-react";
import { drawTemplate } from "../utils/miroHelper";

const TemplateBuilder = () => {
  const [id, setId] = useState(2);
  const [type, setType] = useState("Product");
  const [templateFields, setTemplateFields] = useState([
    { id: 1, field: "" },
    { id: 2, field: "" },
  ]);
  const [isBoardTemplate, setIsBoardTemplate] = useState(false);
  const [isIntegratedWithSpark, setIsIntegratedWithSpark] = useState(false);
  let linesData = templateFields;

  const typeOptions = [
    { value: "Product", label: "Product" },
    { value: "Sample", label: "Sample" },
  ];

  const addRow = () => {
    let nextId = id + 1;
    setId(nextId);
    const newTemplateData = [...templateFields, { id: nextId, field: "" }];
    setTemplateFields(newTemplateData);
  };

  const pushDataToSpark = () => {
    setIsIntegratedWithSpark(true);
    setId("PID-G8YWYYY");
  };

  const handleFieldChange = (target) => {
    target.id = target.id.replace(/\D/g, "");
    let index = linesData.findIndex((obj) => obj.id === parseInt(target.id));
    let newLinesData = [...linesData];
    let newLine = { ...newLinesData[index] };
    newLine.field = target.value;
    newLinesData[index] = newLine;
    console.log("field change", newLine);
    setTemplateFields(newLinesData);
  };

  const handleDeleteRow = (id) => {
    let newLinesData = [...linesData];
    let index = linesData.findIndex((obj) => obj.id === parseInt(id));
    newLinesData.splice(index, 1);
    setTemplateFields(newLinesData);
  };

  const handleSubmit = () => {
    const newLinesData = linesData.filter(
      (entry) => entry.field && entry.field !== ""
    );

    const fields = newLinesData.map((entry) => entry.field);

    if (newLinesData.length > 0) {
      setTemplateFields(newLinesData);
      drawTemplate(fields);
      console.log("create miro shapes");
      setIsBoardTemplate(true);
    } else {
      console.log("error");
    }
  };

  const generateRows = (dataArray) => {
    return dataArray.map((data) => {
      let id = data.id;
      return (
        <Table.Row id={id}>
          <Table.Data md={5} xs={12} id={`Cell2${id}`}>
            <Form.Field
              id={`field${id}`}
              label={`field${id}`}
              required
              type="text"
              onChange={(event) => {
                handleFieldChange(event.target);
              }}
            />
          </Table.Data>
          <Table.Data md={2} xs={12} id={`Cell3${id}`}>
            <Button
              id={`remove${id}`}
              iconOnly
              aria-label="Remove Field"
              onClick={() => {
                handleDeleteRow(id);
              }}
            >
              <EnterpriseIcon icon={MinusCircleIcon} />
            </Button>
          </Table.Data>
        </Table.Row>
      );
    });
  };

  return (
    <Layout theme="default" fullWidth>
      <Heading defaultTitle={`Create Spark ${type.value} Template`} />
      <Layout.Body includeRail>
        <Grid.Container justify="center">
          <Grid.Item md={5} xs={12}>
            <Grid.Container align="center" justify="center">
              <Grid.Item>
                <Heading size={1}>{`Create Spark ${type} Template`}</Heading>
                <p align="center">Miro Template for Spark.</p>
              </Grid.Item>
            </Grid.Container>

            {linesData.length > 0 && !isBoardTemplate ? (
              <Grid.Container className="hc-pa-normal" justify="space-around">
                <Grid.Item md={6} xs={12}>
                  <Form.Field
                    id="type"
                    label="Type"
                    type="select"
                    options={typeOptions}
                    defaultValue={type || "product"}
                    onUpdate={(e, value) => {
                      setType(value);
                    }}
                  />
                </Grid.Item>
                <Grid.Item md={6} xs={12}>
                  <Form.Field id="sparkId" label="Id" defaultValue={id} />
                </Grid.Item>
                <Grid.Item md={12} xs={12}>
                  <Table name="SparkMiroTemplate">
                    <Table.Body>
                      {generateRows(linesData)}
                      <Table.Row id="action">
                        <Table.Data md={3} id="addRow">
                          <Button
                            onClick={() => {
                              addRow();
                            }}
                          >
                            Add Row
                          </Button>
                        </Table.Data>
                        <Table.Data md={5} id="submit">
                          <Button
                            onClick={() => {
                              handleSubmit();
                            }}
                          >
                            Create Template
                          </Button>
                        </Table.Data>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </Grid.Item>
              </Grid.Container>
            ) : (
              <Grid.Container className="hc-pa-normal" justify="space-around">
                <Grid.Item></Grid.Item>
              </Grid.Container>
            )}
            {isBoardTemplate ? (
              <Grid.Container className="hc-pa-normal" justify="space-around">
                <Grid.Item md={12} xs={12}>
                  <Table name="SparkMiroTemplate">
                    <Table.Body>
                      <Table.Row id="action">
                        <Table.Data md={5} id="addRow">
                          {isIntegratedWithSpark ? (
                            <Anchor
                              href={`https://spark.dev.target.com/products/${id}`}
                              target="_blank"
                            >
                              {`Find ${type} in Spark`}
                            </Anchor>
                          ) : (
                            <Button
                              onClick={() => {
                                pushDataToSpark();
                              }}
                            >
                              {`Create ${type} in Spark`}
                            </Button>
                          )}
                        </Table.Data>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </Grid.Item>
              </Grid.Container>
            ) : (
              <Grid.Container className="hc-pa-normal" justify="space-around">
                <Grid.Item></Grid.Item>
              </Grid.Container>
            )}
          </Grid.Item>
        </Grid.Container>
      </Layout.Body>
    </Layout>
  );
};

export default TemplateBuilder;
