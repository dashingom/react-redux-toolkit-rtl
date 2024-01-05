import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";

import Element from "../../components/Element";
import Navbar from "../../components/Navbar";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {useHistory} from "react-router-dom";

//Data
import gateway from "../../data/gateway.json";
import starfishChild from "../../data/starfish-child.json";

const AddDevice = () => {
  const [elements, setElements] = useState<any>(null);
  const [discardChangesModal, setDiscardChangesModal] = useState(false);
  const history = useHistory();

  const {
    handleSubmit,
    reset,
    control,
    formState: {isDirty, isValid},
  } = useForm({mode: "onChange"});

  useEffect(() => {
    reset();

    setElements(starfishChild);
  }, []);

  const submitHandler = (data: any, e: any): void => {
    console.log(data, e.target.id);
  };

  const handleDiscardChanges = (): void => {
    if (isDirty) {
      history.push("/");
    } else {
      setDiscardChangesModal(true);
    }
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
        <header>
          <title>AddDevice</title>
          <meta name="description" content="Description of AddDevice" />
        </header>
        <Card>
          <CardContent>
            {elements
              ? elements.map((field: any) => (
                  <Element key={field.id} field={field} control={control} />
                ))
              : null}
          </CardContent>
          <CardActions>
            <Grid container>
              <Grid item xs={3}>
                <Button variant={"outlined"} onClick={handleDiscardChanges}>
                  Cancel
                </Button>
              </Grid>
              <Grid item xs={9}>
                <Stack
                  spacing={2}
                  direction={"row"}
                  justifyContent={"flex-end"}>
                  <Button
                    variant={"contained"}
                    disabled={!isValid}
                    onClick={(e): void => {
                      void handleSubmit(submitHandler)(e);
                    }}>
                    Submit
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </Container>
    </>
  );
};

export default AddDevice;
